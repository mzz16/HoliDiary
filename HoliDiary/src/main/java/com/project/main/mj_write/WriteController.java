package com.project.main.mj_write;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.project.main.js.UserDAO;


@Controller
public class WriteController {
	
	@Autowired
	private UserDAO uDAO;
	
	@Autowired
	private DiaryPostDAO pDAO;
	
	// 게시글 목록 불러오기
	@RequestMapping(value = "/post-list", method = RequestMethod.GET)
	public String listGo(HttpServletRequest req, DiaryPost p, @RequestParam("postWriter") String userId) {

		pDAO.getAllList(req, p, userId);
		
		req.setAttribute("popupContentPage", "../mj_write/post_list.jsp");
		return "ksm_main/popup";
	}
	
	// 게시글 상세보기
	@RequestMapping(value = "/post.detail.go", method = RequestMethod.GET)
	public String postDetailGo(DiaryPost p, HttpServletRequest req) {
		
		pDAO.detailPost(p, req);
		req.setAttribute("popupContentPage", "../mj_write/post_detail.jsp");
		
		return "ksm_main/popup";
	}
	
	// 글쓰기 페이지 바로가기
	@RequestMapping(value = "/write.go", method = RequestMethod.GET)
	public String writeGo(HttpServletRequest req) {
		
		req.setAttribute("popupContentPage", "../mj_write/post_write.jsp");
		return "ksm_main/popup";
	}
	
	
	
	// 글 등록
	/*@RequestMapping(value = "/post.reg.do", method = RequestMethod.POST)
	public String postRegDo(DiaryPost p, HttpServletRequest req) {
		
		if(uDAO.loginCheck(req)) {
			pDAO.regPost(p, req);
		}
		
		req.setAttribute("popupContentPage", "../mj_write/post_detail.jsp");
		return "ksm_main/popup";
	}*/
	
	// 지도 만들기
	@RequestMapping(value = "/map.open", method = RequestMethod.GET)
	public String mapOpen(HttpServletRequest req) {
		
		return "mj_map/map";
	}
}
