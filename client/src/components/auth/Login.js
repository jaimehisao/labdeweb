import React, { useContext, useEffect } from 'react'
import { Form, Input, Button, Layout, Row, Col } from 'antd'
import UserContext from '../../contexts/UserContext'
import { useNavigate } from "react-router-dom"
import { decodeToken } from "react-jwt";
const { Header, Footer, Content } = Layout;

const Login = () => {
    const navigate = useNavigate()
    const { user, userType, handleLogin, setUser } = useContext(UserContext)

    useEffect(() => {

      if (user) {
        userType === "ADMIN" ? navigate('/home/admin') : navigate('/home/student')
      }

    }, [])

    const onFinish = async (values) => {
        const data = await handleLogin(values)

        if (data.success) {
          const decodedToken = decodeToken(data.token)
          console.log(decodedToken)
          decodedToken.userType === "ADMIN" ? navigate('/home/admin') : navigate('/home/student')
          
        } else if (data.success === false) {
            // setError('Failed to log in')
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
          >
            <Form.Item
              label="Correo"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Favor de entrar con su correo!',
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
              <Button>
              <li>
                Sign Up
              </li>
              </Button>
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