# SPEC: my generator

**What this is:** the brief for your tool. You're building a Grasshopper definition of your own design idea, by talking to your agent instead of wiring nodes. This file is where you decide what that definition does. Your agent reads it before every change.

Write it **before** you start building, in your own words. Keep it short. Update it when your idea changes.

When you put the tool on your website, this file goes public with it. Don't put anything private here.

\---

## 0\. How to pick what to build

**Pick the part of your project you keep redrawing or changing.** That's your generator. Ask yourself:

* What part of my design do I keep changing, sketch after sketch?
* What has to stay true no matter how I change it?
* If I could see 20 versions side by side, what would I compare?

Examples: a canopy, a facade screen, a folded enclosure, a truss, a roof and its overhangs, skylights, a stair, a unit layout. Massing is one option, not the assignment.

\---

## 1\. What it is

*A central fountain in the middle of the grand park surrounded by park benches and with paths leading up to it. Should be eye-catching and large but without ignoring scale.*


2. Who it's for

*Park visitors who want a beautiful, calming place to sit and gather in the heart of the town.* Park visitors include all ages.

## 3\. Other courses

* \[x] This is only for this course.

## 4\. What can change (your sliders, at least 4)

*The things you want to vary. Each one becomes a slider.
Example row: "Column spacing / distance between columns / 8 / 20 / ft / wider is more open, but needs a deeper roof."*

|Slider|What it changes|From|To|Units|Why it matters to the design|
|-|-|-|-|-|-|
|Height|The height of the fountain|6|18|Feet|Important to the scale and how grand the fountain feels.|
|Number of bowls and pedestals|The number of bowls in the fountain|2|5|# OF Bowls|How many layers the fountain has made up of bowls and pedastals|
|Height of bowls|The height of each bowl (equal)|1|5|Feet|How tall/deep each bowl is|
|Diameter of bowls|The diameter of each bowl|1|30|Feet|The width of each bowl|
|Final spout height|The height of the top spout|1/2|2|Feet|Dictates the height of the fountain|
|Pedestal height|The height of each pedestal|2|8|Feet|The distance between each bowl|
|Design complexity|How complex the design is|10|90|% complexity|How intricate or detailed the fountain is, extremely important to aesthetic appearance. This changes things such as engravings on the fountain, statues or specially designed spouts, etc. I want an eye-catching design that is a statement piece of the park while still fitting into its surroundings. This controls the amount of creative freedom in the design that the tool gets.|

## 5\. What stays fixed

*The diameter of the basin is 52 feet.*

*Top of basin edge is 18 inches above the ground for people to be able to sit.* 

*There are benches around the fountain, pictured in the 3D model of the current fountain.*

## 6\. What must stay true (your rules)

*The height of each bowl (excluding the basin) must be equal.*

*The diameter of each bowl must be different by at least 3 feet.*

*The basin has a strictly 18" high and 18" deep ledge. It is flat.*

*The fountain must be rotationally symmetrical around a vertical axis at the center point.*

*Bowls decrease in width/diameter from the bottom to the top.* 

*Pedestals' maximum diameter/width is less than that of the bowl it is supporting.*

*A path clear of obstacles must connect to the fountain for wheelchair users (or other physically disabled individuals) to easily enjoy views of the water.* 

## 7\. What a good variation looks like

*Good variations includes differences in each slider, varying design complexity, varying geometries (i.e. organic curves pedestal shapes with curves). Different variations help me analyze the scale of the fountain, the complexity of it, and how it interacts with the already existing park and city surrounding it.*

## 8\. Who it does not serve

*Water can be dangerous for small children, especially without supervision. Children should always be supervised around the fountain since the low edge of the basin does not prevent them from reaching in (or even falling in) to the water.*

*The fountain does not provide support for those who need it while sitting since there are no backrests or armrests (i.e. individuals in a wheelchair), but they can still enjoy views of the water from the path or surrounding benches.* 

## 9\. What my tool will NOT do

*No color, no materials*

*Ignore the way that the fountain functions (i.e. plumbing), strictly design the structure.*

## 10\. References and context

*fountain.3dm*

*isometric v2 autocad.pdf*

*parts of a fountain.jpg*

## 11\. Print plan (optional, +5 bonus)

*Print at 1/16"=1'*

\---

## Your first prompt, once this is filled in

> Read AGENTS.md and SPEC.md. Replace the bench with my \\\\\\\[object from section 1]. Start simple, with the sliders in section 4 and the fixed numbers in section 5. Don't add the rules yet.

Then add the rules from section 6, one at a time.

## Checkpoints

* \[x] **Nov 5, 5:05 PM:** this SPEC on Canvas, as a draft (doesn't have to be final), plus a 90-second share in class
* \[ ] **By Nov 19, 5:05 PM:** my finished tool and project page live on my site (publish a few days early; email by Mon Nov 16 if it won't load)

## Done when

Due Thursday Nov 19, 5:05 PM: one zip on Canvas with this folder, your submission document (links and reflection), your sheet, STL and OBJ. See worksheet section 5.

* \[ ] The tool is live on my site and has at least 4 sliders I designed
* \[ ] I saved at least 6 variations and downloaded the sheet
* \[ ] I chose one and refined it, and exported STL and OBJ
* \[ ] My BA2 reviewer or BA3 jury critiqued it, and I changed something because of it
* \[ ] At least one of my rules (the warnings) is about the people who use it, not only geometry
* \[ ] Someone outside the class (ideally an architecture student) tested my tool by Nov 16; VERIFY.md has their task, their answers and what I changed
* \[ ] VERIFY.md has 3 checks
* \[ ] CHANGELOG.md shows how the tool was built
* \[ ] The project page is on my site
* \[ ] My reflection (500 to 800 words) has a "Who it does not serve" section and an AI use note
* \[ ] My 5-minute pitch is to an audience I chose, shows the tool live, and ends with an ask

