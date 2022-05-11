import React, { useState, useRef } from 'react'
import HomeLayout from '../layout/LayoutAdmin'
import { Carousel } from 'antd'
import upload from '../../assets/upload.png'
import { Upload, Form, message, Button, Select, } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import axios from 'axios'

import { uploadFile } from '../../utils.js/uploadFile'

const contentStyle = {
    height: '480px',
    width: '1400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#2f38c5',
}

const config = { header: { "Content-Type": "application/json" } }


const Acts = () => {

    const [componentSize, setComponentSize] = useState('default')
    const tipo = useRef(null)
    const nivel = useRef(null)

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    }

    const onFinish = (values) => {
        console.log(nivel.current)
        console.log(tipo.current)
    }

    const handleUpload = async (e) => {
        console.log(e.file)

        if (tipo.current === null && nivel.current === null) {
            await uploadFile(e.file)
        }

        postFile()
    }

    const postFile = async () => {
        // USANDO AXIOS, REALIZAR EL "POST"
    }
    
    const MainBlockUpload = () => (
        <div>
    
        <Carousel effect="fade">
            <div>
                <h3 style={contentStyle}> <img src={upload} alt="" className="center" /></h3>
            </div>
        </Carousel>
        </div>
    )

    const UploadForm = () => (
        <Form
            labelCol={{ span: 4, }}
            wrapperCol={{ span: 14, }}
            layout="horizontal"
            initialValues={{ size: componentSize, }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
            onFinish={onFinish}
        >
            <Form.Item label="Nivel">
                <Select onChange={(e) => nivel.current = e} >
                    <Select.Option value="1">VIDEO JUEGOS</Select.Option>
                    <Select.Option value="2">PYTHON BASICO</Select.Option>
                    <Select.Option value="3">PYTHON INTERMEDIO</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="Tipo">
                <Select  onChange={(e) => tipo.current = e} >
                    <Select.Option value="1">RETO</Select.Option>
                    <Select.Option value="2">PRESENTACION</Select.Option>
                    <Select.Option value="3">ACTIVIDAD</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item>
                <Upload onChange={handleUpload}>
                    <Button>Select file</Button>
                </Upload>
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit" >Submit</Button>
            </Form.Item>
        </Form>
    )
    
    return (
        <HomeLayout>
            <MainBlockUpload />
            <UploadForm />
        </HomeLayout>
    )
}

export default Acts