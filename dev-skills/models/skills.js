const skills = [
	{id: 125223, skill: 'Bad at coding', done: true},
	{id: 127904, skill: 'Good at cooking', done: true},
	{id: 139608, skill: 'Competent software engineer', done: false}
  ];
  
  module.exports = {
	getAll,
	getOne,
	create,
    deleteOne
  };
  
  function deleteOne(id) {
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }
  function getOne(id) {
	// Use the Array.prototype.find iterator method
	return skills.find(skills => skills.id === parseInt(id));
  }
  function getAll() {
	return skills;
  }

  function create(skill) {
	// Add the id
	skill.id = Date.now() % 1000000;
	// New todos wouldn't be done :)
	skill.done = false;
	skills.push(skill);
  }