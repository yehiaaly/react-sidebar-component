// src/components/sidebar/sidebar.tsx
import { useState } from "react";
import type { NavItem } from "./data";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import { ChevronRight, ChevronDown } from "lucide-react";

interface SidebarProps {
  navItems: NavItem[];
}

function TreeItem({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        onClick={() => hasChildren && setIsOpen(!isOpen)}
        className="w-full justify-between"
      >
        <div className="flex flex-1 items-center gap-2">
          {item.icons && <item.icons className="size-4" />}
          <span>{item.label}</span>
        </div>
        {hasChildren &&
          (isOpen ? (
            <ChevronDown className="size-4" />
          ) : (
            <ChevronRight className="size-4" />
          ))}
      </SidebarMenuButton>

      {hasChildren && isOpen && (
        <SidebarMenuSub className="mt-1 ml-4 border-l">
          <SidebarMenu>
            {item.children?.map((child) => (
              <TreeItem key={child.label} item={child} />
            ))}
          </SidebarMenu>
        </SidebarMenuSub>
      )}
    </SidebarMenuItem>
  );
}

const Sidebar = ({ navItems = [] }: SidebarProps) => {
  return (
    <ShadcnSidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <TreeItem key={item.label} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </ShadcnSidebar>
  );
};

export default Sidebar;
