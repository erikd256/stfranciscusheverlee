import React from "react";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Container } from "../../util/container";
import { RawRenderer } from "./rawRenderer";
import { useTheme } from "..";
import { Icon } from "../../util/icon";

export const Footer = ({ data, icon, rawData }) => {
  const socialIconClasses = "h-7 w-auto";
  return (
    <>
    <footer className={`bg-basiskleur`}>
      <Container className="relative" size="small">
        <div className="flex justify-between text-liturgischekleur gap-6 flex-wrap">
          <p>&copy; <a href="https://github.com/erikd256" target="_blank">erikd256</a> - {(new Date().getFullYear())}</p>
          <p className={``}><img className="" src="https://vercelbadge.vercel.app/api/erikd256/stfranciscusheverlee?style=for-the-badge"/></p>
        </div>
      </Container>
    </footer>
    </>
  );
};
