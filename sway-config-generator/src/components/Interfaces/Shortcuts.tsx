import type { LaunchCustomProgram } from "./LaunchCustomProgram";

export interface Shortcuts {
  mod: string;
  workspaceShortCuts: string[];
  killFocuesedWindow: string[];
  fullscreen: string[];

  focusLeft: string[];
  focusRight: string[];
  focusUp: string[];
  focusDown: string[];

  moveLeft: string[];
  moveRight: string[];
  moveUp: string[];
  moveDown: string[];

  containerLayoutStacking: string[];
  containerLayoutTabbed: string[];
  containerLayoutSplit: string[];

  toggleTiling: string[];

  moveWindowToWorkspace: string[];

  lockScreen: string[];

  reloadConfigurationFile: string[];

  exitSway: string[];

  keyboardLayout: string;
  numlockEnabled: string;

  launchCustomPrograms: LaunchCustomProgram[];
}
