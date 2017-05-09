import { connect } from 'react-redux';
import { createComment } from '../../actions/photo_actions';
import NewCommentForm from './new_comment_form';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCommentForm);
