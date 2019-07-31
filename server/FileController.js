/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const Parser = require('rss-parser');
const parser = new Parser();
const fileController = {};

fileController.rssParse = (req, res, next) => {
  (async () => {
    const feed = await parser.parseURL('req.body');
    const recentURl = feed.items[0].enclosure.url;
    return recentURl;
  });
  res.locals.parsedRSS = recentURl;
  return next();
};
