---
name: video-game-store-feature-summary
description: Summarize the active Video Game Store feature from specs/context/current-feature.md and suggest the next step in the workflow.
metadata:
  author: local
  version: "1.0.0"
---

# Video Game Store Feature Summary

Codex equivalent of `/feature-summary`.

1. Read `specs/context/current-feature.md`.
2. Report:
   - feature name
   - status
   - main goals
   - important notes or constraints
3. Suggest the next step:
   - `Not Started` -> use `video-game-store-feature` with `load` or `start`
   - `In Progress` -> continue implementation or run the `test` phase
   - likely complete -> run the `review` phase
   - `Complete` -> finalize or move to the next spec
4. If there is no active feature, say so clearly and point the user to load one.
