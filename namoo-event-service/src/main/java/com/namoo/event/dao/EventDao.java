package com.namoo.event.dao;

import java.util.List;

import com.namoo.event.domain.Event;

public interface EventDao {

	List<Event> readAllEvents();
	Event readEvent(int id);
	
	int createEvent(Event event);
	
	void updateEvent(Event event);
	
	void deleteEvent(int id);
	
}
