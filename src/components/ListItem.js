import React from 'react';

import './ListItem.css';

const ListItem = (props) => {
  const selectedClass = props.selectedPerson.name === props.info.name;
  return (
      <tr onClick={() => props.selectPerson(props.info)}>
        <td className={selectedClass && "selected"}>{props.info.name}</td>
        <td className={selectedClass && "selected"}>{props.info.party[0]}</td>
      </tr>
  );
}

export default ListItem;
