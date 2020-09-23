import React, { Component } from "react";

export default class DogIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: "",
    };
  }

  fetchImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({
          image_url: json.message,
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  componentDidMount() {
      this.fetchImage();
  }

  render() {
    return (
      <div>
        <button onClick={this.fetchImage}>Get Random Doggo Pictures</button>
        <br/>   
        <img src={this.state.image_url} />
      </div>
    );
  }
}
