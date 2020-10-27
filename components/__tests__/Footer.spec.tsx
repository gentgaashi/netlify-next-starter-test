import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Footer from '../Footer';

let app: ShallowWrapper;

describe('With Enzyme', () => {
	beforeEach(() => {
		app = shallow(<Footer />);
	});

	it('to match snapshot', () => {
		expect(app).toMatchSnapshot();
	});

	it('App shows "Hi Next" in a <p> tag', () => {
		const ftr = app.find('Sfooter');
		expect(ftr).toBeTruthy();
		expect(ftr).toHaveStyleRule('display', 'flex');
		expect(ftr.find('Simg').prop('src')).toEqual('/netliheart.svg');
	});
});
