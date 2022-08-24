import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Graphic2 from '../components/Graphic2';
import { GetUsuariosReports } from '../services/usuarioApiServices';

const Dashboard = () => {
  const [dataRender, setDataRender] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetUsuariosReports();
      setDataRender(data);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(dataRender);




  return (
    <>
      <h1>Dashboard</h1>
      <Container style={{ width: "400px", height: "300px" }} >
        <Graphic2 />
      </Container>
      {/* {
        dataRender.map((dato, index)=>(
          <div key={index}>
          <h1>{dato.nombre}</h1>
          </div>
         ) )
      } */}
    </>
  )
}

export default Dashboard;
