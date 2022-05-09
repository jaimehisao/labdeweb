import React from 'react'
import '../../css/App.css'
import HomeLayout from '../layout/Layout'
import { Row, Col } from 'antd'
import { Carousel } from 'antd'
import tareas from '../../assets/tareas.png'
import retos from '../../assets/retos.png'
import acts from '../../assets/acts.png'

const Home = () => {

  const contentStyle = {
    height: '480px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#2f38c5',
  };

  const MainBlock = () => (
    <div>

    <Carousel effect="fade">
      <div>
      <h3 style={contentStyle}><img src={tareas} alt="photo" class="center" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src={retos} alt="photo" class="center" /></h3>
      </div>
      <div>
      <h3 style={contentStyle}><img src={acts} alt="photo" class="center" /></h3>
      </div>
    </Carousel>

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