/* eslint-disable no-inner-declarations */
/* eslint-disable no-else-return */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
// const fs = require('fs');
const path = require('path');
const Parser = require('rss-parser');
const request = require('request');
const fs = require('fs');

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

fileController.readFile = (req, res, next) => {
  console.log('your in readfile')
  const transcript = fs.readFileSync('/Users/jacobbanks/Desktop/PodScript_MP3/prodpodcasttranscription.txt', 'utf8');
  res.locals.transcript = transcript;
  return next();
};


// fileController.googleSpeechToText = (req, res, next) => {
// async function main(googleURL) {
//   // Google Cloud API functionality
//   // Imports the Google Cloud client library
//   const speech = require('@google-cloud/speech');

//   // Creates a client
//   const client = new speech.SpeechClient();

//   const gcsUri = googleURL;
//   const encoding = 'FLAC';
//   const sampleRateHertz = 44100;
//   const languageCode = 'en-US';

//   const config = {
//     encoding,
//     sampleRateHertz,
//     languageCode,
//     audioChannelCount: 2,
//     enableSeparateRecognitionPerChannel: true,
//   };

//   const audio = {
//     uri: gcsUri,
//   };

//   const request = {
//     config,
//     audio,
//   };

//   // Detects speech in the audio file. This creates a recognition job that you
//   // can wait for now, or get its result later.
//   const [operation] = await client.longRunningRecognize(request);
//   // Get a Promise representation of the final result of the job
//   const [response] = await operation.promise();
//   console.log(response);
//   const transcription = response.results.map(result => result.alternatives[0].transcript).join('\n');
//   console.log(`Transcription: ${transcription}`);
//   const filePath = '/Users/jacobbanks/Desktop/PodScript_MP3/podcasttranscription.txt';
//   await fs.writeFile(filePath, transcription, (err) => {
//     if (err) throw err;
//     console.log('transcript saved')
//   });
// }

// const writeTranscript = main('gs://podscriptaudio/shortPodcast.flac');
// console.log(writeTranscript);

// controller for writing the file
// fileController.writeTranscript = (req, res, body) => {
//   const transcript = main('gs://podscriptaudio/wav.flac');
//   console.log(transcript);
//   fs.writeFile('transcript.text', transcript, (err) => {
//     if (err) throw err;
//     console.log(transcript saved)
//   })
// }


// async function main() {
//   // imports google cloud client library
//   const speech = require('@google-cloud/speech');
//   const fs = require('fs');
//   // creates client and authenticates server
//   const id = 'podscript-1564599038344';
//   const keyPath = '/Users/jacobbanks/Code/PodScript/PodScript-93dbb2a7d1dc.json';
//   const client = new speech.SpeechClient({id, keyPath});
//   // name of the audio file
//   const fileName = '/Users/jacobbanks/Desktop/PodScript_MP3/sendtogoogle.mp3';
//   // reads a local audio file and converts to base 64
//   const file = fs.readFileSync(fileName);
//   const audioBytes = file.toString('base64');
//   // the audio file's encoding, sample rate in hertz, and BCP-47 language code
//   const audio = {
//     content: audioBytes,
//   };

//   const config = {
//     encoding: ,
//     sampeRateHertz: 16000,
//     languageCode: 'en-US',
//   };
//   const request = {
//     audio: audio,
//     config: config,
//   };
//   // Detects speech in the Audio File
//   const [response] = await client.recognize(request);
//   const transcription = response.results
//     .map(result => result.alternatives[0].transcript)
//     .join('\n');
//   console.log(`Transcription: ${transcription}`);
// }
// main().catch(console.error);


module.exports = fileController;
