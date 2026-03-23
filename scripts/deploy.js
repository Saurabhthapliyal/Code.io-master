/**
 * Runs gh-pages with a resolvable Git executable (fixes Windows/Cursor PATH issues).
 */
const path = require('path');
const fs = require('fs');
const { spawnSync } = require('child_process');
const ghpages = require('gh-pages');

function resolveGit() {
  const ok = spawnSync('git', ['--version'], {
    encoding: 'utf8',
    shell: process.platform === 'win32',
  });
  if (ok.status === 0) return 'git';

  if (process.platform === 'win32') {
    const pf = process.env.ProgramFiles || 'C:\\Program Files';
    const pf86 = process.env['ProgramFiles(x86)'] || 'C:\\Program Files (x86)';
    const candidates = [
      path.join(pf, 'Git', 'cmd', 'git.exe'),
      path.join(pf, 'Git', 'bin', 'git.exe'),
      path.join(pf86, 'Git', 'cmd', 'git.exe'),
    ];
    for (const p of candidates) {
      if (fs.existsSync(p)) return p;
    }
  }

  return null;
}

const git = resolveGit();
if (!git) {
  console.error(
    'Git not found. Install Git for Windows (https://git-scm.com/download/win), ' +
      'then restart your terminal or add Git\\cmd to your PATH.',
  );
  process.exit(1);
}

const buildDir = path.join(process.cwd(), 'build');
if (!fs.existsSync(buildDir)) {
  console.error('Missing build/. Run npm run build first (or npm run deploy, which runs it via predeploy).');
  process.exit(1);
}

// Clear gh-pages' internal cache to avoid "a branch named 'gh-pages' already exists".
// This is especially useful when switching machines or fixing git PATH issues.
ghpages.clean();

ghpages.publish(buildDir, { git }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Published to gh-pages branch.');
});
