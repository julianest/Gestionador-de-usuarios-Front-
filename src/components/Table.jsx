import React, { useState } from 'react';
import { ValidateFormHelper } from '../helpers/ValidateForm';
import { DeleteUsuariosService, GetUsuarioByIdService, UpdateUsuariosService } from '../services/usuarioApiServices';
import editarIcon from "../Img/edit-3.svg"
import guardarIcon from "../Img/save.svg"
import eliminarIcon from "../Img/trash-2.svg"
// import "../App.css";

function Table(props) {
  const [modelo, setModelo] = useState({
    id: null,
    nombre: "",
    telefono: "",
    correo: "",
    fnacimiento: new Date(),
  });
  const [indexEdit, setIndexEdit] = useState();

  async function remove(id) {
    if (!window.confirm("Esta seguro?")) return;
    await DeleteUsuariosService(id);
    props.refreshTable();
  }

  async function update() {
    if (!ValidateFormHelper(modelo)) {
      alert("Llene el formulario");
      return;
    }
    if (!window.confirm("Esta seguro de actualizarlo?")) return;
    await UpdateUsuariosService(modelo.id, modelo);
    setIndexEdit(null);
    props.refreshTable();

  }
  const[offset, setOffset]=useState(0);
  
  function pagination(tipo){
    
    if (tipo === 'next') {
      // if (view.reachedLimitNext) return;
      const newOffset = offset + 5; 
      
      setOffset(newOffset);
    }

    if (tipo === 'prev') {
      // if (view.reachedLimitPrev) return;
      const newOffset = offset > 5 ? offset - 5 : 0;
      setOffset(newOffset);
    }

    
    props.refreshTable(offset);
  }

  async function getOne(id, index) {
    const data = await GetUsuarioByIdService(id);
    setIndexEdit(index);
    console.log(data.fnacimiento)
    let dateInputFormatted = new Date(data.fnacimiento).toISOString().split('T')[0];
    data.fnacimiento = dateInputFormatted;
    console.log(data.fnacimiento)
    setModelo(data);
  }

  return (
    <>
    <table className="table table-striped colorTable">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>telefono</th>
          <th>correo</th>
          <th>Fecha de Nacimiento</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, index) => {
          return <tr key={index}>
            <td>{indexEdit === index ? <input type="text" placeholder="Nombre" name="nombre"
              id="nombre"
              defaultValue={modelo.nombre}
              onChange={(e) => modelo.nombre = e.target.value}
              className="form-control" required /> : item.nombre}</td>
            <td>{indexEdit === index ? <input type="tel" placeholder="Telefono" name="telefono"
              id="telefono"
              defaultValue={modelo.telefono}
              onChange={(e) => modelo.telefono = e.target.value}
              className="form-control" required /> : item.telefono}</td>
            <td>{indexEdit === index ? <input type="email" placeholder="correo" name="correo"
              id="correo"
              defaultValue={modelo.correo}
              onChange={(e) => modelo.correo = e.target.value}
              className="form-control" required /> : item.correo}</td>
            <td>{indexEdit === index ? <input type="date" placeholder="fecha de nacimiento" name="fnacimiento"
              id="fnacimiento"
              defaultValue={modelo.fnacimiento}
              onChange={(e) => modelo.fnacimiento = e.target.value}
              className="form-control" required /> : item.fnacimiento.split("T")[0]}</td>
            <td>
              <button onClick={() => indexEdit === index ? update() : getOne(item.id, index)} className="icon-button">{
                indexEdit === index ? <img src={guardarIcon} alt="editar" /> : <img src={editarIcon} alt="editar" />
              }

              </button>
              <button onClick={() => remove(item.id)} className="icon-button">
                <img src={eliminarIcon} alt="borrar" />
              </button>
            </td>
          </tr>
        })}
      </tbody>
    </table>

    <ul className="pagination justify-content-end">
        <li className="page-item">
          <button className="page-link" tabIndex="-1" onClick={() => pagination('prev')}>Anterior</button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={() => pagination('next')}>Siguiente</button>
        </li>
      </ul>
  </>
  )
}

export default Table;