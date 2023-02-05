const { createOAuthAppAuth } = require('@octokit/auth-oauth-app');
const { request } = require('@octokit/request');

const auth = createOAuthAppAuth({
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
});

const tokenAuthentication = async (code) => {
  return await auth({
    type: 'token',
    // state: 'mystate123',
    code, // code from OAuth web flow, see https://git.io/fhd1D
  });
};

const findUser = async (atok) => {
  return await request('GET /user', {
    headers: {
      authorization: `token ${atok}`,
    },
  })
    .then(({ data }) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
      return null;
    });
};

module.exports = {
  tokenAuthentication,
  findUser,
};
