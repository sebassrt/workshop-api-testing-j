const { assert } = require('chai');


describe.only('This is a tet about environment variables', () => {
  it('when MY_ENVIRONMENT_VARIABLE is set', () => {
    const env = process.env.MY_ENVIRONMENT_VARIABLE;

    assert.equal(env, 'my value');
  });
});
