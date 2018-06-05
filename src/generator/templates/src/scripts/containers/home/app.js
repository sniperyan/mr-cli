import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeAction from '../../actions/home';
import logo from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';

@connect(
  state => ({
    count: state.home.count,
  }),
  (dispatch) => ({
    actions: bindActionCreators(Object.assign({}, homeAction), dispatch),
  })
)
class Home extends PureComponent {
  static propTypes = {
   
  }
  componentWillMount() {}
  click=() => {
    const {actions} = this.props;
    actions.add();

  }
  render() {
    const {count} = this.props;
    return (
      <div>
        <h1 >Home1</h1>
        <h2>{count}</h2>
        <button onClick={this.click}>add</button>
        <img src={logo} alt="logo" />
        <Link to="/about">To About</Link>
        
      </div>
    );
  }
}

export default Home;
