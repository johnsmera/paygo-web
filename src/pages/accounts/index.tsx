import type { NextPage } from 'next'
import Link from 'next/link'
import { DownloadOutlined, PlusOutlined } from '@ant-design/icons'

import DefaultLayout from '../../layouts/DefaultLayout'
import { PageHeader } from '../../components/PageHeader'
import { Button } from '../../components/Button'
import { Table } from '../../components/Table'

const Account: NextPage = () => {
  return (
    <DefaultLayout
      header={
        <PageHeader title="Contas" subtitle="Bancos e afins" back>
          <Link href="/releases/create">
            <Button key="1" type="primary">
              <PlusOutlined />
              Nova conta
            </Button>
          </Link>
        </PageHeader>
      }
    >
      <Table
        pageSize={8}
        columns={[
          {
            title: 'Nome',
            dataIndex: 'name',
            responsive: ['md'],
          },
          {
            title: 'Saldo',
            dataIndex: 'amount',
            responsive: ['md'],
          },
          {
            title: 'Data Criação',
            dataIndex: 'created_at',
            responsive: ['md'],
          },
        ]}
        data={[
          {
            key: '1',
            name: 'Santander',
            amount: 32,
            created_at: '18/11/2021',
          },
          {
            key: '2',
            name: 'Nubank',
            amount: 42,
            created_at: '18/11/2021',
          },
          {
            key: '3',
            name: 'MercadoPago',
            amount: 32,
            created_at: '18/11/2021',
          },
          {
            key: '7',
            name: 'Carteira',
            amount: 32,
            created_at: '18/11/2021',
          },
          {
            key: '7',
            name: 'Poupança',
            amount: 32,
            created_at: '18/11/2021',
          },
        ]}
      />
    </DefaultLayout>
  )
}

export default Account
