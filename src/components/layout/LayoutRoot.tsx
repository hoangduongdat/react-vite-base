import React from 'react'

import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { Sidebar } from './Sidebar'

interface LayoutRootProps {
    isDisplaySidebar?: boolean
    children: React.ReactNode
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ isDisplaySidebar = true, children }) => {
    return (
        <Layout>
            <Content>
                <Layout>
                    <Sidebar isDisplaySidebar={isDisplaySidebar} />
                    <Content className={`${isDisplaySidebar ? 'ml-[300px]' : 'ml-0'}`}>{children}</Content>
                </Layout>
            </Content>
        </Layout>
    )
}

export default LayoutRoot
