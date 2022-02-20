import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './component/Header'
import Footer from './component/Footer'
import MainDisplay from './display/MainDisplay'
import ProductDisplay from './display/ProductDisplay'
import ShoppingCardDisplay from './display/ShoppingCardDisplay'

const  App = ()=> {
  return (
    <BrowserRouter>
      <Header />
         <main className='py-2'> 
                <Container>
                  <Routes>
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
