const router = require('express').Router();
var fetch = require('isomorphic-fetch');
var Dropbox = require('dropbox').Dropbox;

const DROPBOX_TOKEN = process.env.DROPBOX_TOKEN;

var dbx = new Dropbox({ accessToken: DROPBOX_TOKEN, fetch: fetch });

module.exports = router
  .get('/', async (req, res, next) => {
    try {
      const user = await dbx.usersGetCurrentAccount();
      console.log('user: ', user);
      res.send(user);
    } catch (error) {
      console.error(error);
    }
  });
