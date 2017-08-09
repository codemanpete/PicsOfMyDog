import React from 'react';

const DEFAULT_HEIGHT = 16;

class NewCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: DEFAULT_HEIGHT,
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.setFilledTextareaHeight = this.setFilledTextareaHeight.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
    this.setFilledTextareaHeight();
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

//////////////// dynamic rescaling for textarea //////////////////////
  setFilledTextareaHeight() {
    if (this.mounted) {
      const element = this.ghost;
      this.setState({
        height: element.clientHeight - 20,
      });
    }
  }

  renderExpandableField() {
    const isOneLine = this.state.height <= DEFAULT_HEIGHT;
    const { height, body } = this.state;

    return (
      <textarea
        className="new-comment-field"
        name="new-comment"
        placeholder="Add a comment"
        autoFocus={true}
        value={body}
        style={{
          height,
          resize: isOneLine ? "none" : null
        }}
        onChange={this.update.bind(this)}
        onKeyUp={this.setFilledTextareaHeight}
      />
    );
  }

  renderGhostField() {
    return (
      <div
        className="new-comment-field textarea--ghost"
        ref={(c) => (this.ghost = c)}
        aria-hidden="true"
      >
        {this.state.body}
      </div>
    );
  }

//////////////////////////////////////////////////////////////////////

  render() {
    const currentUser = this.props.currentUser;
    return(
      <div className="new-comment-form">
        <div className="left comment-pic-wrapper">
          <img className="mini-comment-pic" src={currentUser.profile_pic_url} alt={currentUser.username}/>
        </div>
        <div className="right">
          <form
            onKeyDown={this.handleKeyDown}>
            <div className="textarea-container">
              { this.renderExpandableField() }
              { this.renderGhostField() }
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewCommentForm;
