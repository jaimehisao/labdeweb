import React from 'react'

import { Form, Input, Button, Layout, Row, Col } from 'antd';

const { Header, Footer, Content } = Layout;

const Login = () => {

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
                Submit
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