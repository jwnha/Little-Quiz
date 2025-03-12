import * as State from "../state"

export default function StatusBarView() {
    const numSelected = State.numSelected.value;
    const numQs = State.numQs.value;

    return (
        <div class = "p-[10px] flex justify-between bg-gray-300">
            <text>{(numQs <= 0 ? "" : `${numQs} question${numQs !== 1 ? "s" : ""}`) + (numSelected > 0 ? ` (${numSelected} selected)`:"") }</text>
            <text class = {State.cheating.value? "visible" : "invisible"}>CHEATING</text>
        </div>
    )
}