---
name: video-game-store-research
description: Research-task workflow for the Video Game Store project. Use as the Codex equivalent of /research to produce documentation from a prompt file.
metadata:
  author: local
  version: "1.0.0"
---

# Video Game Store Research

Use this skill for the Codex equivalent of `/research`.

## Workflow

1. Read `specs/context/research/{name}.md`.
2. If it is missing, report the exact missing path.
3. Read the prompt's required output path, questions, and source expectations.
4. Research using project files first and primary documentation when the topic is framework or library behavior.
5. Write the findings to the requested output file.

## Rules

- produce documentation, not source-code changes
- prefer primary sources
- use kebab-case output filenames
- do not leave research only in chat
