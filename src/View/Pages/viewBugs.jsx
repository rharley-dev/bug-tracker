import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BugView from '../BugView/bugView';
import { getBugs } from '../../Controllers/Redux/bugSlice';
import BugCard from '../BugCard/bugCard';

export default function Bugs() {
  const [DISPLAY_BUG, SET_DISPLAY_BUG] = useState({
    name: '',
    isDisplayed: false,
  });
  const dispatch = useDispatch();
  const { bugs } = useSelector(state => state);

  function bugClicked(name) {
    SET_DISPLAY_BUG({
      name: name,
      isDisplayed: !DISPLAY_BUG.isDisplayed,
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
      {DISPLAY_BUG.isDisplayed && (
        <BugView bug={bugs.filter(bug => bug.name == DISPLAY_BUG.name)[0]} />
      )}
    </div>
  );
}
