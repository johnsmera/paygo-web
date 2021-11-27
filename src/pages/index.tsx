import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  BankOutlined,
} from '@ant-design/icons'
import { Card, Col, Layout, Row, Statistic } from 'antd'
import type { NextPage } from 'next'
import { useState } from 'react'
import LineChart from '../components/LineChart'
import { PageHeader } from '../components/PageHeader'

import DefaultLayout from '../layouts/DefaultLayout'

const { Content } = Layout

const Home: NextPage = () => {
  return (
    <DefaultLayout
      header={<PageHeader title="Página inicial" subtitle="Dashboard" />}
    >
      <h1>Resumo total</h1>

      <div style={{ width: '100%', marginBottom: '0.8rem' }}>
        <Row gutter={16}>
          <Col md={8} xs={12}>
            <Card>
              <Statistic
                title="Entradas"
                value={127133.2388}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix={[<ArrowUpOutlined />, 'R$']}
              />
            </Card>
          </Col>
          <Col md={8} xs={12}>
            <Card>
              <Statistic
                title="Saídas"
                value={40155.26}
                precision={2}
                valueStyle={{ color: '#cf1322' }}
                prefix={[<ArrowUpOutlined />, 'R$']}
              />
            </Card>
          </Col>
          <Col md={8} xs={24}>
            <Card>
              <Statistic
                title="Saldo atual"
                value={71727.26}
                precision={2}
                valueStyle={{ color: '#078651' }}
                prefix={[<BankOutlined />, 'R$']}
              />
            </Card>
          </Col>
        </Row>
      </div>
      <h1>Movimentação Mensal</h1>
      <Content
        className="site-layout-background"
        style={{
          display: 'flex',
          padding: 24,
          margin: 0,
          background: '#FFF',
          height: '60%',
        }}
      >
        <div style={{ width: '100%' }}>
          <LineChart />
        </div>
      </Content>
    </DefaultLayout>
  )
}

export default Home
