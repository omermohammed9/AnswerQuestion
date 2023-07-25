<template>
  <div>
    <div>
      <Header></Header>
    </div>
    <div class="container mx-auto p-4">
      <div class="flex flex-col items-center mb-4">
        <Text @displayContent= "showText"> </Text>
        <div class="flex flex-col items-center mb-2">
          <Url @UrlHandler="UrlScrapping"> </Url>
        </div>
    <Filetxt @handleFileChange="filetxt" ></Filetxt>
      </div>
      <div class="flex flex-col items-center mb-4 mx-auto">
    <div class="flex gap-4 mb-4 p-5">
      <div class="mr-10">
          <Model1 @askQuestionM1="QuestionAnswerM1" ></Model1>
      </div>
      <Model2 @askQuestionM2="QuestionAnswerM2"></Model2>
    </div>
        <div class="container grid grid-cols-2 gap-5 text-center ">
          <div class="grid gap-4">
              <span class="font-bold">Your Text</span>
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
              <TranslateText @translate="trans"></TranslateText>
            </div>
          </div>
          <div class="mt-0.5 flex flex-col">
            <span class="font-bold mb-4">Translated Text</span>
            <textarea  class="w-full h-40 border border-black rounded text-center resize-none overflow-y-auto">
             {{ translatedtxt }} </textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Header from "@/components/Header.vue";
import Text from "@/components/Text.vue";
import Url from "@/components/Url.vue";
import Filetxt from "@/components/Filetxt.vue";
import Model1 from "@/components/Model1.vue";
import TranslateText from "@/components/TranslateText.vue";
import translate from "@/Functions/Translate";
import UrlHandler from "@/Functions/UrlScrapping";
import handleFileChange from "@/Functions/FileText";
import displayContent from "@/Functions/ShowContent";
import {
  displayedContent,
  fileInputRef,
  selectedLanguage,
  targetLanguage,
  translatedtxt
} from "@/Variables/Variables";
import Model2 from "@/components/Model2.vue";
import askQuestionM2 from "@/HuggingFaceModel/Model";
import askQuestionM1 from "@/Functions/QuestionAnswerM1";

const QuestionAnswerM1 = async (question) => {
  await askQuestionM1(question, displayedContent);
};

const showText = (textContent) =>{
  displayContent(displayedContent, textContent, fileInputRef);
};

const filetxt = (event)=>{
  handleFileChange(event, displayedContent, fileInputRef)
};

const UrlScrapping = async (url) => {
  await UrlHandler(url, displayedContent);
};

const trans = async () => {
  await translate(targetLanguage, displayedContent, translatedtxt, selectedLanguage);
};

const QuestionAnswerM2 = async (question2) => {
  try {
    const answer = await askQuestionM2(question2.value, displayedContent.value);
    swal('The answer to your question is:', answer, 'success');
    console.log(answer);
  } catch (error) {
    console.error('Error:', error);
  }
};

</script>

