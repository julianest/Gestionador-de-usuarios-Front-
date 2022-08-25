import React, { useEffect, useState } from 'react'
import SubNav from '../../components/SubNav';
import Table from '../../components/Table';
import { GetUsuariosService } from '../../services/usuarioApiServices';
import {ListGroup, Card, Button} from 'react-bootstrap';
import buscarIcon from "../../Img/buscar.png";
import "./clientes.css"


const Clientes = () => {

  const [dataRender, setDataRender] = useState([]);

  async function getAll(search = "", offset = 0) {
    console.log(offset)
    const data = await GetUsuariosService(search, offset);
    setDataRender(data);
  }
  useEffect(() => {
    getAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChange(e) {
    let varBuscar = e.target.value;
    if (varBuscar.length > 3) {
      getAll(varBuscar)
    }
    console.log(e)


  }

  return (
    <>
      <SubNav title={"Clientes"} />
      

      <Card style={{ width: '18rem' }}>
      <Card.Header>Buscar</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item><span><input type="search" onChange={(e) => handleChange(e)} />
        <Button variant="info" className="buttons"><img src={buscarIcon} alt="buscar" className='icons'/></Button></span></ListGroup.Item>

      </ListGroup>
    </Card>



      <Table data={dataRender} refreshTable={(e) => getAll(null, e)} />

      <div className='fondo1' style={{ backgroundColor: "var(--c2)" }}></div>
    </>
  )
}
export default Clientes;
