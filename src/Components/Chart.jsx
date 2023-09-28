import React from 'react'
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'

const BarChart = (props) => {
   
    
    
    const data = {
        labels:new Array(459).fill('x'),
        datasets:[
            {
                fill:true,
                label:"Data",
                data:props.chartData,
                borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
                borderWidth:2
            }
        ]
    }
  return (
    props &&
    <section>
        <Line data={data} />
    </section>
  )
}

export default BarChart