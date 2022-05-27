import React, { useState, useRef, useContext } from 'react'
import HomeLayoutAdmin from '../layout/LayoutAdmin'
import axios from 'axios'
import { Carousel } from 'antd'
import upload from '../../assets/upload.png'
import { Upload, Form, message, Button, Select, } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import UserContext from '../../contexts/UserContext'

// import { uploadFile } from '../../utils.js/uploadFile'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../../firebase'

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

    const { token } = useContext(UserContext)

    const [componentSize, setComponentSize] = useState('default')
    const [fileUrl, setFileUrl] = useState(null)
    const [fileName, setFileName] = useState(null)
    const [tipo, setTipo] = useState(null)
    const [nivel, setNivel] = useState(null)

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    }

    const config = { headers: { Authorization: `Bearer ${token}` } }

    const onFinish = (values) => {

        const formData = {
            level: nivel,
            file: fileUrl,
            activityType: tipo,
            fileName: fileName
        }

        postFile(formData)
    }

    const handleUpload = async (e) => {
        if ( tipo !== null && nivel !== null && e.fileList[0].originFileObj.type == "application/pdf") {
            await uploadFile(e.fileList[0].originFileObj)
            setFileName(e.fileList[0].name)
        } else return 
    }

    const uploadFile = async (file) => {
        if (!file) return

        const fileToUpload = ref(storage, `documents/${file.name}`)
        
        const uploadTask = uploadBytesResumable(fileToUpload, file)
    
        uploadTask.on("state_changed", (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                // console.log(progress)
            }, (error) => console.log(error),
            () => {
                return getDownloadURL(uploadTask.snapshot.ref)
                .then(url => {
                    setFileUrl(url)
                })
            }
        )
    }

    const postFile = async (formData) => {
        const { data } =  await axios.post(`/api/documents/saveDocument`, formData, config)
        setFileName(null)
        setFileUrl(null)
        setNivel(null)
        setTipo(null)
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
                <Select 
                defaultValue={nivel} 
                onChange={(e) => setNivel(e)} 
                placeholder="Nivel para el archivo"
                >
                    <Select.Option value="1">VIDEO JUEGOS</Select.Option>
                    <Select.Option value="2">PYTHON BASICO</Select.Option>
                    <Select.Option value="3">PYTHON INTERMEDIO</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="Tipo">
                <Select 
                defaultValue={tipo} 
                onChange={(e) => setTipo(e)} 
                placeholder="Tipo del archivo"
                >
                    <Select.Option value="1">RETO</Select.Option>
                    <Select.Option value="2">PRESENTACION</Select.Option>
                    <Select.Option value="3">ACTIVIDAD</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item>
                {
                    ( tipo !== null && nivel !== null ) 
                    ?  <Upload onChange={handleUpload}> <Button icon={<UploadOutlined />} type="primary" > Selecciona Archivo </Button> </Upload>
                    :  <Button icon={<UploadOutlined />}> Selecciona nivel y tipo </Button>
                }
            </Form.Item>
            {
                fileName &&
                <label> {fileName} listo! </label>
            }
            <br/>
            <Form.Item >
                {
                    fileUrl 
                    ?  <Button type="primary" htmlType="submit" >Submit</Button>
                    :  <Button> Submit </Button>
                }
            </Form.Item>
        </Form>
    )
    
    return (
        <HomeLayoutAdmin>
            <MainBlockUpload />
            <UploadForm />
        </HomeLayoutAdmin>
    )
}

export default Acts