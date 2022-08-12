package com.project.main.js;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MypageController {
	
	@Autowired
	UserDAO uDao;
	
		// 마이 페이지 들어가기
		@RequestMapping(value = "/mypage.go", method = RequestMethod.GET)
		public String mypageGo(HttpServletRequest req) {
			
			if(uDao.loginCheck(req)) {
				req.setAttribute("contentPage", "kjs_mypage/mypage.jsp");
			}else {
				req.setAttribute("contentPage", "home.jsp");
			}
			
			return "index";
		}



}
