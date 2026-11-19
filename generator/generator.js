export const meta = {
  name: 'Grand Park Fountain',
  description: 'A tiered fountain with seating and paths in the center of the park.',
  units: 'feet',
  author: 'Margo Medeiros',
  projectPage: '../grand-park-fountain.html',
  defaultContext: { url: './examples/park-context.stl', units: 'feet', up: 'z' },
  get sheetNote() {
    return `Fixed across all variations: ${BASIN_RADIUS * 2} ft basin diameter · ${LEDGE_HEIGHT * 12} in ledge height · ${LEDGE_DEPTH * 12} in ledge depth`;
  },
};

export const parameters = {
  height:         { label: 'Overall height',        value: 15, min: 6,   max: 18, step: 0.25, type: 'length' },
  tiers:          { label: 'Bowls and pedestals',    value: 3,  min: 2,   max: 5,  step: 1 },
  bowlHeight:     { label: 'Bowl height (target)',   value: 2,  min: 1,   max: 5,  step: 0.25, type: 'length' },
  bowlDiameter:   { label: 'Lowest bowl diameter',   value: 18, min: 1,   max: 30, step: 0.25, type: 'length' },
  spoutHeight:    { label: 'Top spout height',       value: 1,  min: 0.5, max: 2,  step: 0.25, type: 'length' },
  pedestalHeight: { label: 'Pedestal height (target)', value: 3, min: 2,  max: 8,  step: 0.25, type: 'length' },
  complexity:     { label: 'Design complexity (%)',  value: 45, min: 10, max: 90, step: 1 },
};

const BASIN_RADIUS = 26;
const LEDGE_HEIGHT = 1.5;
const LEDGE_DEPTH = 1.5;
const BASIN_FLOOR = 0.5;
const CLEAR_PATH_WIDTH = 5;

function bowlDiameterAt(p, tier) {
  return p.bowlDiameter * (1 - 0.55 * tier / (p.tiers - 1));
}

function tierDimensions(p) {
  // Fit the stack between the basin floor and the bottom of the top spout.
  const scale = (p.height - BASIN_FLOOR - p.spoutHeight) /
    (p.tiers * (p.bowlHeight + p.pedestalHeight));
  return { bowl: p.bowlHeight * scale, pedestal: p.pedestalHeight * scale };
}

const TOP_BOWL_REPEATS = 8;
const SAMPLES_PER_REPEAT = 72;
const BAND_ROWS = 72;

function oval(u, v, centerU, centerV, width, height, angle = 0) {
  const x = u - centerU;
  const y = v - centerV;
  const along = (x * Math.cos(angle) + y * Math.sin(angle)) / width;
  const across = (y * Math.cos(angle) - x * Math.sin(angle)) / height;
  return Math.max(0, 1 - along ** 2 - across ** 2);
}

// One repeating flower and vine, in coordinates across and up the band.
function engraving(u, v) {
  const phase = (u + 0.25) % 1;
  const vine = 0.50 + 0.23 * Math.sin(phase * 2 * Math.PI);
  let cut = Math.max(0, 1 - (Math.abs(v - vine) / 0.055) ** 2);
  for (const [x, y, angle] of [[0.39, 0.37, 1.0], [0.51, 0.67, 1.95], [0.64, 0.29, -0.9], [0.78, 0.51, 1.1]]) {
    cut = Math.max(cut, oval(u, v, x, y, 0.075, 0.045, angle));
  }

  const flowerX = (u + 0.36) % 1 - 0.5;
  cut = Math.max(cut, oval(flowerX, v, 0, 0.5, 0.055, 0.10));
  for (let petal = 0; petal < 6; petal++) {
    const angle = petal * Math.PI / 3;
    cut = Math.max(cut, oval(flowerX, (v - 0.5) * 0.52,
      0.085 * Math.cos(angle), 0.085 * Math.sin(angle), 0.066, 0.032, angle));
  }

  const border = Math.min(Math.abs(v - 0.075), Math.abs(v - 0.925));
  return Math.max(cut, 0.6 * Math.max(0, 1 - (border / 0.038) ** 2));
}

