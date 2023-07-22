import axios from "axios";

const UrlHandler = async (url, displayedContent) =>{
    const response= await axios.post('http://localhost:8080/url', {
        url: url.value,
    })
    displayedContent.value=response.data;
    url.value='';
    console.log(displayedContent.value);
    //displayContent.value= "";
}
export default UrlHandler;