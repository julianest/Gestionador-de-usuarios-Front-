import React from 'react'

const CardCount = (props) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Registrados</h5>
              <span className="card-text">Cantidad de Clientes Registrados: <span className="card-text">{props.infoCount} </span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardCount