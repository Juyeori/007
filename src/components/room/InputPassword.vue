<template>
    비밀번호 입력 <input type="password" v-model="password">
    <button @click="checkPassword">전송</button>
</template>

<script setup>
import {ref} from 'vue';
import {useRoomStore} from '@/stores/room';
import {$axios} from '@/utils/HttpCommons';

const password = ref('')
const name = defineProps(['room'])

const roomStore = useRoomStore();

function checkPassword() {
    let body = {
        teamname : history.state.room,
        password : password.value,
    }
    
    $axios.post("/api/room/confirm", body)
    .then((response) => {
        if (response.data.msg === "success") {
            roomStore.checkIn()
            router.push({name : 'roomNumber'})
            alert("여기")
        } else {
            alert(response.data.msg)
        }
    })
    .catch((err) => {

    })
    
}
</script>

<style>

</style>