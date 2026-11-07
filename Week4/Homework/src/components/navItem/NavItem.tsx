import { cn } from "@/utils/cn";
import type { ReactNode } from "react";
import { NavLink } from "react-router";

interface NavItemProps {
  to: string;
  end?: boolean;
  children: ReactNode;
}

export default function NavItem({ to, end, children }: NavItemProps) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        cn(
          "transition-colors duration-200",
          isActive ? "text-primary" : "text-fg-muted hover:text-fg-default",
        )
      }
    >
      {children}
    </NavLink>
  );
}
