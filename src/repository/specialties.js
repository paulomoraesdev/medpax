import {
  IconBone,
  IconBrain,
  IconEar,
  IconEye,
  IconHeartbeat,
  IconSalad,
  IconStethoscope,
  IconHorseToy,
  IconEmpathize,
  IconDroplet,
  IconWoman,
  IconLungs,
  IconVirus,
  IconBandage,
  IconVenus,
  IconPhysotherapist,
  IconDental,
  IconMoodHappy,
  IconPill,
  IconMessageCircle2
} from '@tabler/icons-react'

const ICON_SIZE = 18

export default [
  {
    key: 'cardiologia',
    title: 'Cardiologistas',
    icon: <IconHeartbeat size={ ICON_SIZE } />
  },
  {
    key: 'clinica-geral',
    title: 'Clínicos Gerais',
    icon: <IconStethoscope size={ ICON_SIZE } />
  },
  {
    key: 'dermatologia',
    title: 'Dermatologistas',
    icon: <IconBandage size={ ICON_SIZE } />
  },
  {
    key: 'fisioterapia',
    title: 'Fisioterapeutas',
    icon: <IconPhysotherapist size={ ICON_SIZE } />
  },
  {
    key: 'fonoaudiologia',
    title: 'Fonoaudiologistas',
    icon: <IconMessageCircle2 size={ ICON_SIZE } />
  },
  {
    key: 'ginecologia',
    title: 'Ginecologistas',
    icon: <IconVenus size={ ICON_SIZE } />
  },
  {
    key: 'infectologia',
    title: 'Infectologistas',
    icon: <IconVirus size={ ICON_SIZE } />
  },
  {
    key: 'mastologia',
    title: 'Mastologistas',
    icon: <IconWoman size={ ICON_SIZE } />
  },
  {
    key: 'neurologia',
    title: 'Neurologistas',
    icon: <IconBrain size={ ICON_SIZE } />
  },
  {
    key: 'nutricao',
    title: 'Nutricionistas',
    icon: <IconSalad size={ ICON_SIZE } />
  },
  {
    key: 'odontologia',
    title: 'Dentistas',
    icon: <IconDental size={ ICON_SIZE } />
  },
  {
    key: 'oftalmologia',
    title: 'Oftalmologistas',
    icon: <IconEye size={ ICON_SIZE } />
  },
  {
    key: 'ortopedia',
    title: 'Ortopedistas',
    icon: <IconBone size={ ICON_SIZE } />
  },
  {
    key: 'otorrinolaringologia',
    title: 'Otorrinos',
    icon: <IconEar size={ ICON_SIZE } />
  },
  {
    key: 'pediatria',
    title: 'Pediatras',
    icon: <IconHorseToy size={ ICON_SIZE } />
  },
  {
    key: 'pneumologia',
    title: 'Pneumologistas',
    icon: <IconLungs size={ ICON_SIZE } />
  },
  {
    key: 'proctologia',
    title: 'Proctologistas',
    icon: <IconEmpathize size={ ICON_SIZE } />
  },
  {
    key: 'psicologia',
    title: 'Psicólogos',
    icon: <IconMoodHappy size={ ICON_SIZE } />
  },
  {
    key: 'psiquiatria',
    title: 'Psiquiatras',
    icon: <IconPill size={ ICON_SIZE } />
  },
  {
    key: 'urologia',
    title: 'Urologistas',
    icon: <IconDroplet size={ ICON_SIZE } />
  },
]