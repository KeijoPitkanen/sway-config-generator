import type { Shortcuts } from "./Shortcuts";

export interface Parameters {
  wallpaperLocalURL: string | null;
  wallpaperWebURL: string | null;
  startupPrograms: string[];
  numberOfWorkspaces: number;
  workspaceNames: string[];
  shortcuts: Shortcuts;
}
