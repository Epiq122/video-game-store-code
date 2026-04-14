# Codex Workspace Skills

This repo's Codex-native equivalents live in `.agents/skills/`.

Use the repo slash aliases in prompts. They map to the underlying Codex skills defined here.

## Command Mapping

| Alias | Codex skill |
|---|---|
| `/feature <load|start|test|review|explain|complete>` | `video-game-store-feature` |
| `/feature-summary` | `video-game-store-feature-summary` |
| `/code-quality` | `video-game-store-code-quality` |
| `/code-scanner` | `video-game-store-code-scanner` |
| `/auth-auditor` | `video-game-store-auth-auditor` |
| `/refactor-scanner` | `video-game-store-refactor-scanner` |
| `/cleanup` | `video-game-store-cleanup` |
| `/ui-reviewer` | `video-game-store-ui-reviewer` |
| `/lint` | `video-game-store-lint` |
| `/run-tests` | `video-game-store-run-tests` |
| `/start-dev` | `video-game-store-start-dev` |
| `/db-status` | `video-game-store-db-status` |
| `/research` | `video-game-store-research` |

## How To Use In Codex

Ask using the alias you want, for example:

- `/feature start specs/context/features/card-filters-spec.md`
- `/feature review`
- `/code-quality`
- `/code-scanner app/`
- `/ui-reviewer after starting the dev server`

If needed, the long internal names still map as follows:

- `video-game-store-feature`
- `video-game-store-feature-summary`
- `video-game-store-code-quality`
- `video-game-store-code-scanner`
- `video-game-store-auth-auditor`
- `video-game-store-refactor-scanner`
- `video-game-store-cleanup`
- `video-game-store-ui-reviewer`
- `video-game-store-lint`
- `video-game-store-run-tests`
- `video-game-store-start-dev`
- `video-game-store-db-status`
- `video-game-store-research`

All skills assume the project rules in `AGENTS.md` remain authoritative.
