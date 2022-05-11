import React from 'react'
import '../../css/App.css'
import HomeLayout from '../layout/LayoutAdmin'
import { Carousel } from 'antd'
import { Row, Col } from 'antd'
import subir from '../../assets/subir.png'
import verarch from '../../assets/verarch.png'
import vertodo from '../../assets/vertodo.png'

const Home = () => {

  const contentStyle = {
    height: '480px',
    width: '1400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#2f38c5',
  };

  const MainBlockAdmin = () => (
    <div>

    <Carousel effect="fade">
          <div>
          <h3 style={contentStyle}><img src={subir} alt="" class="center" /></h3>
          </div>
          <div>
            <h3 style={contentStyle}><img src={verarch} alt="photo" class="center" /></h3>
          </div>
          <div>
          <h3 style={contentStyle}><img src={vertodo} alt="photo" class="center" /></h3>
          </div>
        </Carousel>

      <Row justify="space-around">
        <Col className='activity-block' span={5}>SUBIR ARCHIVOS</Col>
        <Col className='activity-block' span={5}>VISUALIZAR ARCHIVOS</Col>
        <Col className='activity-block' span={5}>ELIMINAR ARCHIVOS</Col>
      </Row>
    </div>
  )

  return (
    <HomeLayout>
      <MainBlockAdmin />
    </HomeLayout>
  )

}

export default Home