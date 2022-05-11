import React, { useContext } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import UserContext from '../../contexts/UserContext';

const { 
  Header, 
  Footer,
  Content 
} = Layout;

const HomeLayout = ({children}) => {

  const { handleLogout, user } = useContext(UserContext)

  const menuFunctions = (val) => {

    if (val === 'home') {

    } else if (val === 'tareas') {

    } else if (val === 'retos') {
      
    } else if (val === 'actividades') {
      
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
                  label: `TAREAS`,
                  onClick: (e) => { menuFunctions('tareas') },
                },
                {
                  key: "3",
                  label: `RETOS`,
                  onClick: (e) => { menuFunctions('retos') },
                },
                {
                  key: "4",
                  label: `ACTIVIDADES`,
                  onClick: (e) => { menuFunctions('actividades') },
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
            <Breadcrumb.Item>{ `${user.username} / ${user.level}` }</Breadcrumb.Item>
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