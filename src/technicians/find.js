import { useState } from "react"

import NavBar from "../components/navbar"

import { Rating } from "@mui/material"

import technician_man from '../technician_man.png'




const myfucn = () => {
    return(
        <input className="phone_details_txt" type='text'/>
    )
}





const TechnicianCard = (props) => {

    return(
        <div className="technician_card mx-5">
            <div className="d-flex flex-row">
                <div className="technician_prof_cont">
                    <img style={{objectFit: 'contain'}} src={technician_man} alt='img'/>
                </div>

                
                <div className="d-flex flex-column px-3 mx-3 pt-2" style={{width: '100%'}}>
                    <div>Stephen Mburu</div>

                    <div className="justify-self-end d-flex flex-row" style={{marginTop: 'auto'}}>
                        <div><Rating value={2.5} precision={0.5} readOnly/></div>
                        <div className="justify-self-end ml-auto" style={{color: '#be4f00'}}>16 metres away</div>
                    </div>

                </div>
                
            </div>
            <hr style={{width: '90%', marginLeft: 'auto'}}/>
        </div>
    )
} 




const FindTechnicianPage = () => {


    const list = [1,2,3,1,3,312,3,2,3,2,312,3,2,3,2,3,2,4,4,4,5,5]

    const [renderdList, setRL] = useState([])


    const renderCards = () => {
        const localList = []
        for (let x of list) {
            localList.push(<div className="col-12 col-md-6 px-md-5 my-4" key={1}><TechnicianCard/></div>)
        }

        return localList
    }




    return(
        <div className="main_page" style={{background: 'transparent'}}>
            <NavBar auth={true} page='home'/>

            <div style={{width: '100%'}}>
                <div className="mb-2 pl-5 pr-3" style={{width:'100%', marginTop: '2rem'}}>
                    <div className="mb-3" >Location used: <button className="simple_btn px-2 bold_text">Home</button></div>
                    <div > These are technicians within <button className="simple_btn px-2 bold_text">100 metres</button> from your location</div>
                </div>
                <div className="row px-md-5" style={{width: '100%'}}>
                    
                        
                        {renderCards()}

                    
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}





export default FindTechnicianPage