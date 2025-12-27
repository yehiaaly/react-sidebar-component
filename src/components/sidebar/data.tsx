import {
  Home,
  User,
  Settings,
  FileText,
  MapPin,
  Lock,
  LogIn,
  UserPlus,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  to: string;
  icons?: LucideIcon;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    label: "Home",
    to: "/",
    icons: Home,
  },
  {
    label: "Profile",
    to: "/profile",
    icons: User,
    children: [
      {
        label: "Details",
        to: "details",
        icons: FileText,
        children: [
          {
            label: "Location",
            to: "location",
            icons: MapPin,
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    icons: Settings,
    children: [
      {
        label: "Account",
        to: "account",
        icons: User,
      },
      {
        label: "Security",
        to: "security",
        icons: Lock,
        children: [
          {
            label: "Login",
            to: "login",
            icons: LogIn,
          },
          {
            label: "Register",
            to: "register",
            icons: UserPlus,
          },
        ],
      },
    ],
  },
];

export default navItems;
