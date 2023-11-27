<template>

    시간표 입력하는 페이지
    <br />
    
    <input type="file" accept="image/*" @change="changeImage" />
    
    <div class="preview">
      <img :src="previewImage" />
    </div>
    <br/>
    <button @click="saveImage">이 시간표로 입력 확정</button>
    <br />
    링크를 공유하세요

</template>

<script setup>
import { ref } from 'vue';





const previewImage = ref('')  // vue ref- 반응형 값을 저장

const loading = ref(false)

const changeImage = (event) => {
  const files = event.target?.files
  if (files.length > 0) {
    const file = files[0]

    // FileReader 객체 : 웹 애플리케이션이 데이터를 읽고, 저장하게 해줌
    const reader = new FileReader()

    // load 이벤트 핸들러. 리소스 로딩이 완료되면 실행됨.
    reader.onload = (e) => {
      previewImage.value = e.target.result
    } // ref previewImage 값 변경

    // 컨텐츠를 특정 file에서 읽어옴. 읽는 행위가 종료되면 loadend 이벤트 트리거함 
    // & base64 인코딩된 스트링 데이터가 result 속성에 담김
    reader.readAsDataURL(file)

  }
}

function saveImage() {
  alert('hi')
  loading.value = true;

}
</script>

<style>

</style>