package com.project.main.sej;

import java.util.Date;

public class PostContent {
	
	private int postnum;
	private String posttitle;
	private String posttxt;
	private Date postdate;
	private String postwriter;
	private String postcategory;
	private String postcountry;
	private int postrecommend;
	private String postimg;
	private String postmap;
	private String postweather;
	
	public PostContent() {
		// TODO Auto-generated constructor stub
	}

	public PostContent(int postnum, String posttitle, String posttxt, Date postdate, String postwriter,
			String postcategory, String postcountry, int postrecommend, String postimg, String postmap,
			String postweather) {
		super();
		this.postnum = postnum;
		this.posttitle = posttitle;
		this.posttxt = posttxt;
		this.postdate = postdate;
		this.postwriter = postwriter;
		this.postcategory = postcategory;
		this.postcountry = postcountry;
		this.postrecommend = postrecommend;
		this.postimg = postimg;
		this.postmap = postmap;
		this.postweather = postweather;
	}

	public int getPostnum() {
		return postnum;
	}

	public void setPostnum(int postnum) {
		this.postnum = postnum;
	}

	public String getPosttitle() {
		return posttitle;
	}

	public void setPosttitle(String posttitle) {
		this.posttitle = posttitle;
	}

	public String getPosttxt() {
		return posttxt;
	}

	public void setPosttxt(String posttxt) {
		this.posttxt = posttxt;
	}

	public Date getPostdate() {
		return postdate;
	}

	public void setPostdate(Date postdate) {
		this.postdate = postdate;
	}

	public String getPostwriter() {
		return postwriter;
	}

	public void setPostwriter(String postwriter) {
		this.postwriter = postwriter;
	}

	public String getPostcategory() {
		return postcategory;
	}

	public void setPostcategory(String postcategory) {
		this.postcategory = postcategory;
	}

	public String getPostcountry() {
		return postcountry;
	}

	public void setPostcountry(String postcountry) {
		this.postcountry = postcountry;
	}

	public int getPostrecommend() {
		return postrecommend;
	}

	public void setPostrecommend(int postrecommend) {
		this.postrecommend = postrecommend;
	}

	public String getPostimg() {
		return postimg;
	}

	public void setPostimg(String postimg) {
		this.postimg = postimg;
	}

	public String getPostmap() {
		return postmap;
	}

	public void setPostmap(String postmap) {
		this.postmap = postmap;
	}

	public String getPostweather() {
		return postweather;
	}

	public void setPostweather(String postweather) {
		this.postweather = postweather;
	}
	
	
	
}
