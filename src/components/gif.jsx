import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = "https://media3.giphy.com/media/IgLt8tZcGGYXS/giphy.gif?cid=ecf05e47an7y5euvj9y0ayawk1c57d5rrnoid6so1yfbtsqh&rid=giphy.gif";
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;
