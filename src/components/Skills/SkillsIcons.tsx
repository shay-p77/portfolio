// src/components/SkillIcons.tsx
import { Code, Server, Settings, Layers } from "lucide-react";

export const FrontendIcon = () => (
  <Code className="w-10 h-10 text-primary mx-auto mb-4" />
);
export const BackendIcon = () => (
  <Server className="w-10 h-10 text-primary mx-auto mb-4" />
);
export const ToolsIcon = () => (
  <Settings className="w-10 h-10 text-primary mx-auto mb-4" />
);
export const AdditionalIcon = () => (
  <Layers className="w-10 h-10 text-primary mx-auto mb-4" />
);
