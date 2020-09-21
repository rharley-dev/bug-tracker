import bugModel from '../Models/bugModel';

// making dummy data
export function retrieveBugs() {
  let data = [];
  data.push(
    new bugModel({
      _id: 13265213,
      name: 'Crash on load',
      details: 'Crashes afer 3 seconds',
      steps: 'Open application and it will crash',
      version: 'V2.0',
      assigned: 'Ryan Harley',
      creator: 'John Smith',
      priority: 1,
      time: '23:30',
    })
  );
  data.push(
    new bugModel({
      _id: 13265213,
      name: 'Wont load',
      details: 'Crashes afer 3 seconds',
      steps: 'Open application and it will crash',
      version: 'V2.0',
      assigned: 'Ryan Harley',
      creator: 'John Smith',
      priority: 3,
      time: '23:40',
    })
  );
  // sort data by priority, since it can come back in any order depending on the database return
  let sorted = data.sort((a, b) => {
    return a.priority - b.priority;
  });
  return sorted;
}
