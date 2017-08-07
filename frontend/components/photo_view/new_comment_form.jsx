import React from 'react';

class NewCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
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
    if(e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault();
      this.handleSubmit();
    }
  }

  handleSubmit() {
    let newComment = {
      body: this.state.body,
      commenter_id: this.props.currentUser.id,
      photo_id: this.props.photo_id
    };
    this.props.createComment(newComment);
    this.setState({
      body: ""
    });
  }

  render() {
    const currentUser = this.props.currentUser;
    return(
      <div>
        <div className="">
          <img className="mini_comment_pic" src={currentUser.profile_pic_url} alt={currentUser.username}/>
        </div>
        <form
          onKeyDown={this.handleKeyDown}>
          <textarea
            className="new-comment-field"
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
