import React from "react";

export function NamePicker({ names, searchValue }) {
  // in the <ul> below We want to display the names that includes the searchValue
  const filteredNames = names.filter((entry) =>
    entry.name.toLowerCase().includes(searchValue)
  );
  // it will initially renders the whole list

  return (
    <div id="NamePicker">
      <ul>
        {filteredNames.map((entry) => {
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
