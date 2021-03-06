import React, { useRef, useEffect, useContext } from "react";
import { TodoContext } from "../context";

function SideBar({ children }) {
  //ref
  const sidebarRef = useRef();

  //context
  const { setSelectedTodo } = useContext(TodoContext);

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  });

  const handleClick = (e) => {
    if (
      e.target === sidebarRef.current ||
      sidebarRef.current.contains(e.target)
    ) {
      setSelectedTodo(undefined);
    }
  };
  return (
    <div className="SideBar" ref={sidebarRef}>
      {children}
    </div>
  );
}

export default SideBar;
