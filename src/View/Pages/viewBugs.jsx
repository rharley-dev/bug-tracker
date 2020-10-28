import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BugView from '../BugView/bugView';
import { getBugs } from '../../Controllers/Redux/bugSlice';
import BugCard from '../BugCard/bugCard';

export default function Bugs() {
  const [displayBug, setDisplayBug] = useState({
    name: '',
    isDisplayed: false,
  });
  const dispatch = useDispatch();
  const { bugs } = useSelector(state => state);

  function bugClicked(name) {
    setDisplayBug({
      name: name,
      isDisplayed: !displayBug.isDisplayed,
    });
  }

  useEffect(() => {
    dispatch(getBugs());
  }, [bugs.length < 1]);
  return (
    <div className="page-container">
      {bugs.map((bug, key) => (
        <BugCard key={key} bug={bug} clicked={bugClicked} />
      ))}
      {/* filter passed in bug with corisponding name */}
      {displayBug.isDisplayed && (
        <BugView
          bug={bugs.filter(bug => {
            return bug.name == displayBug.name;
          })}
        />
      )}
    </div>
  );
}
