<template>
    <div class="flex gap-4 mb-4 p-5">
      <span class="p-2">Enter URL to display:</span>
      <input class="input-field p-2 border border-gray-300 rounded" type="url" v-model="url" @keyup.enter="urlContent" placeholder="Enter Url"/>
      <button class="p-3 px-4 py-2 rounded bg-indigo-600 text-white cursor-pointer hover:bg-indigo-700" @click="urlContent">
        Enter Link
      </button>
    </div>
</template>

<script setup>
import {ref} from "vue";

const emit = defineEmits(['UrlHandler']);
const url= ref(``);
const urlContent  = () => {
  emit(`UrlHandler`, url);
}
</script>