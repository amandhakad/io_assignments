import React, {useState} from 'react';
import { Popover } from 'antd';

const Member = ({ type, data }) => {

  const info = (<div className="info">
          <p><strong>{data.name}</strong></p>
          <p>Gender: {data.gender}</p>
          <p>DOB: {data.dob}</p>
          <p>{data.bio}</p>
        </div>);
  return (
    <div key={data.name} className={`member member_${type}`}>
      <Popover content={info} trigger="click">
        <h4 className="member-name">{data.name}</h4>
      </Popover>
    </div>
  );
};

export default Member;