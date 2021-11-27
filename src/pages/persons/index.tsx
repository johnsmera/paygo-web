import type { NextPage } from 'next'
import Link from 'next/link'
import { DownloadOutlined, PlusOutlined } from '@ant-design/icons'

import DefaultLayout from '../../layouts/DefaultLayout'
import { PageHeader } from '../../components/PageHeader'
import { Button } from '../../components/Button'
import { Table } from '../../components/Table'

const Person: NextPage = () => {
  return (
    <DefaultLayout
      header={
        <PageHeader
          title="Pessoas"
          subtitle="Fornecedores, clientes e afins"
          back
        >
          <Button key="2">
            <DownloadOutlined />
            Exportar CSV
          </Button>

          <Link href="/persons/create">
            <Button key="1" type="primary">
              <PlusOutlined />
              Nova pessoa
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
          },
          {
            title: 'Tipo',
            dataIndex: 'type',
          },
        ]}
        data={[
          {
            key: '1',
            name: 'John Brown',
            type: 'Jurídica',
          },
          {
            key: '2',
            name: 'Jim Green',
            type: 'Física',
          },
          {
            key: '3',
            name: 'Joe Black',
            type: 'Jurídica',
          },
          {
            key: '4',
            name: 'Jim Red',
            type: 'Jurídica',
          },
          {
            key: '5',
            name: 'John Brown',
            type: 'Jurídica',
          },
          {
            key: '6',
            name: 'Jim Green',
            type: 'Física',
          },
          {
            key: '7',
            name: 'Joe Black',
            type: 'Jurídica',
          },
        ]}
      />
    </DefaultLayout>
  )
}

export default Person
