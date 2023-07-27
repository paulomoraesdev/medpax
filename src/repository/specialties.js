import {
  IconBrain,
  IconHeartbeat,
  IconStethoscope,
} from '@tabler/icons-react'

const ICON_SIZE = 18

export default [
  {
    key: 'clinica-geral',
    title: 'Clínicos Gerais',
    icon: <IconStethoscope size={ ICON_SIZE } />
  },
  {
    key: 'cardiologia',
    title: 'Cardiologistas',
    icon: <IconHeartbeat size={ ICON_SIZE } />
  },
  {
    key: 'neurologia',
    title: 'Neurologistas',
    icon: <IconBrain size={ ICON_SIZE } />
  }
]