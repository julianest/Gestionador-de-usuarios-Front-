import React, { useState } from 'react';
import { ValidateFormHelper } from '../helpers/ValidateForm';
import { DeleteUsuariosService, GetUsuarioByIdService, UpdateUsuariosService } from '../services/usuarioApiServices';
import editarIcon from "../Img/edit-3.svg"
import guardarIcon from "../Img/save.svg"
import eliminarIcon from "../Img/trash-2.svg"
import { Button } from 'react-bootstrap';
import swal from 'sweetalert'
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

  function remove(id) {
    // if (!window.confirm("Esta seguro?")) return;

    async function activate() {
      await DeleteUsuariosService(id);
      props.refreshTable();
    }

    swal({
      title: "Esta seguro de eliminar este usuario?",
      text: "Una vez eliminado, no podra volver a recuperar la informacion eliminada!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          activate()
          swal("El usario fue eliminado!", {
            icon: "success",
          });
        } else {
          swal("Este dato No fue eliminado");
        }
      });
  }

  function update() {
    async function activate() {
      await UpdateUsuariosService(modelo.id, modelo);
      setIndexEdit(null);
      props.refreshTable();
    }

    if (!ValidateFormHelper(modelo)) {
      swal("Diligencie el formulario");
      return;
    }
    swal({
      title: "Esta seguro de actualizar este usuario?",
      text: "Si acepta la informacion sera actualizada!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          activate()
          swal("El usario fue Actualizado!", {
            icon: "success",
          });
        } else {
          swal("Este dato No fue Actualizado");
        }
      });

  }
  const [offset, setOffset] = useState(0);

  function pagination(tipo) {

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
      <div className="table-responsive">
        <table className="table table align-middle  table-sm table-striped " style={{ textAlign: "center" }}>
          <thead>
            <tr className="table-dark ">
              <th className="justify-content-center" >#</th>
              <th>NOMBRE</th>
              <th>TELEFONO</th>
              <th >CORREO</th>
              <th>FECHA DE NACIMIENTO</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item, index) => {
              return <tr key={index}>
                <td>{item.id}</td>
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
                  <div className="sm tdBtns" >
                    <Button variant="warning" className="buttons" size="sm" vertical="false" onClick={() => indexEdit === index ? update() : getOne(item.id, index)} >{
                      indexEdit === index ? <img src={guardarIcon} alt="guardar" /> : <img src={editarIcon} alt="editar" />
                    }

                    </Button>
                    <Button variant="danger" className="buttons" size="sm" onClick={() => remove(item.id)} >
                      <img src={eliminarIcon} alt="borrar" />
                    </Button>
                  </div>
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
      </div>
    </>
  )
}

export default Table;