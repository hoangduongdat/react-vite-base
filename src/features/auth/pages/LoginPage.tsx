import { Col, Layout, Row } from 'antd'
import React from 'react'

const LoginPage: React.FC = () => {
    return (
        <Layout>
            <Row className='w-full h-full bg-black'>
                <Col span={12}>left</Col>
                <Col span={12}>right</Col>
            </Row>
        </Layout>
    )
}

export default LoginPage
