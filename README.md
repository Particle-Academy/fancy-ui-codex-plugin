# Fancy UI for Codex

A Codex plugin that connects agents to the hosted [Fancy UI](https://ui.particle.academy) registry MCP and provides skills for building Human+ UX applications.

## Install

```bash
codex plugin marketplace add Particle-Academy/fancy-ui-codex-plugin
codex plugin add fancy-ui@fancy-ui
```

Approve the `fancy-ui` MCP server when prompted. The plugin connects to the public streamable-HTTP endpoint at `https://ui.particle.academy/mcp`; no API key is required.

## What Codex gets

- Registry tools to start projects and list, search, fetch, and install Fancy UI components.
- Inspiration Gallery tools for browsing styles and fetching design blueprints.
- Skills covering app architecture, components, design, Human+ UX, realtime, SEO, SSR, and package upgrades.

The hosted MCP is for discovery and installation. To operate a running Fancy UI application, use the runtime bridges from `@particle-academy/agent-integrations`.

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

- [Fancy UI](https://ui.particle.academy)
- [MCP documentation](https://ui.particle.academy/docs/mcp)
- [Components](https://ui.particle.academy/packages)

## License

MIT © Particle Academy
