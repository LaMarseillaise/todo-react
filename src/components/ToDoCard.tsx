import * as React from "react";

interface ToDoCardProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  toggleComplete: Function;
  remove: Function;
}

interface ToDoCardState {
  completed: boolean;
}

export class ToDoCard extends React.Component<ToDoCardProps, ToDoCardState> {
  constructor(props: ToDoCardProps) {
    super(props);

    this.state = {
      completed: props.completed
    };

    this.completeToDo = this.completeToDo.bind(this);
    this.remove = this.remove.bind(this);
  }

  completeToDo(): void {
    this.props.toggleComplete(this.props.id);
  }

  remove(): void {
    this.props.remove(this.props.id);
  }

  render(): JSX.Element {
    let itemClass: string;

    if (this.props.completed) {
      itemClass = "list-group-item list-group-item-success";
    } else {
      itemClass = "list-group-item list-group-item-warning";
    }

    return (
      <li className={itemClass}>
        <input type="checkbox" onChange={this.completeToDo} checked={this.state.completed} className="pull-left" />
        <button onClick={this.remove} className="btn btn-danger btn-xs pull-right">X</button>
        &nbsp;{ this.props.title }: { this.props.description }
      </li>
    );
  }
}
