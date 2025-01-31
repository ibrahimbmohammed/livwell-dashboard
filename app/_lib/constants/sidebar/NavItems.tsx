import DashBoardIcon from '@lib/icons/dashboard/sidebar/MainIcon';
import { ParentNavItem } from '@lib/types/molecules';
import { v4 as uuidv4 } from 'uuid';
import TimeIcon from '../../icons/dashboard/sidebar/People';
import LogIcon from '../../icons/dashboard/sidebar/PayrollIcon';
import SettingIcon from '../../icons/dashboard/sidebar/PaymentIcon';
import CalendarIcon from '../../icons/dashboard/sidebar/ProcurementIcon';

const NavItems: ParentNavItem[] = [
  {
    id: uuidv4(),
    type: 'navItem',
    name: 'Dashboard',
    path: '/dashboard',
    Icon: DashBoardIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    type: 'navItem',
    name: 'Inventory',
    path: '/dashboard/time',
    Icon: TimeIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    type: 'navItem',
    name: 'Calendar',
    path: '/dashboard/calendar',
    Icon: CalendarIcon,
    hasSubNavItems: false,
    subNavItems: [],
  },
  {
    id: uuidv4(),
    type: 'navItem',
    name: 'Log',
    path: '/dashboard/log',
    Icon: LogIcon,
    hasSubNavItems: false,
  },
  {
    id: uuidv4(),
    type: 'navItem',
    name: 'Settings',
    path: '/dashboard/settings',
    Icon: SettingIcon,
    hasSubNavItems: false,
  },
];

export default NavItems;
