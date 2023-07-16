// import express from 'express';
// import { HfInference } from '@huggingface/inference';
// import cors from 'cors';
//
// const app = express();
// const port = 4030; // Change this to your desired port number
// const hf = new HfInference('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');
//
// app.use(express.json());
// app.use(cors({ origin: '*' }));
//
// app.post('/question-answering', async (req, res) => {
//     const { question, context } = req.body;
//     try {
//         const answer = await hf.questionAnswering({
//             model: 'deepset/roberta-base-squad2',
//             inputs: {
//                 question,
//                 context
//     }
// })
//         res.json({ answer });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'An error occurred' });
//     }
// });
// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// });


// import {HfInference} from "@huggingface/inference";
// const hf = new HfInference( "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");
// const answer =  await hf.questionAnswering({
//     model: 'deepset/roberta-base-squad2',
//     inputs: {
//         question: 'What is the capital of France?',
//         context: 'The capital of France is Paris.'
//     }
// })
// console.log(answer.answer);




