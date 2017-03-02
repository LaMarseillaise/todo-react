import * as React from "react";

interface ToDoCardProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface ToDoCardState {}

export class ToDoCard extends React.Component<ToDoCardProps, ToDoCardState> {
  render(): JSX.Element {
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
