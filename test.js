const https = require('https');
https.get('https://docs.google.com/spreadsheets/d/1KB1Glo3hzLaZrOXFyWg34oPZRpGVHM7Q4pP7LJKW5yI/gviz/tq?tqx=out:csv&gid=0', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const rows = data.split('\n');
    let appCount = 0; let webCount = 0;
    for (let i = 1; i < rows.length; i++) {
      const cols = rows[i].split('","');
      if (cols.length >= 3) {
        const version = cols[2].replace(/"/g, '').trim();
        if (version === 'App') appCount++;
        else if (version.toLowerCase().includes('web')) webCount++;
      }
    }
    console.log({appCount, webCount});
  });
});
