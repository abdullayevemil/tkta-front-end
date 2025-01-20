import { Handle, NodeProps, Node, Position } from "@xyflow/react";
import Link from "next/link";

type NavigationNodeType = Node<
  {
    link: string;
    targetPosition: Position;
    sourcePosition: Position;
    label: string;
  },
  "navigation"
>;

export default function NavigationNode({
  data,
}: NodeProps<NavigationNodeType>) {
  return (
    <>
      <Handle type="target" position={data.targetPosition} />

      <div className="p-[10px] w-32 border border-textPrimary border-solid text-xs flex items-center justify-center rounded">
        <Link className="text-center" href={data.link}>
          {data.label}
        </Link>
      </div>

      <Handle type="source" position={data.sourcePosition} id="a" />
    </>
  );
}
