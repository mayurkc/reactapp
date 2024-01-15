import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const obj=[ {
    title : "100% project based learning",
    subtitle : "We build more than 2 real world major projects in each language and don't worry that the project development..."
},
{
    title : "Live call supports",
    subtitle : "After joining our course you will get a lot of coding problems because our course is 100% project based..."
}, 
{
    title : "High chance of selection",
    subtitle : "If you will do hard works, And if you will be follow our instructions, High chance of selections..."
}, 
{
    title : "Video Access Timing",
    subtitle : "You can access our video 24x7 life time, Once you complete your registration..."
}]



 function Benifit1({data}) {
  return (
    <div className="d-flex">
            <div>
                <div className="me-3 mt-1">
                    <i class="fa-solid fa-check p-1 text-bg-secondary rounded-circle"></i>
                </div>
            </div>
            <div>
                <h5>{data.title}</h5>
                <p>{data.subtitle}</p>
            </div>
        </div>
  )
}

function Benifit() {
  return (
    <>
    <section className='bg-secondary p-3  bg-opacity py-5'>
        <Container>
            <Row className='bg-white shadow rounded '>
            <Col md>
            <h3 className="my-4">Benifits of Learning </h3>
                    
                    {
                        obj.map((item, index)=>{
                            return<Benifit1 data={item} key={index}/>
                        })
                    }
                
            </Col>
            <Col md>
                        <img src="web.png" alt="logo" className=" img-fluid w-75 d-block py-5 me-3" />
                    </Col>
            </Row>
        </Container>
    </section>
    
    </>  
)
}

export default Benifit;