


import NavBar from "../components/navbar"

import { TextField, Autocomplete } from "@mui/material"

import TextInput from 'react-autocomplete-input';




const myfucn = () => {
    return(
        <input className="phone_details_txt" type='text'/>
    )
}




const HomePage = () => {

    return(
        <div className="main_page">
            <NavBar auth={true} page='home'/>

            <div className="main_page">
                <div className="row px-md-5" style={{width: '100%'}}>
                    <div className="col-12 mx-md-5 col-md-6">
                        <div className="phone_details_form">
                            <span style={{fontWeight: 500, fontSize: '1.3rem'}}>Enter your mobile phone details below</span>

                            <div>

                            <div className="my-5">
                                <Autocomplete
                                        autoHighlight
                                        options={['hello','helb','hendry']}
                                        sx={{ width: '100%'}}
                                        border='none'
                                        renderInput={(params) => <TextField {...params} placeholder='brand'/>}
                                        />

                            </div>
                            <div  className="my-5">

                                <Autocomplete
                                        autoHighlight
                                        options={['hello','helb','hendry']}
                                        sx={{ width: '100%'}}
                                        border='none'
                                        renderInput={(params) => <TextField {...params} placeholder='model'/>}
                                        />

                            </div>
                            <div  className="my-5">

                                <Autocomplete
                                        autoHighlight
                                        options={['hello','helb','hendry']}
                                        sx={{ width: '100%'}}
                                        border='none'
                                        renderInput={(params) => <TextField {...params} placeholder='operating system'/>}
                                        />

                            </div>



                            <div id='check' className="checkbox_cont d-inline-block mt-3 mr-3 ml-1">
                                <input type='checkbox'/>
                                <span></span>
                            </div>
                            <label htmlFor="check">Save this device</label>
                            
                        </div>


                        <button className="register_btn" style={{width: '100%', fontWeight: '600'}}>FIND TECHNICIAN</button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}





export default HomePage