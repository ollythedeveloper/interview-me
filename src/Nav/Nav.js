import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import InterviewContext from '../InterviewContext';
import './Nav.css';

export default function Nav() {
    const { resetQuestPlacement } = useContext(InterviewContext)
    
    return (
        <nav className='App__nav'>
            <Link to='/' onClick={resetQuestPlacement}>
                <h2>Interview Me.</h2>
            </Link>
        </nav>
    )
}