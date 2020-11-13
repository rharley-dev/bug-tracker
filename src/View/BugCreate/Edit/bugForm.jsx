import React, { useState } from 'react';

import BugModel from '../../../Models/bugModel';
import './bugForm.css';

export default props => {
  // the bug will be passed over from props:
  // when editing the bug this will save the inputs rather than reinputing the data
  // if props.bug is null then this will create an empty bug
  const [BUG_OBJECT, SET_BUG_OBJECT] = useState(new BugModel(props.bug));

  function inputChanged(e) {
    SET_BUG_OBJECT({
      // setting to the previous version of state and using the spread operator to not overwrite
      ...BUG_OBJECT,
      // retrieving the input to change state
      // using a target name for the key use []
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="bug-create">
      <h1>{props.title}</h1>
      <form>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Bug Name"
          required
          onChange={inputChanged}
          value={BUG_OBJECT.name}
        />
        <label>Details:</label>
        <textarea
          name="details"
          placeholder="Detailed description on the bug."
          required
          onChange={inputChanged}
          value={BUG_OBJECT.details}
        ></textarea>
        <label>Steps:</label>
        <textarea
          name="steps"
          placeholder="Steps to recreate the bug."
          required
          onChange={inputChanged}
          value={BUG_OBJECT.steps}
        ></textarea>
        <label>Priority:</label>
        <select
          name="priority"
          required
          onChange={inputChanged}
          value={BUG_OBJECT.priority}
        >
          <option value="1">High</option>
          <option value="2">Medium</option>
          <option value="3">Low</option>
        </select>
        <label htmlFor="">Assigned</label>
        <select
          name="assigned"
          onChange={inputChanged}
          value={BUG_OBJECT.assigned}
        >
          <option value="">Ryan</option>
        </select>
        <label htmlFor="">Application Version:</label>
        <input
          type="text"
          name="version"
          placeholder="Application Version"
          onChange={inputChanged}
          value={BUG_OBJECT.version}
        />
        <button type="submit">{props.title}</button>
      </form>
    </div>
  );
};
