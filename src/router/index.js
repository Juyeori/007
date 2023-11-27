import { createRouter, createWebHistory } from 'vue-router'
import mainView from '../views/MainView.vue'
import {useRoomStore} from '@/stores/room';




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

            const rooms = useRoomStore();
            let sign = rooms.findRoom(roomNumber)

            if (sign === false) {
                alert('방 없음')
                next('/')
            } else {
                next()
            }  
          }
        },
        // {
        //   path: "view/:articleNumber",
        //   name: "article-view",
        //   component: () => import("@/components/board/BoardDetail.vue"),
        // },
        // {
        //   path: "write",
        //   name: "article-write",
        //   component: () => import("@/components/board/BoardWrite.vue"),
        // },
        // {
        //   path: "modify/:articleNumber",
        //   name: "article-modify",
        //   component: () => import("@/components/board/BoardModify.vue"),
        // },
      ],

    }
  ]
})

export default router
