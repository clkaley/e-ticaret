import {Container} from 'react-bootstrap'
import Header from './component/Header'
import Footer from './component/Footer'


const  App = ()=> {
  return (
    <>
    <Header />
      <main className='py-2'> 
        <Container>
            <h1>hello</h1>
        </Container>
      </main>
    <Footer />
   </>
  );
}

export default App;
