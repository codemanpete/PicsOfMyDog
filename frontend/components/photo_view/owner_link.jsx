import React from 'react';
import { Link } from 'react-router';

class OwnerLink extends React.Component {
  componentWillMount() {
    this.props.requestOwner(this.props.owner_id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.owner_id !== nextProps.owner_id) {
      this.props.requestOwner(this.props.owner_id);
    }
  }

  render() {
    return(
      <div>
        <Link to={`/users/${this.props.owner_id}`}>
          <img className="mini_profile_pic" src={this.props.owner.profile_pic_url} alt={this.props.owner.username} />
          <span>{this.props.owner_name}</span>
        </Link>
      </div>
    );
  }
}


export default OwnerLink;
