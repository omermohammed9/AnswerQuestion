// Another model from HuggingFace to answer questions based on the displayed content:
import { HfInference } from '@huggingface/inference';

const hf = new HfInference('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');
const modelName = 'deepset/roberta-base-squad2';

 const askQuestionM2 = async (question, context) => {
    try {
        const answer = await hf.questionAnswering({
            model: modelName,
            inputs: {
                question,
                context,
            },
        });

        return answer.answer;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
export default askQuestionM2;



// import {HfInference} from "@huggingface/inference";
// const hf = new HfInference( "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");
//
// const a = await hf.questionAnswering({
//     model: 'deepset/roberta-base-squad2',
//     inputs: {
//         question: 'What is the capital of France?',
//         context: 'The capital of France is Paris.'
//     }
// })
// console.log(a.answer);


//Other options can be used
//deepset/tinyroberta-squad2
//'Mathnub/ruRoberta-sberquad',



