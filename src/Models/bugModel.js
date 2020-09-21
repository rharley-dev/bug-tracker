export default bug;

// defining the layout of this bug
// using as a model to be utilized throughout the code
function bug(bug) {
  if (bug != undefined) {
    this._id = bug._id;
    this.name = bug.name;
    this.details = bug.details;
    this.steps = bug.steps;
    this.version = bug.version;
    this.priority = bug.priority;
    this.assigned = bug.assigned;
    this.creator = bug.creator;
    this.time = bug.time;
  }
}
