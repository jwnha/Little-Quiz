import * as State from "../state"

type QuestionProps = {
    question: State.Question;
};

export default function QuestionItem({ question }: QuestionProps) {
    return (
        <div key = {question.id} class = "p-[8px] gap-[8px] flex flex-none flex-wrap items-center bg-blue-200 cursor-pointer" 
            onDblClick={()=>{
                State.editingQIdx.value = question.id;
            }}>
            <input 
                type="checkbox"
                checked={question.selected}
                onInput={() => State.updateQSelected(question.id, !question.selected)}
                onDblClick={(e)=>{e.stopImmediatePropagation()}}
            />
            <text class="text-[10pt] font-sans">{question.question}</text>
        </div>
    )
} 