import React from 'react'


export const Header = () => {
  return (
    <>
      <nav className='row mt-3'>
        <div className='col-12 d-flex justify-content-between'>
          <h2 className='ms-5 logoHit'><a href="#" className='logoText' >TESA CAFE</a></h2>
          
          <ul className='navbar gap-3 mx-5'>
            <li className='nav-link mybtnanime'><a href="#" className='mybtn'>About Us</a></li>
            <li className='nav-link mybtnanime'><a href="#" className='mybtn'>Contact</a></li>
            <li className='nav-link mybtnanime'><a href="#" className='mybtn'>Menu</a></li>
            <li className='nav-link mybtnanime'><a href="#" className='mybtn'>Home</a></li>
          </ul>

        </div>
      </nav>
    </>
  )
}

export default Header
