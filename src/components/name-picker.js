import React from "react";

export function NamePicker({ names, searchValue, shortList, setShortList }) {
  // in the <ul> below We want to display the names that includes the searchValue
  const filteredNames = names.filter((entry) =>
    entry.name.toLowerCase().includes(searchValue)
  );
  // it will initially renders the whole list

  const addToShortList = (nameID) => {
    setShortList([...shortList, nameID]);
  };

  return (
    <div id="NamePicker">
      <ul>
        {filteredNames.map((entry) => {
          return (
            <li className={entry.sex} key={entry.id}>
              // pass the onClick as an arrow function since it takes an
              argument
              <button onClick={() => addToShortList(entry.id)}>
                {entry.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
