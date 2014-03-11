function authorize()
{
	var github = new Github({
  username: "nielsschroyen",
  password: "Hivvd13d",
  auth: "basic"
		});
		
		
		
		var repo = github.getRepo("nielsschroyen", "nielsschroyen.github.io");
		
		repo.read('master', 'model/model.json', function(err, data) {
		 alert(data);
		});
		
		repo.getTree('master?recursive=true', function(err, tree) {
		
		alert(tree);
		});
		
		repo.show(function(err, repo) {
		alert(repo);
		});
	
	return false;
}