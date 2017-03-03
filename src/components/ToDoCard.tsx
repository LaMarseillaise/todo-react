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
    let divStyle: { color?: string } = {};

    if (this.props.completed) {
      divStyle.color = "blue";
    } else {
      divStyle.color = "red";
    }

    return (
      <div style={divStyle}>
        <h3>{ this.props.title }</h3>
        <p>
          { this.props.description }
        </p>
        <input type="checkbox" onChange={this.completeToDo} checked={this.state.completed} />
        <button onClick={this.remove} style={ { backgroundColor: "red" } }>
          X
        </button>
      </div>
    );
  }
}
