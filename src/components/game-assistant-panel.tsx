"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

function SettingItem({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
      <Label
        htmlFor={id}
        className="text-base font-medium text-foreground/90 shrink-0"
      >
        {label}
      </Label>
      {children}
    </div>
  );
}

export function GameAssistantPanel() {
  const [aimAssistant, setAimAssistant] = useState(true);
  const [antiCheatBypass, setAntiCheatBypass] = useState(false);
  const [aimbotTarget, setAimbotTarget] = useState("headshot");
  const [aimlock, setAimlock] = useState(true);
  const [aimFov, setAimFov] = useState([30]);
  const [esp, setEsp] = useState(true);

  return (
    <Card className="w-full max-w-lg border border-border bg-card shadow-2xl shadow-primary/10 rounded-xl">
      <CardHeader className="p-6 sm:p-8">
        <h1 className="text-center text-3xl font-bold text-primary tracking-wide text-shadow">
          Vanguard Assistant 📱
        </h1>
      </CardHeader>
      <CardContent className="p-6 pt-0 sm:p-8 sm:pt-0">
        <div className="space-y-6">
          <div className="space-y-4 border-b border-border pb-6">
            <SettingItem label="Aim Assistant" id="aim-assistant">
              <Switch
                id="aim-assistant"
                checked={aimAssistant}
                onCheckedChange={setAimAssistant}
              />
            </SettingItem>
            <SettingItem label="Anti-Cheat Bypass (F1)" id="anti-cheat-bypass">
              <Switch
                id="anti-cheat-bypass"
                checked={antiCheatBypass}
                onCheckedChange={setAntiCheatBypass}
              />
            </SettingItem>
          </div>

          <div className="space-y-4 border-b border-border pb-6">
            <SettingItem label="Aimbot Target" id="aimbot-target">
              <Select value={aimbotTarget} onValueChange={setAimbotTarget}>
                <SelectTrigger id="aimbot-target" className="w-full sm:w-[160px]">
                  <SelectValue placeholder="Select Target" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="headshot">Headshot</SelectItem>
                  <SelectItem value="bodyshot">Body Shot</SelectItem>
                  <SelectItem value="neckshot">Neck Shot</SelectItem>
                </SelectContent>
              </Select>
            </SettingItem>
            <SettingItem label="Aimlock" id="aimlock">
              <Switch
                id="aimlock"
                checked={aimlock}
                onCheckedChange={setAimlock}
              />
            </SettingItem>
            <SettingItem label="Aim FOV" id="aim-fov">
              <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-end">
                <Slider
                  id="aim-fov"
                  value={aimFov}
                  onValueChange={setAimFov}
                  max={180}
                  step={1}
                  className="w-full sm:w-[150px]"
                />
                <span className="min-w-[40px] text-right font-medium text-primary">
                  {aimFov[0]}°
                </span>
              </div>
            </SettingItem>
          </div>

          <div className="space-y-4 pt-0">
            <SettingItem label="ESP (Line Free)" id="esp">
              <Switch id="esp" checked={esp} onCheckedChange={setEsp} />
            </SettingItem>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 sm:p-8 sm:pt-0">
        <Button asChild className="w-full">
          <a href="/vanguard-assistant.apk" download>
            <Download className="mr-2 h-4 w-4" />
            Download Vanguard Assistant.apk
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
