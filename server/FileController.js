/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
// const fs = require('fs');
const path = require('path');
const Parser = require('rss-parser');
const parser = new Parser();
const fileController = {};


fileController.rssParse = (req, res, next) => {
  (async () => {
    const feed = await parser.parseURL(req.body.url);
    const recentURl = feed.items[0].enclosure.url;
    res.locals.parsedRSS = feed.items[0].enclosure.url;
    return next();
  })();
};

// writing file to filesystem
const request = require('request');
const fs = require('fs');
request.get('https://chtbl.com/track/524GE/traffic.megaphone.fm/VMP1327257907.mp3')
  .on('response', function(response) {
    console.log(response.statusCode);
    console.log(response.headers['content-type']);
  }).pipe(fs.createWriteStream('/Users/jacobbanks/Desktop/PodScript_MP3/sendtogoogle.mp3', 'binary'));

// Google Cloud API functionality
async function main() {
  // imports google cloud client library
  const speech = require('@google-cloud/speech');
  const fs = require('fs');
  // creates client
  const client = new speech.SpeechClient();
  // name of the audio file
  const fileName = '/Users/jacobbanks/Desktop/PodScript_MP3/sendtogoogle.mp3';
  // reads a local audio file and converts to base 64
  const file = fs.readFileSync(fileName);
  const audioBytes = file.toString('base64');
  // the audio file's encoding, sample rate in hertz, and BCP-47 language code
  const audio = {
    content: audioBytes,
  };
  const config = {
    encoding: 'LINEAR16',
    sampeRateHertz: 16000,
    languageCode: 'en-US',
  };
  const request = {
    audio: audio,
    config: config,
  };
  // Detects speech in the Audio File
  const [response] = await client.recognize(request);
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
  console.log(`Transcription: ${transcription}`);
}
main().catch(console.error);


module.exports = fileController;
