package com.namoo.event.service.logic;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.namoo.event.dao.EventDao;
import com.namoo.event.domain.Event;
import com.namoo.event.service.facade.EventService;

@Service
public class EventServiceLogic implements EventService {

	@Autowired
	private EventDao eventDao;
	
	@Override
	public List<Event> findAllEvents() {
		//
		return eventDao.readAllEvents();
	}

	@Override
	public Event findEvent(int id) {
		//
		return eventDao.readEvent(id);
	}

	@Override
	public int createEvent(Event event) {
		//
		return eventDao.createEvent(event);
	}

	@Override
	public void modifyEvent(Event event) {
		//
		eventDao.updateEvent(event);
	}

	@Override
	public void removeEvent(int id) {
		//
		eventDao.deleteEvent(id);
	}

}
