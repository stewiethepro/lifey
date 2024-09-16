"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

interface NavItem {
  name: string;
  href: string;
}

const navs: NavItem[] = [
  {  name: "Home", href: "#hero" },
  {  name: "How it works", href: "#how-it-works" },
  {  name: "Pricing", href: "#pricing" },
  {  name: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const ref = useRef<HTMLUListElement>(null);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    const node = e.currentTarget;
    const rect = node.getBoundingClientRect();
    setLeft(node.offsetLeft);
    setWidth(rect.width);
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <header className="w-full py-20">
      <ul
        onMouseLeave={handleMouseLeave}
        className="relative mx-auto flex w-fit rounded-full border p-1.5"
        ref={ref}
      >
        {navs.map((item) => (
          <li
            key={item.name}
            onMouseEnter={handleMouseEnter}
            className="z-10 block cursor-pointer px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-primary text-primary/60 tracking-tight"
          >
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
        <motion.li
          animate={{ left, width, opacity }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="absolute inset-0 my-1.5 rounded-full bg-secondary"
        />
      </ul>
    </header>
  );
}
