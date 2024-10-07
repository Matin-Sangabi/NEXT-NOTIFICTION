import { create } from "zustand";
import notificationSlice from "./notif.slice";

export const useStore = create((...a) => ({
  ...notificationSlice(...a),
}));
