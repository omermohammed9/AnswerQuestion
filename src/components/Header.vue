<template>
  <div>
    <nav class="bg-black text-white flex justify-center py-4">
      <h1 class="font-bold text-2xl">Find Your Answer</h1>
    </nav>
  </div>
    <div class="flex gap-4 py-6">
      <h2 class="text-2xl font-bold text-center mx-5">Description</h2>
    </div>
  <div class="container">
    <p class="animated-text">1-Quick Answers: Have a question? Use our pre-trained models to get accurate responses. Simply type your question in the provided input field, and our models will provide you with the answer.</p>
    <p class="animated-text">2-Easy Content Access: Want to read text content from a webpage? Copy the URL and paste it into the designated input field. Our website will fetch the content for you to read, making it hassle-free.</p>
    <p class="animated-text">3-Reading TXT Files: Need to access content from a local TXT file on your computer? No worries! Upload the TXT file using the provided button, and we'll display the content for you.</p>
    <p class="animated-text">4-Copy-Paste Convenience: Have your own text content to view? Just copy and paste it into the input box, and we'll present it neatly for your reading pleasure.</p>
    <p class="animated-text">5-Multilingual Translation: To explore languages beyond your own, use our Google Cloud API integration. Enter the text you wish to translate, and select the target language from the options like French, German, or Arabic.</p>
    <p></p>
    <p></p>
  </div>
</template>

<style>
/* Style for the text container */
.container {
  border: 1px solid #000;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 20px;
  overflow: hidden;
}



/* Animation for the letters */
.animated-text {
  display: inline-block;
  animation: bounce 1s infinite alternate;
}

/* Keyframes for the animation */
@keyframes bounce {
 0% {
   transform: translateY(0);
  }
 100% {
   transform: translateY(-5px);
  }
}
</style>
<script setup>
</script>