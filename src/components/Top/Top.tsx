import React, { FC } from 'react'
import styled from '@emotion/styled'

import { Legend, LegendProps } from './Legend'
import { GameName, GameNameProps } from './GameName'

export type TopCompontentType = LegendProps & GameNameProps

export const Top: FC<TopCompontentType> = ({ children, ...legendProps }) => (
  <Header>
    <GameName children={children} />
    <Legend {...legendProps} />
  </Header>
)

const Header = styled.header`
  text-align: center;
  position: relative;
  display: inline-block;
`
