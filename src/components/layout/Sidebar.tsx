import React, { useState } from 'react'
import { AccountBookFilled, LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'
import { Menu, MenuProps } from 'antd'
import Sider from 'antd/es/layout/Sider'

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined, AccountBookFilled].map(
    (icon, index) => {
        const key = String(index + 1)

        return {
            title: 'aaaaaaa',
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`
        }
    }
)

interface SidebarProps {
    isDisplaySidebar?: boolean
}

export const Sidebar: React.FC<SidebarProps> = ({ isDisplaySidebar: isDisplayMenu }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <Sider
            collapsed={collapsed}
            collapsible={true}
            onCollapse={() => setCollapsed((prev) => !prev)}
            width={300}
            className={`
                h-[100vh] !fixed left-0 bottom-0 top-0 overflow-auto no-scrollbar bg-red
                ${isDisplayMenu ? 'block' : 'hidden'}
            `}
        >
            <Menu mode='inline' defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} items={items2} />
        </Sider>
    )
}
