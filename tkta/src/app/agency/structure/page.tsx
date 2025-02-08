"use client";

import React, { useMemo, useState } from "react";
import { Position, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import NavigationNode from "@/components/home/footer-node";
import { EdgeSelector } from "@/components/structure/edge-selector";

const initialNodes = [
  {
    id: "1",
    position: { x: 550, y: 0 },
    data: {
      label: "İdarə Heyəti",
      link: "/agency/principles",
      targetPosition: Position.Top,
      sourcePosition: Position.Bottom,
    },
    type: "navigationNode",
  },
  {
    id: "2",
    position: { x: 550, y: 150 },
    data: {
      link: "/agency/principles",
      targetPosition: Position.Top,
      sourcePosition: Position.Bottom,
      label: "İH-nin sədri",
    },
    type: "navigationNode",
  },
  {
    id: "3",
    position: { x: 350, y: 150 },
    data: {
      link: "/agency/principles",
      targetPosition: Position.Top,
      sourcePosition: Position.Bottom,
      label: "İH-nin sədr müavini",
    },
    type: "navigationNode",
  },
  {
    id: "4",
    position: { x: 750, y: 250 },
    data: {
      link: "/agency/principles",
      targetPosition: Position.Top,
      sourcePosition: Position.Bottom,
      label: "Keyfiyyət təminatı departamenti",
    },
    type: "navigationNode",
  },
  {
    id: "5",
    position: { x: 950, y: 250 },
    data: {
      link: "/agency/principles",
      targetPosition: Position.Top,
      sourcePosition: Position.Bottom,
      label: "Hüquq təminatı departamenti",
    },
    type: "navigationNode",
  },
  {
    id: "6",
    position: { x: 1150, y: 250 },
    data: {
      link: "/agency/principles",
      targetPosition: Position.Top,
      sourcePosition: Position.Bottom,
      label: "Kvalifikasiyaların tanınması departamenti",
    },
    type: "navigationNode",
  },
  {
    id: "7",
    position: { x: 350, y: 250 },
    data: {
      link: "/agency/principles",
      targetPosition: Position.Top,
      sourcePosition: Position.Bottom,
      label: "İnformasiya və insan resursları şöbəsi",
    },
    type: "navigationNode",
  },
  {
    id: "8",
    position: { x: 550, y: 250 },
    data: {
      link: "/agency/principles",
      targetPosition: Position.Top,
      sourcePosition: Position.Bottom,
      label: "Analitik təhlil şöbəsi",
    },
    type: "navigationNode",
  },
  {
    id: "9",
    position: { x: 150, y: 250 },
    data: {
      link: "/agency/principles",
      targetPosition: Position.Top,
      sourcePosition: Position.Bottom,
      label: "Maliyyə şöbəsi",
    },
    type: "navigationNode",
  },
  {
    id: "10",
    position: { x: 550, y: 450 },
    data: {
      link: "/agency/principles",
      targetPosition: Position.Top,
      sourcePosition: Position.Bottom,
      label: "Akkreditasiya və lisenziya şöbəsi",
    },
    type: "navigationNode",
  },
  {
    id: "11",
    position: { x: 750, y: 450 },
    data: {
      link: "/agency/principles",
      targetPosition: Position.Top,
      sourcePosition: Position.Bottom,
      label: "Təlim və metodologiya şöbəsi",
    },
    type: "navigationNode",
  },
  {
    id: "12",
    position: { x: 850, y: 350 },
    data: {
      link: "/agency/principles",
      targetPosition: Position.Top,
      sourcePosition: Position.Bottom,
      label: "Hüquqi məsələlərin tənzimlənməsi şöbəsi",
    },
    type: "navigationNode",
  },
  {
    id: "13",
    position: { x: 1050, y: 350 },
    data: {
      link: "/agency/principles",
      targetPosition: Position.Top,
      sourcePosition: Position.Bottom,
      label: "Kvalifikasiyaların tanınması departamenti",
    },
    type: "navigationNode",
  },
  {
    id: "14",
    position: { x: 750, y: 150 },
    data: {
      link: "/agency/principles",
      targetPosition: Position.Top,
      sourcePosition: Position.Bottom,
      label: "İH-nin üzvü",
    },
    type: "navigationNode",
  },
  {
    id: "15",
    position: { x: 950, y: 150 },
    data: {
      link: "/agency/principles",
      targetPosition: Position.Top,
      sourcePosition: Position.Bottom,
      label: "İH-nin üzvü",
    },
    type: "navigationNode",
  },
  {
    id: "16",
    position: { x: 1150, y: 150 },
    data: {
      link: "/agency/principles",
      targetPosition: Position.Top,
      sourcePosition: Position.Bottom,
      label: "İH-nin üzvü",
    },
    type: "navigationNode",
  },
];

export default function Structure() {
  const nodeTypes = useMemo(() => ({ navigationNode: NavigationNode }), []);

  const [value, setValue] = useState<string>("default");

  const initialEdges = [
    { id: "e1-2", source: "1", target: "2", type: value },
    { id: "e1-3", source: "1", target: "3", type: value },
    { id: "e2-4", source: "2", target: "4", type: value },
    { id: "e2-5", source: "2", target: "5", type: value },
    { id: "e2-6", source: "2", target: "6", type: value },
    { id: "e2-7", source: "2", target: "7", type: value },
    { id: "e2-8", source: "2", target: "8", type: value },
    { id: "e3-9", source: "3", target: "9", type: value },
    { id: "e4-10", source: "4", target: "10", type: value },
    { id: "e4-11", source: "4", target: "11", type: value },
    { id: "e5-12", source: "5", target: "12", type: value },
    { id: "e6-13", source: "6", target: "13", type: value },
    { id: "e1-14", source: "1", target: "14", type: value },
    { id: "e1-15", source: "1", target: "15", type: value },
    { id: "e1-16", source: "1", target: "16", type: value },
  ];

  return (
    <div className="flex flex-col gap-8 pt-8">
      <div className="px-16 flex justify-end">
        <EdgeSelector value={value} setValue={setValue} />
      </div>

      <div className="w-screen h-screen">
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          nodeTypes={nodeTypes}
        />
      </div>
    </div>
  );
}
