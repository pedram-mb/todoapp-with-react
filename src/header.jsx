import React, { Fragment, useContext, useState } from "react";
import { TaskContext } from "./taskContext";

const Header = ()=>{
    const {TaskItem , setTaskItem} = useContext(TaskContext);

    const [Task , setTask] = useState("");
    const HandelSetNewTask = (event)=>{
        setTask(event.target.value)
    }
    
    const HandelSaveNewTask = ()=>{
        setTaskItem([...TaskItem , {id : Math.random , title : "work" , name : Task , isActive : false}])   
        setTask("")
    }



    return(
        <Fragment>
            <div className="top-header">
                <h2 className="header-text text-center mt-3">لیست وظایف</h2>
                <div className="header-input row justify-content-between mt-4">
                    <div className="col-9 col-md-11">
                        <input type="text" className="text-input col-12 p-2" onChange={HandelSetNewTask} value={Task} name="" placeholder="وظایف مورد نظر خود در اینجا وارد کنید ."/>
                    </div>
                    <div className="col-3 col-md-1">
                        <input type="submit" className="btn-input text-center p-2 col-12" onClick={HandelSaveNewTask} name="" value="ثبت" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Header;