import React from 'react'
import { Card, CardImg } from 'react-bootstrap'
import Rating from './Rating'


const Product = ({product}) => {
    return (
        <Card className='my-3 py-3 rounded'>
            <a href={`/product/${product.id}`}>
                <CardImg src={product.image} variant='top' />
            </a>

            <Card.Body>
                
                    <Card.Title className='my-1'>
                        <h4>{product.name}</h4>
                    </Card.Title>
                
                    <Card.Text as='div' className='py-2'>
                        {/* <div className='my-4'>
                            {product.rating} from {product.total_comments} rewiews
                        </div> */}
                        <Rating className='py-2' value={product.rating } text={`  ${product.total_comments}  comments`} 
                           
                        />
                     
                    </Card.Text>

                    <Card.Text as='h3'>
                            {product.price}
                    </Card.Text>


            </Card.Body>
        </Card>
    )
}

export default Product
