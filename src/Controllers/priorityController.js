const colors = ['#b33a3a', '#F39C12', '#f7dc6f'];

export default priority => {
  const level = ['High', 'Medium', 'Low'];
  return {
    level: level[priority - 1],
    color: colors[priority - 1],
  };
};
