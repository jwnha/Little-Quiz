import * as State from "../state"
import * as Restore from "../undo"

export default function ModeBarView() {

    const list = State.mode.value === "list";

    return (
        <div class = {"p-[10px] flex justify-between items-center" + (State.mode.value === "list" ?  " bg-gray-300" : " bg-blue-200")}>
            <div class ={ list ? "flex gap-[10px]" : "hidden" }>
                <button class="w-[60px]" onClick={Restore.undo} disabled={Restore.undoStack.value.length <= 0}>Undo</button>
                <button class="w-[60px]" onClick={Restore.redo} disabled={Restore.redoStack.value.length <= 0}>Redo</button>
            </div>
            <text class={ list ? "hidden" : "visible" }>
                {
                    State.quizCompleted.value ? "Quiz Completed" : "Question " + `${State.currentQIdx} of ${State.numSelected}`
                }
            </text>
            <button 
                class="w-[100px]"
                onClick={() => {
                    if(State.mode.value === "list"){
                        State.mode.value = "quiz";
                        State.endQuiz();
                    }
                    else{
                        State.mode.value = "list";
                    }
                }}
                disabled={State.numSelected.value <= 0}
            >{ list ? "Quiz" : "Exit" }</button>
        </div>
    )
}