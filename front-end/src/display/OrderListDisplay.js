import React ,{useEffect}from 'react'
import{Link} from 'react-router-dom'
import {Table,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../component/Message.js'
import Loader from '../component/Loader.js'
import {listOrders} from '../action/orderAction.js'
import { useNavigate } from 'react-router';

const OrderListDisplay = ({history}) => {

    const dispatch =useDispatch()

    const orderList=useSelector(state=>state.orderList)
    const {loading,error,orders}=orderList


    const userLogin=useSelector(state=>state.userLogin)
    const {userInfo}=userLogin


    const navigate = useNavigate();

    useEffect(()=>{
        if(userInfo && userInfo.isAdmin){
           
            dispatch(listOrders())
        }
        else{
           // history.push('/login')
           navigate('/login')
        }
    },[dispatch,history,userInfo])



  return (
    <>
        <p className='my-4 text-muted  text-center' style={{fontSize:'25px' ,fontWeight:'bold'}}>ORDERS</p>
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>: (
            <Table bordered  hover responsive className='table-sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Paid</th>
                        <th>Delivered</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order=>(
                        <tr key={order._id}>
                        <td>{order._id}</td>
                        <td>{order.user && order.user.name}</td>
                        <td>{order.createdAt.substring(0,10)}</td>
                        <td>${order.totalPrice}</td>
                        <td>{order.isPaid ? ( order.paidAt.substring(0,10)): (
                           <i className='fas fa-times' style={{color:'red'}}></i>
                        )}</td>

                         <td>{order.isDelivered ? (<p className='text-center'> order.deliveredAt.substring(0,10)</p>): (
                            <p className='text-center'><i className='fas fa-times' style={{color:'red'}}></i></p>
                        )}</td>

                        <td>
                            {/* burda editleme için kullanıcının admin olduğunu onaylıyoruz. */}
                            <Link to={`/order/${order._id}/`}>
                           <Button variant='light' className='btn-sm'>
                                   Details
                                 </Button>  
                            </Link>
                           
                        </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )}

    </>
  )
}

export default OrderListDisplay