import React from "react";

const genreList = ["All", "Documentary", "Comedy", "Horror", "Crime"];

class Toggler extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isActive: false,
    };
  }

  toggleAdmin = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    return (
      <div className="toggler__container">
        <button className="toggler__btn" onClick={this.toggleAdmin}>
          Genre Toggler
        </button>
        {this.state.isActive && (
          <ul>
            {genreList.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Toggler;
