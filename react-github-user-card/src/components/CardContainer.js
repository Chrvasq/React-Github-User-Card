import React, { Component } from "react";
import FollowerCard from "./FollowerCard";
import UserCard from "./UserCard";
import axios from "axios";

class CardContainer extends Component {
  state = {
    userData: {},
    followers: []
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/chrvasq")
      .then(res => {
        this.setState({ userData: res.data });
        axios
          .get("https://api.github.com/users/chrvasq/followers")
          .then(res => {
            res.data.forEach(user => {
              axios.get(user.url).then(res => {
                this.setState({
                  followers: [...this.state.followers, res.data]
                });
              });
            });
          })
          .catch(err => console.log("Error: ", err));
      })
      .catch(err => console.log("Error: ", err));
  }

  render() {
    return (
      <div className="card-container">
        <UserCard user={this.state.userData} />
        {this.state.followers.map(follower => (
          <FollowerCard key={follower.id} follower={follower} />
        ))}
      </div>
    );
  }
}

export default CardContainer;
