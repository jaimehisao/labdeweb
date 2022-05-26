import React, {useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import UserContext from '../../contexts/UserContext'
import HomeLayout from '../layout/LayoutAdmin'
import axios from 'axios'
import { Spin, List, Button, Alert, Skeleton, Divider, Row, Col, Select, Typography } from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component'

const config = { header: { "Content-Type": "application/json" } }
const { Title } = Typography

const DeleteFile = () => {

    const { user, token } = useContext(UserContext)

    const [loading, setLoading] = useState(false)
    const [documents, setDocuments] = useState([])
    const [nivel, setNivel] = useState(1)
    const [tipo, setTipo] = useState(1)
    const navigate = useNavigate()

    const levels = {
        "VIDEO JUEGOS" : "1",
        "PYTHON BASICO" : "2",
        "PYTHON INTERMEDIO" : "3",
    }
    
    const types = {
        "RETOS" : "1",
        "PRESENTACIONES" : "2",
        "ACTIVIDADES" : "3",
    }

    useEffect(() => {
        setLoading(true)
        fetchDocuments()
    }, [tipo, nivel])

    const fetchDocuments = async () => {
        setLoading(true)
        const { data } = await axios.get(`/api/documents/filesByLevelAndType/${nivel}/${tipo}`)
        // console.log(data)
        setDocuments(data.documents)
        setLoading(false)
    }

    const onDocumentClick = (id) => {
        navigate(`/documentoAdmin/${id}`)
    }

    const deleteFile = async (id) => {
        try {
          await axios.delete(`/api/documents/deleteDocumentByID/${id}`, {
        })
        } catch (error) {
          console.log('unable to delete file')
          console.error(error)
        } finally {
            fetchDocuments();
          }
      }

    const DocumentList = () => (
        <div
        id="scrollableDiv"
        style={{
            height: 400,
            overflow: 'auto',
            padding: '0 16px',
            border: '1px solid rgba(140, 140, 140, 0.35)',
        }}
        >
            <InfiniteScroll
                dataLength={documents.length}
                loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                endMessage={<Divider plain>  codekraft </Divider> }
                scrollableTarget="scrollableDiv"
            >
                <List
                dataSource={documents}
                renderItem={item => (
                    <List.Item key={item._id}>
                    <List.Item.Meta
                        title={<a onClick={(e) => onDocumentClick(item._id)}>{item.fileName}</a>}
                        description={user.level}
                    />
                    <Button onClick={() => deleteFile(item._id)}>Delete</Button>
                    </List.Item>
                )}
                />
            </InfiniteScroll>
        </div>
    )

    const Params = () => (
        <div>
             <Row>
                <Col span={12} align="center">
                    <Title level={4}> Nivel</Title>
                </Col>
                <Col span={12} align="center">
                    <Title level={4}> Tipo </Title>
                </Col>
            </Row>
            <Row>
                <Col span={12} align="center">
                    <Select 
                    defaultValue={`${nivel}`} 
                    onChange={(e) => setNivel(e)} 
                    placeholder="Nivel para el archivo"
                    >
                        <Select.Option value="1">VIDEO JUEGOS</Select.Option>
                        <Select.Option value="2">PYTHON BASICO</Select.Option>
                        <Select.Option value="3">PYTHON INTERMEDIO</Select.Option>
                    </Select>
                </Col>
                <Col span={12} align="center">
                    <Select 
                    defaultValue={`${tipo}`} 
                    onChange={(e) => setTipo(e)} 
                    placeholder="Nivel para el archivo"
                    >
                        <Select.Option value="1">RETO</Select.Option>
                        <Select.Option value="2">PRESENTACION</Select.Option>
                        <Select.Option value="3">ACTIVIDAD</Select.Option>
                    </Select>
                </Col>
            </Row>
        </div>
    )

    return (
        <HomeLayout>
            <Params/>
            <br/>
                {
                    loading
                    ? <Spin/>
                    :  <DocumentList/>
                }
        </HomeLayout>
    )
}

export default DeleteFile;