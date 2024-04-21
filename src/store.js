// store.js
import {create} from 'zustand';

const useAuthStore = create((set) => ({
  userId:null,
  isAuthenticated: false,
  loading: true,
  setUserId:(value)=>set({userId:value}),
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
  setLoading: (value) => set({ loading: value }),
}));

export default useAuthStore;
