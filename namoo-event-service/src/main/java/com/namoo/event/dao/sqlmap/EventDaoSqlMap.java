package com.namoo.event.dao.sqlmap;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.namoo.event.dao.EventDao;
import com.namoo.event.dao.sqlmap.mapper.EventMapper;
import com.namoo.event.domain.Event;

@Repository
public class EventDaoSqlMap implements EventDao {

	@Autowired
	private EventMapper eventMapper;
		
	@Override
	public List<Event> readAllEvents() {
		// 
		return eventMapper.selectAllEvents();
	}

	@Override
	public Event readEvent(int id) {
		//
		return eventMapper.selectEvent(id);
	}

	@Override
	public int createEvent(Event event) {
		//
		eventMapper.insertEvent(event);
		return event.getId();
	}

	@Override
	public void updateEvent(Event event) {
		//
		eventMapper.updateEvent(event);
	}

	@Override
	public void deleteEvent(int id) {
		//
		 eventMapper.deleteEvent(id);
	}

}
