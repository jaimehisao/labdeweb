import React from 'react'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const StudetLayout = ({children}) => {
  return (
    <Layout style={{minHeight:"100vh"}}>

        <Header>
          NAVBAR
        </Header>
        <Content>
            {children}
        </Content>
        <Footer>
            CodeKraft MX
        </Footer>
    </Layout>
  )
}

export default StudetLayout