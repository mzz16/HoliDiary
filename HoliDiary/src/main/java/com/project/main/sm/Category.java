package com.project.main.sm;

import java.util.ArrayList;

public class Category {
	
	private String categoryUserId;
	private ArrayList<String> categories;
	
	public Category() {
		// TODO Auto-generated constructor stub
	}

	public Category(String categoryUserId, ArrayList<String> categories) {
		super();
		this.categoryUserId = categoryUserId;
		this.categories = categories;
	}

	public String getCategoryUserId() {
		return categoryUserId;
	}

	public void setCategoryUserId(String categoryUserId) {
		this.categoryUserId = categoryUserId;
	}

	public ArrayList<String> getCategories() {
		return categories;
	}

	public void setCategories(ArrayList<String> categories) {
		this.categories = categories;
	}

	
	

}
