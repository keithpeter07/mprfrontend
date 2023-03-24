
import { useState } from "react"

import NavBar from "../components/navbar"

import technician_man from '../technician_man.png'

import { Rating } from "@mui/material"






const ReviewTextCont = () => {
    return(
        <div className="col-12 col-md-3 mb-5">
            <div className="review_text_cont">
                <div className="review_technician_details mx-2 mt-2">
                    <div className="d-flex justify-content-center align-items-center" style={{width: '3.2rem', height: '3.2rem', borderRadius: '50%', backgroundColor: '#0500E9'}}>
                        <div className="m-auto" style={{fontWeight: '600', fontSize: '1.3rem', color: 'white'}}>{'FA'}</div>
                    </div>
                    <div className="d-flex flex-column ml-2" style={{fontSize: '.8rem'}}>
                        <div>
                            {'FRANCIS AWUOR'}
                        </div>
                        <div className="mt-1 mb-2">
                            {'Samsung, j6 plus'}
                        </div>
                        <Rating value={2.5} precision={0.5} readOnly size='small'/>
                    </div>
                </div>
                <div className="review_text m-2 mt-4">
                    Review text goes here. This is to test how long text would look. I am going to make it as long as possible to achieve that. I should go even longer than this coz this kinda fits well within the review box
                </div>
            </div>
        </div>
    )
}



const TechnicianPage = () => {


    return(
        <div className="main_page" style={{background: 'transparent'}}>
            <NavBar auth={true} page='home'/>

            <div className="d-flex flex-row px-md-5 px-1">
                <div style={{width: '15rem', height: '15rem'}}>
                    <div className="technician_image_cont">
                        <img src={technician_man} alt='profile'/>
                    </div>
                </div>
                <div className="technician_details_cont pb-3">
                    <div style={{fontSize: '2rem', letterSpacing: '.2rem', fontWeight: '600'}}>
                        {'SAMUEL MBURU' /*To be the name of the technician from the database*/}
                    </div>
                    <div className="my-5">
                        <Rating value={2.5} precision={0.5} readOnly size='large'/>
                    </div>
                    <div className="justify-self-end mt-auto" style={{color: '#be4f00', fontSize: '1.3rem'}}>
                        {'16 meters away' /*To be the distance of the technician*/}
                    </div>
                </div>
                <div className="justify-self-end ml-auto px-md-5 pb-3 d-flex flex-column">
                    <button className="register_btn mb-0 mt-auto justify-content-end">PROCEED</button>
                </div>
            </div>


            <div className="px-2 px-md-5 mt-5">
                <span style={{fontSize: '1.15rem'}}>{'Samuel Mburu'} has completed similar jobs to yours and got high ratings. Checkout the reviews he got</span>
            </div>


            <div className="reviews_cont row mx-0 mb-5">
                <ReviewTextCont/>
                <ReviewTextCont/>
                <ReviewTextCont/>
                <ReviewTextCont/>
                <ReviewTextCont/>
                <ReviewTextCont/>

            </div>


        </div>
    )
}







export default TechnicianPage