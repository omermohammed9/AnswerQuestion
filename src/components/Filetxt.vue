<template>
  <div class="instructional-field">
    <span class="m-4">Select a TXT file:</span>
    <input class="file-input" type="file" ref="fileInputRef" @change="TXTfile" />
  </div>
</template>

<script setup>

import {ref} from "vue";
const emit = defineEmits(['handleFileChange']);
const fileInputRef = ref(``);
const TXTfile =(event) =>{
  emit(`handleFileChange`, event, fileInputRef);
}


</script>