import React from 'react'
import { Container } from 'react-bootstrap';
import Graphic2 from '../components/Graphic2';


const Dashboard = () => {

  return (
    <>
      <h1>Dashboard</h1>
      <Container style={{ width: "400px", height: "300px" }} >
        <Graphic2 />
      </Container>
    </>
  )
}

export default Dashboard;
