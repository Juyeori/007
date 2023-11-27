<template>
  회의 만드는 페이지
  <br/>
  방 이름 <input v-model="name">
  사람 수 <input v-model="people">
  <br/>

  <button @click="makeRoom">방 개설하기</button>
</template>

<script setup>
import {ref} from 'vue'
import {useRoomStore} from '@/stores/room';
import {useRouter} from 'vue-router';

const router = useRouter();
const rooms = useRoomStore();

const name = ref('');
const people = ref();

function makeRoom() {
  rooms.saveRoom(name.value)
  router.push('/')
}

</script>

<style>

</style>

