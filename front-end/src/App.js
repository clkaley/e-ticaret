import {Container} from 'react-bootstrap'
import Header from './component/Header'
import Footer from './component/Footer'
import MainDisplay from './display/mainDisplay'


const  App = ()=> {
  return (
    <>
    <Header />
      <main className='py-2'> 
        <Container>
            <MainDisplay />
              
           
        </Container>
      </main>
    <Footer />
   </>
  );
}

export default App;
