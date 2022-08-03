package com.project.main.sm;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class PopupController {
	
	@RequestMapping(value = "/popup.open", method = RequestMethod.GET)
	public String popupOpen() {
		System.out.println(11);
		return "ksm_main/popup";
	}

}
