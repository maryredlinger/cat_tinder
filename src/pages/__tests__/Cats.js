import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import Cats from '../Cats'
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

it('Cats renders without crashing', () => {
 const div = document.createElement('div')
 ReactDOM.render(<Router> <Cats /> </Router>, div)
})
