<template>
  <button class="p-3 px-4 py-2 rounded bg-indigo-600 text-white cursor-pointer hover:bg-indigo-700" @click="translate">Translate</button>
</template>

<script setup>

const emit = defineEmits(['translate']);
const translate = () => {
  emit(`translate`, );
}

</script>
