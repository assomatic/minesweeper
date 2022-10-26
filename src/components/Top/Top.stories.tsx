import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Top, TopCompontentType } from './Top'

export default {
  title: 'TOP/TOP',
  component: Top,
} as Meta

const Template: Story<TopCompontentType> = (args) => <Top {...args} />

export const TopPanel = Template.bind({})
TopPanel.args = {
  children: 'MineSweeper',
  feature: 'Flag: ',
  firstAction: 'ctrl',
  secondAction: 'click',
}
