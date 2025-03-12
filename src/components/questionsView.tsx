import ToolBarView from "./toolBar"
import QuestionItem from "./questionItem"
import * as State from "../state"

export default function QuestionsView() {
    return (
        <div class = "p-[10px] flex flex-auto flex-col bg-white">
            <ToolBarView />
            <div class="p-[10px] flex border border-black gap-[10px] flex-auto content-start flex-wrap">
                {State.questions.value.map((question)=>
                    <QuestionItem question = {question}/>
                )}
            </div>
        </div>
    )
}