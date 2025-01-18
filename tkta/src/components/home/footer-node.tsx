import { Handle, NodeProps, Position } from "@xyflow/react";
import Link from "next/link";

interface Data {
  label: string;
  link: string;
}

interface Coordinates {
  x: number;
  y: number;
}

interface Props {
  id: string;
  position: Coordinates;
  data: Data;
  sourcePosition: Position;
  targetPosition: Position;
}

const NavigationNode: React.FC<NodeProps<Props>> = ({
  sourcePosition,
  targetPosition,
  data,
}: Props) => {
  return (
    <>
      <Handle type="target" position={targetPosition} />

      <div className="p-[10px] w-32 border border-textPrimary border-solid text-xs flex items-center justify-center rounded">
        <Link className="text-center" href={data.link}>{data.label}</Link>
      </div>

      <Handle type="source" position={sourcePosition} id="a" />
    </>
  );
};

export default NavigationNode;
