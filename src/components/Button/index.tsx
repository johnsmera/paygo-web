import React from 'react'
import { Button as AntdButton } from 'antd'
import { FunctionComponent } from 'hoist-non-react-statics/node_modules/@types/react'

interface Props {
  type?: 'primary'
}

export const Button: React.FC<Props> = ({ children, ...rest }) => (
  <AntdButton {...rest}>{children}</AntdButton>
)
