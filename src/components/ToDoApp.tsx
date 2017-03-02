import * as React from "react";

import { ToDoCard } from "./ToDoCard";
import { ToDoForm } from "./ToDoForm";

import { ToDoItem } from "../models/ToDoItem";
// Sample data for testing
import { toDoItems } from "../sampleData";

interface ToDoAppProps {}
interface ToDoAppState {
  toDoItems: ToDoItem[];
  nextId: number;
}

export class ToDoApp extends React.Component<ToDoAppProps, ToDoAppState> {
  constructor(props: ToDoAppProps) {
    super(props);

    this.state = {
      toDoItems: toDoItems,
      nextId: toDoItems.length + 1
    };

    this.addToDoItem = this.addToDoItem.bind(this);
  }

  addToDoItem(title: string, description: string): void {
    let toDoItem: ToDoItem = {
      id: this.state.nextId,
      title: title,
      description: description,
    } as ToDoItem;

    this.setState({
      toDoItems: this.state.toDoItems.concat([toDoItem]),
      nextId: this.state.nextId + 1
    });
  };

  render(): JSX.Element {
    return (
      <div>
        {this.state.toDoItems.map((toDoItem: any) => {
          return (
            <ToDoCard key={toDoItem.id} {...toDoItem} />
          );
        })}
        <ToDoForm createToDoItem={this.addToDoItem} />
      </div>
    );
  }
}
