import * as State from "../state"

export default function ToolBarView() {
    return (
        <div class = "p-[10px] border border-black flex bg-gray-100 gap-[10px]">
            <button class="w-[80px]" onClick={State.selectAll} disabled={State.numQs.value === State.numSelected.value}>All</button>
            <button class="w-[80px]" onClick={State.deselectAll} disabled={State.numSelected.value <= 0}>None</button>
            <button class="w-[80px]" onClick={State.deleteSelected} disabled={State.numSelected.value <= 0}>Delete</button>
            <button class="w-[80px]" onClick={State.addQuestion} disabled={State.numQs.value >= 10}> Add </button>
        </div>
    )
}