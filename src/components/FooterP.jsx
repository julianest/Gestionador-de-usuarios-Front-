import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/App.css"

const FooterP = () => {
  return (
    <>
      <footer>
        <div>
          <div className="cont-footer">
            <div className="container">
              <div className="row">
                <nav className="col-xs-12">
                  <ul className="breadcrumb">
                    <li><NavLink to="/co/es.html" className="links">PwC Colombia</NavLink></li>
                  </ul>
                </nav>
              </div>


              <div className="row">
                <div className="col-xs-12 col-sm-12 subMenuFooter">
                  <NavLink className="links" target="_blank" to="https://www.pwc.com/co/es/acerca-de-nosotros.html" aria-label="Acerca de Nosotros">Acerca de Nosotros</NavLink>

                  <NavLink className="links" style={{ marginLeft: "4%" }} target="blank" to="https://www.pwc.com/co/es/nuestros-servicios.html" aria-label="Nuestros servicios">Nuestros servicios</NavLink>
                </div>
              </div>


              <div className="row">
                <div className="col-xs-12  ">
                  <div className="cont-footer__disclaimer">

                    <div className="col-md-12">
                      <NavLink to="https://www.pwc.com/co/es" className="footer-logo"></NavLink>

                      <p>©&nbsp;2022  PwC. PricewaterhouseCoopers. PwC se refiere a las Firmas colombianas que hacen parte de la red global de PricewaterhouseCoopers International Limited, cada una de las cuales es una entidad legal separada e independiente. Todos los derechos reservados.</p>

                      <ul className="">
                        <li><NavLink to="https://www.pwc.com/co/es/privacidad.html" target="_blank" aria-label="Política de privacidad" className="links">Política de privacidad</NavLink></li>
                        <li><NavLink to="https://www.pwc.com/co/es/legal.html" target="_blank" aria-label="Términos legales" className="links">Términos legales</NavLink></li>
                        <li><NavLink to="/co/es/responsable-del-sitio.html" target="" aria-label="Acerca del proveedor de este sitio" className="links">Acerca del proveedor de este sitio</NavLink></li>
                        <li><NavLink to="https://www.pwc.com/co/es/politica-de-tratamiento-de-datos-personales.html" target="_blank" aria-label="Política de tratamiento de datos personales" className="links">Política de tratamiento de datos personales</NavLink></li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}
export default FooterP;