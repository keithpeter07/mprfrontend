
import { useState } from "react"

import { AuthPageNav } from "./signin"

//Material UI
import { TextField } from "@mui/material"
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material"
import { addSignupDetails } from "../redux/actions"

//redux
import { connect } from "react-redux"




const RegisterForm = (props) => {
    
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [keepMeSignedIn, setKeepMeSignedIn] = useState(true)

    //Error states
    const [firstnameError, setFirstnameError] = useState(false)
    const [lastnameError, setLastnameError] = useState(false)
    const [emailError, setEmailerror] = useState(false)
    const [passError, setPassError] = useState(false)
    const [confirmPassError, setConfirmPassError] = useState(false)

    const [showPass, setShowPass] = useState(false)
    const [showConfirmPass, setShowConfirmPass] = useState(false)



    const handleChange = (e, field) => {

        switch(field){
            case 'firstname':
                setFirstname(e.target.value)
                setFirstnameError(false)
                break
            
            case 'lastname':
                setLastname(e.target.value)
                setLastnameError(false)
                break

            case 'email':
                setEmail(e.target.value)
                setEmailerror(false)
                break

            case 'password':
                setPassword(e.target.value)
                setPassError(false)
                break

            case 'confirmPass':
                setConfirmPass(e.target.value)
                setConfirmPassError(false)
                break
            
            case 'chkbox':
                setKeepMeSignedIn(!keepMeSignedIn)
        }
    }


    const handleSubmit = () => {

        if( firstname.length > 0 &&
            lastname.length > 0 &&
            email.length > 0 &&
            email.includes('@') &&
            email.includes('.') &&
            password.length >= 8 &&
            password === confirmPass){

                const data = {firstname, lastname, email, password, keepMeSignedIn}

                props.addSignupDetails(data)

                console.log(props.state)
        }

        else{

            if(firstname.length === 0){setFirstnameError(true)}
            if(lastname.length === 0){setLastnameError(true)}
            if(email.length === 0 || !email.includes('@') || !email.includes('.')){setEmailerror(true)}
            if(password.length < 8){setPassError(true)}
            if(password !== confirmPass || confirmPass.length === 0){setConfirmPassError(true)}
        }
    }





    return(
        <>

        <div className='main_page'>

            
            <div className="form_cont m-auto">
                <AuthPageNav page={'register'}/>
                <div className="row px-1">
                    <div className="col-12 px-0 my-4 d-flex flex-row">
                        <div className="px-0" style={{width: '49%'}}>
                            <TextField sx={{width: '100%'}} id='firstname' variant="standard" label='firstname' error={firstnameError} onChange={(e) => handleChange(e, 'firstname')}/>
                        </div>
                        <div className="px-0 justify-self-end ml-auto" style={{width: '49%'}}>
                            <TextField sx={{width: '100%'}} id='lastname' variant="standard" label='lastname' error={lastnameError} onChange={(e) => handleChange(e, 'lastname')}/>
                        </div>
                    </div>
                    
                    <div className="col-12 px-0 my-4">
                        <TextField sx={{width: '100%'}} id= 'email' variant='standard' label='email' error={emailError} onChange={(e) => handleChange(e, 'email')}/>
                    </div>
                </div>
                <div className='row px-1'>
                    <div className="col-10 col-md-11 px-0 my-4">
                        <TextField sx={{width: '100%'}} id='password' variant='standard' label='password' error={passError} type={showPass ? 'text' : 'password'} onChange={(e) => handleChange(e, 'password')}/>
                    </div>
                    <div className="col-2 col-md-1 my-4 p-0" style={{borderBottom: '1px solid #999999'}}>
                        <button className="show_pass_toggle" onClick={() => setShowPass(!showPass)}>{!showPass ? <VisibilityOutlined/> : <VisibilityOffOutlined/>}</button>
                    </div>
                    <div className="col-10 col-md-11 px-0 my-4">
                        <TextField sx={{width: '100%'}} id='confirm_password' variant='standard' label='confirm password' error={confirmPassError} type={showConfirmPass ? 'text' : 'password'} onChange={(e) => handleChange(e, 'confirmPass')}/>
                    </div>
                    <div className="col-2 col-md-1 my-4 p-0" style={{borderBottom: '1px solid #999999'}}>
                        <button className="show_pass_toggle" onClick={() => setShowConfirmPass(!showConfirmPass)}>{!showConfirmPass ? <VisibilityOutlined/> : <VisibilityOffOutlined/>}</button>
                    </div>
                </div>

                
                
                <div id='check' className="checkbox_cont d-inline-block mt-3 mr-3">
                    <input type='checkbox' checked={keepMeSignedIn} onChange={(e) => handleChange(e, 'chkbox')}/>
                    <span></span>
                </div>
                <label htmlFor="check">keep me signed in</label>


                <button className="register_btn" onClick={() => handleSubmit()}>REGISTER</button>
                
            </div>
        </div>

        </>    )

}


const mapStateToProps = state => {
    return{
        state: state
    }
}



const mapDispatchToProps = dispatch => {
    return{
        addSignupDetails: (payload) => dispatch(addSignupDetails(payload))
    }
}





export default connect(mapStateToProps,mapDispatchToProps)(RegisterForm)