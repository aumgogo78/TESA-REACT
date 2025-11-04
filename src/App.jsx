import React from 'react'
import Tesa from './components/Tesa'
import tesa from './data/tesa';
import { Header } from './components/Header';

const App = () => {
    return (
        <>
            <div className='overflow-hidden'>
                <Header/>
                <div className='row mx-5'>
                    <hr />
                    <h2 className='text-end'>MENU จ๊าาาาาาา</h2>
                    {tesa.map((water)=>(
                        <div className='col-3 mb-5' key={water.id}>
                            <Tesa img={water.img} name={water.name} desc={water.desc} price={water.price} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default App