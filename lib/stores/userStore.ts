// userStore.ts
import create from 'zustand';

interface UserState {
  user: {
    id: string;
    name: string;
    // other user properties
  } | null;
  setUser: (user: UserState['user']) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
