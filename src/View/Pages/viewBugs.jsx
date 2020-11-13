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
  // using redux state 
  const { bugs } = useSelector(state => state);

  function bugClicked(name) {
    console.log(name, "hello");
    SET_DISPLAY_BUG({
      isDisplayed: !DISPLAY_BUG.isDisplayed,
      name: name,
    });
  }

  useEffect(() => {
    console.log(bugs.filter(bug => bug.name === DISPLAY_BUG.name)[0])
    dispatch(getBugs());
  }, [bugs == undefined]); // only runs when bugs = null

  return (
    <div className="page-container">
      {bugs.map((bug, key) => (
        <BugCard key={key} bug={bug} clicked={bugClicked} />
      ))}
      {/* filter passed in bug with corisponding name */}
      {DISPLAY_BUG.isDisplayed && (
        <BugView clicked={bugClicked} bug={bugs.filter(bug => bug.name === DISPLAY_BUG.name)[0]} />
      )}
    </div>
  );
}
