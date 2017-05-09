import React from 'react';

class NewCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      commenter_id: this.props.current_user_id,
      photo_id: this.props.photo_id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

  }

  update(e) {
    this.setState({
      body: `${e.currentTarget.value}`
    });
  }

  handleKeyDown(e) {
    console.log(e.key);
    if(e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault();
      this.handleSubmit();
    }
  }

  handleSubmit() {
    let newComment = this.state;
    console.log(newComment);
    this.props.createComment(newComment);
    this.setState({
      body: ""
    });
  }

  render() {
    return(
      <div>
        <form
          onKeyDown={this.handleKeyDown}>
          <textarea
            placeholder="Add a comment"
            rows="1"
            value={this.state.body}
            onChange={this.update.bind(this)}></textarea>
        </form>
      </div>
    );
  }
}

export default NewCommentForm;
