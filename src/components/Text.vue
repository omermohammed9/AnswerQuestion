<template>
  <div class="flex gap-4 mb-4 p-5">
    <span class="p-3">Enter text to display:</span>
    <input class="input-field p-2 border border-gray-300 rounded" type="text" v-model="textContent" @keyup.enter="displayContent" placeholder="Enter text"  />
    <button class="p-3 px-4 py-2 rounded bg-indigo-600 text-white cursor-pointer hover:bg-indigo-700" @click="displayContent">
      Show Text
    </button>
  </div>
  </template>

<script setup>

import {ref} from "vue";

const props = defineProps({

})
const emit = defineEmits(['displayContent']);
const textContent = ref('');

const displayContent = () => {
  emit(`displayContent`, textContent.value);
}
</script>
