import React from 'react'
import {Link} from 'react-router-dom'
import { Card, CardImg } from 'react-bootstrap'
import Rating from './Rating'


const Product = ({product}) => {
    return (
        <Card className='my-3 py-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <CardImg src={product.image} variant='top' />
            </Link>

            <Card.Body>
    
                    <Card.Title className='my-1'>
                        <h4>{product.name}</h4>
                    </Card.Title>
              
                    <Card.Text as='div' className='py-2'>      
                        <Rating className='py-2' value={product.rating } text={`  ${product.numReviews}  comments`} />
                    </Card.Text>

                    <Card.Text as='h3'>
                          ${product.price}
                    </Card.Text>


            </Card.Body>
        </Card>
    )
}

export default Product
