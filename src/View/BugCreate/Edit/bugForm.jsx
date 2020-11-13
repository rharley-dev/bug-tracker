import React, { useState } from 'react';

import BugModel from '../../../Models/bugModel';
import './bugForm.css';

export default props => {
  const [BUG_OBJECT, SET_BUG_OBJECT] = useState(new BugModel());
  return (
    <div className="bug-create">
      <h1>{props.title}</h1>
      <form>
        <label>Name:</label>
        <input type="text" name="name" placeholder="Bug Name" required />
        <label>Details:</label>
        <textarea
          name="details"
          placeholder="Detailed description on the bug."
          required
        ></textarea>
        <label>Steps:</label>
        <textarea
          name="steps"
          placeholder="Steps to recreate the bug."
          required
        ></textarea>
        <label>Priority:</label>
        <select name="priority" required>
          <option value="1">High</option>
          <option value="2">Medium</option>
          <option value="3">Low</option>
        </select>
        <label htmlFor="">Assigned</label>
        <select name="assigned">
          <option value="">Ryan</option>
        </select>
        <label htmlFor="">Application Version:</label>
        <input type="text" name="version" />
        <button type="submit">{props.title}</button>
      </form>
    </div>
  );
};
