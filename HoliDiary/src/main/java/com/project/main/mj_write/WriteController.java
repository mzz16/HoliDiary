package com.project.main.mj_write;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class WriteController {
	
	@Autowired
	private DiaryPostDAO pDAO;
	
	
	@RequestMapping(value = "/post.list", method = RequestMethod.GET)
	public String listGo(HttpServletRequest req, Post p) {
		
		pDAO.getAllList(req, p);
		
		req.setAttribute("popupContentPage", "../mj_write/post_list.jsp");
		return "ksm_main/popup";
	}
	
	
	@RequestMapping(value = "/post.detail.go", method = RequestMethod.GET)
	public String postDetailGo(Post p, HttpServletRequest req) {
		
		pDAO.detailPost(p, req);
		req.setAttribute("popupContentPage", "../mj_write/post_detail.jsp");
		
		return "ksm_main/popup";
	}
	
	@RequestMapping(value = "/write.go", method = RequestMethod.GET)
	public String writeGo(HttpServletRequest req) {
		
		req.setAttribute("popupContentPage", "../mj_write/post_write.jsp");
		return "ksm_main/popup";
	}
	
	@RequestMapping(value = "/map.open", method = RequestMethod.GET)
	public String mapOpen(HttpServletRequest req) {
		
		return "mj_map/map";
	}
}
