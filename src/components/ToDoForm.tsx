import * as React from "react";

interface ToDoFormProps {
  createToDoItem: Function;
}
interface ToDoFormState {
  title: string;
  description: string;
}

export class ToDoForm extends React.Component<ToDoFormProps, ToDoFormState> {
  constructor(props: ToDoFormProps) {
    super(props);

    this.state = {
      title: "",
      description: ""
    };

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    this.props.createToDoItem(this.state.title, this.state.description);
  }

  handleTitleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ title: event.target.value });
  }

  handleDescriptionChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ description: event.target.value });
  }

  render(): JSX.Element {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <h3>New Item</h3>
        </div>
        <div>
          <label htmlFor="title">Title: </label>
          <input onChange={this.handleTitleChange.bind(this)} type="text" value={this.state.title} id="title" />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input onChange={this.handleDescriptionChange.bind(this)} type="text" value={this.state.description} id="description" />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    );
  }
}
