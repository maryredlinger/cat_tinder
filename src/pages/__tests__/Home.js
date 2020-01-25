import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import Home from '../Home'
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

it('Home renders without crashing', () => {
 const div = document.createElement('div')
 ReactDOM.render(<Router> <Home /> </Router>, div)
})
