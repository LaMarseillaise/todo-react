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
        <h3>Add New Item</h3>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input onChange={this.handleTitleChange.bind(this)} type="text" value={this.state.title} id="title" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description: </label>
          <input onChange={this.handleDescriptionChange.bind(this)} type="text" value={this.state.description} id="description" className="form-control" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Add</button>
        </div>
      </form>
    );
  }
}
