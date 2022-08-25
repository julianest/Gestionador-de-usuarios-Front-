import { Container } from 'react-bootstrap';
import CarouselP from '../../components/CarouselP';
import FormP from '../../components/FormP';
import SubNav from '../../components/SubNav';
import './home.css';


function Home() {

  return (
    <>
      <SubNav title={"Registro"} />
      <Container fluid className="cont-registro">

        <Container className="cont-form-carou" id="home-cont1">
          <FormP style={{width: "100%"}}  />
        </Container>

        <Container className="cont-form-carou" id="home-cont2">
          <CarouselP />
        </Container>

      </Container>
      <div className='fondo1' style={{backgroundColor: "var(--c1)"}}></div>
    </>
  );
}

export default Home;
