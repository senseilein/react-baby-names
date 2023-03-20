import React from "react";

export function NamePicker({ names, searchValue }) {
  return (
    <div id="NamePicker">
      <ul>
        {names.map((entry) => {
          return (
            <li className={entry.sex} key={entry.id}>
              <button>{entry.name}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
