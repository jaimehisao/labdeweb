//Basic imports
import React from 'react'
import { Form, Input, Button, Layout, Row, Col } from 'antd';

//Routing imports
import { Outlet, Link } from "react-router-dom";

const { Header, Footer, Content } = Layout;

const Register = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
        // POST TO AXIOS REGISTER
        
        try {

        } catch (e) {
          // ERROR 

        }
      };
    
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
                <Row type="flex" justify='space-evenly'>
                      <Col align='middle'>
                        <Button type="primary" htmlType="submit" style={styles.button}>
                        Register
                        </Button>
                        <Button style={styles.button}>
                        <li>
                        <Link to="/">Return</Link>
                        </li>
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
                  CODERKRAFT
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

const styles = StyleSheet.create({

    button: {
        backgroundColor: '#5B9962',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-around'
      },

});

export default Register