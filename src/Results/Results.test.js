import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Results from './Results';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Results />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div)
});