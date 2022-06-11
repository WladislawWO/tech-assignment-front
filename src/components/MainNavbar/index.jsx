import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import {
  ClipboardIcon, ClsoeIcon, DashboardIcon, LogoutIcon, ProfileIcon,
} from '../../assets/icons';
import st from './styles.module.scss';
import { useAuth } from '../../contexts/auth';

export const menuList = [
  {
    title: 'Dashboard',
    link: '/',
    icon: <DashboardIcon className={st.icon} />,
  },
  {
    title: 'User Profile',
    link: '/user-profile',
    icon: <ProfileIcon className={st.icon} />,
  },
  {
    title: 'Table list',
    link: '/table-list',
    icon: <ClipboardIcon className={st.icon} />,
  },
];

export default function MainNavbar({ open, onClose }) {
  const location = useLocation();
  const { logout } = useAuth();

  const menuListExtended = useMemo(() => (
    [
      ...menuList,
      {
        title: 'Logout',
        link: '/login',
        icon: <LogoutIcon className={st.icon} />,
        action: logout,
      },
    ]
  ), []);

  return (
    <div className={cn(st.mainNavbarContainer, { [st.open]: open })}>
      <div className={st.header}>
        <div className={st.flexContainer}>
          <img alt="header-logo" className={st.headerLogo} src="https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2014/04/brainFacts-579411100-770x533-1-650x428.jpg" />
          <div className={st.title}>Intent IQ</div>
        </div>
        <ClsoeIcon className={st.closeIcon} onClick={onClose} />
      </div>

      <div className={st.menuListContainer}>
        {menuListExtended.map(({
          icon, title, link, action,
        }, i) => (
          <Link
            className={cn(st.menuItem, { [st.active]: location.pathname === link })}
            key={i}
            to={link}
            onClick={() => onClose(action)}
          >
            {icon}
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
}
