package com.namoo.event.domain;

import java.util.Date;

public class Event {

	private int id;
	private String name;
	private Date regDate;
	private String subject;
	private String description;
	
	private ImageFile largeImage;
	private ImageFile smallImage;

	// --------------------------------------------------------------------------

	public Event() {
		//
	}

	public Event(int id, String name, Date regDate, String subject,
			String description, ImageFile largeImage, ImageFile smallImage) {
		//
		this.id = id;
		this.name = name;
		this.regDate = regDate;
		this.subject = subject;
		this.description = description;
		this.largeImage = largeImage;
		this.smallImage = smallImage;
	}

	// --------------------------------------------------------------------------

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getRegDate() {
		return regDate;
	}

	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public ImageFile getLargeImage() {
		return largeImage;
	}

	public void setLargeImage(ImageFile largeImage) {
		this.largeImage = largeImage;
	}

	public ImageFile getSmallImage() {
		return smallImage;
	}

	public void setSmallImage(ImageFile smallImage) {
		this.smallImage = smallImage;
	}

}
