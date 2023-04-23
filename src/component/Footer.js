import React from "react";

function Footer(props) {
  const user = "Demoscou";
  const date = new Date();
  

  let statusList = Object.keys(props.task);
  let activeTasks = props.task[statusList[0]].length;
  let finishedTasks = props.task[statusList[3]].length;

  return (
    <footer className="footer">
      <div className="footer__layout">
        <div className="footer_column">
          <span className="footer__score_active">
            <nobr>Active tasks: {activeTasks}</nobr>
          </span>
          <span className="footer__score_finished">
            <nobr>Finished tasks: {finishedTasks}</nobr>
          </span>
        </div>
        <span className="footer__user">
          Kanban board by {user}, {date.getFullYear()}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
