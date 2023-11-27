<template>
    <div>

        메인페이지
        <br/>
        <router-link :to="{name:'makeRoom'}">회의 개설하기</router-link>
        <br/>
        
        회의 번호<input v-model="roomNumber">
        <router-link :to="`/room/${roomNumber}`">회의 들어가기</router-link>
    </div>

        
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router';
import {ref} from 'vue';
import {useRoomStore} from '@/stores/room';

const roomNumber = ref('');


</script>


<style scoped>

</style>