const agent = require('superagent-promise')(require('superagent'), Promise);
const statusCode = require('http-status-codes');
const chai = require('chai');

const { expect } = chai;

const urlBase = 'https://api.github.com';
const githubUserName = 'aperdomob';
const repository = 'jasmine-awesome-report';

describe('Others Api Tests', () => {
});

it('Consume GET Service with GitHub Api 2', () => {
  const query = {
    name: 'Alejandro Perdomo',
    company: 'PSL',
    location: 'Colombia'
  };

  return agent.get('https://api.github.com/users/aperdomob')
    .query(query)
    .then((response) => {
      expect(response.status).to.equal(statusCode.OK);
      expect(response.body.company).to.eql(query.company);
      expect(response.body.name).to.eql(query.name);
      expect(response.body.location).to.eql(query.location);
    });
});

it('Consume GET Service with GitHub Api 3', () => {
  agent.get(`${urlBase}/users/${githubUserName}/repos`)

    .then((response) => {
      expect(response.status).to.equal(statusCode.OK);
      const repo = response.body.find(repositorytofind => repositorytofind.name === repository);
      expect(repo.name).to.equal('jasmine-awesome-report');
      expect(repo.private).to.equal(false);
      expect(repo.description).to.equal('An awesome html report for Jasmine');
    });
});

it('Consume GET Service with GitHub Api 4', () => {
  agent.get('https://api.github.com/repos/aperdomob/jasmine-awesome-report/{.zip}')

    .then((response) => {
      expect(response.status).to.equal(statusCode.OK);
    });
});
