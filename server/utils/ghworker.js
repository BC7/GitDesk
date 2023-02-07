const { createOAuthAppAuth } = require('@octokit/auth-oauth-app');
const { request } = require('@octokit/request');

const auth = createOAuthAppAuth({
  clientType: 'oauth-app',
  clientId: process.env.ghClientId,
  clientSecret: process.env.ghClientSecret,
});

const tokenAuthentication = async (code) => {
  return await auth({
    type: 'oauth-user',
    state: process.env.ghState,
    code,
  });
};

const findUser = async (token) => {
  return await request('GET /user', {
    headers: {
      authorization: `token ${token}`,
    },
  })
    .then(({ data }) => {
      return data;
    })
    .catch((e) => {
      return null;
    });
};

module.exports = {
  tokenAuthentication,
  findUser,
};
