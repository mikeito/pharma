import { IconChecklist, IconLayoutDashboard } from '@tabler/icons-react';
import { UserCog, BadgeInfo, Users, ClipboardCheck, HandPlatter, LayoutDashboard } from 'lucide-react';

export interface NavLink {
  title: string;
  label?: string;
  href: string;
  icon?: JSX.Element;
}

export interface SideLink extends NavLink {
  sub?: NavLink[];
}

export const sidelinks: SideLink[] = [
  {
    title: 'Dashboard',
    label: '',
    href: '/dashboard',
    icon: <LayoutDashboard size={20} />,
  },

  {
    title: 'Users',
    label: '',
    href: '/dashboard/users',
    icon: <UserCog size={20} />,
  },
  {
    title: 'Organisations',
    label: '',
    icon: <Users size={20} />,
    href: '/dashboard/organisations',
  },
  {
    title: 'Drugs',
    label: '',
    href: '/dashboard/drugs',
    icon: <Users size={20} />,
  },
  {
    title: 'Reservations',
    label: '',
    href: '/dashboard/reservations',
    icon: <Users size={20} />,
  },
];
