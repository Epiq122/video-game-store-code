## Task

Execute research task: $ARGUMENTS

---

### Instructions

1. If no argument is provided, error with `Usage: research <prompt-name>`
2. Look for the prompt file at `specs/context/research/{$ARGUMENTS}.md`
3. If it is missing, error with the exact missing path
4. Read the prompt file, which should define:
   - `Output`
   - `Research`
   - `Include`
   - `Sources`
5. Execute the research using appropriate tools:
   - read project files
   - search the codebase for relevant patterns
   - use official documentation when the topic is framework or library behavior
6. Write findings to the output path
7. Summarize what was discovered

---

### Rules

- This produces documentation only
- Do not modify source code files
- Prefer primary sources when researching technical behavior
- Output filenames should use kebab-case
- Never leave research only in chat; always write it to a file
- If the research topic is time-sensitive or version-sensitive, verify against current official docs

---

### Example Research Prompt File

`specs/context/research/nextjs-server-actions.md`

```md
**Output**: docs/research/nextjs-server-actions.md
**Research**: Best practices for Server Actions in Next.js 16
**Include**:
- When to use Server Actions vs Route Handlers
- How validation should work
- How to keep secrets server-side
- Common pitfalls with client boundaries
**Sources**: Official Next.js docs, project code examples
```
