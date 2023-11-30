import { createRouter, createWebHistory } from 'vue-router'
import mainView from '../views/MainView.vue'
import {useRoomStore} from '@/stores/room';
import {$axios} from '@/utils/HttpCommons';
import {storeToRefs} from 'pinia';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: mainView
    },
    {
      path: '/make',
      name: 'makeRoom',
      component: () => import('@/views/MakeRoomView.vue')
    },
    {
      path: '/room',
      name: 'room',
      component: () => import('@/views/RoomView.vue'),
      redirect: { name: "roomNumber" },
      children: [
        {
          path: ":roomNumber",
          name: "roomNumber",
          component: () => import("@/components/room/InputTime.vue"),
          beforeEnter : (to, from , next) => {
            const roomNumber = to.params?.roomNumber;

            const roomStore = useRoomStore()
            const {room} = storeToRefs(roomStore)
            let body = {
              teamname : roomNumber,
            }

            $axios.post('/api/room', body)
            .then((response) => {
              if (response.data.msg === "success") {
                next()
                room.value = roomNumber;
              } else {
                alert('방이 없습니다')
                next(from)
              }
            })
            .catch((err) => {

            })
          }
        },
        {
          path: "confirm",
          name: "InputPassword",
          component: () => import("@/components/room/InputPassword.vue"),
          meta: { requiresAuth: true }
        },
      ],

    }
  ]
})

export default router
