import 'core-js/stable';
import 'regenerator-runtime/runtime';

async function request(url) {
  return await fetch(url)
    .then(response => [response.ok, response.json()])
    .then(([ok, json]) => {
      if (ok) return json;
      throw json.message || json.error || json.errors || json;
    });
}

const api = {
  getCategories: async () => {
    return await request('http://localhost:3000/api/dropbox/categories');
  },
  getProjects: async category => {
    return await request(`http://localhost:3000/api/dropbox/${category}/projects`);
  },
  getImageLinks: async (category, project) => {
    return await request(`http://localhost:3000/api/dropbox/${category}/${project}`);
  },
};

export default api;
