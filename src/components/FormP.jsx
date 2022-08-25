import React, { useState } from 'react';
import { ValidateFormHelper } from '../helpers/ValidateForm';
import { CreateUsuariosService} from '../services/usuarioApiServices';
import '../containers/home/home.css';

function FormP() {
  // eslint-disable-next-line no-unused-vars
  const [modelo, setModelo] = useState({
    id: null,
    nombre: "",
    telefono: "",
    correo: "",
    fnacimiento: new Date(),
  });


  async function create() {
    if (!ValidateFormHelper(modelo)) {
      alert("Llene el formulario");
      return;
    }
    await CreateUsuariosService(modelo);
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
  }

  return (
    <div className="card mb-4">
      <div className="card-header">
        <h5>Registrate</h5> 
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="text" placeholder="Nombre" name="nombre"
                id="nombre"
                defaultValue={modelo.nombre}
                onChange={(e) => modelo.nombre = e.target.value}
                className="form-control" required />
            </div>

            <div className="col">
              <label htmlFor="telefono" className="form-label">Telefono</label>
              <input type="tel" placeholder="Telefono" name="telefono"
                id="telefono"
                defaultValue={modelo.telefono}
                onChange={(e) => modelo.telefono = e.target.value}
                className="form-control" required />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="correo" className="form-label">Correo</label>
              <input type="email" placeholder="correo" name="correo"
                id="correo"
                defaultValue={modelo.correo}
                onChange={(e) => modelo.correo = e.target.value}
                className="form-control" required />
            </div>

            <div className="col">
              <label htmlFor="fnacimiento" className="form-label">fecha de nacimiento</label>
              <input type="date" placeholder="fecha de nacimiento" name="fnacimiento"
                id="fnacimiento"
                defaultValue={modelo.fnacimiento}
                onChange={(e) => modelo.fnacimiento = e.target.value}
                className="form-control" required />
            </div>
          </div>

          <div className="col">
            <div style={{ marginTop: '30px' }}>
              <button onClick={create} className="btn btn-primary">Guardar</button>
            </div>
          </div>
        </form>
      </div >
    </div >

  )
}

export default FormP;