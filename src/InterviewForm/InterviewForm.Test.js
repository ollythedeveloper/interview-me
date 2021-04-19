import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import InterviewForm from './InterviewForm';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <InterviewForm />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div)
});