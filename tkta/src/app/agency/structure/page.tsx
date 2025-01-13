"use client";

import React from "react";
import { ReactFlow } from "@xyflow/react";

import "@xyflow/react/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 700, y: 0 }, data: { label: "İdarə Heyətinin Sədri" } },
  { id: "2", position: { x: 1100, y: 100 }, data: { label: "İdarə Heyətinin sədr müavini" } },
  {
    id: "3",
    position: { x: 200, y: 300 },
    data: { label: "İnformasiya və İnsan resursları şöbəsi" },
  },
  {
    id: "4",
    position: { x: 400, y: 300 },
    data: { label: "Akkreditasiya və lisenziya şöbəsi" },
  },
  {
    id: "5",
    position: { x: 600, y: 300 },
    data: { label: "Təlim və metodalogiya şöbəsi" },
  },
  {
    id: "6",
    position: { x: 800, y: 300 },
    data: { label: "Kvalifikasiyaların tanınması departamenti" },
  },
  {
    id: "7",
    position: { x: 700, y: 500 },
    data: { label: "Xarici kvalifikasiyaların tanınması şöbəsi" },
  },
  {
    id: "8",
    position: { x: 900, y: 500 },
    data: { label: "Qeyri formal və informal təhsilin tanınması şöbəsi" },
  },
  { id: "9", position: { x: 1050, y: 300 }, data: { label: "Hüquq təminatı departamenti" } },
  {
    id: "10",
    position: { x: 1100, y: 500 },
    data: { label: "Hüquqı məsələlərin tənzimlənməsi şöbəsi" },
  },
  {
    id: "11",
    position: { x: 1300, y: 300 },
    data: { label: "Maliyyə şöbəsi" },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },
  { id: "e1-5", source: "1", target: "5" },
  { id: "e1-6", source: "1", target: "6" },
  { id: "e1-9", source: "1", target: "9" },
  { id: "e1-11", source: "1", target: "11" },
  { id: "e6-7", source: "6", target: "7" },
  { id: "e6-8", source: "6", target: "8" },
  { id: "e9-10", source: "9", target: "10" },
];

export default function Structure() {
  return (
    <div className="w-screen h-screen">
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
  );
}
