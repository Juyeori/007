import {ref} from 'vue';
import { defineStore } from 'pinia';

export const useRoomStore = defineStore('room', () => {
  const room = ref([
    'a','b','c'
  ])

  function findRoom(number) {
    for (let i = 0; i < room.value.length; i++) {
        if (number === room.value[i]) {
            
            return true;
        }
    }

    return false;
  }

  function saveRoom(number) {
    room.value.push(number)
    
  }
    
    return {room, findRoom, saveRoom}
});
