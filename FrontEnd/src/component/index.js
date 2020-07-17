import React, { Component } from "react";
import  Input  from "./input";
import Header from "./header";
import FishList from "./FishList";
import { getFishes, addFish, deleteFish } from './../actions/fishesActions';
import { connect } from "react-redux"
import PropTypes from "prop-types"




class Index extends Component {

  componentDidMount() {
    this.props.getFishes();
}

  render() {
    // const { fishes } = this.props.fish;
    
    
    return (
      <div className="container card mt-3">
        <div className="mt-2">
        <Header />
        </div>
        <div className="app-container mt-3">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="text-center">
                  <Input  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 fishlist">
            <div className="card ">
              <div className="card-body">
              
                <FishList  />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Index.propTypes = {
  fish: PropTypes.object.isRequired,
  getFishes: PropTypes.func.isRequired,
  addFish: PropTypes.func.isRequired
}


const mapStateToProps = (state) => {
  return {
    fish: state.fish
  }
}

const MapDispatchToProps = {
    getFishes, addFish, deleteFish
}


export default connect(mapStateToProps, MapDispatchToProps)(Index);
