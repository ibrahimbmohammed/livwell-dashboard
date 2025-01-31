"use client";

import Logo from "@atoms/logo/logo";
import SidebarNavItem from "@atoms/a-side-bar-nav-item";
import { SidebarNavItemProps, ParentNavItem } from "@lib/types/molecules";
import { usePathname } from "next/navigation";
import { MdMenu, MdOutlineMenuOpen } from "react-icons/md";
import GirlAvartar from "@assets/png/Avatars.png";
import LogoutIcon from "@/app/_lib/icons/dashboard/logout";

const style = {
  active:
    "text-[#344054] pl-0 bg-[#FBD7BA] flex font-[300] pl-[4.7px] pr-[6px] pt-[0px] pb-[0px] text-[24px] rounded-[10px] font-normal ",
  inactive:
    " text-[#344054] py-[0rem] pl-0 hover:bg-[#FBD7BA] pl-[4.7px] pr-[6px] pb-[0px] rounded-[10px] hover:text-[#344054] font-light text-[14px] leading-[20.3px]",
  link: `group relative text-[0.88rem] flex space-x-4 px-0 my-[0.05rem] items-center h-[2.5rem]
    w-full my-[0rem] group-hover:cursor-pointer `,
  activeInner: " ",
  inactiveInner:
    "text-[#344054] font-normal bg-[#E3EAFB] pl-0 mt-[5px] borded-[4px]",
  linkInner: `group relative text-[0.88rem] hover:font-normal  hover:bg-[#E3EAFB] hover:text-[#344054] flex  items-center h-[2.5rem]
    w-full  group-hover:cursor-pointer pl-0 `,
  link_hide: "hidden",
  back_active: " ",
  back_inactive: " ",
  icon_active: ` stroke-black `,
  icon_inactive: ` stroke-[#fff]  group-hover:stroke-black  `,
};

export interface ISidebarProps {
  toggleShiftDashboardContent?: () => void;
  openDrawer: boolean;
  width?: number;
  toggleOpenDrawer?: () => void;
  toggleOpenSidebar?: () => void;
  showMenuIcon: boolean;
  navItems: ParentNavItem[] | undefined;
}

function Sidebar({
  openDrawer,
  width,
  toggleOpenDrawer,
  toggleShiftDashboardContent,
  showMenuIcon,
  toggleOpenSidebar,
  navItems,
}: ISidebarProps) {
  const pathname = usePathname();

  const handleToggleOpenDrawerAndShiftDashboardContent = () => {
    toggleOpenDrawer?.();
    toggleShiftDashboardContent?.();
  };

  const isSmall = width && width < 1280;

  return (
    <div
      id="sidebar"
      className={`duration-400 top-0 left-0  h-full overflow-y-auto overflow-x-hidden  bg-[#1B1B1B]  shadow-lg  transition-all ease-in-out ${
        !openDrawer ? " w-[6.5rem] " : "  "
      } ${
        isSmall
          ? "w-[7.25rem]  max-w-[7.25rem]"
          : " fixed w-[7.25rem] max-w-[7.25rem] "
      } `}
    >
      <div
        id="logo-content"
        className={`${
          isSmall ? "" : "fixed "
        }   h-[7.75rem]  bg-[#1B1B1B] z-50 w-full`}
      >
        <div
          id="logo"
          className={`flex h-[8.125rem] w-full items-center mt-4 text-slate-600 ${
            !openDrawer && "justify-center"
          }`}
        >
          <Logo className="ml-[2.2rem] mt-[8px]" />
        </div>
        {showMenuIcon && !openDrawer && (
          <button
            type="button"
            onClick={handleToggleOpenDrawerAndShiftDashboardContent}
          >
            <MdMenu
              className="fixed top-4 left-[4.5rem]  h-7 w-7"
              aria-hidden="true"
            />
          </button>
        )}
        {showMenuIcon && openDrawer && (
          <button
            type="button"
            onClick={handleToggleOpenDrawerAndShiftDashboardContent}
          >
            <MdOutlineMenuOpen
              className="fixed top-4 left-[14rem] h-7 w-7"
              aria-hidden="true"
            />
          </button>
        )}
      </div>
      <ul
        id="nav-list "
        key={Math.random()}
        className={`${
          isSmall ? "mt-[2.25rem]" : "mt-[14rem]"
        }  my-[0.3px] flex flex-col items-center space-y-8  hover:cursor-pointer`}
      >
        {(navItems || []).map((item: SidebarNavItemProps) => {
          if (item?.type === "navItem") {
            return (
              <SidebarNavItem
                key={item.id}
                asPath={pathname}
                name={item.name}
                path={item.path}
                style={style}
                showIcon
                subNavItems={item.subNavItems}
                hasSubNavItems={item.hasSubNavItems}
                Icon={item.Icon}
                openDrawer={openDrawer}
                toggleOpenSidebar={toggleOpenSidebar} // for mobile screens
                handleToggleOpenDrawerAndShiftDashboardContent={
                  handleToggleOpenDrawerAndShiftDashboardContent
                } // for tablet screens
              />
            );
          }
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
