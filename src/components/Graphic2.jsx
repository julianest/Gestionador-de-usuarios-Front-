import React, { useMemo } from 'react'
import { Container } from "react-bootstrap";
//Componentes Chart.js-2 react
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graphic2 = () => {

  const scores = [6, 3, 8, 9, 2, 1, 6]; //Fechas de nacimiento
  const labels = [100, 200, 300, 400, 500]; //Nombres

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


  const data = useMemo(function () {
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
  }, []);

  return (
    <>
      <Container>
        <Bar data={data} options={options} />
      </Container>
    </>
  )
}

export default Graphic2