// Sample one repeat once, since every bowl uses the same pattern.
const engravingSamples = Array.from({ length: SAMPLES_PER_REPEAT }, (_, column) =>
  Array.from({ length: BAND_ROWS - 1 }, (_, row) => {
    const cut = engraving(column / SAMPLES_PER_REPEAT, (row + 1) / BAND_ROWS);
    return cut * cut * (3 - 2 * cut);
  })
);

function engravedBowl(THREE, radius, height, complexity, repeats) {
  const segments = repeats * SAMPLES_PER_REPEAT;
  const profile = [[0, 0], [radius * 0.34, 0], [radius * 0.61, height * 0.20]];
  const bandStart = profile.length;
  for (let row = 0; row <= BAND_ROWS; row++) {
    const t = row / BAND_ROWS;
    profile.push([radius * (0.82 + 0.18 * t), height * (0.48 + 0.38 * t)]);
  }
  profile.push([radius, height], [radius * 0.87, height],
    [radius * 0.76, height * 0.66], [radius * 0.58, height * 0.42], [0, height * 0.30]);

  const geometry = new THREE.LatheGeometry(
    profile.map(([r, y]) => new THREE.Vector2(r, y)), segments);
  const positions = geometry.getAttribute('position');
  const depth = Math.min(radius * 0.045, height * 0.16) * complexity;
  for (let column = 0; column <= segments; column++) {
    const samples = engravingSamples[column % SAMPLES_PER_REPEAT];
    for (let row = 1; row < BAND_ROWS; row++) {
      const index = column * profile.length + bandStart + row;
      const uncutRadius = profile[bandStart + row][0];
      const scale = 1 - depth * samples[row - 1] / uncutRadius;
      positions.setX(index, positions.getX(index) * scale);
      positions.setZ(index, positions.getZ(index) * scale);
    }
  }
  geometry.computeVertexNormals();
  const normals = geometry.getAttribute('normal');
  const seam = new THREE.Vector3();
  const other = new THREE.Vector3();
  for (let row = 0; row < profile.length; row++) {
    const last = segments * profile.length + row;
    seam.fromBufferAttribute(normals, row).add(other.fromBufferAttribute(normals, last)).normalize();
    normals.setXYZ(row, seam.x, seam.y, seam.z);
    normals.setXYZ(last, seam.x, seam.y, seam.z);
  }
  return geometry;
}

