import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './component/Header'
import Footer from './component/Footer'
import MainDisplay from './display/MainDisplay'
import ProductDisplay from './display/ProductDisplay'
import ShoppingCardDisplay from './display/ShoppingCardDisplay'
import LoginDisplay from './display/LoginDisplay'
import RegisterDisplay from './display/RegisterDisplay'
import ProfileDisplay from './display/ProfileDisplay'
import ShippingDisplay from './display/ShippingDisplay'
import PaymentDisplay from './display/PaymentDisplay'
import PlaceOrderDisplay from './display/PlaceOrderDisplay'

const  App = ()=> {
  return (
    <BrowserRouter>
      <Header />
         <main className='py-2'> 
                <Container>
                  <Routes>
                  < Route path='/login' element={<LoginDisplay/>}  />  
                  < Route path='/shipping' element={<ShippingDisplay/>}  /> 
                  < Route path='/payment' element={<PaymentDisplay/>}  /> 
                  < Route path='/placeorder' element={<PlaceOrderDisplay/>}  /> 
                  < Route path='/register' element={<RegisterDisplay/>}  />  
                  < Route path='/profile' element={<ProfileDisplay/>}  />  
                  < Route path='/product/:id' element={<ProductDisplay/>}  /> 
                  < Route path='/' element={<MainDisplay/>} exact />  
                  < Route path='/product/:id' element={<ProductDisplay/>}  /> 
                  < Route path='/shopping-cart/:id' element={<ShoppingCardDisplay/>}  /> 
                  < Route path='/shopping-cart/' element={<ShoppingCardDisplay/>}  /> 
                
                  </Routes>
                </Container>
          </main>
      
      <Footer />

   </BrowserRouter>
  );
}

export default App;
