# Contributing to the Fancy Dev Kit Codex plugin

Notes for anyone, human or agent, working ON this plugin. How to USE the
plugin is in [AGENTS.md](./AGENTS.md); what it is, is in [README.md](./README.md).
`CLAUDE.md` is a symlink to this file, so Claude Code reads these notes when it
works in this repo.

## Layout

- `.agents/plugins/marketplace.json` — the marketplace manifest
  (`codex plugin marketplace add Particle-Academy/fancy-ui-codex-plugin`).
- `plugins/fancy-ui/.codex-plugin/plugin.json` — the plugin manifest: version,
  `"skills": "./skills/"`, and the `fancy-ui` MCP server entry (`"type": "http"`).
- `plugins/fancy-ui/skills/<name>/` — one directory per skill.

## Checks

The version appears in `plugins/fancy-ui/.codex-plugin/plugin.json` and in the
private `package.json`. `npm test` (Node's built-in runner, no dependencies)
checks the manifests: they parse, the versions agree, the `fancy-ui` ids are
unchanged, the display name is Fancy Dev Kit, and no user-facing file says
"Fancy UI".

## Changelog

Update `CHANGELOG.md` in the same commit as the change.
