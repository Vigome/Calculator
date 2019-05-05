import React from "react";

export default function MacroTable(props) {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered table-hover table-sm text-center">
        <thead className="thead-dark">
          <tr className="">
            <th colSpan="4">Macronutrients per meal</th>
          </tr>
          <tr className="">
            <th />
            <th>Proteins</th>
            <th>Carbs</th>
            <th>Fat</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <th>Meal 1</th>
            <th>{Math.round(props.protein / props.meals)}</th>
            <th>{Math.round(props.carbs / props.meals)}</th>
            <th>{Math.round(props.fat / props.meals)}</th>
          </tr>
          <tr>
            <th>Meal 2</th>
            <th>{Math.round(props.protein / props.meals)}</th>
            <th>{Math.round(props.carbs / props.meals)}</th>
            <th>{Math.round(props.fat / props.meals)}</th>
          </tr>
          <tr>
            <th>Meal 3</th>
            <th>{Math.round(props.protein / props.meals)}</th>
            <th>{Math.round(props.carbs / props.meals)}</th>
            <th>{Math.round(props.fat / props.meals)}</th>
          </tr>
          <tr style={{ display: props.meals <= 3 ? "none" : "" }}>
            <th>Meal 4</th>
            <th>{Math.round(props.protein / props.meals)}</th>
            <th>{Math.round(props.carbs / props.meals)}</th>
            <th>{Math.round(props.fat / props.meals)}</th>
          </tr>
          <tr style={{ display: props.meals <= 4 ? "none" : "" }}>
            <th>Meal 5</th>
            <th>{Math.round(props.protein / props.meals)}</th>
            <th>{Math.round(props.carbs / props.meals)}</th>
            <th>{Math.round(props.fat / props.meals)}</th>
          </tr>
        </tbody>
        {console.log(props)}
      </table>
    </div>
  );
}
