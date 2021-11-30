import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './component/Header'
import Footer from './component/Footer'
import MainDisplay from './display/MainDisplay'
import ProductDisplay from './display/ProductDisplay'

const  App = ()=> {
  return (
    <BrowserRouter>
      <Header />
         <main className='py-2'> 
                <Container>
                  <Routes>
                  < Route path='/' element={<MainDisplay/>} exact />  
                  < Route path='/product/:id' element={<ProductDisplay/>}  />  
                  </Routes>
                </Container>
          </main>
      
      <Footer />

   </BrowserRouter>
  );
}

export default App;
