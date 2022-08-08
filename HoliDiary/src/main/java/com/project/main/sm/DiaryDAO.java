package com.project.main.sm;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class DiaryDAO {
	
	@Autowired
	private SqlSession ss;

	// 다이어리 유무 체크
	public boolean diaryCheck(HttpServletRequest req, Diary d) {

		if (d != null) { // 다이어리 있음 - 정상 연결
			return true;
		} // 다이어리 없음 - 만들어야함 - 만드는 페이지로
			req.setAttribute("loginPage", "ksm_main/makeDiary");
			return false;
			
	}

	// 다이어리 정보 업데이트
	public void updateDiary(HttpServletRequest req) {

	}

}
