import type { Meta, StoryObj } from '@storybook/react'
import { GovBRItem } from './GovBRItem.js'
import ImageIcon from '@mui/icons-material/Image';

const meta: Meta<typeof GovBRItem> ={
  title: 'GovBR/Item',
  component: GovBRItem
}

export default meta
type Story = StoryObj<typeof GovBRItem>

export const Default: Story = {
  args: {
    label: 'Item'
  }
}

export const withImage: Story = {
  args: {
    label: 'Item com imagem',
    image: <ImageIcon/>
  }
}