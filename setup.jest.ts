import { configure } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

configure({ adapter: new ReactSixteenAdapter() });
