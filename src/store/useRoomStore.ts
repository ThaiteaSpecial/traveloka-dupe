import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface RoomOption {
  id: string;
  title_room: string;
  sub_title_room: string;
  bed_count: number;
  bed_type: string;
  is_refund: boolean;
  guest_count: number;
  price: number;
  hotel_name: string;
  hotel_id: string;
}

interface RoomStore {
  selectedRoom: RoomOption | null;
  setSelectedRoom: (room: RoomOption) => void;
  clearSelectedRoom: () => void;
}

export const useRoomStore = create<RoomStore>()(
  persist(
    (set) => ({
      selectedRoom: null,
      setSelectedRoom: (room) => set({ selectedRoom: room }),
      clearSelectedRoom: () => set({ selectedRoom: null }),
    }),
    {
      name: 'room-storage',
    }
  )
); 