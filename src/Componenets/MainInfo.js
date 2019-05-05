import React, { Component } from "react";
import { connect } from 'react-redux'
import {
  changeGender,
  changeAge,
  changeWeight,
  changeHeight,
  changeActivity,
  changeGoal,
  changeMeal,
  infoSubmit
} from './Store/Actions/changeActions'
import classNames from 'classnames'
// import {Link} from 'react-router-dom'

class MainInfo extends Component {
  render () {
    return (
      <React.Fragment>
        <div className="vertical-center">
          <div className="container h-100">
            <div className="row">
              <div className="col-sm-12 col-lg-6 my-1">
                <div className="card h-100 card-bg card-info">
                  <div className="card-header card-header-bg">General Info</div>
                  <div className="p-2 text-justify">
                    Adequate nutrition is the key to maintaining physical and
                    mental health. Unprocessed food in the right amounts and
                    proportions is the fuel for the body, provides the necessary
                    minerals. With the right caloric supply, you can maintain
                    weight, reduce or focus on weight gain. On this page, we
                    propose diet plans that, based on the information you need
                    (height, weight, physical activity during the day) will
                    allow you to achieve body goals, as well as to support the
                    body's functioning and supply him with nutritionally rich
                    products in the right amount. What distinguishes our plans?
                    They are simple and easy to use. We do not impose
                    predetermined recipes and meals. You know what you want to
                    eat and we enable you to eat this - but in the right
                    proportions. Of course, we suggest to base on as diverse
                    products as possible. We base our plans on unprocessed food,
                    which will minimize the presence of undesirable ingredients
                    in the prepared dishes.
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6 my-1">
                <form className="card h-100" action="#/calories">
                  <div className="card-header card-header-bg">
                    Personal info
                  </div>
                  <div className="card-bg d-flex flex-column text-center">
                    <div id="gender-select" className="mt-4 ml-1">
                      <select
                        name="gender"
                        id="gender"
                        value={this.props.userInfo.gender}
                        onChange={e => this.props.changeGender(e)}
                      >
                        <option disabled value="">
                          Pick your gender
                        </option>
                        <option value="man">Man</option>
                        <option value="woman">Woman</option>
                      </select>
                      <p
                        className={classNames(
                          'gender-text info',
                          this.props.userInfo.gender !== '' ? 'visible' : ''
                        )}
                      >
                        Your gender
                      </p>
                    </div>
                    <div className="ml-1 mt-4">
                      <input
                        id="age"
                        type="number"
                        name="age"
                        min="1"
                        max="120"
                        value={this.props.userInfo.age}
                        placeholder="Your age"
                        required
                        onChange={e => this.props.changeAge(e)}
                      />
                      <p
                        className={classNames(
                          'age-text info',
                          this.props.userInfo.age !== '' ? 'visible' : ''
                        )}
                      >
                        Your age
                      </p>
                    </div>
                    <div className="ml-1 mt-4">
                      <input
                        id="weight"
                        type="number"
                        name="weight"
                        min="1"
                        max="250"
                        value={this.props.userInfo.weight}
                        placeholder="Your weight(kg)"
                        required
                        onChange={e => this.props.changeWeight(e)}
                      />
                      <p
                        className={classNames(
                          'weight-text info',
                          this.props.userInfo.weight !== '' ? 'visible' : ''
                        )}
                      >
                        Your weight(kg)
                      </p>
                    </div>
                    <div className="ml-1 mt-4">
                      <input
                        id="height"
                        type="number"
                        name="height"
                        min="1"
                        max="250"
                        value={this.props.userInfo.height}
                        placeholder="Your height(cm)"
                        required
                        onChange={e => this.props.changeHeight(e)}
                      />
                      <p
                        className={classNames(
                          'height-text info',
                          this.props.userInfo.height !== '' ? 'visible' : ''
                        )}
                      >
                        Your height(cm)
                      </p>
                    </div>
                    <div className="ml-1 mt-4">
                      <select
                        name="activity"
                        value={this.props.userInfo.activity}
                        onChange={e => this.props.changeActivity(e)}
                      >
                        <option value="" disabled>
                          Physical activity level:
                        </option>
                        <option value="1.2">
                          Inactive lifestyle (Sedentary work, no physical
                          activity)
                        </option>
                        <option value="1.35">
                          Sedentary (Sedentary work, 1-2 trainings in a week)
                        </option>
                        <option value="1.55">
                          Moderately active(Sedentary work, 3-4 trainings in a
                          week)
                        </option>
                        <option value="1.75">
                          Vigorously active(Manual worker, 3-4 trainings in a
                          week)
                        </option>
                        <option value="2.05">
                          Extremely active(Proffesionals athletes, training
                          everyday)
                        </option>
                      </select>
                      <p
                        className={classNames(
                          'activity-text info',
                          this.props.userInfo.activity !== '' ? 'visible' : ''
                        )}
                      >
                        Your activity level
                      </p>
                    </div>
                    <div className="ml-1 mt-4">
                      <select
                        name="goal"
                        id="goal"
                        value={this.props.userInfo.goal}
                        onChange={e => this.props.changeGoal(e)}
                      >
                        <option value="" disabled>
                          Pick your goal:
                        </option>
                        <option value="0">I want to maintain my weight</option>
                        <option value="300">
                          I want to gain weight but slowly
                        </option>
                        <option value="500">
                          I want to gain weight but in moderate speed
                        </option>
                        <option value="750">I want to gain weight fast</option>
                        <option value="-300">
                          I want to lose weight but slowly
                        </option>
                        <option value="-450">
                          I want to lose weight but in moderate speed
                        </option>
                        <option value="-600">I want to lose weight fast</option>
                      </select>
                      <p
                        className={classNames(
                          'goal-text info',
                          this.props.userInfo.goal !== '' ? 'visible' : ''
                        )}
                      >
                        Your goal
                      </p>
                    </div>
                    <div className="ml-1 mt-4">
                      <select
                        name="mealsSelector"
                        value={this.props.userInfo.meals}
                        onChange={e => this.props.changeMeal(e)}
                      >
                        <option value="" disabled>
                          Number of meals:
                        </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <p
                        className={classNames(
                          'meals-text info',
                          this.props.userInfo.meals !== '' ? 'visible' : ''
                        )}
                      >
                        Number of meals
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end card-bg">
                    <button
                      className="btn btn-success col-3 col-sm-2 my-2 mr-2 "
                      onClick={e => this.props.infoSubmit(e)}
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
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo
})

const mapDispatchToProps = dispatch => {
  return {
    changeGender: value => {
      dispatch(changeGender(value))
    },
    changeAge: value => {
      dispatch(changeAge(value))
    },
    changeWeight: value => {
      dispatch(changeWeight(value))
    },
    changeHeight: value => {
      dispatch(changeHeight(value))
    },
    changeActivity: value => {
      dispatch(changeActivity(value))
    },
    changeGoal: value => {
      dispatch(changeGoal(value))
    },
    changeMeal: value => {
      dispatch(changeMeal(value))
    },
    infoSubmit: value => {
      dispatch(infoSubmit(value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainInfo)
