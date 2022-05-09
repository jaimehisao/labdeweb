import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';

const { 
  Header, 
  Footer,
  Content 
} = Layout;

const HomeLayout = ({children}) => {

  return (
    <Layout style={{minHeight:"100vh"}}>

        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>

          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items={     
              [
                {
                  key: "1",
                  label: `CODEKRAFT`,
                },
                {
                  key: "2",
                  label: `SUBIR`,
                },
                {
                  key: "3",
                  label: `VER TODO`,
                },
                {
                  key: "4",
                  label: `VER ARCHIVO`,
                },

              ]
          }
          />

        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{"USERNAME"}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 400 }}>
            {children}
          </div>

        </Content>
        <Footer>

            CodeKraft MX

        </Footer>
    </Layout>
  )
}

export default HomeLayout