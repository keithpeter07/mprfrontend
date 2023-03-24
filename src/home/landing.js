import settings from '../settings.json'
import NavBar from "../components/navbar"

import { useNavigate } from 'react-router-dom'



const LandingPage = () => {

    const navigate = useNavigate()

    const proceedNext = () => {

        if(window.localStorage.getItem('access_token')){
            navigate('/home')
        }else{
            navigate('/signin')
        }
    }

    return(
        <div className="main_page">
            <NavBar auth={false}/>

            <div className="center_cont">
                <span className="head_intro px-5">Get a technician with a click of a button</span>
                <br/>
                <span className='px-5'>{settings.name} provides the best way to easily find mobile phone repair technicians within your area with just a few clicks</span>
                <br/>
                <br/>
                <button className="register_btn mt-5 px-5" style={{width: '20rem'}} onClick={proceedNext}>GET STARTED</button>
            </div>
        </div>
    )
}





export default LandingPage