import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CatShow from '../CatShow';
// import App from 'cat-tinder/src/App.js';
import cats from '../cats';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('CatShow renders without crashing', () => {
    const match = {params: {id: 1}}
 const div = document.createElement('div')
 ReactDOM.render(<Router> <CatShow match={match} /> </Router>, div)
})
