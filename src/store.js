// store.js
import { create } from "zustand";

const useAuthStore = create((set) => ({
  userId: null,
  isAuthenticated: false,
  loading: true,
  setUserId: (value) => set({ userId: value }),
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
  setLoading: (value) => set({ loading: value })
}));

export const checkUserIdOrLocalStorage = () => {
  const { userId } = useAuthStore.getState(); ;
  if (userId !== null) {
    return userId;
  }
  const storedUserId = localStorage.getItem("userId");
  if (storedUserId) {
    return storedUserId;
  }
  return null;
};

export default useAuthStore;
