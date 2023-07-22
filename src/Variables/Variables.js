import { ref } from 'vue';

export const fileInputRef = ref('');
export const displayedContent = ref('');
export const text = ref('');
export const targetLanguage = ref([
    { id: 'fr', name: 'French' },
    { id: 'de', name: 'German' },
    { id: 'es', name: 'Spanish' },
    { id: 'ar', name: 'Arabic' },
]);
export const selectedLanguage = ref(0);
export const translatedtxt = ref('');
