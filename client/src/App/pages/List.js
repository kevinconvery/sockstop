import React, { useState, useEffect } from 'react'

const List = props => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  });

  const getList = () => {
    fetch('/api/getList')
    .then(res => res.json())
    .then(list => setList(list))
  }
  
  return (
    <div className="App">
      <h1>List of Items</h1>
      {/* Check to see if any items are found */}
      {list.length ? (
        <div>
          {/* Render the list of items */}
          {list.map((item) => {
            return(
              <div>
                {item}
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <h2>No List Items Found</h2>
        </div>
      )
    }
    </div>
  );
}

export default List;