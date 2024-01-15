import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

function Career() {
  return (
    <section className='bg-grey  bg-opacity py-5'>
        <Container>
            <Row py-4>
                <Col>               
                 <div className='img'>
                 <img src="pc.jpg" height="200"alt="3-image" className='img-fluid w-70'/>
                 </div>
                </Col>     
                
                <Col md>  
                <div className="rounded bg-secondary bg-opacity-10 p-5 mt-2 shadow">
                        <i class="fa-solid fa-chart-simple fs-2"></i>
                        <div>
                            <h1 className='py-4'>IT Solution</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, itaque corrupti molestiae maxime maiores ut dolores ipsam perferendis perspiciatis, pariatur numquam sunt ullam minus, qui nesciunt accusamus quis expedita.
                            </p>
                        </div>
                </div>  
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Career;