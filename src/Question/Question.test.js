import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Question from './Question';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Question />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div)
});