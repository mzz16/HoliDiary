package com.project.main.mj_write;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class WriteController {
	
	@RequestMapping(value = "/write.go", method = RequestMethod.GET)
	public String writeGo(HttpServletRequest req) {
		
		req.setAttribute("popupContentPage", "../mj_write/post_write.jsp");
		return "ksm_main/popup";
	}
}
