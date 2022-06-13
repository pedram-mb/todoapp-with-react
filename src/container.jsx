import React, { Fragment, useContext, useState } from "react";
import { TaskContext } from "./taskContext";

const Container = () => {
  const {TaskItem , setTaskItem} = useContext(TaskContext);

  const HandelIsActive = (id) => {
    const index = TaskItem.findIndex((t) => t.id === id);
    // alert(index);
    let newTaskItem = [...TaskItem];
    newTaskItem[index].isActive = !newTaskItem[index].isActive;
    setTaskItem(newTaskItem);
  };

  const deleteTaskItem = (id) => {
    const deleteTask = TaskItem.filter((t) => t.id !== id);
    setTaskItem(deleteTask);
  };

  // filter array
  
  const [filterisActive , setfilterisActive] = useState([...TaskItem])

  const filterData = (e) => {
    const id = e.target.id;
    console.log(id);
    if (id) {
      document.querySelector(".on").classList.remove("on");
      document.getElementById(id).classList.add("on");
    }
  };

  const HandelAllTask = ()=>{
    let index = filterisActive.filter(t => t.title === "work");
    console.log(index);

    setTaskItem(index)
  }
  const HandelactiveTask = ()=>{
    let index = filterisActive.filter(t => t.isActive === true);
    console.log(index);
    setTaskItem(index)
  }
  const HandelnotactiveTask = ()=>{
    let index = filterisActive.filter(t => t.isActive === false);
    console.log(index);
    setTaskItem(index)
  }

  if (TaskItem.length) {
    return (
      <Fragment>
        <div onChange={filterData} className="FilterArr row justify-content-evenly mt-4 border p-2">
          <button  onClick={HandelAllTask} id="all" className="on col-2 p-1 m-1">
            فعال
          </button>
          <button onClick={HandelactiveTask} id="active" className="col-2 p-1 m-1">
            انجام شده
          </button>
          <button onClick={HandelnotactiveTask} id="notActive" className="col-2 p-1 m-1">
            ناتمام
          </button>
        </div>
        <div className="unorder-list mt-4">
          {TaskItem.map((t) => (
            <div
              className={`list border mt-2 p-2 ${
                t.isActive ? "list-group-item-success" : ""
              }`}
            >
              <p className="text-box text-center">{t.name}</p>
              <div className="box-icons text-center">
                {t.isActive ? (
                  <img
                    className=""
                    onClick={() => HandelIsActive(t.id)}
                    alt=""
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABCklEQVRIS+2V0Q3CMAxEmw0YgRXYACYANoCJEBMwAt0ARmAUNgh3UiJVpXYcV6J8JFJ+GsfPvthu6BZaYSFu18A/U75J/T9SxxhXiOaGfQ0hPLXIYHvC+R52x1IGxTeGszucHJKjnQRP0AvsGGhfglvAWzh6DDL4go+gb9ieAe61rItgXoZjEe6B0qcJLMHxfY2d5TVlmlUwgwU4YXzTKmhVxjnSCdmroV4wWybLm+MRq10qsFqph9AsswtuBk9Vb3pbtdVmZay1jNZqs/rY0qceuCp1mtMcmRwgavWO4C9Mrs3cjNmnhPMnoY7BBGfFs8oZqLjMxaU58Zw1sEc1150mtUs2z6XFpP4Aw0N7H8sLgmQAAAAASUVORK5CYII="
                  />
                ) : (
                  <img
                    className=""
                    onClick={() => HandelIsActive(t.id)}
                    alt=""
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAA2klEQVRIS+3U7RGCMAwGYLKBI7CKG+gmjoATOIKO4Aa6gYziBvXNXbnTXGrTD+VPuOMHNPQhLy00rHTQSu7g8N+S96g96uoEQggHPDwT0V2b5CeLK6KnCG41vDss0CdwhmfZdVfYivJLdINL0G5wKZqFMeEGRTt8o0tqedegX+GInhnGeQQ+SbwWzcEjCh44uWs+PvAW1BK1ireiWZgLgEj8GuPn4eQ+Ta2J5b5pOyl4E2rqeHlDgVd3WtSxwG+43mu/wVy87+OmqEsmtNY6bE2quc6jbo7QOsEL0vllHxTrUFYAAAAASUVORK5CYII="
                  />
                )}
                <img
                  className=""
                  onClick={() => deleteTaskItem(t.id)}
                  alt=""
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABGklEQVRIS+2W4RGCMAyF6QZuoG7gCLCBbOAIbuIIMgIbyAhsIG7gBvXlrnql1zYpP2x/1DvvFNJ8zcuDRjWZPioTtxGDtdYtNnnCdxfZ7KyUGiXFiMCA3pHsIkmImAnwjotlwYAekOTJJXLuHwFfYmskYJL4YZJ0SDj5EppWsHHftWWAjaxuL/dWfwf8fgUk5OIGW/5VxY5ciW1lw1dtKgNs7xnVk1HIWKLHI3Vt0FxFgbEZMh491wuMQkZrAtdYtZIq9qkgveZar4J/ikgllMZVqau5ijVXnjcXe/CZAMl7Pslc/wLfALpKYYG4EYdJ77sXq5hOodTp0ma88acPDYfRYQ+9ogH+vKFqgtIAMYfWslPmBqhoSTbwB0L8Sy7uhpOUAAAAAElFTkSuQmCC"
                />
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    );
  } else {
    return (
      <h3 className="text-danger text-center mt-4">هیچ مقداری وجود ندارد.</h3>
    );
  }
};
export default Container;
