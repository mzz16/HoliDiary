package com.project.main.js;

public interface UserMapper {

	int join(User u);

	User getUserByID(User u);

	User getUserByKakaoID(User kakaoUser);

	User getUserByNaverID(User u);

	int naver(User u);

	int fileUpdate(User u);

	int idCheck(User u);

	int idCheckWithKakao(User u);
	
	int idCheckWithNaver(User u);

	int nickCheck(User u);

	int joinWithKakao(User kakaoUser);

	int joinWithNaver(User u);






}
