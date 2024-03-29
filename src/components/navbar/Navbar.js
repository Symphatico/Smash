import React from "react";
import { Link } from "react-router-dom";
import Autocomplete from "./Autocomplete";
import history from "../../history";
import { connect } from "react-redux";
import { characterInfo } from "../../actions/characterAction";

class Navbar extends React.Component {
  onAutoComplete = info => {
    return history.push(`/characters/${info}/rates`);
  };
  autocomplete() {
    const { characters } = this.props;
    if (!characters) return null;
    let characterData = {};
    characters.forEach(element => {
      characterData[element.id] = element.url;
    });
    return characterData;
  }
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link to="/characters" className="brand-logo">
              Logo
            </Link>
            <form>
              <Autocomplete
                data={this.autocomplete()}
                id="navbar"
                className="col s4 right"
                onAutoComplete={this.onAutoComplete}
              />
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { characters: state.characterInfo.characterInfo };
};

export default connect(mapStateToProps, { characterInfo })(Navbar);
