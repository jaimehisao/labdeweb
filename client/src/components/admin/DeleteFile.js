import React from 'react'
import HomeLayoutAdmin from '../layout/LayoutAdmin'
import { Carousel } from 'antd'

const DeleteFile = () => {

    const contentStyle = {
        height: '480px',
        width: '1400px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#2f38c5',
    };

    const MainBlockDel = () => (
        <div>
    
        <Carousel effect="fade">
            <div>
                <h3 style={contentStyle}>Aquí se deben ver los archivos</h3>
            </div>
        </Carousel>
        </div>
      )

    return (
        <HomeLayoutAdmin>
            <MainBlockDel />
        </HomeLayoutAdmin>
    )
}

export default DeleteFile