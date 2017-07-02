import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';


export default class App extends Component {
  render() {
    return (
        <div>
          <TitleBar title={this.props.title} createdBy="Created by Polina Marchenko"/>
          <div className="wrapper">
            <PlayerList players={this.props.players}/>
            <AddPlayer score={0}/>
          </div>
        </div>
    )
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
}
