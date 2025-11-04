import React from 'react'
import Tesa from './components/Tesa'
import { Header } from './components/Header';

const App = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <Header/>
                    <h2>เมนู</h2>
                </div>
            </div>
        </>
    )
}

export default App