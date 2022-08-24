// import { useContext } from 'react';
// import { UserContext } from '../routes/NavRoutes';
import { useEffect, useState } from 'react';
import FormP from '../components/FormP';
import Table from '../components/Table';
import { GetUsuariosService } from '../services/usuarioApiServices';
import '../styles/App.css';


function Home() {

  // const {dataRender} = useContext(UserContext)
  // console.log(dataRender)

  const [dataRender, setDataRender] = useState([]);

  async function getAll() {
    const data = await GetUsuariosService();
    console.log(data);
    console.log("entre");
    setDataRender(data);
    setTimeout(() => {
      console.log(dataRender);
    }, 1000);
  }
  // const initialState = useInitialState();
  // console.log(initialState)

  useEffect(() => {
    getAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <FormP />
    </>
  );
}

export default Home;
