const api = {
  getImageLinks: async (category, project) => {
    return await fetch(`/api/dropbox/${category}/${project}`, {})
      .then(response => [response.ok, response.json()])
      .then(([ok, json]) => {
        if (ok) return json;
        throw json.message || json.error || json.errors || json;
      });
  },
};

export default api;
