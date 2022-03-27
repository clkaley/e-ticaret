import React, {useState}from 'react'
import{Form,Button,FormControl} from 'react-bootstrap'
import { useNavigate } from 'react-router';


const SearchBox = () => {
    //const [keyword ,setKeyword]=useState('')
    /*const [name, setName] = useState('');
    const navigate = useNavigate();

    const submitHandler=(e)=>{
    e.preventDefault();
    navigate(`/search/name/${name}`);
       
    }*/
    const [keyword ,setKeyword]=useState('')
    
    const navigate = useNavigate();

// navigate(`/search/keyword/${keyword}`)

    const submitHandler=(e)=>{
      //trim sağ ve soldaki boşluklardan kurtulmak için kullanılır.
      e.preventDefault()
      if(keyword.trim()){
        navigate(`/search/${keyword}`)
      }else{
        navigate('/')
      }
    }
    
  return (
    <>
    
    <Form 
      onSubmit={submitHandler} 
      className='d-flex mx-auto ' 
    >

        <FormControl 
        type='text' 
        name='q' 
        onChange={(e)=>setKeyword(e.target.value)}
        placeholder='Search'
        className='mr-sm-2 ml-sm-3 mx-3 '>
        </FormControl>


        <Button 
        type='submit' 
        variant='outline-secondary' 
        className='p-2'>
          Search
        </Button>
    </Form> 
    
    
    </>
  )
}

export default SearchBox