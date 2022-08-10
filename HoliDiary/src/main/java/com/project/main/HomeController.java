package com.project.main;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.project.main.js.UserDAO;

@Controller
public class HomeController {
	
	@Autowired
	private UserDAO uDAO;
	
	@Autowired
	private PostDAO pDAO;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(HttpServletRequest req) {
		
		uDAO.loginCheck(req);
		
		req.setAttribute("contentPage", "home.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/index.go", method = RequestMethod.GET)
	public String indexGo(HttpServletRequest req) {
		return home(req);
	}
	
	@RequestMapping(value = "/index.search", method = RequestMethod.GET)
	public String indexSearch(PostSelector pSel,HttpServletRequest req) {
		TokenMaker.make(req);
		uDAO.loginCheck(req);
		pDAO.searchPost(pSel, req);
		pDAO.getPost(1, req);
		req.setAttribute("contentPage", "home_search.jsp");
		return "index";
	}
	
}
