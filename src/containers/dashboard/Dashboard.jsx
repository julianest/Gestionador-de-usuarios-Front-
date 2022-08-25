import React from 'react'
import { Container } from 'react-bootstrap';
import Chart2 from '../../components/Chart2';
import SubNav from '../../components/SubNav';
import "./dashboard.css"


const Dashboard = () => {

  return (
    <>
    <SubNav title={"Reportes"}/>
      <Container>
        <Chart2/>
      </Container>
      <div className='fondo1' style={{backgroundColor: "var(--c3)"}}></div>
    </>
  )
}

export default Dashboard;
