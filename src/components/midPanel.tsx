import QuestionsView from "./questionsView"
import QuizView from "./quizView"
import * as State from "../state"

export default function MidPanelView() {
    return (
        <div class = "flex-auto flex bg-gray-100 overflow-hidden">
            { State.mode.value === "list" ?
                <QuestionsView /> : 
                <QuizView selected={ State.shuffle(State.questions.value.filter((q) => q.selected === true)) as State.Question[]}/>
            }
        </div>
    )
}