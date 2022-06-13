import { createContext } from "react";

export const TaskContext = createContext({
    TaskItem : [],
    setTaskItem : ()=>{},
});