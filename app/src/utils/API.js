const API = {
  getUser: () => {
    return fetch('/api/user')
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch(() => {
        return {};
      });
  },
  getIssues: () => {
    return fetch('/api/issues')
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch(() => {
        return {};
      });
  },
};

export default API;
