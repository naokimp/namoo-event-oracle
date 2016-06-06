package com.namoo.event.domain;

import java.util.ArrayList;
import java.util.List;

public class NamooEvent {

	private String name = "NamooEvent";
	private List<Event> events;
	
	//--------------------------------------------------------------------------
	
	public NamooEvent() {
		//
		this.events = new ArrayList<Event>();
	}
	
	public String getName() {
		return name;
	}

	public List<Event> getEvents() {
		return events;
	}
	
	public void setEvents(List<Event> events) {
		this.events = events;
	}

	public void addEvents(Event event) {
		this.events.add(event);
	}
}
