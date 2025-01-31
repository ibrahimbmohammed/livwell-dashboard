'use client';

import { SidebarNavItemProps } from '@lib/types/molecules';
import SidebarNavDropDownItem from '@atoms/a-side-bar-nav-dropdown-item';
import Link from 'next/link';
import { useRef } from 'react';
import InnerIcon from '@/app/_lib/icons/dashboard/sidebar/InnerIcon';

function SidebarNavItem({
  path,
  asPath,
  style,
  Icon,
  name,
  showIcon,
  hasSubNavItems,
  subNavItems,
  openDrawer,
  toggleOpenSidebar,
  handleToggleOpenDrawerAndShiftDashboardContent,
}: SidebarNavItemProps) {
  const disclosureRef = useRef<HTMLButtonElement>(null);

  if (hasSubNavItems) {
    return (
      <SidebarNavDropDownItem
        ref={disclosureRef}
        path={path}
        asPath={asPath}
        style={style}
        Icon={Icon}
        Icon2={InnerIcon}
        name={name}
        showIcon={showIcon}
        subNavItems={subNavItems}
        openDrawer={openDrawer as boolean}
        toggleOpenSidebar={toggleOpenSidebar}
        handleToggleOpenDrawerAndShiftDashboardContent={
          handleToggleOpenDrawerAndShiftDashboardContent
        }
      />
    );
  }
  return (
    <li className={`${path === asPath ? style!.active : style!.inactive}  `}>
      <Link href={path}>
        <button
          className={style!.link}
          onClick={() => {
            if (toggleOpenSidebar) {
              toggleOpenSidebar();
            }
          }}
        >
          <i
            className={`${
              path === asPath ? style!.back_active : style!.back_inactive
            }`}
          >
            <Icon
              className={`${
                path === asPath ? style!.icon_active : style!.icon_inactive
              }`}
              extraClassName={`${
                path === asPath
                  ? style!.extra_icon_active
                  : style!.extra_icon_inactive
              }`}
            />
          </i>
          {showIcon}
        </button>
      </Link>
    </li>
  );
}

export default SidebarNavItem;
