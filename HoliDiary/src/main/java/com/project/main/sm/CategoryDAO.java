package com.project.main.sm;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CategoryDAO {
	
	@Autowired
	private SqlSession ss;

//	//카테고리 업데이트 (추가)
//	public void updateCategoryAdd(HttpServletRequest req, Diary d, String userId) {
//		
//		try {
//			
//			String addCategoryName = req.getParameter("addCategoryName");
//			
//			c.setCategory1(addCategoryName);
//			
//			req.setAttribute("Category", ss.getMapper(CategoryMapper.class).addCategory(c));
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//
//		
//	}

	
}
