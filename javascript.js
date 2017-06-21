
var userProfile = {
	name:'Bob',

	address:'St Charles',
	city: 'Nola',
	State : 'LA',
	zipcode:70118,
	avatar:'duck'


}
//test user profile
console.log(userProfile);


//get update function
function getProfileUpdate(){
	
	

		this.avatar = 'car';
		this.address = 'La Salle' ;
		

		
	} 

//test function

console.log(new getProfileUpdate());



//update user profile
function updateProfile(){
	

	

	Object.assign(userProfile,new getProfileUpdate());

	//test if uddates are being retrieved by function


	
	//tes if function works
	//console.log(userProfile);



}




// updates profile
updateProfile();

//final result
console.log(userProfile);





