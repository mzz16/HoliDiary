package com.project.main.sm;

public class Diary {
	
	private String diaryNum;
	private String diaryUrl;
	private String diaryTitle;
	private String diaryIntroduce;
	private String diaryImg;
	private String diaryUserId;
	private String diaryUserNickname;
	private String themeColor;
	private String categories;
	private String[] categoriesArray;
	
	public Diary() {
		// TODO Auto-generated constructor stub
	}

	public Diary(String diaryNum, String diaryUrl, String diaryTitle, String diaryIntroduce, String diaryImg,
			String diaryUserId, String diaryUserNickname, String themeColor, String categories,
			String[] categoriesArray) {
		super();
		this.diaryNum = diaryNum;
		this.diaryUrl = diaryUrl;
		this.diaryTitle = diaryTitle;
		this.diaryIntroduce = diaryIntroduce;
		this.diaryImg = diaryImg;
		this.diaryUserId = diaryUserId;
		this.diaryUserNickname = diaryUserNickname;
		this.themeColor = themeColor;
		this.categories = categories;
		this.categoriesArray = categoriesArray;
	}

	public String getDiaryNum() {
		return diaryNum;
	}

	public void setDiaryNum(String diaryNum) {
		this.diaryNum = diaryNum;
	}

	public String getDiaryUrl() {
		return diaryUrl;
	}

	public void setDiaryUrl(String diaryUrl) {
		this.diaryUrl = diaryUrl;
	}

	public String getDiaryTitle() {
		return diaryTitle;
	}

	public void setDiaryTitle(String diaryTitle) {
		this.diaryTitle = diaryTitle;
	}

	public String getDiaryIntroduce() {
		return diaryIntroduce;
	}

	public void setDiaryIntroduce(String diaryIntroduce) {
		this.diaryIntroduce = diaryIntroduce;
	}

	public String getDiaryImg() {
		return diaryImg;
	}

	public void setDiaryImg(String diaryImg) {
		this.diaryImg = diaryImg;
	}

	public String getDiaryUserId() {
		return diaryUserId;
	}

	public void setDiaryUserId(String diaryUserId) {
		this.diaryUserId = diaryUserId;
	}

	public String getDiaryUserNickname() {
		return diaryUserNickname;
	}

	public void setDiaryUserNickname(String diaryUserNickname) {
		this.diaryUserNickname = diaryUserNickname;
	}

	public String getThemeColor() {
		return themeColor;
	}

	public void setThemeColor(String themeColor) {
		this.themeColor = themeColor;
	}

	public String getCategories() {
		return categories;
	}

	public void setCategories(String categories) {
		this.categories = categories;
	}

	public String[] getCategoriesArray() {
		return categoriesArray;
	}

	public void setCategoriesArray(String[] categoriesArray) {
		this.categoriesArray = categoriesArray;
	}

	
	
}
