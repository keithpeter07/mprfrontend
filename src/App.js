import './App.scss';
import './bootstrap.min.css'

//React router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Toastify for notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

//Pages
import RegisterForm from './auth/signup';
import SigninForm from './auth/signin';
import LandingPage from './home/landing';
import HomePage from './home/home';
import FindTechnicianPage from './technicians/find';
import TechnicianPage from './technicians/technicianPage';
import PaymentMethodPage from './payment/paymentMethod';
import SelectLocation from './auth/selectLocation';

import { ShowMap } from './map';

//redux
import { Provider } from 'react-redux';
import store from './redux/store';





function App() {

  const notify = () => {
    toast.success('I work buana')
  }



  return (
    <Provider store={store}>
      <ToastContainer/>
      <div className="container-fluid m-0 p-0">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/register' element={<RegisterForm/>}/>
            <Route path='/register/location' element={<SelectLocation/>}/>
            <Route path='/signin' element={<SigninForm/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/home/findTechnician' element={<FindTechnicianPage/>}/>
            <Route path='/home/technicianPage' element={<TechnicianPage/>}/>
            <Route path='/payment' element={<PaymentMethodPage/>}/>
            <Route path='/map' element={<ShowMap/>}/>
            <Route path='*' element={<div>Page not found</div>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
    
  );
}

export default App;
