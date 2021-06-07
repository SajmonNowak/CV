import React, { useState } from "react";
import ListItem from "./ListItem";
import uniqid from "uniqid";
import useVisible from "./useVisible";

const List = () => {
  const removeListItem = (key) => {
    const newArray = listItems.filter((item) => item !== key);
    setListItem(newArray);
  };

  const [listItems, setListItem] = useState(["1000", "2000", "3000"]);
  const { ref, isVisible, setIsVisible } = useVisible(false);

  const addItem = () => {
    setListItem(listItems.concat(uniqid()));
  };

  const createListItems = () => {
    return (
      <ul className="list">
        {listItems.map((item) => {
          return (
            <ListItem
              deleteFunction={removeListItem}
              defaultValue="This is my Experience"
              id={item}
              key={item}
            />
          );
        })}
      </ul>
    );
  };

  return (
    <div onClick={() => setIsVisible(!isVisible)}>
      {createListItems()}
      {isVisible && (
        <div ref={ref} className="addItemDiv">
          <div onClick={addItem}>+ Add List Item</div>
        </div>
      )}
    </div>
  );
};

export default List;
