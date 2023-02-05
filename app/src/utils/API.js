const API = {
  getUser: () => {
    return fetch('/api/user')
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch(() => {
        return null;
      });
  },
  sendCode: (code) => {
    return fetch('/api/login', {
      method: 'POST',
      data: JSON.stringify({ code }),
    })
      .then((response) => response.json)
      .then((data) => {
        return data;
      })
      .catch(() => {
        return null;
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
