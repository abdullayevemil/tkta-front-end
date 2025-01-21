"use client";

import GoogleMapComponent from "@/components/maps/google-map";
import { Card } from "@/components/ui/card";
import Logo from "@/assets/images/logo.png";
import ExternalLinks from "./external-links";
import Image from "next/image";
import Link from "next/link";
import PinIcon from "@/assets/icons/footer/map-pin.svg";
import FacebookIcon from "@/assets/icons/footer/social-media/facebook.svg";
import InstagramIcon from "@/assets/icons/footer/social-media/instagram.svg";
import LinkedinIcon from "@/assets/icons/footer/social-media/linkedin.svg";
import TelegramIcon from "@/assets/icons/footer/social-media/telegram.svg";
import "@xyflow/react/dist/style.css";

// const nodeDefaults = {
//   sourcePosition: Position.Left,
//   targetPosition: Position.Left,
// };

// const initialNodes = [
//   {
//     id: "1",
//     position: { x: 112, y: 0 },
//     data: {
//       label: "Agentlik",
//       link: "/agency",
//       sourcePosition: Position.Bottom,
//       targetPosition: Position.Bottom,
//     },
//     type: "navigation",
//   },
//   {
//     id: "2",
//     position: { x: 200, y: 50 },
//     data: {
//       label: "Haqqımızda",
//       link: "/agency/about",
//       ...nodeDefaults,
//       sourcePosition: Position.Right,
//     },
//     type: "navigation",
//   },
//   {
//     id: "3",
//     position: { x: 200, y: 100 },
//     data: { label: "Rəhbırlik", link: "/agency/principles", ...nodeDefaults },
//     type: "navigation",
//   },
//   {
//     id: "4",
//     position: { x: 200, y: 150 },
//     data: { label: "Struktur", ...nodeDefaults, link: "/agency/structure" },
//     type: "navigation",
//   },
//   {
//     id: "5",
//     position: { x: 360, y: 50 },
//     data: {
//       label: "Daxili keyfiyyət təminatı sistemi",
//       link: "/agency/about/links",
//       ...nodeDefaults,
//     },
//     type: "navigation",
//   },
// ];

// const initialEdges = [
//   { id: "e1-2", source: "1", target: "2" },
//   { id: "e1-3", source: "1", target: "3" },
//   { id: "e1-4", source: "1", target: "4" },
//   { id: "e2-5", source: "2", target: "5" },
// ];

export default function Footer() {
  // const nodeTypes = useMemo<NodeTypes>(
  //   () => ({ navigation: NavigationNode }),
  //   []
  // );

  return (
    <footer className="flex flex-col gap-20 w-full items-end p-16 pt-0">
      <ExternalLinks />

      <div className="w-full flex flex-row justify-between items-center">
        <Link href="/home" className="hover:cursor-pointer w-fit">
          <Image src={Logo} alt="TKTA logo" className="w-[194.4px] h-18" />
        </Link>

        <div className="flex flex-row gap-5">
          <Link href="https://www.facebook.com/tkta.edu.az?_rdr">
            <FacebookIcon width={28} height={28} color="var(--primary-color)" />
          </Link>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/tktaeduaz"
          >
            <InstagramIcon
              width={28}
              height={28}
              color="var(--primary-color)"
            />
          </Link>

          <Link href="https://www.linkedin.com/company/tktaeduaz/">
            <LinkedinIcon width={28} height={28} color="var(--primary-color)" />
          </Link>

          <Link href="https://t.me/tktaeduaz">
            <TelegramIcon width={28} height={28} color="var(--primary-color)" />
          </Link>
        </div>
      </div>

      <div className="w-full h-full flex flex-row justify-between">
        <div className="w-2/3 h-[500px] flex flex-row gap-4">
          {/* <ReactFlow
            className="text-textPrimary"
            fitView
            nodes={initialNodes}
            edges={initialEdges}
            nodeTypes={nodeTypes}
          /> */}
        </div>

        <div className="w-1/3 flex flex-col gap-6">
          <Card className="w-full flex justify-right">
            <GoogleMapComponent />
          </Card>

          <div className="flex flex-row gap-2 items-center">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://maps.app.goo.gl/FTyJY73SYT4YvKfJ6"
              className="flex flex-row gap-2 items-center"
            >
              <PinIcon width={24} height={24} color="var(--primary-color)" />

              <div className="text-textPrimary text-base">
                2B Qara Qarayev, Bakı 1060
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
