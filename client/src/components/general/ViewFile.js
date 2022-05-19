import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import UserContext from '../../contexts/UserContext'
import HomeLayout from '../layout/Layout'
import axios from 'axios'
import { Spin } from 'antd'
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
        // setFile('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf')
        setLoading(false)
    }

    // file={{ url: file, httpHeaders: { 'X-CustomHeader': '40359820958024350238508234', "Access-Control-Allow-Origin": "*", crossOrigin: "anonymous" } }}

    const ShowPDF = () => (
        <Document 
            file={{ url: file, httpHeaders: {"Access-Control-Allow-Origin": "*"} }}
        />
    )

  return (
   <HomeLayout>
       <div>
           {
               loading
               ? <Spin/>
               : <ShowPDF/>
           }
       </div>
   </HomeLayout>
  )
}

export default ViewFile