import {ref} from 'vue';
import { defineStore } from 'pinia';

export const useRoomStore = defineStore('room', () => {
  const room = ref('')

  function getRoom() {
    return room.value
  }
    return {room, getRoom}
});
