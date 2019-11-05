import React, { Component } from "react";

class UserCard extends Component {
  //   constructor() {}

  render() {
    if (!this.props.user) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    return (
      <div className="card">
        <img src={this.props.user.avatar_url} />
        <div className="card-info">
          <h3 className="name">{this.props.user.name}</h3>
          <p className="username">{this.props.user.login}</p>
          <p>Location: {this.props.user.location}</p>
          <p>
            Profile:
            <a href={`${this.props.user.html_url}`}>
              {this.props.user.html_url}
            </a>
          </p>
          <p>Followers: {this.props.user.followers}</p>
          <p>Following: {this.props.user.following}</p>
          <p>Bio: {this.props.user.bio}</p>
        </div>
      </div>
    );
  }
}

export default UserCard;
