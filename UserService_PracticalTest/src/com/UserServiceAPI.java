package com;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import model.UserService;

/**
 * Servlet implementation class UserServiceAPI
 */
@WebServlet("/UserServiceAPI")
public class UserServiceAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	UserService userObj = new UserService();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UserServiceAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

		String result = userObj.insertUserDetails(request.getParameter("fname"), request.getParameter("lname"), request.getParameter("nic"),
				request.getParameter("address"), request.getParameter("phone"), request.getParameter("email"),
				request.getParameter("username"), request.getParameter("password"), request.getParameter("type"));
		
		response.getWriter().write(result);
		
	}
	
	
	private static Map getParasMap(HttpServletRequest request) {
		Map<String, String> map = new HashMap<String, String>();
		try {
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
			String queryString = scanner.hasNext() ? scanner.useDelimiter("\\A").next() : "";
			scanner.close();
			String[] params = queryString.split("&");
			for (String param : params) {
				String[] p = param.split("=");
				map.put(p[0], p[1]);
			}
		} catch (Exception e) {
		}
		return map;
	}
	

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		Map paras = getParasMap(request);
		String result = userObj.updateUserDetails(paras.get("hidItemIDSave").toString(), paras.get("fname").toString(), paras.get("lname").toString(),
				paras.get("nic").toString(), paras.get("address").toString(), paras.get("phone").toString(), paras.get("email").toString(),
				paras.get("username").toString(), paras.get("password").toString());
		
		response.getWriter().write(result);
		
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		Map paras = getParasMap(request);
		String result = userObj.deleteUserDetails(paras.get("userID").toString());
		response.getWriter().write(result);
		
	}

}
