# Fancy Dev Kit for Codex

[![Fancified](art/fancified.svg)](https://particle.academy)

A Codex plugin that connects agents to the hosted [Fancy Dev Kit](https://ui.particle.academy) registry MCP and provides skills for building Human+ UX applications.

<!-- fancy-agents-note:start -->
> **For agents.** This plugin connects an agent to the Fancy MCP catalog server
> at `https://ui.particle.academy/mcp` (streamable HTTP, no API key; MCP id `fancy-ui`),
> which lists the released Fancy packages with install commands and docs. How
> an agent installs and uses the plugin is in [AGENTS.md](https://github.com/Particle-Academy/fancy-ui-codex-plugin/blob/main/AGENTS.md).
<!-- fancy-agents-note:end -->

## Install

```bash
codex plugin marketplace add Particle-Academy/fancy-ui-codex-plugin
codex plugin add fancy-ui@fancy-ui
```

Approve the `fancy-ui` MCP server when prompted. The plugin connects to the public streamable-HTTP endpoint at `https://ui.particle.academy/mcp`; no API key is required.

## What Codex gets

- Registry tools to start projects and list, search, fetch, and install Fancy Dev Kit components.
- Inspiration Gallery tools for browsing styles and fetching design blueprints.
- Skills covering app architecture, components, design, Human+ UX, realtime, SEO, SSR, package upgrades, and test-driven development with a lite CI workflow (`tdd`).

The hosted MCP is for discovery and installation. To operate a running Fancy Dev Kit application, use the runtime bridges from `@particle-academy/agent-integrations`.

## Manual MCP configuration

```json
{
  "mcpServers": {
    "fancy-ui": {
      "type": "http",
      "url": "https://ui.particle.academy/mcp"
    }
  }
}
```

## Links

- [Fancy Dev Kit](https://ui.particle.academy)
- [MCP documentation](https://ui.particle.academy/docs/mcp)
- [Components](https://ui.particle.academy/packages)

## License

MIT © Particle Academy
