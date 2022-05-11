import React, {useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import UserContext from '../../contexts/UserContext'
import HomeLayout from '../layout/Layout'
import axios from 'axios'
import { Spin, List, message, Skeleton, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';

const config = { header: { "Content-Type": "application/json" } }

const FileList = () => {
    
    const { user, token } = useContext(UserContext)
    const { type } = useParams()

    const [loading, setLoading] = useState(false)
    const [ documents, setDocuments ] = useState([])

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
    }, [type])

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const fetchDocuments = async () => {
        const { data } = await axios.get(`/api/documents/filesByLevelAndType/${levels[user.level]}/${types[type.toUpperCase()]}`)
        await delay(1000)
        console.log(data)
        setDocuments(data.documents)
        setLoading(false)
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
                        title={<a href="https://ant.design">{item.fileName}</a>}
                        description={user.level}
                    />
                    <div>Content</div>
                    </List.Item>
                )}
                />
            </InfiniteScroll>
        </div>
    )
  
  
    return (
    <HomeLayout>
        <Spin spinning={loading}>
            <div>
                <DocumentList />
            </div>
        </Spin>
    </HomeLayout>
  )
}

export default FileList