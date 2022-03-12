import React ,{useEffect}from 'react'
import{Link} from 'react-router-dom'
import {Table,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../component/Message.js'
import Loader from '../component/Loader.js'
import {listUsers,deleteUser} from '../action/userAction'
import { useNavigate } from 'react-router';

const UserListDisplay = ({history}) => {
    const dispatch =useDispatch()
    const userList=useSelector(state=>state.userList)
    const {loading,error,users}=userList


    const userLogin=useSelector(state=>state.userLogin)
    const {userInfo}=userLogin


    const userDelete=useSelector(state=>state.userDelete)
    const {success:successDelete}=userDelete



    const navigate = useNavigate();

    useEffect(()=>{
        if(userInfo && userInfo.isAdmin){
            dispatch(listUsers())
        }
        else{
           // history.push('/login')
           navigate('/login')
        }
    },[dispatch,history,successDelete,userInfo])

    const deleteHandler= ( id )=>{
        //console.log('delete');
        if(window.confirm("Are you Sure this user Delete")){
            console.log(id);
        dispatch(deleteUser( id ))
        }
    }

  return (
    <>
        <p className='my-4 text-muted  text-center' style={{fontSize:'25px' ,fontWeight:'bold'}}>USERS</p>
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>: (
            <Table bordered  hover responsive className='table-sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user=>(
                        <tr key={user._id}>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                        <td>{user.isAdmin ? (<p className='text-center'><i className='fas fa-check ' style={{color:'green'}}></i></p>): (
                            <p className='text-center'><i className='fas fa-times' style={{color:'red'}}></i></p>
                        )}</td>
                        <td>
                            {/* burda editleme için kullanıcının admin olduğunu onaylıyoruz. */}
                            <Link to={`/admin/user/${user._id}/edit`}>
                           <Button variant='light' className='btn-sm'>
                                    <i className='fas fa-edit'>
                                    </i>
                                 </Button>  
                            </Link>
                                <Button variant='danger' className='btn-sm' onClick={()=>deleteHandler(user._id)}>
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

export default UserListDisplay