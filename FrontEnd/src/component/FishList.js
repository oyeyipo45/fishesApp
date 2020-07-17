import React, { Component } from "react";
import {connect} from "react-redux"
import { deleteFish } from '../actions/fishesActions';
import  PropTypes from 'prop-types';

class FishList extends Component {

    
  handleDelete = (id) => {
    this.props.deleteFish(id)
  };

  render() {
    const { fishes } = this.props.fish;
   
    
    return (
      <div >
        {fishes.map(({id, name, type }) => {
          return (
            <div key={id} className="group-list" >
              <p  name={name}>
                <b>Fish Name:</b> {name}
              </p>
              <p type={type}>
                <b>Fish Type:</b> {type}
              </p>

              <div>
                <button
                  className="remove-btn edit-btn"
                  color="primary"
                  size="sm"
                >
                  &#9999;
                </button>
                <button
                  className="remove-btn d-flex justify-content-end"
                  color="danger"
                  size="sm"
                  onClick={() => this.handleDelete(id)}
                >
                  &times;
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

FishList.propTypes = {
  deleteFish: PropTypes.func.isRequired,
  fish: PropTypes.object.isRequired

}

const mapStateToProps = (state) => {
  return {
    fish: state.fish
  }
 }
const mapDispatchToProps = {
  deleteFish
}

export default connect(mapStateToProps, mapDispatchToProps)(FishList);
