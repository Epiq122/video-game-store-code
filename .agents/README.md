# Codex Workspace Skills

This repo's Codex-native equivalents live in `.agents/skills/`.

Cursor and OpenCode use slash commands. Codex uses named skills and the repo `AGENTS.md`.

## Command Mapping

| Cursor / OpenCode | Codex skill |
|---|---|
| `/feature` | `arcana-feature` |
| `/feature-summary` | `arcana-feature-summary` |
| `arcana-code-quality` | `arcana-code-quality` |
| `/code-scanner` | `arcana-code-scanner` |
| `/auth-auditor` | `arcana-auth-auditor` |
| `/refactor-scanner` | `arcana-refactor-scanner` |
| `/cleanup` | `arcana-cleanup` |
| `/ui-reviewer` | `arcana-ui-reviewer` |
| `/lint` | `arcana-lint` |
| `/run-tests` | `arcana-run-tests` |
| `/start-dev` | `arcana-start-dev` |
| `/db-status` | `arcana-db-status` |
| `/research` | `arcana-research` |

## How To Use In Codex

Ask for the workflow by name in the prompt, for example:

- `Use the arcana-feature skill to implement specs/context/features/card-filters-spec.md`
- `Use arcana-code-quality for a broad repo audit`
- `Use arcana-code-scanner on components/`
- `Use arcana-ui-reviewer after starting the dev server`

All skills assume the project rules in `AGENTS.md` remain authoritative.
