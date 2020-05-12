import React from 'react';

import { connect } from 'react-redux'
import { addFeatures, addToTotal } from '../actions/mainActions'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => {
        props.addFeatures(props.feature)
        props.addToTotal(props.feature.price)
      }} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps, {addFeatures, addToTotal})(AdditionalFeature);
