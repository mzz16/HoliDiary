package com.project.main.js;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {
	
	@Autowired
	private UserDAO uDAO;
	
	// 로그인 페이지 들어가기
	@RequestMapping(value = "/login.go", method = RequestMethod.GET)
	public String loginGo(HttpServletRequest req) {
		
		req.setAttribute("contentPage", "kjs_user/login.jsp");
		req.setAttribute("loginPage", "kjs_user/before_login.jsp");
		
		return "index";
	}
	
	// 로그인 하기
	@RequestMapping(value = "/login.do", method = RequestMethod.POST)
	public String loginDo(User u ,HttpServletRequest req) {
		
		uDAO.login(u,req);
		uDAO.loginCheck(req);
		
		if(!uDAO.loginCheck(req)) {
			req.setAttribute("contentPage", "kjs_user/login.jsp");
		}else {
			req.setAttribute("contentPage", "home.jsp");
		}
		
		return "index";
	}
	
	// 회원가입 옵션 선택
	@RequestMapping(value = "/join.option", method = RequestMethod.GET)
	public String joinOption(HttpServletRequest req) {
		
		req.setAttribute("contentPage", "kjs_user/join_option.jsp");
		req.setAttribute("loginPage", "kjs_user/before_login.jsp");
		return "index";
	}
	
	// 회원가입 페이지 들어가기
	@RequestMapping(value = "/join.go", method = RequestMethod.GET)
	public String joinGo(HttpServletRequest req) {
		
		req.setAttribute("contentPage", "kjs_user/join.jsp");
		req.setAttribute("loginPage", "kjs_user/before_login.jsp");
		return "index";
	}
	
	// 회원가입하기
	@RequestMapping(value = "/join.do", method = RequestMethod.POST)
	public String joinDo(User u ,HttpServletRequest req) {
		
		uDAO.join(u, req);
		
		req.setAttribute("contentPage", "kjs_user/join_last.jsp");
		req.setAttribute("loginPage", "kjs_user/before_login.jsp");
		return "index";
	}
	
	// ID체크하기(ajax)
	@RequestMapping(value = "/id.check", method = RequestMethod.GET)
	public @ResponseBody int idCheck(User u, HttpServletRequest req) {
		
		return uDAO.idCheck(u, req);
	}
	
	// 닉네임 체크하기(ajax)
	@RequestMapping(value = "/nick.check", method = RequestMethod.GET)
	public @ResponseBody int nickCheck(User u) {
		
		return uDAO.nickCheck(u);
	}
	
	// 마지막 사진 저장
	@RequestMapping(value = "/join.file.upload", method = RequestMethod.POST)
	public String joinFileUpload(User u ,HttpServletRequest req) {
		
		uDAO.fileUpdate(u, req);
		
		uDAO.loginCheck(req);
		req.setAttribute("contentPage", "home.jsp");
		return "index";
	}
	
	// 로그아웃하기
	@RequestMapping(value = "/logout.do", method = RequestMethod.GET)
	public String logoutDo(User u ,HttpServletRequest req) {
		
		uDAO.logout(req);
		uDAO.loginCheck(req);
		
		req.setAttribute("contentPage", "home.jsp");
		return "index";
	}
	
	// 카카오톡으로 회원가입 및 로그인하기
	@RequestMapping(value = "/social.kakao", method = RequestMethod.GET)
	public String socialKakao(HttpServletRequest req) {
		uDAO.loginWithKakao(req);
		uDAO.loginCheck(req);
		req.setAttribute("contentPage", "home.jsp");
		
		
		return "index";
	}
	
	// 네이버 콜백 주소(회원가입)
	@RequestMapping(value = "/callback.join.naver", method = RequestMethod.GET)
	public String callbackJoinNaver(User u, HttpServletRequest req) {

		uDAO.loginCheck(req);
		
		req.setAttribute("contentPage", "kjs_user/naver_callback_join.jsp");
		
		return "index";
	}
	
	// 네이버 콜백 주소(로그인)
	@RequestMapping(value = "/callback.login.naver", method = RequestMethod.GET)
	public String callbackLoginNaver(User u, HttpServletRequest req) {

		uDAO.loginCheck(req);

		req.setAttribute("contentPage", "kjs_user/naver_callback_login.jsp");
		
		return "index";
	}
	
	// 네이버 (회원가입: DB저장)
	@RequestMapping(value = "/social.join.naver", method = RequestMethod.GET)
	public String socialJoinNaver(User u, HttpServletRequest req) {
		
		//uDAO.loginWithNaver(u,req);
		uDAO.loginCheck(req);
		req.setAttribute("contentPage", "home.jsp");
		
		return "index";
	}
	
	// 네이버 (로그인)
	@RequestMapping(value = "/social.login.naver", method = RequestMethod.GET)
	public String socialLoginNaver(User u, HttpServletRequest req) {
		
		uDAO.loginWithNaver(u,req);
		if(uDAO.loginCheck(req)) {
			req.setAttribute("contentPage", "home.jsp");
		}else {
			req.setAttribute("contentPage", "kjs_user/login.jsp");
		}
		
		return "index";
	}
	
	// 네이버 회원가입
	@RequestMapping(value = "/join.naver", method = RequestMethod.POST)
	public @ResponseBody int joinNaver(User u, HttpServletRequest req) {
		
		return uDAO.joinWithNaver(u, req);
	}
	
	

}
