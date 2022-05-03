import React from 'react'
import '../../css/App.css'
import HomeLayout from '../layout/Layout'
import { Row, Col } from 'antd';

const Home = () => {

  const MainBlock = () => (
    <div>
      <Row justify="space-around">
        <Col className='activity-block' span={4}>TAREAS</Col>
        <Col className='activity-block' span={4}>ACTIVIDADES</Col>
        <Col className='activity-block' span={4}>PRESENTACIONES</Col>
      </Row>
    </div>
  )

  return (
     <HomeLayout>
       <MainBlock />
     </HomeLayout>
  )
}

export default Home