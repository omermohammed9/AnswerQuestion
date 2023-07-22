//To load a file as txt format from the file system
const handleFileChange = (event, displayedContent, fileInputRef) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
        displayedContent.value=event.target.result;
        fileInputRef.value='';
    };
    reader.readAsText(file);
};

export default handleFileChange;