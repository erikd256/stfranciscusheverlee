import React from "react";
import Link from "next/link";
import { Container } from "../util/container";
import { useTheme } from ".";
import { Icon } from "../util/icon";
import Image from 'next/image'

export const Header = ({ data }) => {
  const theme = useTheme();

  const headerColor = {
    default:
      "text-black dark:text-white from-gray-50 to-white dark:from-gray-700 dark:to-gray-800",
    primary: {
      blue: "text-white from-blue-300 to-blue-500",
      teal: "text-white from-teal-400 to-teal-500",
      green: "text-white from-green-400 to-green-500",
      red: "text-white from-red-400 to-red-500",
      pink: "text-white from-pink-400 to-pink-500",
      purple: "text-white from-purple-400 to-purple-500",
      orange: "text-white from-orange-400 to-orange-500",
      yellow: "text-white from-yellow-400 to-yellow-500",
    },
  };

  const headerColorCss = headerColor.primary[theme.color];

  const activeItemClasses = {
    blue: "border-b-3 border-blue-200 dark:border-blue-700",
    teal: "border-b-3 border-teal-200 dark:border-teal-700",
    green: "border-b-3 border-green-200 dark:border-green-700",
    red: "border-b-3 border-red-300 dark:border-red-700",
    pink: "border-b-3 border-pink-200 dark:border-pink-700",
    purple: "border-b-3 border-purple-200 dark:border-purple-700",
    orange: "border-b-3 border-orange-200 dark:border-orange-700",
    yellow: "border-b-3 border-yellow-300 dark:border-yellow-600",
  };

  // If we're on an admin path, other links should also link to their admin paths
  const [prefix, setPrefix] = React.useState("");
  const [windowUrl, setUrl] = React.useState("");
  const isBrowser = typeof window !== "undefined";
  const hasUrl = isBrowser ? window.location.href : "";

  React.useEffect(() => {
    setUrl(hasUrl);
  }, [hasUrl]);

  React.useEffect(() => {
    if (window.location.pathname.startsWith("/admin")) {
      setPrefix("/admin");
    }
  });

  return (
    <>
      <div className="flex overflow-x-hidden items-center justify-between bg-liturgischekleur border-b-4 border-basiskleur"><img src="/assets/Kerk_Logo.jpg" className={`h-[250px]  border-r-4 border-basiskleur`}/><span className="lg:text-3xl sm:text-lg absolute left-[200px] top-[20px]">Sint Franciscusparochie</span><span className="absolute left-[200px] top-[60px] lg:text-lg sm:text-xs">Heverlee - Kessel-lo - Leuven</span><span className="absolute top-[120px] left-[200px] sm:text-xs"><p>Tiensesteenweg 190, 3001 Heverlee</p><p>tel. 016/25 04 59</p><p>franciscusheverlee@gmail.com</p></span></div>
      <Container className={`overflow-x-hidden flex items-center justify-between z-40 sticky top-0 bg-vierdekleur p-0 text-basiskleur w-full border-solid border-b-4 border-basiskleur flex-1 mr-2 py-[1px]`}>
      <span className="text-center block border border-basiskleur rounded py-2 px-4 bg-liturgischekleur text-basiskleur"><a href="/">Start</a></span>
      </Container>
    </>
  );
};
