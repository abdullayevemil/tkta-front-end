import { NavigationNodeType } from "@/types/navigation-node";
import { Handle, NodeProps } from "@xyflow/react";
import Link from "next/link";

export default function NavigationNode({
  data,
}: NodeProps<NavigationNodeType>) {
  return (
    <>
      <Handle type="target" position={data.targetPosition} />

      <div className="p-[10px] w-32 h-0 text-xs flex items-center justify-center rounded">
        <Link className="text-center hover:font-semibold text-textPrimary" href={data.link}>
          {data.label}
        </Link>
      </div>

      <Handle type="source" position={data.sourcePosition} id="a" />
    </>
  );
}
