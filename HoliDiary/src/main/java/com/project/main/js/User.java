package com.project.main.js;

public class User {
	
	private String userID;
	private String userPW;
	private String userName;
	private String userPhoneNumber;
	private String userEmail;
	private String userImg;
	private String userDiaryUrl;
	private String userNickname;
	private String kakaoID;
	private String naverID;
	
	
	public User() {
		// TODO Auto-generated constructor stub
	}


	public User(String userID, String userPW, String userName, String userPhoneNumber, String userEmail, String userImg,
			String userDiaryUrl, String userNickname, String kakaoID, String naverID) {
		super();
		this.userID = userID;
		this.userPW = userPW;
		this.userName = userName;
		this.userPhoneNumber = userPhoneNumber;
		this.userEmail = userEmail;
		this.userImg = userImg;
		this.userDiaryUrl = userDiaryUrl;
		this.userNickname = userNickname;
		this.kakaoID = kakaoID;
		this.naverID = naverID;
	}


	public String getUserID() {
		return userID;
	}


	public void setUserID(String userID) {
		this.userID = userID;
	}


	public String getUserPW() {
		return userPW;
	}


	public void setUserPW(String userPW) {
		this.userPW = userPW;
	}


	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		this.userName = userName;
	}


	public String getUserPhoneNumber() {
		return userPhoneNumber;
	}


	public void setUserPhoneNumber(String userPhoneNumber) {
		this.userPhoneNumber = userPhoneNumber;
	}


	public String getUserEmail() {
		return userEmail;
	}


	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}


	public String getUserImg() {
		return userImg;
	}


	public void setUserImg(String userImg) {
		this.userImg = userImg;
	}


	public String getUserDiaryUrl() {
		return userDiaryUrl;
	}


	public void setUserDiaryUrl(String userDiaryUrl) {
		this.userDiaryUrl = userDiaryUrl;
	}


	public String getUserNickname() {
		return userNickname;
	}


	public void setUserNickname(String userNickname) {
		this.userNickname = userNickname;
	}


	public String getKakaoID() {
		return kakaoID;
	}


	public void setKakaoID(String kakaoID) {
		this.kakaoID = kakaoID;
	}


	public String getNaverID() {
		return naverID;
	}


	public void setNaverID(String naverID) {
		this.naverID = naverID;
	}
	
	
	
	
	
	

}
