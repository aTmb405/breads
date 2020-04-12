import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../containers/Routes';

it('renders without crashing', () => {
    shallow(<Routes />);
});