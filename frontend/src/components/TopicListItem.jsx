import React, { useState } from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  const { id, label, link } = props;
  return(
  <div className="topic-list--item">
    <a key={id} id={id} label={label} href={link}>
      <span>{label}</span>
    </a>
  </div>
  );
};


export default TopicListItem

