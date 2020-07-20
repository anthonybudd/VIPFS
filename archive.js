const scrape = require('website-scraper');
const moment = require('moment');
const fs = require('fs');

const archiveURL = process.argv[2];

const archiveDir = './storage/archive';
if (!fs.existsSync(archiveDir)) fs.mkdirSync(archiveDir);

const id = moment().format("YYYY-MMM-DD--HH-mm-ss");
const archivePath = archiveDir + '/' + id;

scrape({
    urls: [archiveURL],
    directory: archivePath,
}).then(() => {
    console.log(`${archiveURL} successfully archived to ${archivePath}`);

    const archiveDBPath = './src/archiveDB.json';
    if (!fs.existsSync(archiveDBPath)) fs.writeFileSync(archiveDBPath, '[]');

    const archiveDB = fs.readFileSync(archiveDBPath)
    var archiveJson = JSON.parse(archiveDB);
    if (!Array.isArray(archiveJson)) archiveJson = [];
    archiveJson.unshift({ id, created_at: moment().format("YYYY-MM-DD HH:mm:ss"), url: archiveURL });
    fs.writeFileSync(archiveDBPath, JSON.stringify(archiveJson));
    console.log(`archiveDB.json updated`);
});