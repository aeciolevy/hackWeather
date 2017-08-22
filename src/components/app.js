import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import { connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import {  fetchCity } from '../actions/index';

class App extends Component {

  componentDidMount() {
    this.props.fetchCity();
  }

  render() {
    return (
      <div>
        <SearchBar cities={this.props.cities}/>
        <WeatherList />
      </div>
    );
  }

}

function mapStateToProps({ cities }) {
  return { cities };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);