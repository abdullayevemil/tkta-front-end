import { NavigationNodeType } from "@/types/navigation-node";
import { Handle, NodeProps } from "@xyflow/react";
import Link from "next/link";

export default function NavigationNode({
  data,
}: NodeProps<NavigationNodeType>) {
  return (
    <>
      <Handle type="target" position={data.targetPosition} />

      <div className="p-2 sm:p-3 w-28 sm:w-32 md:w-40 border-2 border-textPrimary border-solid text-xs sm:text-sm flex items-center justify-center rounded-3xl bg-white">
        <Link className="text-center hover:font-semibold text-textPrimary break-words" href={data.link}>
          {data.label}
        </Link>
      </div>

      <Handle type="source" position={data.sourcePosition} id="a" />
    </>
  );
}
