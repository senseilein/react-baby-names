import React from "react";

export function NameList({ nameList, onItemClick }) {
  return (
    <ul>
      {nameList.map((entry) => {
        return (
          <li className={entry.sex} key={entry.id}>
            {/* pass the onClick as an arrow function since it takes an arg*/}

            <button onClick={() => onItemClick(entry.id)}>{entry.name}</button>
          </li>
        );
      })}
    </ul>
  );
}
