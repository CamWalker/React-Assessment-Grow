import React, { Component } from 'react';

import './Info.css';

const Info = (props) => {
  console.log(props.info);
  const { info } = props;

  let firstName = info.name;
  if (firstName) firstName = firstName.slice(0,info.name.indexOf(' '));

  let lastName = info.name;
  if (lastName) lastName = lastName.slice(info.name.indexOf(' ') + 1);

  let adr1 = info.office;
  let adr2 = info.office;
  if (adr1) {
    let index = adr1.indexOf('Building');
    if (index > 0) {
      adr1 = adr1.slice(0, index + 8);
      adr2 = adr2.slice(index + 8);
    } else {
      adr1 = adr1.slice(0, adr1.indexOf(';'));
      adr2 = adr2.slice(adr2.indexOf(';') + 1);
    }
  }

  return (
    <div className="info-container">
      <h3 className="list-title">Info</h3>
      <ul>
        <li>
          <span>First Name</span>
          <span className="list-info">{firstName}</span>
        </li>
        <li>
          <span>Last Name</span>
          <span className="list-info">{lastName}</span>
        </li>
        <li>
          <span>District</span>
          <span className="list-info">{info.district || "N/A"}</span>
        </li>
        <li>
          <span>Phone</span>
          <span className="list-info">{info.phone}</span>
        </li>
        <li>
          <span>Office</span>
          <span className="list-info">{adr1}<br />{adr2}</span>
        </li>
        <li>
          <a target="_blank"
            href={info.link}
            className="website-link"
          >Website</a>
        </li>
      </ul>
    </div>
  );
}

export default Info;
