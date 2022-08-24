import React, { useEffect, useState } from 'react'
import Table from '../components/Table';
import { GetUsuariosService } from '../services/usuarioApiServices';

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

  function handleChange(e){
    let varBuscar = e.target.value;
    if(varBuscar.length > 3){
      getAll(varBuscar)
    }
    console.log(e)


  }

  return (
    <>
      <span><input type="search" placeholder="Buscar" onChange={(e)=>handleChange(e)} />
        <button>Buscar</button></span>
      <Table data={dataRender} refreshTable={(e) => getAll(null, e)} />
    </>
  )
}
export default Clientes;
