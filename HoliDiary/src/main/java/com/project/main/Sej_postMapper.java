package com.project.main;

import java.util.List;

public interface Sej_postMapper {

	int getPostCount(PostSelector pSel);

	List<PostContent> getPost(PostSelector pSel);

}