export function generate(p, kit) {
  const { THREE } = kit;
  const material = kit.material('#d4d3d0');
  const parts = [];
  const detail = p.complexity / 100;
  const heights = tierDimensions(p);

  function revolve(name, profile, y = 0) {
    const points = profile.map(([radius, height]) => new THREE.Vector2(radius, height));
    const mesh = new THREE.Mesh(new THREE.LatheGeometry(points, 96), material);
    mesh.position.y = y;
    mesh.name = name;
    parts.push(mesh);
  }

  revolve('basin', [
    [0, 0], [BASIN_RADIUS, 0], [BASIN_RADIUS, LEDGE_HEIGHT],
    [BASIN_RADIUS - LEDGE_DEPTH, LEDGE_HEIGHT],
    [BASIN_RADIUS - LEDGE_DEPTH, BASIN_FLOOR], [0, BASIN_FLOOR],
  ]);

  let y = BASIN_FLOOR;
  const topRadius = bowlDiameterAt(p, p.tiers - 1) / 2;
  for (let tier = 0; tier < p.tiers; tier++) {
    const radius = bowlDiameterAt(p, tier) / 2;
    const pedestalRadius = radius * 0.32;
    const stem = heights.pedestal;
    const bowl = heights.bowl;

    const profile = [[0, 0], [pedestalRadius, 0], [pedestalRadius, stem * 0.09]];
    for (let point = 0; point <= 24; point++) {
      const t = point / 24;
      const curve = 0.72 - 0.20 * Math.sin(Math.PI * t);
      const molding = detail * 0.12 * Math.cos(6 * Math.PI * t);
      profile.push([pedestalRadius * (curve + molding), stem * (0.12 + 0.76 * t)]);
    }
    profile.push([pedestalRadius * 0.86, stem], [0, stem]);
    revolve('pedestal_' + (tier + 1), profile, y);
    y += stem;

    // Round to an even repeat count so all tiers share half-turn symmetry.
    const repeats = 2 * Math.round(TOP_BOWL_REPEATS * radius / (2 * topRadius));
    const bowlMesh = new THREE.Mesh(engravedBowl(THREE, radius, bowl, detail, repeats), material);
    bowlMesh.position.y = y;
    bowlMesh.name = 'bowl_' + (tier + 1);
    parts.push(bowlMesh);
    // The next pedestal sits on the floor inside this bowl. Its visible height
    // is maintained by a central plinth that reaches the rim elevation.
    const plinthRadius = radius * 0.34;
    revolve('bowl_center_' + (tier + 1), [
      [0, 0], [plinthRadius, 0], [plinthRadius, bowl * 0.71], [0, bowl * 0.71],
    ], y + bowl * 0.29);
    y += bowl;
  }

  const spoutRadius = Math.min(topRadius * 0.27, p.spoutHeight * 0.35);
  const spout = p.spoutHeight;
  revolve('top_spout', [
    [0, 0], [spoutRadius, 0], [spoutRadius, spout * 0.14],
    [spoutRadius * 0.48, spout * 0.43],
    [spoutRadius * (0.6175), spout * 0.72],
    [spoutRadius * (0.7585), spout], [0, spout],
  ], y);

  // Placeholder layout until the existing park model is brought in.
  for (let side = 0; side < 4; side++) {
    const angle = side * Math.PI / 2;
    const pathDistance = 34;
    parts.push(kit.box({
      w: CLEAR_PATH_WIDTH, d: 16.5, h: 0.02,
      x: Math.sin(angle) * pathDistance, z: Math.cos(angle) * pathDistance,
      ry: side * 90, material, name: 'path_' + (side + 1),
    }));

    const benchAngle = angle + Math.PI / 4;
    const benchDistance = 31;
    const bench = kit.group(
      kit.box({ w: 6, d: 1.75, h: 0.25, y: 1.25, material }),
      kit.box({ w: 0.35, d: 1.45, h: 1.25, x: -2.2, material }),
      kit.box({ w: 0.35, d: 1.45, h: 1.25, x: 2.2, material }),
      kit.box({ w: 6, d: 0.14, h: 1.15, y: 1.5, z: 0.78, material }),
    );
    bench.name = 'park_bench_' + (side + 1);
    bench.position.set(Math.sin(benchAngle) * benchDistance, 0, Math.cos(benchAngle) * benchDistance);
    bench.rotation.y = benchAngle;
    parts.push(bench);
  }
  return parts;
}

export function check(p) {
  const warnings = [];
  const diameterDifference = bowlDiameterAt(p, 0) - bowlDiameterAt(p, 1);
  if (diameterDifference < 3 - 1e-9) {
    warnings.push(`Neighboring bowls differ in diameter by ${diameterDifference.toFixed(2)} ft. The minimum is 3 ft. Increase the lowest bowl diameter or use fewer bowls.`);
  }
  return warnings;
}

export function stats(p) {
  const heights = tierDimensions(p);
  return {
    'Overall fountain height (ft)': p.height,
    'Modeled bowl height (ft)': Number(heights.bowl.toFixed(2)),
    'Modeled pedestal height (ft)': Number(heights.pedestal.toFixed(2)),
    'Clear path width (ft)': CLEAR_PATH_WIDTH,
    'Basin diameter (ft)': 2 * BASIN_RADIUS,
    'Basin ledge height and depth (in)': '18 × 18',
  };
}
