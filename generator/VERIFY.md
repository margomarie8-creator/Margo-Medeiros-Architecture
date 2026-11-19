# VERIFY: trust, but check

This is your testing record. It has three parts: your hand checks, your pressure test, and your fresh eyes test.

## 1. Three hand checks
The tool reports numbers (sizes, counts, your own stats). AI-built tools get things wrong in ways that look right. Pick **3 numbers** that matter to your design and check each one yourself, a different way than the tool did.

Ways to check: measure the exported OBJ in Rhino, measure the print with a ruler, do the math by hand, compare plan and front views against the grid, or turn on the scale figure (5'-9").

| # | What the tool says | How I checked it | What I found | Match? | If not: what I fixed |
|---|---|---|---|---|---|
| 1 | Overall fountain height: 15 ft | Measured vertical distance on the exported OBJ in Rhino Front view. | 15 ft | Yes | |
| 2 | Basin diameter: 52 ft | Measured across the exported basin in Rhino Top view. | 52 ft | Yes | |
| 3 | Warn when adjacent bowl diameters differ by less than 3 ft. | Tested two slider settings with three bowls. Expected difference: 27.5% of the lowest bowl diameter. | At 10.75 ft (2.96 ft difference), the warning appeared. At 11 ft (3.03 ft difference), it cleared. | Yes | |
| 4 | Variation sheet labels match the saved slider settings. | Compared the numbers on the downloaded sheet with the settings I entered for the saved variations. | The numbers matched. | Yes | |

## 2. Pressure test (BA2 reviewer or BA3 jury)
Run your BA2 reviewer or your BA3 jury on the design your tool makes. It can't open the tool, so show it your SPEC, your variations sheet and your chosen design (screenshots are fine).
- **Which one I used:** BA2 Adversarial Reviewer. I shared SPEC.md, the variations sheet, and screenshots of Variation 3.
- **The hardest thing it said (quote it):** "The sheet doesn't repeat the fixed basin size and edge height."
- **What I changed because of it:** Added the 52 ft basin diameter and the 18 in ledge height and depth to the exported sheet.
- **Before and after:** See "Add basin dimensions to the variations sheet" in CHANGELOG.md. I checked the new PNG and confirmed that all three fixed dimensions appear above the variation images.

## 3. Fresh eyes test
By **Mon Nov 16**, have one person outside this class use your tool: ideally another architecture student, otherwise a friend or family member. In person or on a video call. Write "Tester A" here, never a name (this file goes public). Their name goes in your Capstone_Submission.docx, with their OK.
- **Tester:** Tester A.
- **The task I gave them:** “Make a fountain that you think fits the best in this area with the surrounding buildings.”
- **What they did in 10 minutes:** Tester A first moved the sliders rapidly. She spent about 90 seconds figuring out zoom and rotation, then read the slider labels, found a useful perspective, and refined the fountain. At about seven minutes she had a design she liked. I saved the variation and downloaded the sheet for her.
- **Where they got stuck or surprised:** She hesitated at top spout height and spent time finding the right design complexity. She did not know to save her design or what downloading the sheet would produce.
- **Their answers:**
  - **What was confusing?** She did not understand the Context or Export sections. She had to reread the warning a few times.
  - **What did you try to do that the tool wouldn't let you?** She wanted to change the bowl shape.
  - **If this were your project, what one thing would you change?** She would give the pedestal detail and engraving separate controls.
- **What I changed because of it:** Added a short instruction explaining what Save variation and Download PNG sheet do. See “Clarify how to save and download variations” in CHANGELOG.md. A follow-up usability check has not been recorded.
- **What I didn't change, and why:** The bowl shape and combined complexity control were left for a separate design decision because adding those controls would change how the generator works.

## What this taught me about trusting the tool
_Two or three sentences._
