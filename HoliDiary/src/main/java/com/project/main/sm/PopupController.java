package com.project.main.sm;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.project.main.js.UserDAO;

@Controller
public class PopupController {

	@Autowired
	private UserDAO uDAO;
	
	//팝업창 - 오픈
	@RequestMapping(value = "/popup.open", method = RequestMethod.GET)
	public String popupOpen(HttpServletRequest req) {
		if (uDAO.loginCheck(req)) {
			req.setAttribute("popupContentPage", "popupHome.jsp");
			return "ksm_main/popup";			
		} else {
			req.setAttribute("popupContentPage", "popupBack.jsp");
			return "ksm_main/popupBack";			
		}
		
	}
	
	//팝업창 - 홈
	@RequestMapping(value = "/popupHomeGo", method = RequestMethod.GET)
	public String popupHome(HttpServletRequest req) {
		
		uDAO.loginCheck(req);
		req.setAttribute("popupContentPage", "popupHome.jsp");
		return "ksm_main/popup";
	}
	
	//팝업창 - 스케줄
	@RequestMapping(value = "/popupScheduleGo", method = RequestMethod.GET)
	public String popupScedule(HttpServletRequest req) {
		
		uDAO.loginCheck(req);
		req.setAttribute("popupContentPage", "popupSchedule.jsp");
		return "ksm_main/popup";
	}
	
	//팝업창 - 설정 관리
	@RequestMapping(value = "/updateMyPopup", method = RequestMethod.GET)
	public String updateMyPopup(HttpServletRequest req) {
		
		uDAO.loginCheck(req);
		req.setAttribute("popupContentPage", "updateMyPopup.jsp");
		return "ksm_main/popup";
	}
	

}
