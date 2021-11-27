import React from 'react'
import { Empty, Table as AntdTable } from 'antd'

type Data = {
  key: string
  [key: string]: string | number
}
interface Props {
  data: Data[]
  columns: {
    title: string
    dataIndex: string
    [key: string]: string | string[]
  }[]
  emptyText?: string
  pageSize: number
}

export const Table: React.FC<Props> = ({
  data,
  columns,
  emptyText,
  pageSize,
}) => {
  return (
    <AntdTable
      locale={{
        emptyText: <Empty description={emptyText || 'Lista vazia'} />,
      }}
      pagination={{ pageSize }}
      columns={columns}
      dataSource={data}
    />
  )
}
