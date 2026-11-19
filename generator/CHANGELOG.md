# CHANGELOG: how my tool was built

Your agent adds an entry after every change, directly under the `---` line (newest first). You can add notes too. This is your evidence of the build, so keep it honest: include what didn't work.

Format:

## YYYY-MM-DD: short title
- **I asked for:** (your words)
- **What changed:** (plain English, which sliders or rules)
- **Assumptions:** (numbers the agent chose that you didn't give)
- **Still not right:** (if anything)

---

## 2026-11-19: Show the chosen-design images side by side
- **I asked for:** Place the two chosen-design images next to each other.
- **What changed:** Put the Variation 3 views in a two-column layout on the project page.

## 2026-11-19: Expand the capstone project story
- **I asked for:** Update the project story with my explanation of why I chose Variation 3.
- **What changed:** Published the expanded student-written story verbatim.

## 2026-11-19: Add a close-up of the chosen fountain
- **I asked for:** Add my chosen design photo to the project page.
- **What changed:** Added the supplied engraving and pedestal close-up alongside the existing Variation 3 image.

## 2026-11-19: Separate pedestal detail and engraving depth
- **I asked for:** Split the complexity slider into independent controls.
- **What changed:** Added Pedestal detail and Engraving depth sliders with the original 10–90% ranges. Older variations load their original complexity value into both sliders.

## 2026-11-19: Clarify how to save and download variations
- **I asked for:** Record the fresh-eyes test and act on the feedback.
- **What changed:** Added an explanation of what Save variation and Download PNG sheet do. Recorded the observed test and Tester A feedback in VERIFY.md.

## 2026-11-19: Add the capstone project introduction
- **I asked for:** Publish my wording about the ARC 585 tool and its origins in the ARC 101 master plan.
- **What changed:** Replaced the project page introduction with the final paragraph supplied by the student, verbatim.

## 2026-11-19: Keep uploaded context in place of the park
- **I asked for:** Hide the bundled park when another context model is uploaded.
- **What changed:** A successful import replaces the park. The bundled park loader checks again before displaying its model so a slow download cannot overwrite an uploaded context.

## 2026-11-19: Make the designer's variations collapsible
- **I asked for:** Make the designer's variations collapsible.
- **What changed:** The variations card opens by default and can be collapsed and reopened from its heading.

## 2026-11-19: Put the designer's variations below Model
- **I asked for:** Put the designer's variations below Use the tool and Model.
- **What changed:** Moved the designer's variations card directly below Model in the tool panel.

## 2026-11-19: Integrate the capstone into the portfolio
- **I asked for:** Publish the fountain on my existing architecture website for class.
- **What changed:** Added the public capstone page, embedded the tool with its park context, linked it from the portfolio, and included six saved variations, the sheet, and Variation 3.

## 2026-11-19: Record completed verification
- **I asked for:** Update VERIFY.md with completed tests.
- **What changed:** Recorded Rhino measurements, observed bowl warning behavior, confirmed slider values on the downloaded sheet, and BA2 pressure-test feedback and fix. The student confirmed that all three fixed dimensions appear on the new sheet. Fresh-eyes results are pending.

## 2026-11-19: Keep the opening view on the fountain
- **I asked for:** Restore the close opening zoom while keeping the park surroundings.
- **What changed:** Loading the bundled surroundings keeps the opening camera on the fountain. Fit still frames the full site, and manually imported context still fits on import.

## 2026-11-19: Load the park automatically
- **I asked for:** Show the park surroundings as part of the tool without a manual import.
- **What changed:** Bundled a 21 MB binary park mesh and load it when the tool opens. The viewer preserves the original Rhino coordinates and keeps the mesh as context outside fountain exports.
- **Assumptions:** The park file is Z-up and uses feet. Its Rhino origin aligns with the fountain.
- **Still to do:** Check the visual alignment after the first load.

## 2026-11-19: Prepare the park context mesh
- **I asked for:** Help show the surrounding park after the Rhino OBJ did not appear.
- **What changed:** Made a mesh-only copy in the references folder, preserving Rhino coordinates. The preview's OBJ loader recognizes the cleaned file as a mesh with 422,720 triangles.
- **Still to do:** Import the cleaned copy and check the visual alignment in Plan view.

## 2026-11-19: Add basin dimensions to the variations sheet
- **I asked for:** Apply the BA2 Adversarial Reviewer feedback on the sheet for Variation 3.
- **What changed:** The downloaded PNG now lists the fixed 52 ft basin diameter and the 18 in ledge height and depth above the variation images. The values come from the model dimensions.
- **Still to do:** Download a new sheet and confirm the dimensions are visible.

## 2026-11-19: Fix paths at five feet
- **I asked for:** Remove the slider and keep the paths at 5 ft to match the design.
- **What changed:** All four modeled paths are fixed at 5 ft. Removed the slider and its width warning. The Model panel still reports the fixed width.

## 2026-11-19: Clear path to the fountain
- **I asked for:** Add the clear path rule for wheelchair users.
- **What changed:** Added a clear-path width slider for the four approaches to the basin and a warning when they fall below the design target.
- **Assumptions:** Used 5 ft as the minimum design target, with an 8 ft default and a 2 to 12 ft slider range. The modeled paths are level and the benches are positioned between them.
- **Still to do:** Compare the approach against the actual park site and test the warning in the browser.

## 2026-11-19: Restore pedestal detail control
- **I asked for:** Make design complexity sharpen the pedestal edges again.
- **What changed:** Restored the original complexity-driven pedestal molding. Higher settings make the ridges more pronounced while also deepening the bowl engraving.

## 2026-11-19: Repeat engraving around wider bowls
- **I asked for:** Repeat the pattern on wider bowls instead of stretching it.
- **What changed:** The top bowl keeps eight repeats. Wider bowls get more repeats in proportion to their circumference, rounded to even counts so tiers share half-turn symmetry.
- **Still to do:** Check the motif proportions and slider responsiveness in the browser, especially with five bowls.

## 2026-11-19: Refined engraving edges
- **I asked for:** Make the engraved pattern sharper and less pixelated.
- **What changed:** Increased the resolution of the carved bowl surface and smoothed the transition at the groove edges. Reused the same pattern samples across bowls.
- **Still to do:** Review the engraving up close in the browser.

## 2026-11-19: Engraved bowl bands
- **I asked for:** Use the brass strip reference for bowl engravings and make the complexity slider vary how distinct they are.
- **What changed:** Added a repeating floral and vine band cut into the outer bowl geometry. Complexity changes the depth of the cut. The bowl profile, pedestal, and spout are fixed across complexity settings.
- **Assumptions:** Used eight repeats per bowl, with flowers, curved vines, leaves, and two borders. The band sits just below the rim.

## 2026-11-19: Bowl diameter warning
- **I asked for:** The next step after confirming the preview works.
- **What changed:** Added a warning when neighboring bowl diameters differ by less than 3 ft. The warning uses the same dimensions that build the bowls.

## 2026-11-19: First fountain model
- **I asked for:** The next step after updating my spec.
- **What changed:** Replaced the sample bench with a tiered fountain, seven sliders, a 52-foot basin with an 18-inch ledge, and placeholder benches and paths.
- **Assumptions:** The diameter slider controls the lowest bowl, tapering to 45% at the top. Bowl and pedestal heights are fitted proportionally to the selected overall height. The placeholder layout has four 8-foot paths and four 6-foot benches. Complexity shapes the profiles and spout.
- **Still to do:** Compare with the park references, review the browser preview, and add section 6 warnings one at a time.

## Starting point
- **What changed:** Started from the Generator Starter with the sample park bench.
