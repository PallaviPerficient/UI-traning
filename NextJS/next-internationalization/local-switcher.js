"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n } from "./i18-config";
import "./app/[lang]/page.css";

const LocalSwitcher = () => {
  const pathName = usePathname();
  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div>
      <p>Language Switcher:</p>
      <div>
        {i18n.locales.map((locale) => (
          <button key={locale} className="langButton">
            <Link href={redirectedPathName(locale)}>{locale}</Link>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LocalSwitcher;
