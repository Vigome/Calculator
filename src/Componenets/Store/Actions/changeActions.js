import {
  GENDER,
  AGE,
  WEIGHT,
  HEIGHT,
  ACTIVITY,
  PROTEIN,
  CARBS,
  FAT,
  GOAL,
  MEAL,
  INFOSUBMIT,
  CALORIES,
  GOALCALORIES,
  UNLOCK
} from "./types";

export function changeGender(e) {
  return {
    type: GENDER,
    payload: e.target.value
  };
}

export function changeAge(e) {
  return {
    type: AGE,
    payload: e.target.value
  };
}

export function changeWeight(e) {
  return {
    type: WEIGHT,
    payload: e.target.value
  };
}

export function changeHeight(e) {
  return {
    type: HEIGHT,
    payload: e.target.value
  };
}

export function changeActivity(e) {
  return {
    type: ACTIVITY,
    payload: e.target.value
  };
}

export function changeCalories(e) {
  return {
    type: CALORIES,
    payload: e.target.value
  };
}

export function changeProtein(e) {
  return {
    type: PROTEIN,
    payload: e.target.value
  };
}

export function changeCarbs(e) {
  console.log(e.target.value);
  return {
    type: CARBS,
    payload: e.target.value
  };
}

export function changeFat(e) {
  console.log(e.target.value);
  return {
    type: FAT,
    payload: e.target.value
  };
}

export function changeGoal(e) {
  return {
    type: GOAL,
    payload: e.target.value
  };
}

export function changeMeal(e) {
  return {
    type: MEAL,
    payload: e.target.value
  };
}

export function infoSubmit() {
  return {
    type: INFOSUBMIT
  };
}

export function caloriesSubmit() {
  return {
    type: GOALCALORIES
  };
}

export function unlockCalories() {
  return {
    type: UNLOCK
  };
}
