import React from 'react';

import { connect } from 'react-redux'
import { removeFeatures, subToTotal } from '../actions/mainActions'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => {
        props.removeFeatures(props.feature)
        props.subToTotal(props.feature.price)
      }} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(mapStateToProps, {removeFeatures, subToTotal})(AddedFeature);
