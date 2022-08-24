// import React, { useEffect, useState } from "react";
// import { GetUsuariosService } from "../services/usuarioApiServices";

// const useInitialState = () => {
//   const [dataRender, setDataRender] = useState([]);

//   async function getAll() {
//     const data = await GetUsuariosService();
//     console.log(data);
//     console.log("entre");
//     setDataRender(data);
//     setTimeout(() => {
//       console.log(dataRender);
//     }, 1000);
//   }

//   useEffect(() => {
//     getAll();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return <div>useInitialState</div>;
// };

// export default useInitialState;
