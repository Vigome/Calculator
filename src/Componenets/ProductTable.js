import React from "react";

export default function ProductTable(props) {
  return (
    <tbody>
      <tr>
        <th>{props.item.name}</th>
        <th>
          {Math.floor((props.macro * 100) / props.item.value / +props.meals)}
        </th>
      </tr>
    </tbody>
  );
}

// 50g bialka na dzień
// makrela ma 20g bialka w 100g

// 100g makreali – 20g bialka
// x gra makreli – 50g bialka

// 100g produkru – ilość bialka w 100 g produktu
// x gramow na dzień – ilość bialka na dzień
