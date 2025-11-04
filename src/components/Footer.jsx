import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='row justify-content-center shadow-lg' style={{background: "blueviolet"}}>
                <div className='col-11'>

                    <ul className='d-flex justify-content-center gap-5 mt-3'>
                        <li className='nav-link footerBtnAnime'><a href="#" className='text-decoration-none footerBtn'>home</a></li>
                        <li className='nav-link footerBtnAnime'><a href="#" className='text-decoration-none footerBtn'>menu</a></li>
                        <li className='nav-link footerBtnAnime'><a href="#" className='text-decoration-none footerBtn'>contact</a></li>
                        <li className='nav-link footerBtnAnime'><a href="#" className='text-decoration-none footerBtn'>about us</a></li>
                    </ul>
                    <hr className='text-light' />
                    <ul className='d-flex justify-content-center footerBtn'>
                        <span>&copy; 2025 Dev WATCHARIN KAMPITAK</span>
                    </ul>

                </div>
            </footer>
        </>
    )
}

export default Footer
