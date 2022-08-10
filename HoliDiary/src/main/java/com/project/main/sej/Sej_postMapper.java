package com.project.main.sej;

import java.util.List;

public interface Sej_postMapper {

	int getPostCount(HomePostSelector pSel);

	List<PostContent> getPost(HomePostSelector pSel);

}
