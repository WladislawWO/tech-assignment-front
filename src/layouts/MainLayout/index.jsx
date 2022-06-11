import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';
import { MenuIcon, ProfileIcon } from '../../assets/icons';
import Loader from '../../components/Loader';
import MainNavbar, { menuList } from '../../components/MainNavbar';
import SearchInput from '../../components/SearchInput';
import { useMainLayout } from './useMainLayout';
import st from './styles.module.scss';

export default function MainLayout({ children }) {
  const [openNavbar, setOpenNavbar] = useState(false);
  const { isAuthorized, userName, isLoading } = useMainLayout();
  const location = useLocation();

  const handleClose = (callback) => {
    if (typeof callback === 'function') {
      callback();
    }
    setOpenNavbar(false);
  };

  const hanldeOpen = () => {
    setOpenNavbar(true);
  };

  if (isLoading) return <Loader />;

  return (
    <div className={cn(st.mainLayoutContainer, { [st.authorized]: isAuthorized })}>
      {isAuthorized && <MainNavbar onClose={handleClose} open={openNavbar} />}
      <div>
        {isAuthorized && (
          <div className={st.header}>
            <MenuIcon className={st.menuIcon} onClick={hanldeOpen} />
            <div className={st.title}>
              {menuList.find((item) => item.link === location.pathname)?.title}
            </div>
            <div className={st.profileContainer}>
              <SearchInput placeholder="Search..." />
              <div className={st.profileBlock}>
                <ProfileIcon className={st.profileIcon} />
                {userName}
              </div>
            </div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
