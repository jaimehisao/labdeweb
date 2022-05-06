//Basic imports
import React from 'react'
import { Form, Input, Button, Layout, Row, Col } from 'antd';

//Routing imports
import { Outlet, Link } from "react-router-dom";


const { Header, Footer, Content } = Layout;

const Register = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
        // POST TO AXIOS LOGIN
        
        try {

        } catch (e) {
          // ERROR WRONG CREDENTIALS 

        }
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        // ERROR TO RE-ENTER VALUES BECASUE MISSING
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
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
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
                  message: 'Please input your password!',
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
                Register
              </Button>
              <Button>
              <li>
              <Link to="/">Return</Link>
              </li>
              </Button>
            </Form.Item>
          </Form>
        );

  return (
        <div>
            <Layout style={{height:"100vh"}}>
                <Header>
                  CODERKAFT
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