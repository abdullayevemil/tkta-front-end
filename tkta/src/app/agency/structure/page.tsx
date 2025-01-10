"use client";

import React from "react";
import { ReactFlow } from "@xyflow/react";

import "@xyflow/react/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 700, y: 0 }, data: { label: "İdarə Heyəti" } },
  { id: "2", position: { x: 300, y: 100 }, data: { label: "İH-nin sədri" } },
  {
    id: "3",
    position: { x: 500, y: 100 },
    data: { label: "İH-nin sədr müavini" },
  },
  {
    id: "4",
    position: { x: 700, y: 100 },
    data: { label: "Keyfiyyət təminatı departamenti" },
  },
  {
    id: "5",
    position: { x: 900, y: 100 },
    data: { label: "Hüquq təminatı departamenti" },
  },
  {
    id: "6",
    position: { x: 1100, y: 100 },
    data: { label: "Kvalifikasiyaların tanınması departamenti" },
  },
  {
    id: "7",
    position: { x: 200, y: 200 },
    data: { label: "İnformasiya və İnsan resursları şöbəsi" },
  },
  {
    id: "8",
    position: { x: 400, y: 200 },
    data: { label: "Analitik təhlil şöbəsi" },
  },
  { id: "9", position: { x: 600, y: 200 }, data: { label: "Maliyyə şöbəsi" } },
  {
    id: "10",
    position: { x: 700, y: 300 },
    data: { label: "Akkreditasiya və lisenziya şöbəsi" },
  },
  {
    id: "11",
    position: { x: 900, y: 300 },
    data: { label: "Təlim və metodologiya şöbəsi" },
  },
  {
    id: "12",
    position: { x: 1000, y: 200 },
    data: { label: "Hüquqi məsələlərin tənzimlənməsi şöbəsi" },
  },
  {
    id: "13",
    position: { x: 1200, y: 200 },
    data: { label: "Kvalifikasiyaların tanınması departamenti" },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },
  { id: "e1-5", source: "1", target: "5" },
  { id: "e1-6", source: "1", target: "6" },
  { id: "e2-7", source: "2", target: "7" },
  { id: "e2-8", source: "2", target: "8" },
  { id: "e3-9", source: "3", target: "9" },
  { id: "e4-10", source: "4", target: "10" },
  { id: "e4-11", source: "4", target: "11" },
  { id: "e5-12", source: "5", target: "12" },
  { id: "e6-13", source: "6", target: "13" },
];

export default function Structure() {
  return (
    <div className="w-screen h-screen">
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
  );
}
