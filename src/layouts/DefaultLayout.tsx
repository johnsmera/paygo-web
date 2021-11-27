import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useState } from 'react'
import { Menu } from 'antd'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'
import {
  PieChartOutlined,
  GoldOutlined,
  TeamOutlined,
  DollarOutlined,
} from '@ant-design/icons'

import { Layout, Logo, Sidebar } from './styles'
import logo from '../assets/images/logo.png'

const { Content } = Layout

interface Props {
  header: any
}
const DefaultLayout: NextPage<Props> = ({ header, children }) => {
  const [menuCollapsed, setMenuCollapsed] = useState(true)
  const { asPath } = useRouter()
  const [deviceWidth, setDeviceWidth] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDeviceWidth(window.innerWidth)
    }
  }, [])

  return (
    <Layout>
      <Sidebar
        theme="dark"
        collapsible={deviceWidth > 600}
        width="230"
        collapsed={menuCollapsed}
        onCollapse={() => setMenuCollapsed(!menuCollapsed)}
      >
        <Logo>
          <Image src={logo} width={100} objectFit="contain" />
        </Logo>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[asPath.replace('/', '')]}
        >
          <Menu.Item key="" icon={<PieChartOutlined />}>
            <Link href="/">Dashboard</Link>
          </Menu.Item>

          <Menu.Item key="releases" icon={<DollarOutlined />}>
            <Link href="/releases">Lançamentos</Link>
          </Menu.Item>

          <Menu.Item key="accounts" icon={<GoldOutlined />}>
            <Link href="/accounts">Contas</Link>
          </Menu.Item>
          <Menu.Item key="persons" icon={<TeamOutlined />}>
            <Link href="/persons">Pessoas</Link>
          </Menu.Item>
        </Menu>
      </Sidebar>
      <Layout>
        {header}
        <Content style={{ padding: '0 1.6rem' }}>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default DefaultLayout
