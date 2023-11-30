<template>
  회의 만드는 페이지
  <br/>
  방 이름 <input v-model="name">
  방 비밀번호 <input v-model="password">
  <br/>

  <button @click="makeRoom">방 개설하기</button>
</template>

<script setup>
import {ref} from 'vue'
import {useRoomStore} from '@/stores/room';
import {useRouter} from 'vue-router';
import {$axios} from '@/utils/HttpCommons';

const router = useRouter();

const rooms = useRoomStore();

const name = ref('');
const password = ref('');

function makeRoom() {
  let body = {
    teamname : name.value,
    password : password.value,
  }

  $axios.post('/api/room/make', body)
  .then((response) => {
    if (response.data.msg === "success") {
      router.push(`/room/${name.value}`)
    } else {
      alert('다시 하셈')
      router.push('/make')
    }
  })
  .catch((err) => {

  })
}

</script>

<style>

</style>

