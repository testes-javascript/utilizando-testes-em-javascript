import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('[FRONTEND][SHALLOW] - Teste logo', () => {
  const wrapper = shallow(<App />);
  // console.log(wrapper.debug());
  const image = (
    <img
      src="https://cdn.worldvectorlogo.com/logos/react.svg"
      width="30"
      height="30"
      className="d-inline-block align-top"
      alt="React Bootstrap logo"
    />
  );
  expect(wrapper.contains(image)).toEqual(true);
});
