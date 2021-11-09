import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const footer = ({color}) => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col  className="text-center py-3 " >
                        Copyright &copy; <span style={{color}}> LΞICΛ </span>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default footer
