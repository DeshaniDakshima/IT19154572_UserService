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
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

<style>
	#btnSave {
		width:300px;
		margin-left: 150px;
		font-size:15px;
	}
	h5,h2 {
		color:Black;
	}
	
	
</style>

</head>
<body>

<br><br>
<div class="container">
	<div class="row">
		<div class="col-6"> 
			<div class="jumbotron alert-info" style="width: 700px; margin-left: 200px;">
				
				
			     <div class = "panel-heading text-center">
			     	<h2><u>	Registration User Details </u></h2>
			     </div> <br><br>
			                
				<form id="formUser" name="formUser">
							 
					<div class="row "> 
						<label for="staticEmail" class="col-sm-3 col-form-label text-right"> <h5> First Name : </h5></label>    
						<div class="col-sm-9">
							<div class="input-group ">
								<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
								<input type = "text" class = "form-control" id="fname" name="fname" placeholder = "First Name"/>
							</div>
						</div>
					</div>
					<br>
					                  
					                  
					<div class="row ">
						<label for="staticEmail" class="col-sm-3 col-form-label text-right"> <h5> Last Name : </h5></label>    
						<div class="col-sm-9">
							<div class="input-group mb-3">
								<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span> 
								<input type = "text" class = "form-control" id="lname" name="lname" placeholder = "Last Name"/>
								<br/>
							</div>
						</div>
					</div><br>
							 
							 
					<div class="row"> 
						<label for="staticEmail" class="col-sm-3 col-form-label text-right"> <h5> NIC No : </h5></label>    
						<div class="col-sm-9">
							<div class="input-group">
								<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
								<input type = "text" class = "form-control" id="nic" name="nic" placeholder = "123456789V OR 123456789000"/>
								<br/>
							</div>
						</div>
					</div>
					<br>
					                    
					<div class="row"> 
						<label for="staticEmail" class="col-sm-3 col-form-label text-right"> <h5> Address : </h5></label>    
						<div class="col-sm-9">
							<div class="input-group">
								<span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
								<input type = "text" class = "form-control" id="address" name="address" placeholder = "Address"/>
								<br/>
							</div>
						</div>
					</div>
					<br>
							 
							 
					<div class="row"> 
						<label for="staticEmail" class="col-sm-3 col-form-label text-right"> <h5> Phone : </h5></label>    
						<div class="col-sm-9">
							<div class="input-group">
								<span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
								<input type = "text" class = "form-control" id="phone" name="phone" placeholder = "Contact Number"/>
								<br/>
							</div>
						</div>
					</div><br>
							 
					<div class="row"> 
						<label for="staticEmail" class="col-sm-3 col-form-label text-right"> <h5> E-mail : </h5></label>    
						<div class="col-sm-9">
							<div class="input-group">
								<span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
								<input type = "text" class = "form-control" id="email" name="email" placeholder = "Email"/>
								<br/>
							</div>
						</div>
					</div><br>
					                     
					<div class="row"> 
						<label for="staticEmail" class="col-sm-3 col-form-label text-right"> <h5> Username : </h5></label>    
						<div class="col-sm-9">
							<div class="input-group">
								<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
								<input type = "text" class = "form-control" id="username" name="username" placeholder = "Username"/>
								<br/>
							</div>
						</div>
					</div><br>
					                     
					<div class="row"> 
						<label for="staticEmail" class="col-sm-3 col-form-label text-right"> <h5> Password : </h5></label>    
						<div class="col-sm-9">
							<div class="input-group">
								<span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
								<input type = "password" class = "form-control" id="password" name="password" placeholder = "Insert more than 6 digits..."/>
								<br/>
							</div>
						</div>
					</div><br>
						  
					<input id="btnSave" name="btnSave" type="button" value="Save User Details" class="btn btn-primary btn-sm">
					<input type="hidden" id="hidItemIDSave" name="hidItemIDSave" value="">  <br><br>
					
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



	<br> <br> <br>

</body>
</html>