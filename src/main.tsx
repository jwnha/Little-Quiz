import { render } from 'preact'
import { useEffect } from "preact/hooks";

import ModeBarView from './components/modeBar';
import MidPanelView from './components/midPanel';
import StatusBarView from './components/statusBar';
import EditPanel from './components/editPanel';
import * as State from "./state"

import "./style.css";

export default function App() {

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if(e.key === "?"){
                State.cheating.value = !State.cheating.value;
            }    
        };

        document.addEventListener("keydown", handler);        
        
        return () => {
            document.removeEventListener("keydown", handler);
        };
    }, []);

    return (
        <div class = "h-screen flex justify-center flex-col bg-gray-500">
            <ModeBarView />
            <MidPanelView />
            <StatusBarView />
            {State.editingQIdx.value && <EditPanel />}
        </div>
    );
}

render(<App />, document.querySelector("div#app") as HTMLElement);
