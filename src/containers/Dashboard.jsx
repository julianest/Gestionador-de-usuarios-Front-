import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Graphic2 from '../components/Graphic2';
import { GetUsuariosService, GetUsuariosReports } from '../services/usuarioApiServices';

const Dashboard = () => {
  const [dataRender, setDataRender] = useState([]);

  async function getAll() {
    const data = await GetUsuariosReports();
    console.log(data);
    setDataRender(data);
    setTimeout(() => {
      console.log(dataRender);
    }, 1000);
  }
  useEffect(() => {
    getAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);




  return (
    <>
    <h1>Dashboard</h1>
    <Container style={{width:"400px", height:"300px"}} >
    <Graphic2/>
    </Container>
    </>
  )
}

export default Dashboard;
