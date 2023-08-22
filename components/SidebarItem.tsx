import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
interface SidebarItemProps {
  icon: IconType;
  label: String;
  active?: boolean;
  href: string;
}
const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  href,
  label,
  active,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `
  flex
  flex-row
  h-auto
  item-center
  w-full
  gap-x-4
  text-lg
  font-medium
  cursor-pointer
  hover:text-white
  transition
  text-neutral-400
  py-1
  `,
        active && "text-white"
      )}
    >
      <Icon size={26} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};

export default SidebarItem;
