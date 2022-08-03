package com.project.main.mj;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MapController {

	@RequestMapping(value = "/map.go", method = RequestMethod.GET)
	public String mapGo() {

		return "mj_map/map";
	}

}
