const agent = require('superagent-promise')(require('superagent'), Promise);
const statusCode = require('http-status-codes');
const chai = require('chai');

const { expect: expect } = chai;

describe('first Api tests', () => {

});

it('Consume GET Service', () => agent.get('https://httpbin.org/ip').then((response) => {
  expect(response.status).to.equal(statusCode.OK);
  expect(response.body).to.have.property('origin');
}));


it('Consume POST Service', () => {
  const body = {
    name: 'John',
    age: 31,
    city: 'New York'
  };

  return agent
    .post('https://httpbin.org/post')
    .send(body)
    .then((response) => {
      expect(response.status).to.equal(statusCode.OK);
      expect(response.body.json).to.eql(body);
    });
});

it('Consume GET Service with querys parameters', () => {
  const query = {
    name: 'Jhon',
    age: '31',
    city: 'New York'
  };

  return agent.get('https://httpbin.org/get')
    .query(query)
    .then((response) => {
      expect(response.status).to.equal(statusCode.OK);
      expect(response.body.args).to.eql(query);
    });
});


it('Consume HEAD Service', () =>
  // const query = {
  //      email: 'joe@smith.com'
  // };

  agent.head('https://httpbin.org/')
  //   .query(query)
    .then((response) => {
      expect(response.status).to.equal(statusCode.OK);
      expect(response).to.have.property('headers');
    }));


it('Consume PATCH Service', () => {
  const body = {
    name: 'John',
    age: 31,
    city: 'New York'
  };

  return agent
    .patch('https://httpbin.org/patch')
    .send(body)
    .then((response) => {
      expect(response.status).to.equal(statusCode.OK);
      expect(response.body.json).to.eql(body);
    });
});

it('Consume PUT Service', () => {
  const body = {
    name: 'John',
    age: 31,
    city: 'New York'
  };

  return agent
    .put('https://httpbin.org/put')
    .send(body)
    .then((response) => {
      expect(response.status).to.equal(statusCode.OK);
      expect(response.body.json).to.eql(body);
    });
});

it('Consume DELETE Service', () => {
  const body = {
    name: 'John',
    age: 31,
    city: 'New York'
  };

  return agent
    .del('https://httpbin.org/delete')
    .send(body)
    .then((response) => {
      expect(response.status).to.equal(statusCode.OK);
      expect(response.body.json).to.eql(body);
    });
});

