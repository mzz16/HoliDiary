package com.project.main.sm;

import java.util.List;
import com.project.main.js.User;
import com.project.main.sm.Diary;

public interface DiaryMapper {

	public List<Diary> getDiaryInfo();
	public void diaryInsert(User u);
	public int diaryUpdate(Diary d);


}
