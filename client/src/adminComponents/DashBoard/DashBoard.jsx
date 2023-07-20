import React, { useEffect } from 'react'
import PieChart from './PieChart'
import MyLineChart from './LineChart'
import styles from './DashBoard.module.css'


const DashBoard = () => {

  
  return (
    <div className={styles.container}>
        <h1>TABLERO</h1>
        <div>
          <PieChart/>
        </div>
        <div>
          <MyLineChart/>
        </div>
    </div>
  )
}

export default DashBoard