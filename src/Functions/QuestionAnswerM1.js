// import {qnamodel} from "@/qnamodel";
import {model} from "@/qnamodel";

const askQuestionM1 = async (question, displayedContent) => {
    const qnamodel = await model();
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
export default askQuestionM1;