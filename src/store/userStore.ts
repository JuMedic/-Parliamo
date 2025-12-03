// Zustand store with user state management
import create from 'zustand';

const useUserStore = create(set => ({
    user: null,
    xp: 0,
    streak: 0,
    lessonsCompleted: 0,
    initStore: () => {
        const storedUser = localStorage.getItem('user');
        const storedXP = localStorage.getItem('xp');
        set({ user: JSON.parse(storedUser), xp: storedXP ? parseInt(storedXP) : 0 });
    },
    completeLesson: () => set(state => ({ lessonsCompleted: state.lessonsCompleted + 1 })),
    // Other user state management methods
}));

export default useUserStore;