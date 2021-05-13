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
		// FIRST NAME
		if ($("#fname").val().trim() == "")
		 {
		 	return "Insert First Name.";
		 }
		
		// LAST NAME
		if ($("#lname").val().trim() == "")
		 {
		 	return "Insert Last Name.";
		 }
		
		// NIC
		if ($("#nic").val().trim() == "")
		 {
		 	return "Insert NIC Number.";
		 }
		
		// ADDRESS
		if ($("#address").val().trim() == "")
		 {
		 	return "Insert Address.";
		 }
		
		// PHONE
		if ($("#phone").val().trim() == "")
		 {
		 	return "Insert Phone Number.";
		 }
		
		// EMAIL
	
		if ($("#email").val().trim() == "")
		 {
		 	return "Insert Email Address.";
		 }
	
		// USERNAME
		if ($("#username").val().trim() == "")
		 {
		 	return "Insert Username.";
		 }
	
		// PASSWORD
		if ($("#password").val().trim() == "")
		 {
		 	return "Insert Password.";
		 }
	
				
		// is numerical value
		var tmpPhone = $("#phone").val().trim();
		if (!$.isNumeric(tmpPhone))
		 {
		 	return "Insert a numerical value for Phone number.";
		 }
		
		// convert to decimal price
		 //$("#itemPrice").val(parseFloat(tmpPrice).toFixed(2));
		
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