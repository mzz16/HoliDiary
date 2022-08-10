package com.project.main.mj_write;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DiaryPostDAO {

	@Autowired
	private SqlSession ss;
	
	public void getAllList(HttpServletRequest req, Post p) {
		
		PostMapper pm = ss.getMapper(PostMapper.class);
		List<Post> posts = pm.showAllPostList();
		req.setAttribute("posts", posts);
	}

	public void detailPost(Post p, HttpServletRequest req) {
		PostMapper pm = ss.getMapper(PostMapper.class);
		Post posts = pm.detailPost(p);
		req.setAttribute("posts", posts);
	}

}
