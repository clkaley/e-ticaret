import React from 'react'
import { Card, CardImg } from 'react-bootstrap'

const Product = ({product}) => {
    return (
        <Card className='my-3 py-3 rounded'>
            <a href={`/product/${product.id}`}></a>
            <Card.Img src={product.image} variant='top' />
        </Card>
    )
}

export default Product
