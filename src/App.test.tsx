import React from 'react';

import renderer from 'react-test-renderer';

import App from './App';

describe('Test App', () => {
  test('test App', () => {
    const component = renderer.create(<App />);

    const app = component.toJSON() as renderer.ReactTestRendererJSON;

    expect(app).toBeDefined();
    expect(app.type).toEqual('div');
    expect(app.props.className).toEqual('App');
  });
});
