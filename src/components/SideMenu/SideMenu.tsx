import React from "react";
import { SideMenuContent } from "../../utilities/MenuContents";

interface SideMenuProps {
  menuContent: SideMenuContent
}

export const SideMenu = (props: SideMenuProps) => {
  const { menuContent } = props;
  return (
    <main>
      {
        Object.keys(menuContent).map((menuItem)=>{
          return(
            <div key = {menuItem}>
              {menuItem}
            </div>
          );
        })
      }
    </main>
  );
};
