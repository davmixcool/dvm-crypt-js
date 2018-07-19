var math = require('mathjs');

module.exports = {
  
	encrypt(chars) {
	  //Note: The console log is for development purpose
	  	if (typeof chars === 'string') {
	    	//console.log('String = '+chars);
	    	var alphabet = 'abcdefghijklmnopqrstuvwxyz';
	    	var output = ''; //define the output
	    	for (var s = 0; s < chars.length; s++) { 
	    	//loop through the characters
	       		var char = chars[s];
	        	//console.log('Char = '+char);
	         	for (var i = 0; i <= alphabet.length; i++) { //loop through the alphabet to get the index
	             	if (alphabet[i] === char.toLowerCase()) {
	             	 	var index = i+1;
	               		//console.log('Index = '+index);
	                  	var check = index % 2;
	                  	if (check == 0) {
	                    	//console.log("even");
	                    	var number = index/2;
	                    	var hash = 'e'+number;
	                     	//console.log('Number: '+number+' and Hash: '+hash);
	                  	} else if (check == Math.round(check)) { 
	                    	//console.log("odd");
	                    	var number = (index*3)+1;
	                    	var hash = 'o'+number;
	                     	//console.log('Number: '+number+' and Hash: '+hash);
	                  	} else {
	                      	//console.log("invalid");
	                     	var number = '-';
	                     	var hash = '-';
	                  	}
	                	output += hash; //add the hash value to the output
	            	}
	       		}
	    	}
	    	//console.log(output);
	    	return output; //output the hash value;

		}else{
		    throw new Error('Please enter a valid string to get the hash.');
		}
	},

	decrypt(chars) {
	 	 //Note: The console log is for development purpose
	  	if (typeof chars === 'string') {
	      	//console.log('String = '+chars);
	     	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	     	var output = ''; //define the output
	     	var Numbers = [];

	     	for (var i = 0; i < chars.length; i++) {
	       		var char = chars[i];
	       		var n1 = chars[i+1];
	       		var n2 = chars[i+2];
	       		if(char == 'e'){  
	          		var even = '';
	          		if(n1 == parseInt(n1, 10)){
	           			//var d = alphabet.charAt(oN);
	            		even += n1;
	          		}
		          	if(n2 == parseInt(n2, 10)){
		            	//var d = alphabet.charAt(oN);
		             	even += n2;
		          	}

	          		Numbers.push((parseInt(even)*2));
	        	}
	      		if(char == 'o'){  
	          		var odd = '';
	          		if(n1 == parseInt(n1, 10)){
	            		//var d = alphabet.charAt(oN);
	             		odd += n1;
	          		}
	          		if(n2 == parseInt(n2, 10)){
	            		//var d = alphabet.charAt(oN);
	             		odd += n2;
	         		}
	          		Numbers.push(((parseInt(odd)-1)/3));
	        	}
	       
	    	}

	    	for (var n = 0; n < Numbers.length; n++) { 
	    		//loop through the Numbers array to determine the letter
	       		var index = Numbers[n]-1;
	       		//console.log('Index = '+index);
	       		var letter = alphabet[index].toUpperCase();
	       		//console.log('Letter = '+letter.toUpperCase());
	       		output += letter; //add the letter value to the output
	     	}
	     
	    	//console.log(output);

	    	return output; //output the hash value;

	  	}else{

	    throw new Error('Please enter a valid string to Decrypt the hash.');

	  	}
	}


}