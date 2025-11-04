import React from 'react'

const Tesa = (props) => {
    return (
        <>
            <div className='card h-100'>
                <div className='overflow-hidden' style={{height: "250px"}}>
                    <img src={props.img} alt="" className='card-img-top' />
                </div>
                <div className='card-body'>
                    <h3 className='card-title'>{props.name}</h3>
                    <p className='card-text'>{props.desc}</p>
                    <span className='text-center'>{props.price}</span>
                </div>
                <div className='card-footer text-center'>
                    <button className='sangOrder col-12'>สั่งเมนู</button>
                </div>
            </div>
        </>
    )
};

export default Tesa