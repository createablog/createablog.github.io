function authorize()
{
	$.get('https://github.com/login/oauth/authorize', function(x){
	alert(x);	  });
	
	return false;
}