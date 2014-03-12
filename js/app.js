function authorize(name, pw)
{
 var name =	$('#nameField').val();
 var pw =	$('#pwField').val();
	var github = new Github({
  username: name,
  password: pw,
  auth: "basic"
		});
		
		
		
		var repo = github.getRepo(name, name+".github.io");
		
		repo.write('master', 'posts/test.html', 'test my writing', 'Update test.html post', function(err) {
			alert(err);
		});
		
		
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

function getPosts()
{
	var github = new Github({
	auth: "basic"
		});
		
		var repo = github.getRepo("nielsschroyen", "nielsschroyen.github.io");
				
		repo.read('master', 'model/model.json', function(err, data) {
		
		alert(data);
		 
		});	
		
}