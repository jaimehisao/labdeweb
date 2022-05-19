import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import UserContext from '../../contexts/UserContext'
import HomeLayout from '../layout/Layout'
import axios from 'axios'
import { Spin, Row, Col} from 'antd'
import { Document, Page, pdfjs } from "react-pdf"
import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from '../../firebase'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


const ViewFile = () => {
    
    const { id } = useParams()
    const { user, token } = useContext(UserContext)
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(true)

    const config = { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } }

    useEffect(() => {
        fetchDocument()
    }, [])

    const fetchDocument = async () => {

        const { data } = await axios.get(`/api/documents/documentByID/${id}`, config)
        setFile(`${data.document.file}`)
        
        getDownloadURL(ref(storage, `documents/${data.document.fileName}`))
        .then((url) => {
            const xhr = new XMLHttpRequest()
            xhr.responseType = 'blob'

            console.log(url)

            xhr.onload = (event) => {
                const blob = xhr.response
                setFile(blob)
                console.log(blob)
            }
            xhr.open('GET', url)
            xhr.send()

            setFile(url)

            const doc = document.getElementById('myPdf')
            doc.setAttribute('src', url)

        })
        .catch((error) => {
            // Handle any errors
        })

        setLoading(false)
    }

  return (
   <HomeLayout>
       <div>
           <Row justify="center" >
               <Col align="center" >
                {
                    loading
                    ? <Spin/>
                    : <embed id="myPdf" width="800px" height="2100px" />
                }
               </Col>
           </Row>
       </div>
   </HomeLayout>
  )
}

export default ViewFile