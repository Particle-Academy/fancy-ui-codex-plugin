// The plugin is manifests + skills, so the manifests ARE the code. These checks
// hold the invariants a release depends on: every manifest parses, every copy of
// the version agrees, the install ids keep their names, and the display name is
// the kit's current one.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (rel) => fs.readFileSync(path.join(root, rel), 'utf8');
const json = (rel) => JSON.parse(read(rel));

const codexPlugin = 'plugins/fancy-ui/.codex-plugin/plugin.json';
const codexMarket = '.agents/plugins/marketplace.json';

const skillsDir = path.join(root, 'plugins/fancy-ui/skills');
const skillFiles = fs.readdirSync(skillsDir).map((d) => `plugins/fancy-ui/skills/${d}/SKILL.md`);

test('every manifest parses', () => {
  for (const f of [codexPlugin, codexMarket, 'package.json']) {
    assert.doesNotThrow(() => json(f), f);
  }
});

test('every copy of the version agrees', () => {
  const v = json(codexPlugin).version;
  assert.match(v, /^\d+\.\d+\.\d+$/);
  assert.equal(json('package.json').version, v, 'package.json');
});

test('the released version has a changelog entry', () => {
  const v = json(codexPlugin).version;
  assert.ok(read('CHANGELOG.md').includes(`## [${v}]`), `CHANGELOG.md has no ## [${v}]`);
});

test('install ids keep their names: plugin fancy-ui, MCP server fancy-ui', () => {
  const m = json(codexPlugin);
  assert.equal(m.name, 'fancy-ui');
  assert.equal(m.mcpServers['fancy-ui'].url, 'https://ui.particle.academy/mcp');
  assert.equal(json(codexMarket).name, 'fancy-ui');
  assert.equal(json(codexMarket).plugins[0].name, 'fancy-ui');
});

test('display names are Fancy Dev Kit', () => {
  assert.equal(json(codexPlugin).interface.displayName, 'Fancy Dev Kit');
  assert.equal(json(codexMarket).interface.displayName, 'Fancy Dev Kit');
});

test('the old display name "Fancy UI" is gone from everything a user reads', () => {
  const files = [codexPlugin, codexMarket, 'README.md', 'AGENTS.md', ...skillFiles];
  for (const f of files) {
    assert.ok(!read(f).includes('Fancy UI'), `${f} still says "Fancy UI"`);
  }
});

test('every skill has a name and a description', () => {
  for (const f of skillFiles) {
    const head = read(f).split(/\r?\n---/)[0];
    assert.match(head, /\nname: \S/, f);
    assert.match(head, /\ndescription: \S/, f);
  }
});
