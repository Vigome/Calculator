import React, { Component } from "react";
import { connect } from "react-redux";
import {
  changeProtein,
  changeCarbs,
  changeFat,
  changeCalories,
  caloriesSubmit,
  unlockCalories
} from "./Store/Actions/changeActions";

class CaloriesInfo extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="vertical-center">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-lg-6 my-1">
                <div className="card card-bg h-100 w-100">
                  <div className="card-header card-header-bg">
                    Calories info
                  </div>
                  <div className="p-2 text-justify">
                    Energy supply is calculated on the basis of approved
                    designs. Nutrition is NOT a mathematics, although a properly
                    calculated energy supply is necessary to achieve certain
                    body goals (eg weight reduction). The calculated values
                    ​​are a suggestion, it is possible to individually change
                    the energy supply and / or amount of macronutrients - of
                    course at your own risk. Also remember that this amount of
                    calories is WITHOUT reference to your goal. So if you are
                    not sure how to manage amount of calories it is better to
                    leave it as it is.
                  </div>
                  <div className="px-2">
                    <p>
                      Percentage of macronutrients: <br />
                      Proteins:{" "}
                      {this.props.userInfo.proteinPercentage.toFixed(1)}% <br />
                      Carbs: {this.props.userInfo.carbsPercentage.toFixed(
                        1
                      )}% <br />
                      Fat: {this.props.userInfo.fatPercentage.toFixed(1)}%{" "}
                      <br /> <br />
                    </p>
                    <p className="text-center">
                      If you want to change amount of calories and
                      macronutrients:
                    </p>
                  </div>
                  <div className=" text-center">
                    <button
                      className="btn btn-danger my-2"
                      onClick={() => this.props.unlockCalories()}
                    >
                      Unlock
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6 my-1">
                <form
                  className="card card-height h-100 card-bg"
                  action="#/calories"
                >
                  <div className="card-header card-header-bg">Calories</div>
                  <div className="card-bg d-flex flex-column">
                    <div className="mt-4 ml-2 d-flex flex-column">
                      Calories:{" "}
                      <input
                        type="number"
                        value={Math.round(this.props.userInfo.calories)}
                        onChange={e => this.props.changeCalories(e)}
                        disabled={this.props.userInfo.isBlocked}
                        min="500"
                        max="15000"
                      />
                    </div>
                    <div className="mt-4 ml-2 d-flex flex-column">
                      Proteins:{" "}
                      <input
                        type="number"
                        value={Math.round(this.props.userInfo.proteins)}
                        onChange={e => this.props.changeProtein(e)}
                        disabled={this.props.userInfo.isBlocked}
                        min="10"
                        max="1000"
                      />
                    </div>
                    <div className="mt-4 ml-2 d-flex flex-column">
                      Carbs:{" "}
                      <input
                        type="number"
                        value={Math.round(this.props.userInfo.carbs)}
                        onChange={e => this.props.changeCarbs(e)}
                        disabled={this.props.userInfo.isBlocked}
                        min="10"
                        max="1000"
                      />
                    </div>
                    <div className="mt-4 ml-2 d-flex flex-column">
                      Fat:{" "}
                      <input
                        type="number"
                        value={Math.round(this.props.userInfo.fat)}
                        onChange={e => this.props.changeFat(e)}
                        disabled={this.props.userInfo.isBlocked}
                        min="10"
                        max="1000"
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between h-100">
                    <button
                      className="btn btn-danger col-3 col-sm-2 align-self-end my-2 mx-2"
                      formAction="#/"
                    >
                      Back
                    </button>
                    <button
                      className="btn btn-success col-3 col-sm-2 align-self-end my-2 mx-2"
                      formAction="#/meals"
                      onClick={() => this.props.caloriesSubmit()}
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {console.log(this.props.userInfo)}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo
});

const mapDispatchToProps = dispatch => {
  return {
    changeProtein: value => {
      dispatch(changeProtein(value));
    },
    changeCarbs: value => {
      dispatch(changeCarbs(value));
    },
    changeFat: value => {
      dispatch(changeFat(value));
    },
    changeCalories: value => {
      dispatch(changeCalories(value));
    },
    caloriesSubmit: value => {
      dispatch(caloriesSubmit(value));
    },
    unlockCalories: () => {
      dispatch(unlockCalories());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CaloriesInfo);
