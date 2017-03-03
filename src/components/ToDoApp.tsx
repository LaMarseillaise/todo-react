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
    this.removeToDoItem = this.removeToDoItem.bind(this);
    this.toggleToDoItem = this.toggleToDoItem.bind(this);
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

  removeToDoItem(id: number): void {
    let updatedToDoList = this.state.toDoItems.filter((toDoItem: ToDoItem): boolean => {
      return toDoItem.id !== id;
    });

    this.setState({ toDoItems: updatedToDoList });
  }

  toggleToDoItem(id: number): void {
    let newToDoItems = this.state.toDoItems.map((toDoItem: ToDoItem) => {
      let updated = {
        id: toDoItem.id,
        completed: toDoItem.completed,
        title: toDoItem.title,
        description: toDoItem.description
      };
      if (toDoItem.id === id) { updated.completed = !toDoItem.completed; }
      return updated as ToDoItem;
    });

    this.setState({ toDoItems: newToDoItems });
  }

  render(): JSX.Element {
    return (
      <main className="container">
        <h1 className="text-center">Agenda</h1>
        <ul className="list-group">
          {this.state.toDoItems.slice()
            .sort((a: ToDoItem, b: ToDoItem): number => {
              return (a.completed ? 1 : 0) - (b.completed ? 1 : 0);
            })
            .map((toDoItem: ToDoItem) => {
              return (
                <ToDoCard key={toDoItem.id} {...toDoItem} remove={this.removeToDoItem} toggleComplete={this.toggleToDoItem} />
              );
            })
          }
        </ul>
        <ToDoForm createToDoItem={this.addToDoItem} />
      </main>
    );
  }
}
