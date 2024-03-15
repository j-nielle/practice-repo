import DesktopNav from "@/components/nav-components/desktop-nav";
import LogoLink from "@/components/nav-components/link-logo";
import MobileDrawer from "@/components/nav-components/mobile-drawer";
import MobileMenuBtn from "@/components/nav-components/mobile-menu-button";
import React, { useState } from "react";

export default function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="hidden relative sm:flex flex-col justify-center">
        <DesktopNav />
      </div>
      <div className="sm:hidden relative flex flex-row">
        <MobileMenuBtn onClick={handleDrawerToggle} />
        <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
      </div>
    </>
  );
}
