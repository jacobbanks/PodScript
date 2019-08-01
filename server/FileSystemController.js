fileController.rssParse = (req, res, next) => {
  (async () => {
    const feed = await parser.parseURL(req.body.url);
    const recentURl = feed.items[0].enclosure.url;
    res.locals.parsedRSS = feed.items[0].enclosure.url;
    return next();
  })();
};

// // writing file to filesystem
// const request = require('request');
// const fs = require('fs');
// request.get('https://chtbl.com/track/524GE/traffic.megaphone.fm/VMP1327257907.mp3')
//   .on('response', function(response) {
//     console.log(response.statusCode);
//     console.log(response.headers['content-type']);
//   }).pipe(fs.createWriteStream('/Users/jacobbanks/Desktop/PodScript_MP3/sendtogoogle.mp3', 'binary'));
