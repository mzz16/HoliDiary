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

	/*public void regPost(DiaryPost p, HttpServletRequest req) {

		String path = req.getSession().getServletContext().getRealPath("resources/images");
		MultipartRequest mr = null;
		String token = null;
		
		try {
			mr = new MultipartRequest(req, path, 1500 * 1024 * 1024, "utf-8", new DefaultFileRenamePolicy());
			token = mr.getParameter("token");
			String successToken = (String) req.getSession().getAttribute("successToken");
			if (successToken != null && token.equals(successToken)) {
				String fileName = mr.getFilesystemName("g_file");
				new File(path + "/" + fileName).delete();
				return;
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			return;
		}
		
		
		try {
			User u = (User) req.getSession().getAttribute("loginUser");
			
			p.setPostWriter(u.getUserID());
			p.setPostTitle(mr.getParameter("postTitle"));
			p.setPostTxt(mr.getParameter("postTxt"));
			p.setPostDate(mr.getParameter("postDate"));
			
			
		} catch (Exception e) {
			// TODO: handle exception
		}
		
	}*/

}
