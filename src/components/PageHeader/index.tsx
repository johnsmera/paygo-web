import React from 'react'
import { Button, PageHeader as AntdPageHeader } from 'antd'
import { Buttons } from './styles'

interface Props {
  title: string
  subtitle?: string
  back?: boolean
}

export const PageHeader: React.FC<Props> = ({
  title,
  subtitle,
  back,
  children,
}) => (
  <Buttons>
    <AntdPageHeader
      onBack={back ? () => window.history.back() : undefined}
      title={title}
      subTitle={subtitle}
      extra={children}
    />
  </Buttons>
)
