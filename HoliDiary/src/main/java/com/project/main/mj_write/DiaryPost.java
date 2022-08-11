package com.project.main.mj_write;

import java.util.Date;

public class DiaryPost {
	
	private int postNum;
	private String postTitle;
	private String postTxt;
	private Date postDate;
	private String postWriter;
	private String postCategory;
	private String postCountry;
	private String postRecommend;
	private String postImg;
	private String postWeather;
	
	public DiaryPost() {
		// TODO Auto-generated constructor stub
	}

	public DiaryPost(int postNum, String postTitle, String postTxt, Date postDate, String postWriter, String postCategory,
			String postCountry, String postRecommend, String postImg, String postWeather) {
		super();
		this.postNum = postNum;
		this.postTitle = postTitle;
		this.postTxt = postTxt;
		this.postDate = postDate;
		this.postWriter = postWriter;
		this.postCategory = postCategory;
		this.postCountry = postCountry;
		this.postRecommend = postRecommend;
		this.postImg = postImg;
		this.postWeather = postWeather;
	}

	public int getPostNum() {
		return postNum;
	}

	public void setPostNum(int postNum) {
		this.postNum = postNum;
	}

	public String getPostTitle() {
		return postTitle;
	}

	public void setPostTitle(String postTitle) {
		this.postTitle = postTitle;
	}

	public String getPostTxt() {
		return postTxt;
	}

	public void setPostTxt(String postTxt) {
		this.postTxt = postTxt;
	}

	public Date getPostDate() {
		return postDate;
	}

	public void setPostDate(Date postDate) {
		this.postDate = postDate;
	}

	public String getPostWriter() {
		return postWriter;
	}

	public void setPostWriter(String postWriter) {
		this.postWriter = postWriter;
	}

	public String getPostCategory() {
		return postCategory;
	}

	public void setPostCategory(String postCategory) {
		this.postCategory = postCategory;
	}

	public String getPostCountry() {
		return postCountry;
	}

	public void setPostCountry(String postCountry) {
		this.postCountry = postCountry;
	}

	public String getPostRecommend() {
		return postRecommend;
	}

	public void setPostRecommend(String postRecommend) {
		this.postRecommend = postRecommend;
	}

	public String getPostImg() {
		return postImg;
	}

	public void setPostImg(String postImg) {
		this.postImg = postImg;
	}

	public String getPostWeather() {
		return postWeather;
	}

	public void setPostWeather(String postWeather) {
		this.postWeather = postWeather;
	}

	
	
	
	
}
