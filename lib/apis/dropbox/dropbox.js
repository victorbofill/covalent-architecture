const router = require('express').Router();
var fetch = require('isomorphic-fetch');
var Dropbox = require('dropbox').Dropbox;

const DROPBOX_TOKEN = process.env.DROPBOX_TOKEN;

var dbx = new Dropbox({ accessToken: DROPBOX_TOKEN, fetch: fetch });

module.exports = router
  .get('/categories', async (req, res) => {
    try {
      const { entries } = await dbx.filesListFolder({ path: '' });
      const categories = entries.map(entry => {
        return {
          category: entry.name,
          path: entry.path_lower,
        };
      });
      res.send(categories);
    } catch {
      error => console.error(error);
    }
  })
  .get('/:category/projects', async (req, res) => {
    try {
      const { category } = req.params;
      const { entries } = await dbx.filesListFolder({ path: `/${category}` })
      const projects = entries.map(entry => entry.name);
      res.send(projects);
    } catch {
      error => console.error(error);
    }
  })
  .get('/:category/:project', async (req, res) => {
    try {
      const { category, project } = req.params;
      const { entries } = await dbx.filesListFolder({ path: `/${category}/${project}` });
      const imagePaths = entries.map(image => {
        return dbx.filesGetTemporaryLink({ path: image.path_lower });
      });
      const imageData = await Promise.all(imagePaths);
      const imageLinks = imageData.map(data => {return data.link;});
      res.send(imageLinks);
    } catch (error) {
      console.error(error);
    }
  });
