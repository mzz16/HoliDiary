package com.project.main.mj_write;

import java.util.List;

public interface CommentMapper {

	public List<Comment> showAllComments(Comment c);

	public int commentWrite(Comment c);

}
