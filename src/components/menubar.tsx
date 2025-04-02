"use client";

import styles from "./menubar.module.css";
import Link from "next/link";

interface MenuItem {
  label: string;
  href?: string;
  items?: {
    label: string;
    href: string;
  }[];
}

const menuItems: MenuItem[] = [
  {
    label: "Welcome",
    href: "/",
  },
  {
    label: "Females",
    items: [
      { label: "Black Diamond Vivien", href: "/females-vivien" },
      { label: "Deva MIF*RU", href: "/females-deva" },
      { label: "Diva MIF*RU", href: "/females-diva" },
    ],
  },
  {
    label: "Males",
    items: [{ label: "Caligula MIF*RU", href: "/males-caligula" }],
  },
  {
    label: "Kittens",
    href: "/kittens-for-sale",
  },
  {
    label: "Alumni",
    items: [
      { label: "Litter L 2013", href: "/litter-2013" },
      { label: "Litter A 2015", href: "/litter-2015" },
      { label: "Litter B 2018", href: "/litter-2018" },
    ],
  },
  {
    label: "Don Sphynx",
    items: [
      { label: "FIFE Race Standard", href: "/don-sphynx-fife" },
      {
        label: "Differences Between Naked Races",
        href: "/don-sphynx-differences",
      },
      {
        label: "Variations in Skin Types of Don Sphynx",
        href: "/don-sphynx-skin-types",
      },
    ],
  },
  {
    label: "Remembered Forever",
    items: [
      { label: "Bolero Nine Lives", href: "/rip-bolero" },
      { label: "Tango MIF*RU", href: "/rip-tango" },
      { label: "Galaxy of Neytiri", href: "/rip-galaxy" },
      { label: "Kiona MIF*RU", href: "/rip-kiona" },
    ],
  },
];

const MenuBar = () => {
  return (
    <nav className={styles.menuBar}>
      {menuItems.map((item, index) => (
        <div key={index} className={styles.menuItem}>
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span>{item.label}</span>
          )}
          {item.items && (
            <div className={styles.dropdown}>
              {item.items.map((subItem, subIndex) => (
                <Link
                  key={subIndex}
                  href={subItem.href}
                  className={styles.dropdownItem}
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default MenuBar;
