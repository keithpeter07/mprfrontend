import { useState } from "react"

import NavBar from "../components/navbar"

import settings from '../settings.json'



const PaymentMethodPage = () => {

    const [page, setPage] = useState('method')


    return(
        <div className="main_page">
            <NavBar auth={true} page='payment'/>
            <div className="row container-fluid m-auto" style={{minHeight:"100vh", height: 'auto'}}>
                <div className="col-md-4 px-md-5" style={{minHeight: '100%', borderTopRightRadius: '.9rem', boxShadow: '4px -4px 4px #efefef', backgroundColor: '#dfdfdf'}}>
                    <div className="my-5" style={{fontSize: '1.2rem', fontWeight: '600'}}>
                        <span className="text-success">Bill for Francis Awuor</span>
                    </div>
                    <div style={{marginTop: '5rem'}}>
                        Samsung, Galaxy S8
                    </div>
                    <div style={{marginTop: '5rem'}}>
                        Technician: <span className="ml-2">SAMUEL MBURU</span><br/>
                        Job status: <span className="green_text ml-2">Completed</span><br/>
                        Amount: <span className="green_text ml-2">2,000</span><br/>
                    </div>
                </div>
                <div className="col-md-8 px-md-5" style={{position: 'relative'}}>

                    {/*The navigation part*/}

                    <div className="Navbar" style={{position: 'relative', zIndex: 500}}>
                        <div className='inpage_nav_btn' style={{width: '50%'}}>
                            <div>Payment Method</div>
                            {page==='method' ? <div className='inpage_nav_btn_highlight'></div> : null}
                        </div>
                        <div className='inpage_nav_btn' style={{width: '50%'}}>
                            <div>Payment</div>
                            {page==='pay' ? <div className='inpage_nav_btn_highlight'></div> : null}
                        </div>
                    </div>

                    {/*The page*/}

                     <div className="pay_method_cont">
                        
                            <span>Choose a payment method below</span>

                            <div className="pay_method_btns" style={{width: '80%'}}>

                                <button className="btnbtn mpesa_btn" style={{width: '80%', fontWeight: '600'}}>MPESA</button>

                                <button className="btnbtn cash_btn" style={{width: '80%', fontWeight: '600'}}>CASH</button>

                            </div>
                        
                     </div>

                     <div>
                        <div>
                            Mpesa phone number: ... <button className="simple_btn px-3">change</button>
                        </div>
                        <div>
                            Mpesa payment to {'Stephen Mburu'} via {settings.name}
                        </div>
                     </div>

                </div>
            </div>
        </div>
    )
}


export default PaymentMethodPage