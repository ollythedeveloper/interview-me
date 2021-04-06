import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    return (
        <nav className='App__nav'>
            <Link to='/'>
                Home
            </Link>
            {' '}
            <Link to={`/question/questionId`}>
               Start Mock Interview
            </Link>
        </nav>
    )
}