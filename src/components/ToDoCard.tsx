import * as React from "react";

export interface ToDoCardProps {
  title: String;
  description: String;
  completed: boolean;
}

export class ToDoCard extends React.Component<ToDoCardProps, undefined> {
  render() {
    return (
      <div>
        <h3>{ this.props.title }</h3>
        <p>
          { this.props.description }
        </p>
      </div>
    );
  }
}
