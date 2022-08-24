import React, { useMemo } from 'react'
import { Container } from "react-bootstrap";
//Componentes Chart.js-2 react
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect } from 'react';
import { useState } from 'react';
import { GetUsuariosReports } from '../services/usuarioApiServices';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graphic2 = ({ data }) => {
  // console.log(data)
  const [dataRender, setDataRender] = useState([]);
  const scores = [];
  const labels = [];
  const [renderChart, setRenderChart] = useState()

  // let chartReference = {};

  async function getAll() {
    const data = await GetUsuariosReports();
    setDataRender(data);
    recorrerDatos();
  }

  useEffect(() => {
    getAll()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  function recorrerDatos() {
    for (const iterator of dataRender) {
      let dateInputFormatted = new Date(iterator.fnacimiento).toISOString().split('T')[0];
      scores.push(dateInputFormatted);
      labels.push(iterator.nombre);
    }
    setRenderChart({
      datasets: [
        {
          label: "Fechas de Nacimiento",
          data: scores,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
      labels
    })
    console.log(scores)
    console.log(labels)
  }

  // console.log(scores)
  // console.log(labels)

  // const scores = [6, 3, 8, 9, 2, 1, 6]; //Fechas de nacimiento eje y
  // const labels = [100, 200, 300, 400, 500]; //Nombres eje x

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


  return (
    <>
      <Container>
        <Bar data={renderChart} options={options}
        // ref = {(reference) => this.reference = reference} 
        />
      </Container>
    </>
  )
}

export default Graphic2