import React, { Component } from "react";
import FollowerCard from "./FollowerCard";
import UserCard from "./UserCard";
import SearchForm from "./SearchForm";
import axios from "axios";

class CardContainer extends Component {
  state = {
    userData: {},
    followers: [],
    search: ""
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

  setSearchUser = user => {
    this.setState({ search: user });
  };

  searchUser = user => {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then(res => {
        this.setState({ userData: res.data });
        axios
          .get(`https://api.github.com/users/${user}/followers`)
          .then(res => {
            // clear followers state, then iterate over response and set new state
            this.setState({
              followers: []
            });
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
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search) {
      this.searchUser(this.state.search);
    }
  }

  render() {
    return (
      <div className="card-container">
        <SearchForm setSearchUser={this.setSearchUser} />
        <UserCard user={this.state.userData} />
        {this.state.followers.map(follower => (
          <FollowerCard key={follower.id} follower={follower} />
        ))}
      </div>
    );
  }
}

export default CardContainer;
