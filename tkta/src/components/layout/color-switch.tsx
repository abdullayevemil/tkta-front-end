"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useColorMode } from "@/context/color-mode-context";

export function ColorSwitch() {
  const { isBlackAndWhite, toggleColorMode } = useColorMode();

  return (
    <div className="flex items-center gap-2">
      <Label htmlFor="color-mode-before">Color: </Label>

      <Switch defaultChecked={true} checked={!isBlackAndWhite} id="color-mode" onClick={toggleColorMode}/>

      <Label htmlFor="color-mode">{isBlackAndWhite ? "Off" : "On"}</Label>
    </div>
  );
}
