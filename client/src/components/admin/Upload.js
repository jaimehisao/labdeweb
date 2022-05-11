import React from 'react'
import HomeLayout from '../layout/LayoutAdmin'
import { Carousel } from 'antd'
import upload from '../../assets/upload.png'
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const Acts = () => {
    
    

    const contentStyle = {
        height: '480px',
        width: '1400px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#2f38c5',
    };
    
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
            }
        },
        };
    
    const MainBlockUpload = () => (
        <div>
    
        <Carousel effect="fade">
            <div>
                <h3 style={contentStyle}><img src={upload} alt="" class="center" /></h3>
            </div>
        </Carousel>
        
        <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>

        </div>
    )
    
    return (
        <HomeLayout>
            <MainBlockUpload />
        </HomeLayout>
    )
}

export default Acts