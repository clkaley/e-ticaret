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
import OrderDisplay from './display/OrderDisplay'
import UserListDisplay from './display/UserListDisplay'
import UserEditDisplay from './display/UserEditDisplay'
import ProductListDisplay from './display/ProductListDisplay'
import ProductEditDisplay, {} from './display/ProductEditDisplay'
import OrderListDisplay from './display/OrderListDisplay'

const  App = ()=> {
  return (
    <BrowserRouter>
      <Header />
         <main className='py-2'> 
                <Container>
                  <Routes>
                  < Route path='/order/:id' element={<OrderDisplay/>}  />  
                  < Route path='/login' element={<LoginDisplay/>}  />  
                  < Route path='/shipping' element={<ShippingDisplay/>}  /> 
                  < Route path='/payment' element={<PaymentDisplay/>}  /> 
                  < Route path='/placeorder' element={<PlaceOrderDisplay/>}  /> 
                  < Route path='/register' element={<RegisterDisplay/>}  />  
                  < Route path='/profile' element={<ProfileDisplay/>}  />  
                  < Route path='/product/:id' element={<ProductDisplay/>}  /> 
                  < Route path='/' element={<MainDisplay/>} exact />  
                  < Route path='/search/:keyword' element={<MainDisplay/>} exact />  
                  < Route path='/product/:id' element={<ProductDisplay/>}  /> 
                  < Route path='/shopping-cart/:id' element={<ShoppingCardDisplay/>}  /> 
                  < Route path='/admin/userList' element={<UserListDisplay/>}  />
                  < Route path='/admin/user/:id/edit' element={<UserEditDisplay/>}  />
                  < Route path='/admin/productlist' element={<ProductListDisplay/>}  />
                  < Route path='/admin/product/:id/edit' element={<ProductEditDisplay/>}  />
                  < Route path='/admin/orderlist' element={<OrderListDisplay/>}  />
                  < Route path='/shopping-cart/' element={<ShoppingCardDisplay/>}  /> 
                
                  </Routes>
                </Container>
          </main>
      
      <Footer />

   </BrowserRouter>
  );
}

export default App;
