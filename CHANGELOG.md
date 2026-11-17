# Changelog

All notable changes to this plugin are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the plugin uses
[Semantic Versioning](https://semver.org/spec/v2.0.0.html). It is pre-1.0, so a
breaking change may land in a minor release; any that does is marked here.

This file starts at 0.1.1. Earlier releases are recorded in the git history.

## [Unreleased]

## [0.1.3] - 2026-11-17

### Changed

- The `building-apps` and `components` skills also trigger on "fancy dev kit" phrasing, beside the old "fancy ui" phrases, which still work. Nothing to do.
- Rebranded the display name to Fancy Dev Kit (for SaaSy Agents). Package names, the npm scope, `fancy-cli`, the `fancy-ui` MCP server id and plugin name, and every URL are unchanged, so nothing to do.
- **Docs:** `AGENTS.md` added: the guide to using this package (install, the Fancy MCP catalog server it connects to, API essentials, traps). `CONTRIBUTING.md` added for the contributor notes, with `CLAUDE.md` as a symlink to it. The README points to the MCP server and to `AGENTS.md`. No code changed; nothing to do.

## [0.1.2] - 2026-11-06

### Fixed
- `/tdd`: the Pest browser plugin (v5.2.0) records only `console.log` and uncaught
  errors, so `console.error` and `console.warn` pass `assertNoConsoleLogs()` and
  `assertNoJavaScriptErrors()`. The skill now says so and shows the test-only
  forwarder that catches them. Checked against the plugin's source; reported by a
  consumer, PS Mapper.

## [0.1.1] - 2026-11-05

### Added
- `tdd` skill (`/tdd`): test-driven development for an app built on Fancy UI.
  Covers the test-first loop (including a bug fix that starts with a test that
  fails on the old code), Pest 5, vitest + jsdom and the Pest browser plugin,
  testing Fancy components by their stable handles rather than CSS paths or
  visible text, checks that report green without checking, and a lite GitHub
  Actions workflow for a Laravel + Inertia + React app.
