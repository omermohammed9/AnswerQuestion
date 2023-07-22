<template>
  <div class="grid gap-4">
    <div class="flex gap-4 mb-4 p-2">
      <span class="instructional-field p-2">Model2</span>
      <input class="input-field p-2 border border-gray-300 rounded w-full" type="text" v-model="question" placeholder="Search your question" @keyup.enter="questionQuery" />
      <button class="p-3 px-4 py-2 rounded bg-indigo-600 text-white cursor-pointer hover:bg-indigo-700" @click="questionQuery">
        Search
      </button>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const question = ref(``);
const emit = defineEmits(['askQuestionM2']);

const questionQuery = () => {
  emit('askQuestionM2', question);
}
console.log(question.value)

</script>