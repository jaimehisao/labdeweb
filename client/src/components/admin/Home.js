import React from 'react'
import '../../css/App.css'
import HomeLayoutAdmin from '../layout/LayoutAdmin'
import { Carousel } from 'antd'
import { Row, Col } from 'antd'
import subir from '../../assets/subir.png'
import verarch from '../../assets/verarch.png'
import vertodo from '../../assets/vertodo.png'
import { useNavigate } from "react-router-dom"


const Home = () => {

  const contentStyle = {
    height: '480px',
    width: '1400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#2f38c5',
  };

    let navigate = useNavigate();
    const routeChangeUpload = () =>{
        let path = '/home/admin/upload';
        navigate(path);
    }

    const routeChangeShow = () =>{
        let path = '/home/admin/visualizeall';
        navigate(path);
    }

    const routeChangeDelete = () =>{
      let path = '/home/admin/delete';
        navigate(path);
    }

  const MainBlockAdmin = () => (
    <div>

    <Carousel effect="fade">
          <div>
          <h3 style={contentStyle}><img src={subir} alt="" className="center" /></h3>
          </div>
          <div>
            <h3 style={contentStyle}><img src={verarch} alt="photo" className="center" /></h3>
          </div>
          <div>
          <h3 style={contentStyle}><img src={vertodo} alt="photo" className="center" /></h3>
          </div>
        </Carousel>

      <Row justify="space-around">
          <Col className='activity-block' span={5} onClick={routeChangeUpload}>SUBIR ARCHIVOS</Col>
          <Col className='activity-block' span={5} onClick={routeChangeShow}>VISUALIZAR ARCHIVOS</Col>
          <Col className='activity-block' span={5} onClick={routeChangeDelete}>ELIMINAR ARCHIVOS</Col>
      </Row>
    </div>
  )

  return (
    <HomeLayoutAdmin>
      <MainBlockAdmin />
    </HomeLayoutAdmin>
  )

}

export default Home