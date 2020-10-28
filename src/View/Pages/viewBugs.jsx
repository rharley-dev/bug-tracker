import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getBugs } from '../../Controllers/Redux/bugSlice';
import BugCard from '../BugCard/bugCard';
import './viewBugs.css';

export default function Bugs() {
  const dispatch = useDispatch();
  const { bugs } = useSelector(state => state);

  function bugClicked(name) {}

  useEffect(() => {
    dispatch(getBugs());
  }, [bugs.length < 1]);
  return (
    <div className="page-container">
      {bugs.map((bug, key) => (
        <BugCard key={key} bug={bug} clicked={bugClicked} />
      ))}
    </div>
  );
}
