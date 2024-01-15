import React from 'react'
import './Footer.css';

import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Footer() {
  const obj=[ {
    title : "Learn React",
    subtitle:
    {
      title1:"Quick Start",
      title2:"Installation",
      title3:"Describe the UI",
      title4:"Adding Interactvity",
      title5:"Manage State",
      title6:"Escape Hatches"

    }
},
{
    title : "API",
    subtitle:
    {
      title1:"React APIs",
      title2:"React DOM APIs"
    }
}, 
{
    title : "Community",
    subtitle:
    {
      title1:"Code Of Conduct",
      title2:"Meet the Team",
      title3:"Docs Contribute ",
      title4:"Acknowledgements"
      

    }
  }, 
{
    title : "More",
    subtitle:
    {
      title1:"Blog",
      title2:"React Native",
      title3:"Privacy",
      title4:"Tearms"
      
    }
}]

  
  
  return (
 <section className='bg-dark p-3  bg-opacity py-5'>
        <Container>
            <Row className='shadow rounded text-white '>
            {/* <h3 className="my-4">Benifits of Learning </h3> */}
                    
                    {
                        obj.map((item, index)=>{
                            return<Col md >
                              <h5>{item.title}</h5>
                              <div><p>{item.subtitle.title1}</p></div>
                              <div><p>{item.subtitle.title2}</p></div>
                              <div><p>{item.subtitle.title3}</p></div>
                              <div><p>{item.subtitle.title4}</p></div>



                              </Col>

                            
                        })
                    }


            {/* <Col md className='text-white'>
              <p>abcd</p>
                    </Col>
                    <Col md>
              <p>abcd</p>
                    </Col>
                    <Col md>
              <p>abcd</p>
                    </Col> */}
            </Row>
        </Container>
        </section>
   
  )
}

export default Footer;

// const [count, setCount]=useState(1);
  // const add = () => {
  //   if(count<10){
  //     setCount(count + 1); }
  //    }
  // const sub = () => {
  //   if(count>0)
  //   { setCount(count -1); } 
  // }

   {/* <h1>{count}</h1>
  <button onClick={add} className="btn btn-outline-primary mx-2">add</button>
  <button onClick={sub}className='btn btn-outline-primary mx-2'>sub</button> */}