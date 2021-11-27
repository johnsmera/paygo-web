import type { NextPage } from 'next'
import Link from 'next/link'
import { DownloadOutlined, PlusOutlined } from '@ant-design/icons'

import DefaultLayout from '../../layouts/DefaultLayout'
import { PageHeader } from '../../components/PageHeader'
import { Button } from '../../components/Button'
import { Table } from '../../components/Table'

const Release: NextPage = () => {
  return (
    <DefaultLayout
      header={
        <PageHeader title="Lançamentos" subtitle="Entradas e saídas" back>
          <Button key="2">
            <DownloadOutlined />
            Exportar CSV
          </Button>

          <Link href="/releases/create">
            <Button key="1" type="primary">
              <PlusOutlined />
              Novo lançamento
            </Button>
          </Link>
        </PageHeader>
      }
    >
      <Table
        pageSize={8}
        columns={[
          {
            title: 'Name',
            dataIndex: 'name',
          },
          {
            title: 'Age',
            dataIndex: 'age',
          },
          {
            title: 'Address',
            dataIndex: 'address',
          },
        ]}
        data={[
          {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
          },
          {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
          },
          {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
          },
          {
            key: '4',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
          },
          {
            key: '5',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
          },
          {
            key: '6',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
          },
          {
            key: '7',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
          },
          {
            key: '8',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
          },
          {
            key: '7',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
          },
          {
            key: '8',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
          },
          {
            key: '7',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
          },
          {
            key: '8',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
          },
        ]}
      />
    </DefaultLayout>
  )
}

export default Release
