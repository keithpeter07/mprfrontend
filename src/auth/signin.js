import { useState } from "react"

import { useNavigate } from "react-router-dom"

//Material UI
import { TextField } from "@mui/material"
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material"







export const AuthPageNav = (props) => {

    const navigate = useNavigate()

    return(
        <div className="auth_page_nav d-flex flex-row">
            <div className="nav_button mr-5" style={{fontSize: '1.4rem'}} onClick={() => navigate('/signin')}>
                <span className="nav_btn_txt mx-2" style={{color: props.page==='signin' ? '#003ede' : 'black'}}>Sign in</span>
                {props.page === 'signin' ? <div className='nav_btn_highlight '></div> : null}
            </div>
            <div className="nav_button" style={{fontSize: '1.4rem'}} onClick={() => navigate('/register')}>
                <span className="nav_btn_txt mx-2" style={{color: props.page==='register' ? '#003ede' : 'black'}}>Register</span>
                {props.page === 'register' ? <div className='nav_btn_highlight my-0'></div> : null}
            </div>
        </div>
    )
}



const SigninForm = () => {
    
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    //Error states
    const [emailError, setEmailerror] = useState(false)
    const [passError, setPassError] = useState(false)

    const [showPass, setShowPass] = useState(false)





    return(
        <>

        <div className='main_page'>

            
            <div className="form_cont m-auto">
                <AuthPageNav page={'signin'}/>
                <div className="row px-1">
                    
                    <div className="col-12 px-0 my-4">
                        <TextField sx={{width: '100%'}} id= 'email' variant='standard' label='email' error={emailError}/>
                    </div>
                </div>
                <div className='row px-1'>
                    <div className="col-10 col-md-11 px-0 my-4">
                        <TextField sx={{width: '100%'}} id='password' variant='standard' label='password' error={passError} type='password'/>
                    </div>
                    <div className="col-2 col-md-1 my-4 p-0" style={{borderBottom: '1px solid #999999'}}>
                        <button className="show_pass_toggle"><VisibilityOutlined/></button>
                    </div>
                </div>

                
                
                <div id='check' className="checkbox_cont d-inline-block mt-3 mr-3">
                    <input type='checkbox'/>
                    <span></span>
                </div>
                <label htmlFor="check">keep me signed in</label>


                <button className="register_btn">SIGN IN</button>
                
            </div>
        </div>

        </>    )

}





export default SigninForm