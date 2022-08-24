import React, { useMemo } from 'react'
import { Container } from "react-bootstrap";
//Componentes Chart.js-2 react
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect } from 'react';
import { useState } from 'react';
import { GetUsuariosReports } from '../services/usuarioApiServices';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graphic2 = ({data}) => {
  // console.log(data)
  const [dataRender, setDataRender] = useState([]);
  const scores = [];
  const labels = [];

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetUsuariosReports();
      setDataRender(data);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
    for (const iterator of dataRender) {
      // console.log(iterator) 
      scores.push(iterator.nombre);          
  }
  for (const iterator of dataRender) {
    // console.log(iterator) 
    labels.push(iterator.fnacimiento);          
}


console.log(scores)




  // const scores = [6, 3, 8, 9, 2, 1, 6]; //Fechas de nacimiento
  
  // const labels = [100, 200, 300, 400, 500]; //Nombres

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Grafico de Barras',
      },
    },
    scales: {
      y: {
        min: 0,
      },
      x: {
        min: 0,
      },
    }
  }



  const datas = useMemo(function () {
    return {
      datasets: [
        {
          label: "Fechas de Nacimiento",
          data: scores,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
      labels

    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container>
        <Bar data={datas} options={options} />
      </Container>
    </>
  )
}

export default Graphic2