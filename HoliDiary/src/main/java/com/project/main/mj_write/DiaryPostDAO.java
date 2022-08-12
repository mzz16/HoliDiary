package com.project.main.mj_write;

import java.sql.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.parsing.GenericTokenParser;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

@Service
public class DiaryPostDAO {

	@Autowired
	private SqlSession ss;
	
	public void getAllList(HttpServletRequest req, DiaryPost p, String userId) {
		
		try {
			p.setPostWriter(userId);
			DiaryPostMapper pm = ss.getMapper(DiaryPostMapper.class);
			List<DiaryPost> posts = pm.showAllPostList(p);
			req.setAttribute("posts", posts);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void detailPost(DiaryPost p, HttpServletRequest req) {
		DiaryPostMapper pm = ss.getMapper(DiaryPostMapper.class);
		DiaryPost posts = pm.detailPost(p);
		req.setAttribute("posts", posts);
	}

	public void regPost(DiaryPost p, HttpServletRequest req, String userId, String postTitle, 
			String postTxt, String postCategory, String postCountry) {
		System.out.println("유저아이디" + userId);
		System.out.println("2" + postTitle);
		System.out.println("3" + postTxt);
		System.out.println("4" + postCategory);
		System.out.println("5" + postCountry);
		try {
			p.setPostWriter(userId);
			p.setPostTitle(postTitle);
			p.setPostTxt(postTxt);
			p.setPostCategory(postCategory);
			p.setPostCountry(postCountry);
			
			if(ss.getMapper(DiaryPostMapper.class).regPost(p) == 1) {
				System.out.println("등록성공");
			} else {
				System.out.println("등록실패");
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	
	
}
