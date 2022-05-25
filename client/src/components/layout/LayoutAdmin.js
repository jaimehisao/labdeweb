import React, { useContext } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import UserContext from '../../contexts/UserContext'
import { useNavigate } from "react-router-dom"

const { 
  Header, 
  Footer,
  Content 
} = Layout;

const HomeLayoutAdmin = ({children}) => {

  const { handleLogout } = useContext(UserContext)
  const navigate = useNavigate()

  const menuFunctions = (val) => {

    if (val === 'home') {

      navigate('/home/admin')

    } else if (val === 'subir') {

      navigate('/home/admin/upload')

    } else if (val === 'ver') {

      navigate('/home/admin/visualizeall')
      
    } else if (val === 'eliminar') {

      navigate('/home/admin/delete')
      
    } else if (val === 'logout') {
      handleLogout()
    }

  }

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
                  onClick: (e) => { menuFunctions('home') }
                },
                {
                  key: "2",
                  label: `SUBIR`,
                  onClick: (e) => { menuFunctions('subir') }
                },
                {
                  key: "3",
                  label: `VER ARCHIVOS`,
                  onClick: (e) => { menuFunctions('ver') }
                },
                {
                  key: "4",
                  label: `ELIMINAR ARCHIVO`,
                  onClick: (e) => { menuFunctions('eliminar') }
                },
                {
                  key: "5",
                  label: `LOG OUT`,
                  style: { float: 'right'},
                  onClick: (e) => { menuFunctions('logout') },
                }

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

export default HomeLayoutAdmin