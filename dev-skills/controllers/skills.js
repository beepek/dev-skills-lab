const Skill = require('../models/skills')

// represent showing all of the resource
// list out all the todos here
function index(req, res, next) {

	console.log(req.time)

	res.render('skills/index.ejs', {
		skills: Skill.getAll()
	});
}

function show(req, res){
	console.log(req.time)
	console.log(req.params, " <- req.params")
	res.render('skills/show.ejs', {
		skills: Skill.getOne(req.params.id)
	})
}

function newSkills(req, res){
	res.render('skills/new.ejs');
}

function create(req, res){
	// this should be the contents of the form
	// that was just submitted from the browser
	console.log(req.body, " <- req.body")
	Skill.create(req.body)
	// everytime we change data 
	res.redirect('/skills'); // < telling the client 
	// make a get request to /todos now
}

function deleteSkill(req, res){
    //console.log(req.params, 'req.params')
    Skill.deleteOne(req.params.id)
	res.redirect('/skills');
}
module.exports = {
	// index: index,
	index, // ^ what is actually happening
	show,
	new: newSkills,
	create,
    delete: deleteSkill,
}