import { useLayoutEffect, useState } from "preact/hooks";
import * as State from "../state"

type QuizViewProps = {
    selected: State.Question[]
};

export default function QuizView({ selected }: QuizViewProps) {
    const currentQ = selected[State.currentQIdx.value-1];
    let [answers, setAnswers] = useState([currentQ.answer, currentQ.other1, currentQ.other2]);

    useLayoutEffect(() => {
        setAnswers(State.shuffle([currentQ.answer, currentQ.other1, currentQ.other2]) as string[]);
    }, [State.currentQIdx.value])

    return (
        <div class = "p-[10px] m-[30px] border border-black flex flex-auto flex-col bg-white">
            <text class="text-[12pt] font-bold flex justify-center items-center text-center flex-1">
                {  
                   State.quizCompleted.value ? `${State.numCorrect.value} Correct, ${State.numSelected.value - State.numCorrect.value} Incorrect` : currentQ.question
                }
            </text>
            {
                !State.quizCompleted.value && 
                <div class = "flex gap-[20px]">
                    {
                        answers.map((option) => {
                            const correct = option === currentQ.answer;
                            return (
                                <button 
                                    class={(correct && State.cheating.value) ? "q-buttons answer" : "q-buttons"} 
                                    onClick={() => {
                                        if(correct) State.numCorrect.value++;
                                        State.next();}}>
                                    {option}
                                </button>
                            )
                        })
                    }
                </div> 
            }
        </div>
    )
}