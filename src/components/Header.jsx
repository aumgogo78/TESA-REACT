import React from 'react'
import '../assets/style.css'

export const Header = () => {
  return (
    <>
      <nav className='row mt-3'>
        <div className='col-12 d-flex justify-content-between'>
          <h2>TESA CAFE</h2>
          <ul className='nav-link d-flex gap-0'>
            <li className='btn mybtnanime'>
              <a href="#" className='text-decoration-none mybtn'>About Us</a>
            </li>
            <li className='btn mybtnanime'>
              <a href="#" className='text-decoration-none mybtn'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header;
