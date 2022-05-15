//Basic imports
import React, { useContext } from 'react'
import { Form, Input, Button, Layout, Row, Col } from 'antd';
import UserContext from '../../contexts/UserContext'
import { useNavigate } from "react-router-dom"
import { decodeToken } from "react-jwt";

const { Header, Footer, Content } = Layout;

const Register = () => {
  const navigate = useNavigate()
  const { user, userType, handleSignup, setUser } = useContext(UserContext)

  const onFinish = async (values) => {
    const data = await handleSignup(values)

    if (data.success) {
      const decodedToken = decodeToken(data.token)
      console.log(decodedToken)
      decodedToken.userType === "ADMIN" ? navigate('/home/admin') : navigate('/home/student')
      
    } else if (data.success === false) {
        // setError('Failed to sign up')
    }
  }
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        // ERROR TO RE-ENTER VALUES BECASUE MISSING INFO
      };

    const RegisterForm = () => (
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
              label="Nombre"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Porfavor ingrese su nombre',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Porfavor ingresa tu correo electronico',
                },
              ]}
            >
              <Input />
            </Form.Item>
      
            <Form.Item
              label="Contraseña"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Porfavor ingresa tu contraseña',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Repeitr Contraseña"
              name="confPassword"
              rules={[
                {
                  required: true,
                  message: 'Porfavor ingrese la misma contraseña',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Escoja el Curso"
              name="level"
              rules={[
                {
                  required: true,
                  message: 'Porfavor escoja un curso',
                },
              ]}
            >
              <select>
              <option value="VIDEOJUEGOS">Videojuegos</option>
              <option selected value="PYTHON BASICO">Python Basico</option>
              <option value="PYTHON AVANZADO">Python Avanzado</option>
              </select>
            </Form.Item>
      
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >

                <Row type="flex" justify='space-evenly'>
                      <Col align='middle'>
                        <Button type="primary" htmlType="submit" >
                        Register
                        </Button>
                        <Button onClick={() => navigate('/')}>
                        Return
                        </Button>
                      </Col>
                    </Row>
            </Form.Item>
          </Form>
        );

  return (
        <div>
            <Layout style={{height:"100vh"}}>
                <Header>
                  CODEKRAFT
                </Header>
                <Content>
                    <br />
                    <Row type="flex" justify='space-evenly'>
                      <Col align='middle' >
                        <RegisterForm />
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

export default Register