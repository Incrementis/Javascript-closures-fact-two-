function Result()
{
	var topMain = document.getElementsByName('main');
	var topSub = document.getElementsByName('sub'); 
	var result = document.getElementById('result');
	var About = 0;
	
	
	//Checking main topic
	if(topMain[0].checked)
	{
		//Literature
		About = Topic(topMain[0].value);
		
	}
	else if(topMain[1].checked)		
	{
		//History
		About = Topic(topMain[1].value);
		
	}
	else
	{
		//ERROR
		return alert("Please, choose a main and a sub topic!");
		
	}
	
	
	//Checking sub topic
	for(var i = 0; i < topSub.length; i++)
	{
		
		if(topSub[i].checked === true)
		{
			/*
			ATTENTION:
			It is the same as "Topic(topMain)(topSub)".
			It works even by only calling the intern anonymous function
			*/
			result.innerHTML =  About(topSub[i].value);
			
			break;
		}
		
	}
	
}


/*
ATTENTION: variable "main" is known to the ananymous function within "topic"
*/
function Topic(main)
{
	return function(sub)
	{
		return main + " about " + sub;
	}
}