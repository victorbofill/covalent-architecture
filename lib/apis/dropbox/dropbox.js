const router = require('express').Router();
var fetch = require('isomorphic-fetch');
var Dropbox = require('dropbox').Dropbox;

const DROPBOX_TOKEN = process.env.DROPBOX_TOKEN;

var dbx = new Dropbox({ accessToken: DROPBOX_TOKEN, fetch: fetch });

module.exports = router
  .get('/', async (req, res, next) => {
    try {
      const testData = await dbx.filesGetMetadata();
      res.send(testData);
    } catch (error) {
      console.error(error);
    }
  });
