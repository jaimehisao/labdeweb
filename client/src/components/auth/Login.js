import React, { useContext, useEffect, useState } from 'react'
import { Form, Input, Button, Layout, Row, Col, Alert } from 'antd'
import UserContext from '../../contexts/UserContext'
import { useNavigate } from "react-router-dom"
import { decodeToken } from "react-jwt";
import whitelogo from '../../assets/justTextWhite.png'
const { Header, Footer, Content } = Layout;

const Login = () => {
    const navigate = useNavigate()
    const { user, userType, handleLogin, setUser } = useContext(UserContext)
    const [error, setError] = useState(false)

    useEffect(() => {

      if (user) {
        userType === "ADMIN" ? navigate('/home/admin') : navigate('/home/student')
      }

    }, [])

    const onFinish = async (values) => {
        const data = await handleLogin(values)

        setError(false)

        if (data.success) {
          const decodedToken = decodeToken(data.token)
          console.log(decodedToken)
          decodedToken.userType === "ADMIN" ? navigate('/home/admin') : navigate('/home/student')
          
        } else if (data.success === false) {
            // setError('Failed to log in')
            setError(true)
        }
    }

    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        // ERROR TO RE-ENTER VALUES BECASUE MISSING
      };

    const LoginForm = () => (
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            
            style={{
              width: '500px',
            }}
          >
            <Form.Item
              label="Correo"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Favor de ingresar con su correo!',
                },
              ]}
            >
              <Input />
            </Form.Item>
      
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Favor de agregar su clave!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
      
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button onClick={() => navigate('/register')}>
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        );

  return (
        <div>
            <Layout style={{height:"100vh"}}>
                <Header style={{backgroundColor: "#2f39c5"}}>
                  {/* CODEKRAFT */}
                  <img src={whitelogo} alt = "Logo" width={150}/>
                </Header>
                <Content style={{paddingRight:120 }}>
                    <br/>
                    {
                      error === true && <Alert message="Credenciales Incorrectas" type="error" />
                    }
                    <br />
                    <Row type="flex" justify='space-evenly'>
                      <Col align='middle' >
                        <LoginForm />
                      </Col>
                    </Row>
                </Content>
                <Footer>
                  CodeKraft MX
                </Footer>
            </Layout>
        </div>
  )
}

export default Login