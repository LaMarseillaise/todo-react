import * as React from "react";

import { ToDoCard } from "./ToDoCard";

const toDoItems = [
  { id: 1, title: "Learn React", description: "We must build components for the interface.", completed: false },
  { id: 2, title: "Learn TypeScript", description: "Object orientation is nice.", completed: false },
  { id: 3, title: "Learn Flow", description: "Facebook uses it.", completed: false }
];

export class ToDoApp extends React.Component<undefined, undefined> {
  render() {
    return (
      <div>
        {toDoItems.map((toDoItem: any) => {
          return (
            <ToDoCard key={toDoItem.id} {...toDoItem} />
          );
        })}
      </div>
    );
  }
}
