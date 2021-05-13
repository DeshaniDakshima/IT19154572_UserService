$(document).ready(function()
{
if ($("#alertSuccess").text().trim() == "")
 {
 $("#alertSuccess").hide();
 }
 $("#alertError").hide();
});


// SAVE ============================================

$(document).on("click", "#btnSave", function(event)
{
	
	// Clear alerts---------------------

	 $("#alertSuccess").text("");
	 $("#alertSuccess").hide();
	 $("#alertError").text("");
	 $("#alertError").hide();


	// Form validation-------------------
	
	var status = validateItemForm();
	if (status != true)
	 {
		 $("#alertError").text(status);
		 $("#alertError").show();
		 return;
	 }


	//If valid------------------------
	
	var type = ($("#hidItemIDSave").val() == "") ? "POST" : "PUT";
	 $.ajax(
	 {
		 url : "UserServiceAPI",
		 type : type,
		 data : $("#formUser").serialize(),
		 dataType : "text",
	
	complete : function(response, status)
	 {
	 	onItemSaveComplete(response.responseText, status);
	 }
	 });
	});


	// UPDATE==========================================
	
	$(document).on("click", ".btnUpdate", function(event)
			{
				$("#hidItemIDSave").val($(this).data("user"));
				 $("#fname").val($(this).closest("tr").find('td:eq(0)').text());
				 $("#lname").val($(this).closest("tr").find('td:eq(1)').text());
				 $("#nic").val($(this).closest("tr").find('td:eq(2)').text());
				 $("#address").val($(this).closest("tr").find('td:eq(3)').text());
				 $("#phone").val($(this).closest("tr").find('td:eq(4)').text());
				 $("#email").val($(this).closest("tr").find('td:eq(5)').text());
				 $("#username").val($(this).closest("tr").find('td:eq(6)').text());
				 $("#password").val($(this).closest("tr").find('td:eq(7)').text());
				 //$("#type").val($(this).closest("tr").find('td:eq(8)').text());
			});
	
	
	//Delete==========================================================
	
	$(document).on("click", ".btnRemove", function(event)
			{
			 $.ajax(
			 {
				 url : "UserServiceAPI",
				 type : "DELETE",
				 data : "userID=" + $(this).data("user"),
				 dataType : "text",
			 
			complete : function(response, status)
			 {
			 	onItemDeleteComplete(response.responseText, status);
			 }
			 });
			});
		
		
	// CLIENT-MODEL================================================================
	
	function validateItemForm()
	{
		
		//Firstname Validation
		var fname=$("#fname").val();
		
		
	  	if (fname == " " ||fname.trim().length == 0) //check length of value and value is empty
		{ 
		     return 'Insert First Name';
		 }
		 
		else if (!(/^\w+$/i.test(fname))) //only allow numbers and letter for name
		{ 
		       return 'Invalid First Name.';
	  	}


		//Lastname validation
		var lname=$("#lname").val();
		
		if (lname == " " ||lname.trim().length == 0) //check length of value and value is empty
		{   
               return 'Insert Last Name.';
        }

        else if (!(/^\w+$/i.test(lname))) //only allow numbers and letter for name
		{    
        	return 'Invalid Last Name.';
        }


		//NIC Validation
		var nic =$("#nic").val();
		var format1= /^([0-9]{9}[Vv])+$/; // format for 9 digit and one letter
		var format2 = /^([0-9]{12})+$/; //format for 12 digit
		
		if(nic == ""||nic.trim().length == 0)  //check length of value and value is empty
		{
		   return 'Insert NIC Number.';
		}
		
		else if((nic.length ==10 && (format1.test( nic )))){ }// check user input value length is 10 and the format is correct
		    
		     
		else if(nic.length ==12 && (format2.test( nic))) {} // check user input value length is 12 and the format is correct
		        
		else
		{
		    return 'Invalid NIC format.';
		}
		
		//Address Validation
		if ($("#address").val().trim() == "")
		 {
		 	return "Insert Address.";
		 }

		
		//Phone validation
		var phone =$("#phone").val();
		   
		if(phone.length==0 && phone.trim() =='') // check format and length of the value 
		{
		    return 'Insert Phone Numbers.';
		     
		}
		   
		else if (phone.length >1 && !(/^([0-9]{10})+$/.test( phone )))
		{
		    return  'Insert 10 numbers for Phone Number.';
		}
		
		
		// Email validation
		if ($("#email").val().trim() == "")
		 {
		 	return "Insert Email Address.";
		 }


		// Username Validation
		if ($("#username").val().trim() == "")
		 {
		 	return "Insert Username.";
		 }
	
	
		// Password Validation
		var password =$("#password").val();
		
		if(password.trim() == '') 
		{
		    return 'Insert Password.';
		     
		}
		   
		else if (password.length < 6 )
		{
		    return  'Password is not Strong!!.';
		}
		
		
		
	return true;
}

function onItemSaveComplete(response, status)
{
	if (status == "success")
	 {
		 var resultSet = JSON.parse(response);
		 if (resultSet.status.trim() == "success")
		 {
			 $("#alertSuccess").text("Successfully saved.");
			 $("#alertSuccess").show();
			 $("#divItemsGrid").html(resultSet.data);
		
		 } else if (resultSet.status.trim() == "error")
		 {
			 $("#alertError").text(resultSet.data);
			 $("#alertError").show();
		 }
	
	 } else if (status == "error")
	 {
		 $("#alertError").text("Error while saving.");
		 $("#alertError").show();
	 } else
	 {
		 $("#alertError").text("Unknown error while saving..");
		 $("#alertError").show();
	 } 
	
		$("#hidItemIDSave").val("");
		$("#formUser")[0].reset();
}

function onItemDeleteComplete(response, status)
{
	if (status == "success")
	 {
		 var resultSet = JSON.parse(response);
		 if (resultSet.status.trim() == "success")
		 {
			 $("#alertSuccess").text("Successfully deleted.");
			 $("#alertSuccess").show();
			 $("#divItemsGrid").html(resultSet.data);
		
		 } else if (resultSet.status.trim() == "error")
		 {
			 $("#alertError").text(resultSet.data);
			 $("#alertError").show();
		 }
	
	 } else if (status == "error")
	 {
		 $("#alertError").text("Error while deleting.");
		 $("#alertError").show();
	
	 } else
	 {
		 $("#alertError").text("Unknown error while deleting..");
		 $("#alertError").show();
	 }
}