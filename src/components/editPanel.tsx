import { useState } from "preact/hooks";
import * as State from "../state"

export default function EditPanel() {
    const question = State.getQ(State.editingQIdx.value);
    const [Q, setQ] = useState(question?.question);
    const [A, setA] = useState(question?.answer);
    const [O1, setO1] = useState(question?.other1);
    const [O2, setO2] = useState(question?.other2);

    return (
        <div class="fixed inset-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 p-[60px]">
            <div class="flex h-full w-full bg-gray-50 items-start border border-black p-[30px]">
                <div class="grid grid-cols-1 flex-1 gap-[10px]">
                    <div class = "editRow">
                        <text class="inputLabel">Question</text>
                        <input class="input text" onInput={(e)=>{setQ((e.target as HTMLInputElement).value)}} value={Q} type="text"/>
                    </div>
                    <div class = "editRow">
                        <text class="inputLabel">Answer</text>
                        <input class="input text" onInput={(e)=>{setA((e.target as HTMLInputElement).value)}} value={A} type="text"/>
                    </div>
                    <div class = "editRow">
                        <text class="inputLabel">Other 1</text>
                        <input class="input text" onInput={(e)=>{setO1((e.target as HTMLInputElement).value)}} value={O1} type="text"/>
                    </div>
                    <div class = "editRow">
                        <text class="inputLabel">Other 2</text>
                        <input class="input text" onInput={(e)=>{setO2((e.target as HTMLInputElement).value)}} value={O2} type="text"/>
                    </div>
                    <div class="flex justify-end gap-[10px]">
                        <button class="w-[70px]" 
                            onClick={()=> {
                                if(question && Q && A && O1 && O2) 
                                    State.updateQ(question.id, {
                                        question: Q,
                                        answer: A,
                                        other1: O1,
                                        other2: O2})}}
                            disabled={question?.question !== Q ||
                                    question?.answer !== A ||
                                    question?.other1 !== O1 ||
                                    question?.other2 !== O2 ? false : true}>Save</button>
                        <button class="w-[70px]" onClick={()=> State.editingQIdx.value = null}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}