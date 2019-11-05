import React, { Component } from "react";

class FollowerCard extends Component {
  //   constructor() {}

  render() {
    if (!this.props.follower) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    return (
      <div className="card">
        <img src={this.props.follower.avatar_url} />
        <div className="card-info">
          <h3 className="name">{this.props.follower.name}</h3>
          <p className="followername">{this.props.follower.login}</p>
          <p>Location: {this.props.follower.location}</p>
          <p>
            Profile:
            <a href={`${this.props.follower.html_url}`}>
              {this.props.follower.html_url}
            </a>
          </p>
          <p>Followers: {this.props.follower.followers}</p>
          <p>Following: {this.props.follower.following}</p>
          <p>Bio: {this.props.follower.bio}</p>
        </div>
      </div>
    );
  }
}

export default FollowerCard;
