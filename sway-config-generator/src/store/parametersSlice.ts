import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Parameters } from "../components/Interfaces/Parameters";

import defaultShortcuts from "../defaultShortcuts.json";

const initialState: Parameters = {
  wallpaperLocalURL: null,
  wallpaperWebURL: null,
  startupPrograms: [],
  numberOfWorkspaces: 8,
  workspaceNames: [
    "Workspace 1",
    "Workspace 2",
    "Workspace 3",
    "Workspace 4",
    "Workspace 5",
    "Workspace 6",
    "Workspace 7",
    "Workspace 8",
  ],
  shortcuts: defaultShortcuts,
};

const parametersSlice = createSlice({
  name: "liveView",
  initialState,
  reducers: {
    parametersSetWallpaperWebURL(state, action: PayloadAction<string | null>) {
      state.wallpaperWebURL = action.payload;
    },
    parametersSetWallpaperLocalURL(
      state,
      action: PayloadAction<string | null>,
    ) {
      state.wallpaperLocalURL = action.payload;
    },
    parametersSetStartupPrograms(state, action: PayloadAction<string[]>) {
      state.startupPrograms = action.payload;
    },
    parametersSetNumberOfWorkspaces(state, action: PayloadAction<number>) {
      state.numberOfWorkspaces = action.payload;
    },
    parametersSetWorkspaces(state, action: PayloadAction<string[]>) {
      state.workspaceNames = action.payload;
    },
  },
});

export const {
  parametersSetNumberOfWorkspaces,
  parametersSetStartupPrograms,
  parametersSetWallpaperLocalURL,
  parametersSetWallpaperWebURL,
  parametersSetWorkspaces,
} = parametersSlice.actions;
export default parametersSlice.reducer;
