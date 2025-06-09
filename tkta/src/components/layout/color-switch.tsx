"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useColorMode } from "@/context/color-mode-context";
import { getTranslation } from "@/lib/i18n";

export function ColorSwitch({locale}: { locale: string }) {
  const { isBlackAndWhite, toggleColorMode } = useColorMode();

  const t = getTranslation(locale);

  return (
    <div className="flex items-center gap-2">
      <Label htmlFor="color-mode-before">{t.header.colorSwitch.color}: </Label>

      <Switch defaultChecked={true} checked={!isBlackAndWhite} id="color-mode" onClick={toggleColorMode}/>

      <Label htmlFor="color-mode">{isBlackAndWhite ? t.header.colorSwitch.off : t.header.colorSwitch.on}</Label>
    </div>
  );
}
