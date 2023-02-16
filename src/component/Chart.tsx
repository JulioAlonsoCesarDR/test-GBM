import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export default function Chart() {

  const [ dataChart, setDataChart] = useState<[]>([]);
  const [dataSelected, setdataSelected] = useState([])
  const [lengthData, setlengthData] = useState<number>(0);

  useEffect( () => {
    const consultData = async() =>{
      const url = "https://run.mocky.io/v3/cc4c350b-1f11-42a0-a1aa-f8593eafeb1e"
      const response = await fetch(url)
      const result = await response.json()
      const CleanData = result.map((data:any)=>{
        const object = {
          date: data.date,
          price: data.price
        }
        return object
      })
      setDataChart(CleanData)
    }
  consultData();
  }, [])

  useEffect(() => {
    const dataSelected = dataChart.slice(0, 800)
    setdataSelected(dataSelected)
   }, [lengthData])


   const formatDate = ()=> {
    const arrayDate: number[] = []
    dataSelected.forEach(element => {
      const d = new Date(element.date)
        let day = d.getHours();
        if(!arrayDate.includes(day)) {
          arrayDate.push(day)
        }
    });
    return arrayDate;
  }
  /* data of chart */
  const labels = formatDate();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Índice de Precios y Cotizaciones',
      },
    },
  };
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Costos',
        data: dataSelected.map(( data ) => data.price),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba( 255, 99, 132, 0.5)',
      },
    ],
  };

  const handleChangeLengthData = (e:any) => {
    setlengthData( Number(e.target.value))
  }

  return (
    <div className='container flex items-center justify-center h-50 w-50'>
      <Line options={options} data={data} />
      <div>
        <label htmlFor="select" className="">Selecciona una cantidad</label>
        <select id="select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          value={String(lengthData)} onChange={handleChangeLengthData}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>

      </select>
      </div>
    </div>
  );
}
