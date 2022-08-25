import React, { useEffect, useState } from 'react';
import { GetUsuariosReports } from '../services/usuarioApiServices';
import { Container } from 'react-bootstrap';
import CardCount from './CardCount';

//Componentes Chart.js-2 react
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      // beginAtZero: true,
      ticks: {
        callback: function (value, index) {
          return value === 0 ? '' : new Date(value).toLocaleDateString();
        }
      },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          return context.raw === 0 ? '' : new Date(context.raw).toLocaleDateString();
        }
      }
    },
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'GRAFICO DE BARRAS',
    },
  }
};

const labels = [];

function Chart2() {

  const [dataChart, setDataChart] = useState({
    labels,
    datasets: []
  });

  async function getReport() {
    const data = await GetUsuariosReports();
    buildChart(data);
  }

  function buildChart(dataService) {
    const labels = [];

    for (const iterator of dataService) {
      labels.push(iterator.nombre);
    }

    const objChart = {
      labels,
      datasets: [{
        label: 'Personas',
        data: labels.map((element) => getValueName(element, dataService)),
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }]
    };

    setDataChart(objChart);
  }

  function getValueName(element, arr) {
    for (let item of arr) {
      if (item.nombre === element){
        return new Date(item.fnacimiento).getTime();
      }
    }
    return 0;
  }

  useEffect(() => {
    getReport()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container className="cont_dahsboard">
        <Container >
          <CardCount infoCount={dataChart.labels.length} />
        </Container>
        <Container >
          <Bar options={options} data={dataChart} />
        </Container>
      </Container>
    </>
  )

}

export default Chart2;