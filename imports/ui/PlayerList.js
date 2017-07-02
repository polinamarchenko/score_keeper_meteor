import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
import Player from './Player';

export default class PlayerList extends Component {
  renderPlayers () {
    if (this.props.players.length === 0) {
      return (
        <div className="item">
          <p className="item__message">Please create a new player</p>
        </div>
      )
    } else {
      return this.props.players.map((player) => {
        return <Player player={player} key={player._id} />
      })
    }
  }

  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    )
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}