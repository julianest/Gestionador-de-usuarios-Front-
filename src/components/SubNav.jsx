import React from 'react'
import { Container } from 'react-bootstrap';
import "../styles/App.css"

const SubNav = (props) => {
  return (
    <>
    <Container fluid className="subNav">
    <h1 className="title_subNav">{props.title}</h1>
    </Container>
    </>
  )
}

export default SubNav