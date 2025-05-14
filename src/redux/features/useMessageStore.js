// useMessageStore.js (zustand store)
import { create } from 'zustand';

const useMessageStore = create((set) => ({
  message: '',
  messageType: '',
  setMessage: (message, type) => set({ message, messageType: type }),
  clearMessage: () => set({ message: '', messageType: '' }), 
}));

export default useMessageStore;
