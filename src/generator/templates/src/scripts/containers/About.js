import React, { PureComponent } from 'react';
import { connect } from 'react-redux';


@connect(
  state => ({
    
  }),
  {},
)
class About extends PureComponent {
  static propTypes = {
   
  }
  componentWillMount() {}
  render() {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }
}

export default About;
