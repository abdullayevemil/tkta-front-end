import { Node, Position } from "@xyflow/react";

export type NavigationNodeType = Node<
  {
    link: string;
    targetPosition: Position;
    sourcePosition: Position;
    label: string;
  },
  "navigation"
>;