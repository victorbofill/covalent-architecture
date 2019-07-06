function request(url, options = {}, data) {
  if (data) options.body = JSON.stringify(data);

  return fetch(url, options)
    .then(response => [response.ok, response.json()])
    .then(([ok, json]) => {
      if (ok) return json;
      throw json.message || json.error || json.errors || json;
    });
}

const get = (options = {}) => request('/api/dropbox', { method: 'GET', options });

const api = {
  retrieveTestData: () => {
    return get();
  },
};

export default api;
