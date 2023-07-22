const displayContent = (displayedContent,textContent, fileInputRef) => {
    displayedContent.value = textContent.value;
    // console.log("Function called");
    textContent.value = ""; // Clear the input field
    fileInputRef.value="";
    //url.value="";
};
export default displayContent;