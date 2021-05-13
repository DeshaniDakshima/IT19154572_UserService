<%@page import="model.UserService"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>User Details</title>

<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/user.js"></script>


</head>
<body>

<br><br>
<div class="container">
<div class="row">
<div class="col-6"> 
<div class="jumbotron" style="width: 700px; margin-left: 200px;">
	<center><h1><u>User Details</u></h1> </center><br>
	<form id="formUser" name="formUser">
		 
		 First Name:
		 <input id="fname" name="fname" type="text" 
		 class="form-control form-control-sm">
		 <br> 
		 
		 Last Name:
		 <input id="lname" name="lname" type="text" 
		 class="form-control form-control-sm">
		 <br> 
		 
		 NIC:
		 <input id="nic" name="nic" type="number" 
		 class="form-control form-control-sm">
		 <br> 
		 
		 Address:
		 <input id="address" name="address" type="text" 
		 class="form-control form-control-sm">
		 <br>
		 
		 Phone:
		 <input id="phone" name="phone" type="number"
		 class="form-control form-control-sm">
		 <br> 
		 
		 Email:
		 <input id="email" name="email" type="text" 
		 class="form-control form-control-sm">
		 <br> 
		 
		 Username:
		 <input id="username" name="username" type="text" 
		 class="form-control form-control-sm">
		 <br> 
		 
		 Password:
		 <input id="password" name="password" type="password" placeholder = "Insert more than 6 digits..."
		 class="form-control form-control-sm">
		 <br> 
		 
		 		 
		 <input id="btnSave" name="btnSave" type="button" value="Save User Details"
		 class="btn btn-primary btn-block">
		 <input type="hidden" id="hidItemIDSave"
		 name="hidItemIDSave" value=""> 
	</form>
	
	</div>
	
	<br>

	
	<div id="alertSuccess" class="alert alert-success"></div>
	<div id="alertError" class="alert alert-danger"></div>
	
	<br>
	
	<div id="divItemsGrid" >
		 <%
			 UserService userObj = new UserService();
			 out.print(userObj.readUserDetails());
		 %>
	</div>
	
</div> 
</div> 
</div> 


	<br> <br> <br>

</body>
</html>