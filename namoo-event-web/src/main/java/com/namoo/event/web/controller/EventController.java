package com.namoo.event.web.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.namoo.event.domain.Event;
import com.namoo.event.domain.ImageFile;
import com.namoo.event.service.facade.EventService;

@Controller
public class EventController {
	
	@Value("#{event['imageRootPath']}")
	private String imageRoot;
	
	@Autowired
	private EventService eventService;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String main(Model model) {
		//
		List<Event> eventList = eventService.findAllEvents();
		model.addAttribute("eventList", eventList);
		
		return "main";
	}
	
	@RequestMapping(value = "/detail", method = RequestMethod.GET)
	@ResponseBody
	public Event eventList(String id) {
		//
		Event event = eventService.findEvent(Integer.parseInt(id));
		
		return event;
	}
	
	@RequestMapping(value = "/register", method = RequestMethod.GET)
	public String register() {
		return "register";
	}
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public String registerProcess(Event event, @RequestParam("datetime") String datetime,
			@RequestParam("largeImageFile") MultipartFile lImagefile, 
			@RequestParam("smallImageFile") MultipartFile sImagefile) throws IOException {
		//
		if (!lImagefile.isEmpty() || !sImagefile.isEmpty()) { 
			imageProcess(event, lImagefile, sImagefile);
		}
		event.setRegDate(new Date(Long.parseLong(datetime)));
		eventService.createEvent(event);
		
		return "redirect:/";
	}

	private void imageProcess(Event event, MultipartFile file1, MultipartFile file2) throws IOException {
		//
		StringBuffer sb = new StringBuffer();
		sb.append(new SimpleDateFormat("yyyyMMddHHmmssSSS").format(new Date()));
		sb.append(".");
		sb.append(FilenameUtils.getExtension(file1.getOriginalFilename()));
		String saveFilename = sb.toString();
		File saveFile = new File(imageRoot + saveFilename);
		
		FileCopyUtils.copy(file1.getBytes(), saveFile);
		
		ImageFile largeImage = new ImageFile(file1.getContentType(), saveFilename);
		event.setLargeImage(largeImage);
		
		System.out.println("image saved in " + saveFile.getCanonicalPath());
		
		sb = new StringBuffer();
		sb.append(new SimpleDateFormat("yyyyMMddHHmmssSSS").format(new Date()));
		sb.append(".");
		sb.append(FilenameUtils.getExtension(file2.getOriginalFilename()));
		saveFilename = sb.toString();
		saveFile = new File(imageRoot + saveFilename);
		
		FileCopyUtils.copy(file2.getBytes(), saveFile);
		
		ImageFile smallImage = new ImageFile(file2.getContentType(), saveFilename);
		event.setSmallImage(smallImage);
		
		System.out.println("image saved in " + saveFile.getCanonicalPath());
	}
	
	
	@RequestMapping(value = "/image/{id}/{size}", method = RequestMethod.GET)
	public void getProfileImage(@PathVariable("id") int id, @PathVariable("size") int size,
			HttpServletResponse resp) throws IOException {
		//
		Event event = eventService.findEvent(id);
		ImageFile imageFile = null;
		if (size == 0) imageFile = event.getLargeImage();
		if (size == 1) imageFile = event.getSmallImage();
		String contentType = null;
		InputStream in = null;
		if(imageFile != null) {
			contentType = imageFile.getContentType();
			in = new FileInputStream(new File(imageRoot + imageFile.getFileName()));
		} else {
			contentType = "image/png";
			in = this.getClass().getResourceAsStream("/default.png");
		}
		
		try {
			resp.setContentType(contentType);
			IOUtils.copy(in, resp.getOutputStream());
		} finally {
			IOUtils.closeQuietly(in);
		}
	}
}
