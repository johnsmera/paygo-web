import styled, { keyframes } from 'styled-components'

import { Layout as AntdLayout } from 'antd'

export const Layout = styled(AntdLayout)`
  min-height: 100vh;
  max-width: 100vw;
`

export const Logo = styled.div`
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: center;
  height: 66px;
`

export const Sidebar = styled(AntdLayout.Sider)`
  width: 300px;
`
