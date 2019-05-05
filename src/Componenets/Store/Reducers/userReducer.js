import {
  GENDER,
  AGE,
  WEIGHT,
  HEIGHT,
  ACTIVITY,
  PROTEIN,
  CALORIES,
  CARBS,
  FAT,
  GOAL,
  MEAL,
  INFOSUBMIT,
  GOALCALORIES,
  UNLOCK
} from "../Actions/types";
import userData from "../../userData";

export default function(state = userData, action) {
  switch (action.type) {
    case GENDER:
      return (state = {
        ...state,
        gender: action.payload,
        genderVal: action.payload === "man" ? +5 : -161
      });
    case AGE:
      return (state = {
        ...state,
        age: action.payload
      });
    case WEIGHT:
      return (state = {
        ...state,
        weight: action.payload
      });
    case HEIGHT:
      return (state = {
        ...state,
        height: action.payload
      });
    case ACTIVITY:
      let proteinVal;
      let carbsVal;
      let fatVal;
      switch (action.payload) {
        case "1.2":
          carbsVal = 0.35;
          break;
        case "1.35":
          carbsVal = 0.4;
          break;
        case "1.55":
          carbsVal = 0.5;
          break;
        case "1.75":
        case "2.05":
          carbsVal = 0.6;
          break;
        default:
          carbsVal = 0.35;
          break;
      }
      switch (action.payload) {
        case "1.2":
          fatVal = 0.35;
          break;
        case "1.35":
          fatVal = 0.3;
          break;
        case "1.55":
          fatVal = 0.25;
          break;
        case "1.75":
        case "2.05":
          fatVal = 0.15;
          break;
        default:
          fatVal = 0.35;
          break;
      }
      switch (action.payload) {
        case "1.2":
        case "1.35":
          proteinVal = 0.3;
          break;
        case "1.55":
        case "1.75":
        case "2.05":
          proteinVal = 0.25;
          break;
        default:
          proteinVal = 0.3;
          break;
      }
      return (state = {
        ...state,
        activity: action.payload,
        proteinPercentage: proteinVal * 100,
        carbsPercentage: carbsVal * 100,
        fatPercentage: fatVal * 100
      });
    case INFOSUBMIT:
      return (state = {
        ...state,
        calories:
          (9.99 * +state.weight +
            6.25 * +state.height -
            4.92 * +state.age +
            state.genderVal) *
          +state.activity,
        proteins:
          ((9.99 * +state.weight +
            6.25 * +state.height -
            4.92 * +state.age +
            state.genderVal) *
            +state.activity *
            state.proteinPercentage) /
          100 /
          4,
        carbs:
          ((9.99 * +state.weight +
            6.25 * +state.height -
            4.92 * +state.age +
            state.genderVal) *
            +state.activity *
            state.carbsPercentage) /
          100 /
          4,
        fat:
          ((9.99 * +state.weight +
            6.25 * +state.height -
            4.92 * +state.age +
            state.genderVal) *
            +state.activity *
            state.fatPercentage) /
          100 /
          9
      });
    case CALORIES:
      return (state = {
        ...state,
        calories: action.payload,
        proteins: (action.payload * state.proteinPercentage) / 100 / 4,
        carbs: (action.payload * state.carbsPercentage) / 100 / 4,
        fat: (action.payload * state.fatPercentage) / 100 / 9
      });
    case PROTEIN:
      return (state = {
        ...state,
        proteins: action.payload,
        calories: action.payload * 4 + state.carbs * 4 + state.fat * 9,
        proteinPercentage:
          (action.payload * 4 * 100) /
          (action.payload * 4 + state.carbs * 4 + state.fat * 9),
        carbsPercentage:
          (state.carbs * 4 * 100) /
          (action.payload * 4 + state.carbs * 4 + state.fat * 9),
        fatPercentage:
          (state.fat * 9 * 100) /
          (action.payload * 4 + state.carbs * 4 + state.fat * 9)
      });
    case CARBS:
      return (state = {
        ...state,
        carbs: action.payload,
        calories: action.payload * 4 + state.proteins * 4 + state.fat * 9,
        proteinPercentage:
          (state.proteins * 4 * 100) /
          (state.proteins * 4 + action.payload * 4 + state.fat * 9),
        carbsPercentage:
          (action.payload * 4 * 100) /
          (state.proteins * 4 + action.payload * 4 + state.fat * 9),
        fatPercentage:
          (state.fat * 9 * 100) /
          (state.proteins * 4 + action.payload * 4 + state.fat * 9)
      });
    case FAT:
      return (state = {
        ...state,
        fat: action.payload,
        calories: state.proteins * 4 + state.carbs * 4 + action.payload * 9,
        proteinPercentage:
          (state.proteins * 4 * 100) /
          (state.proteins * 4 + state.carbs * 4 + action.payload * 9),
        carbsPercentage:
          (state.carbs * 4 * 100) /
          (state.proteins * 4 + state.carbs * 4 + action.payload * 9),
        fatPercentage:
          (action.payload * 9 * 100) /
          (state.proteins * 4 + state.carbs * 4 + action.payload * 9)
      });
    case GOAL:
      return (state = {
        ...state,
        goal: action.payload
      });
    case MEAL:
      return (state = {
        ...state,
        meals: action.payload
      });
    case GOALCALORIES:
      return (state = {
        ...state,
        goalCalories: +state.calories + +state.goal,
        proteins:
          ((+state.calories + +state.goal) * state.proteinPercentage) / 100 / 4,
        carbs:
          ((+state.calories + +state.goal) * state.carbsPercentage) / 100 / 4,
        fat: ((+state.calories + +state.goal) * state.fatPercentage) / 100 / 9
      });
    case UNLOCK:
      return (state = {
        ...state,
        isBlocked: !state.isBlocked
      });
    default:
      return state;
  }
}
