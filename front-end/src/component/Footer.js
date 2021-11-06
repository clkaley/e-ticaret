import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const footer = ({color,size}) => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col  className="text-center py-3 " >
                        Copyright &copy; <span style={{color,size}}> LΞICΛ </span>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default footer
