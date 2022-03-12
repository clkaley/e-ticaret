import React ,{useEffect}from 'react'
import{Link} from 'react-router-dom'
import {Table,Button,Row,Col} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../component/Message.js'
import Loader from '../component/Loader.js'
import {listProduct,deleteProduct,createProduct} from '../action/productAction'
import { useNavigate } from 'react-router';
import { PRODUCT_CREATE_RESET } from '../constant/productConstant.js'

const ProductListDisplay = ({history}) => {


    const dispatch =useDispatch()

    const productList=useSelector(state=>state.productList)
    const {loading,error,products}=productList


    const productDelete=useSelector(state=>state.productDelete)
    const {loading:loadingDelete,
           error:errorDelete,
           success:successDelete}=productDelete

    const productCreate=useSelector(state=>state.productCreate)
    const {loading:loadingCreate,
            error:errorCreate,
            success:successCreate,
            product:createdProduct}=productCreate
           

    const userLogin=useSelector(state=>state.userLogin)
    const {userInfo}=userLogin


    const navigate = useNavigate();



    useEffect(()=>{
        dispatch({
            type:PRODUCT_CREATE_RESET
        })


        if(!userInfo.isAdmin){
           
            navigate('/login')
        }

        if(successCreate){
            navigate(`/admin/product/${createdProduct._id}/edit`)
        }else{
            dispatch(listProduct())
        }
    },[dispatch,history,userInfo,successDelete,successCreate,createdProduct])



    //ürün silme
    const deleteHandler= ( id )=>{
        //console.log('delete');
        if(window.confirm("Are you Sure Delete")){
            dispatch(deleteProduct(id))
        }
    }



    //ürün ekleme
    const createProductHandler=()=>{
        dispatch(createProduct())
    }

  return (
    <>
    <Row className='align-items-center'>
        <Col>
            <p className='my-4 text-muted  text-center' style={{fontSize:'25px' ,fontWeight:'bold'}}>PRODUCTS</p>
        </Col>
    <Row>
        <Col className='text-end'>
            <Button 
            className='my-3 btn btn-danger'
            onClick={createProductHandler}>
              Create Product 
              {/* <i className='fas fa-plus'></i>  */}
            </Button>
        </Col>
    </Row>
    </Row>
    {loadingDelete && <Loader />}
    {errorDelete && <Message variant='danger'>{errorDelete}</Message>}


    {loadingCreate && <Loader />}
    {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

        
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>: (
            <Table bordered  hover responsive className='table-sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product=>(
                        <tr key={product._id}>
                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>{product.brand}</td>
                        <td>
                            {/* burda editleme için kullanıcının admin olduğunu onaylıyoruz. */}
                            <Link to={`/admin/product/${product._id}/edit`}>
                           <Button variant='light' className='btn-sm'>
                                    <i className='fas fa-edit'>
                                    </i>
                                 </Button>  
                            </Link>
                                <Button variant='danger' className='btn-sm' onClick={()=>deleteHandler(product._id)}>
                                    <i className='fas fa-trash'>
                                    </i>
                                </Button>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )}

    </>
  )
}

export default ProductListDisplay