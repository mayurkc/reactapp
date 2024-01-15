import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Compo() {

  const data =[
    {icon:"fa-solid fa-house",
    title:"Full Cource",
    subtitle:"24 Hource Support" },
  {icon:"fa-solid fa-house",
  title:"Full Cource",
  subtitle:"24 Hource Support"},
  {icon:"fa-solid fa-house",
  title:"Full Cource",
  subtitle:"24 Hource Support"},
  {icon:"fa-solid fa-house",
  title:"Full Cource",
  subtitle:"24 Hource Support"},
  {icon:"fa-solid fa-house",
  title:"Full Cource",
  subtitle:"24 Hource Support"}];

 const Column=({data})=>{
  return(
    <Col className='text-center p-5 shadow border me-4 my-4 mx-2'>
      <div className="icon-box py-5 px-3 rounded-circle border border-dark">
        <i className={data.icon} ></i>
      </div>
      <h2>{data.title}</h2>
      <p>{data.subtitle}</p>
      </Col>
  )

  }
  return (
    <>
    <Container>
      <Row>
      {
        data.map((item, index)=>
        {
          return <Column data={item} key={index}/>
        })
      }
     
      </Row>
    </Container>
    </>

  )
}

export default Compo