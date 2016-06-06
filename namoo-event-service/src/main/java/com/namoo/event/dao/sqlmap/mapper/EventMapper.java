package com.namoo.event.dao.sqlmap.mapper;

import java.util.List;

import com.namoo.event.domain.Event;

public interface EventMapper {

	List<Event> selectAllEvents();
	Event selectEvent(int id);
	
	int insertEvent(Event event);
	
	void updateEvent(Event event);
	
	void deleteEvent(int id);
}
