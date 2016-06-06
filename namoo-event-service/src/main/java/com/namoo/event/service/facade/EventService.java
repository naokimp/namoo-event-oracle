package com.namoo.event.service.facade;

import java.util.List;

import com.namoo.event.domain.Event;

public interface EventService {

	List<Event> findAllEvents();
	Event findEvent(int id);
	
	int createEvent(Event event);
	
	void modifyEvent(Event event);
	
	void removeEvent(int id);
}
