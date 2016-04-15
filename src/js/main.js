import React from 'react';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    children: React.PropTypes.node
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  render() {

    return (
      <div className="app">
        <h1>Hello, world!</h1>
        <div className="content">
        </div>
      </div>
    );
  }
}
