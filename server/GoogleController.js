/* eslint-disable quotes */
// const { Storage } = require('@google-cloud/storage');
// const storage = new Storage();

// const bucketName = 'podscriptaudio';
// async function createBucket() {
//   await storage.createBucket(bucketName);
//   console.log(`Bucket $[bucketName] created.`)
// }

// createBucket();

// const cloudBucket = 'podscriptaudio'
// const bucket = gcs.bucket(cloudBucket);
// const fileUpload = {};

// upload.fileUpload(req, res, next) => {
//   if (!req.file) return next();
//   const gcsName = req.file.originalname;

// }




// Google Cloud API functionality
// const gcsUri = 'gs://my-bucket/audio.raw';
// const encoding = 'LINEAR16';
// const sampleRateHertz = 16000;
// const languageCode = 'BCP-47 language code, e.g. en-US';

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
