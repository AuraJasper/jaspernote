const simpleGit = require('simple-git');
const path = require('path');
const fs = require('fs');

async function getLatestMdFiles() {
    const git = simpleGit();
    try {
        const log = await git.log(['-n', '10']);
        const commits = log.all;

        const filesSet = new Set();
        for (const commit of commits) {
            const diffSummary = await git.diffSummary([commit.hash]);
            diffSummary.files.forEach(file => {
                if (path.extname(file.file) === '.md') {
                    filesSet.add(file.file);
                }
            });
            if (filesSet.size >= 10) break;
        }

        const latestMdFiles = Array.from(filesSet).slice(0, 10);
        return latestMdFiles;

    } catch (err) {
        console.error('Error:', err);
        return [];
    }
}

if (require.main === module) {
    getLatestMdFiles().then(files => {
        fs.writeFileSync(path.join(__dirname, 'docs/public', 'latestMdFiles.json'), JSON.stringify(files, null, 2));
        console.log('Latest 10 Markdown files saved to public/latestMdFiles.json');
    });
}

module.exports = getLatestMdFiles;

