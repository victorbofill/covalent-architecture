const router = require('express').Router();
var fetch = require('isomorphic-fetch');
var Dropbox = require('dropbox').Dropbox;

const DROPBOX_TOKEN = process.env.DROPBOX_TOKEN;

var dbx = new Dropbox({ accessToken: DROPBOX_TOKEN, fetch: fetch });

module.exports = router
  .get('/', async (req, res) => {
    try {
      const { entries } = await dbx.filesListFolder({ path: '/commercial/food' });
      const imagePaths = entries.map(image => {
        return dbx.filesGetTemporaryLink({ path: image.path_lower });
      });
      const imageLinks = await Promise.all(imagePaths);
      res.send(imageLinks);
    } catch (error) {
      console.error(error);
    }
  });
