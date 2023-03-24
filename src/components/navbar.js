import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import settings from '../settings.json'


const NavBar = (props) => {

    const navigate = useNavigate()

    return(
        <div className="Navbar px-2">
            <div className="Logo pl-3">{settings.name}</div>
            {
            props.auth === true ?
            <div className='d-flex flex-row' style={{justifySelf: 'flex-end', marginLeft: 'auto'}}>
                <div className='nav_button' onClick={() => navigate('/home')}>
                    <span className='nav_btn_txt' style={{color: props.page==='home' ? '#003ede' : 'black'}}>Home</span>
                    {props.page === 'home' ? <div className='nav_btn_highlight'></div> : null}
                </div>
                <div className='nav_button' onClick={() => navigate('/payment')}>
                    <span className='nav_btn_txt' style={{color: props.page==='payment' ? '#003ede' : 'black'}}>Payment</span>
                    {props.page === 'payment' ? <div className='nav_btn_highlight'></div> : null}
                </div>
                <div className='nav_button' onClick={() => navigate('/profile')}>
                    <span className='nav_btn_txt' style={{color: props.page==='profile' ? '#003ede' : 'black'}}>Profile</span>
                    {props.page === 'profile' ? <div className='nav_btn_highlight'></div> : null}
                </div>
                
            </div>
            :null}
        </div>
    )
}





export default NavBar