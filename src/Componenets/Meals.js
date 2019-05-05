import React, { Component } from "react";
import ProductRender from "./ProductRender";
import { connect } from "react-redux";
import MacroTable from "./MacroTable";

class Meals extends Component {
  render() {
    return (
      <div className="vertical-center">
        <div className="container  flex-column">
          <div className="card card-bg my-1">
            <div className="card-header card-header-bg">
              Final amount of calories
            </div>
            <div className="d-flex flex-column align-items-center">
              <h3 className="text-center">
                Your daily calories:{" "}
                {Math.round(this.props.userInfo.goalCalories)}
              </h3>
              <MacroTable
                protein={this.props.userInfo.proteins}
                carbs={this.props.userInfo.carbs}
                fat={this.props.userInfo.fat}
                meals={this.props.userInfo.meals}
              />
            </div>
          </div>
          <div className="card card-bg my-1">
            <div className="card-header card-header-bg">
              Product grams per meal
            </div>
            <ProductRender />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo
});

export default connect(mapStateToProps)(Meals);
