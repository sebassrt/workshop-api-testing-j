const agent = require('superagent-promise')(require('superagent'), Promise);
const statusCode = require('http-status-codes');
const chai = require('chai');

const { expect } = chai;

describe('Others Api Tests', () => {
});

it('Consume GET Service with GitHub Api', () => {
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
      describe(response.body.company, () => {});
    });
});
