import React, { Fragment, useState } from "react";
import Container from "./container";
import Header from "./header";
import { TaskContext } from "./taskContext";

const App = ()=>{
  const [TaskItem , setTaskItem] = useState([
    {
      id : 1,
      name : "کار شماره 1",
      isActive : false,
      title : "work",
    },
    {
      id : 2,
      name : "کار شماره 2",
      isActive : true,
      title : "work",
    },
    {
      id : 3,
      name : "کار شماره 3",
      isActive : false,
      title : "work",
    },
    {
      id : 4,
      name : "کار شماره 4",
      isActive : true,
      title : "work",
    },
    {
      id : 5,
      name : "کار شماره 5",
      isActive : false,
      title : "work",
    },
  ])
  return(
    <Fragment>
      <div className="container content">
        <TaskContext.Provider value={{
          TaskItem,
          setTaskItem,
        }}>
          <Header/>
          <Container/>
        </TaskContext.Provider>
      </div>
    </Fragment>
  )
}
export default App;