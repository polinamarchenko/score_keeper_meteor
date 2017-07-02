import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends Component{
  renderSubtitle() {
    if (this.props.createdBy) {
      return <h4 className="title-bar__subtitle">{this.props.createdBy}</h4>
    }
  }

  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {this.renderSubtitle()}
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  createdBy: PropTypes.string.isRequired
};
