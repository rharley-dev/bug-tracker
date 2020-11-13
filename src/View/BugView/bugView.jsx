import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import EditBug from '../BugCreate/Edit/bugForm';
import EditPanel from '../AdminEdit/editPanel';
import BugModel from '../../Models/bugModel';
import ViewSection from './bugViewSection';
import { markComplete } from '../../Controllers/Redux/bugSlice';
import './bugView.css';

export default props => {
  const dispatch = useDispatch();
  const bug = new BugModel(props.bug);
  const [DISPLAY_EDIT, setDISPLAY_EDIT] = useState(false);
  function editClicked() {
    setDISPLAY_EDIT(!DISPLAY_EDIT);
  }
  function deleteClicked() {}

  return (
    <>
      <div className="bug-view">
        <EditPanel editClicked={editClicked} deleteClicked={deleteClicked} />
        <button className="close-btn" onClick={props.clicked}>
          Close
        </button>
        <h1>{bug.name}</h1>
        <ViewSection title="Details" info={bug.details} />
        <ViewSection title="Steps" info={bug.steps} />
        <ViewSection title="Priority" info={bug.priority} />
        <ViewSection title="Creator" info={bug.creator} />
        <ViewSection title="App Version" info={bug.version} />
        <ViewSection title="Time Created" info={bug.time} />
        <button
          onClick={() => {
            dispatch(markComplete());
          }}
        >
          Mark Complete
        </button>
      </div>
      {DISPLAY_EDIT && <EditBug title="Edit Bug" bug={bug} close={editClicked} />}
    </>
  );
};
