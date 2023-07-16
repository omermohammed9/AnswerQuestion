<template>
  <div>
   <Header></Header>
    <div class="container mx-auto p-4">
      <div class="flex flex-col items-center mb-4">
<!--        <div class="flex gap-4 mb-4 p-5">-->
<!--          <span class="p-3">Enter text to display:</span>-->
<!--          <input class="input-field p-2 border border-gray-300 rounded" type="text" v-model="textContent" @keyup.enter="displayContent" placeholder="Enter text"  />-->
<!--          <button class="p-3 px-4 py-2 rounded bg-indigo-600 text-white cursor-pointer hover:bg-indigo-700" @click="displayContent">-->
<!--            Show Text-->
<!--          </button>-->
<!--        </div>-->
        <Text> @displayContent= "displayContent"</Text>
        <div class="flex flex-col items-center mb-2">
          <div class="flex gap-4 mb-4 p-5">
            <span class="p-2">Enter URL to display:</span>
            <input class="input-field p-2 border border-gray-300 rounded" type="url"  v-model="url" @keyup.enter="UrlHandler" placeholder="Enter Url"  />
            <button class="p-3 px-4 py-2 rounded bg-indigo-600 text-white cursor-pointer hover:bg-indigo-700" @click="UrlHandler">
              Enter Link
            </button>
          </div>
          </div>
        <div class="instructional-field">
          <span class="m-4">Select a TXT file:</span>
          <input class="file-input" type="file" ref="fileInputRef" @change="handleFileChange" />
        </div>
      </div>
      <div class="flex flex-col items-center mb-4 mx-auto">
    <div class="flex gap-4 mb-4 p-5">
      <div class="mr-10">
        <div class="flex gap-4 mb-4 p-2">
          <span class="instructional-field p-2">Model1</span>
          <input class="input-field p-2 border border-gray-300 rounded w-full" type="text" v-model="question" placeholder="Search your question" @keyup.enter="answerQuestion" />
          <button class="p-3 px-4 py-2 rounded bg-indigo-600 text-white cursor-pointer hover:bg-indigo-700" @click="answerQuestion">
            Search
          </button>
        </div>
      </div>
      <div class="grid gap-4">
        <div class="flex gap-4 mb-4 p-2">
          <span class="instructional-field p-2">Model2</span>
          <input class="input-field p-2 border border-gray-300 rounded w-full" type="text" v-model="question2" placeholder="Search your question" @keyup.enter="askQuestion" />
          <button class="p-3 px-4 py-2 rounded bg-indigo-600 text-white cursor-pointer hover:bg-indigo-700" @click="askQuestion">
            Search
          </button>
        </div>
      </div>
    </div>
        <div class="container grid grid-cols-2 gap-5 text-center ">
          <div class="grid gap-4">
              <span class="">Your Text</span>
            <textarea class="w-full h-40 border border-black rounded text-center resize-none overflow-y-auto">
             {{ displayedContent }} </textarea>
            <div class="flex gap-4 justify-between">
              <div class="relative">
                <div class=" top-12 bg-auto border border-gray-300 rounded py-2 px-4 shadow mt-0 gap-2">
                  <label for="language-select"> Translation Language:</label>
                  <select id="language-select" @change="selectedLanguage = $event.target.value">
                    <option value="">Select a language</option>
                    <option v-for="language in targetLanguage" :value="language.id" :key="language.id">{{ language.name }}</option>
                  </select>
                </div>
              </div>
              <button class="p-3 px-4 py-2 rounded bg-indigo-600 text-white cursor-pointer hover:bg-indigo-700" @click="Translate">Translate</button>
            </div>
          </div>
          <div class="mt-0.5 flex flex-col">
            <span class="mb-4">Translated Text</span>
            <textarea  class="w-full h-40 border border-black rounded text-center resize-none overflow-y-auto">
             {{ translatedtxt }} </textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {onMounted, ref} from "vue";
import { qnamodel } from "./qnamodel";
import axios from "axios";
import {HfInference} from "@huggingface/inference";
import Header from "@/components/Header.vue";
import Text from "@/components/Text.vue";
import displayContent from "@/components/Text.vue.vue";

const fileInputRef = ref(``);
const question = ref();
const question2=ref();
const textContent = ref(``);
const displayedContent = ref(``);
const url = ref(``);
const text = ref(``);
const targetLanguage = ref([
  { id: 'fr', name: 'French' },
  { id: 'de', name: 'German' },
  { id: 'es', name: 'Spanish' },
  {id:'ar',name:'Arabic'},
]);
let selectedLanguage = ref(0);
const translatedtxt=ref(``);
const hf = new HfInference( "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");

const answerQuestion = async () => {
  const answers = await qnamodel.findAnswers(question.value, displayedContent.value);
  console.log(answers);
  if (answers.length >= 4) {
    setTimeout(() => {
      swal("The answer to your question is: ", answers[3].text, "success");
    }, 0);
  } else {
    setTimeout(() => {
      swal("Your Question is not in the context of the text", 'error', "error");
    }, 0);
  }

    //displayedContent.value = "";
   question.value = "";
};

console.log(displayedContent.value);
const displayContent = (text) => {
  displayedContent.value = textContent.value;
  textContent.value = ""; // Clear the input field
  fileInputRef.value="";
  url.value="";
};
const handleFileChange = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    const TXTFileContent = event.target.result;
    displayedContent.value=TXTFileContent;
    fileInputRef.value='';
  };
  reader.readAsText(file);
};

const UrlHandler = async () =>{
  const response= await axios.post('http://localhost:8080/url', {
    url: url.value,
  })
  displayedContent.value=response.data;
  displayContent.value= "";
}
const Translate = async () => {
  const selectedLanguageCode = targetLanguage.value.find((language) => language.id === selectedLanguage.value)?.id;
  try {
    const response = await axios.post('http://localhost:3000/translate', {
      text: displayedContent.value,
      targetLanguage: selectedLanguageCode,
    });
    translatedtxt.value = await response.data.translatedText;
  } catch (error) {
    console.error(error);
  }
};

const askQuestion = async () => {
  const answer =  await hf.questionAnswering({
    model: 'deepset/roberta-base-squad2',
    inputs: {
      question: question2.value,
      context: displayedContent.value,
    }
  })
  swal("The answer to your question is: ", answer.answer, "success");
  console.log(answer.answer);
};
</script>

