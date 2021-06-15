package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.beans.Customer;
import com.example.demo.beans.Paper;
import com.example.demo.beans.PaperList;
import com.example.demo.persistence.CustomerDB;
import com.fasterxml.jackson.databind.ObjectMapper;


@RestController
@CrossOrigin
public class CustomerSerivceAPI {

	//@PostMapping(value="/storeCustomerRegDetails")
	//public ResponseEntity<String> getFeedbackDetails(@RequestBody Customer custJSONObj) throws ResponseStatusException
	@GetMapping(value="/sampleReq")
	public ResponseEntity<String> sampleReq() throws ResponseStatusException
	{
		return new ResponseEntity<>("Details added to DB Successfully!",HttpStatus.OK);
		
	}
	
	@PostMapping(value="/storeCustomerRegDetails")
	public ResponseEntity<String> getFeedbackDetails(@RequestBody Customer custObj) throws ResponseStatusException
	{
		//List<FeedbackMasterDetails> feedbackResponse = null;
		ResponseEntity<String> responseEntity = null;
		try
		{
		
			System.out.println(custObj.getFirstName());
			CustomerDB custDBObj = new CustomerDB();
			custDBObj.insertDoc(custObj);
			
			//System.out.println("Feedback Response"+new ObjectMapper().writeValueAsString(feedbackResponse));
			//responseEntity = new ResponseEntity<"Details added to DB Successfully!">(feedbackResponse,HttpStatus.OK);
			responseEntity= new ResponseEntity<>("Details added to DB Successfully!",HttpStatus.OK);
		}
		catch(Exception e)
		{
			//e.printStackTrace();
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Details could not be added to DB!", e);
		}
		return responseEntity;
		
	}
	
	@PostMapping(value="/fetchPaperDetails")
	public ResponseEntity<List<Paper>> fetchPaperDetails(@RequestBody PaperList paperList) throws ResponseStatusException
	{
		
		ResponseEntity<List<Paper>> responseEntity = null;
		try
		{
			
			System.out.println("123");
			List<Paper> paperDetFromDeviceList = new ArrayList<>();
			int counter=1;
			for(Paper paperObj:paperList.getPaperListObj())
			{
				
				Paper paper = new Paper();
				if(counter==1)
				{
					paper.setType(paperObj.getType());
					paper.setQuantity(paperObj.getQuantity()-1);
					paper.setQuality(paperObj.getQuality());
					paperDetFromDeviceList.add(paper);

				}
				else if(counter==2)
				{
					paper.setType(paperObj.getType());
					paper.setQuantity(paperObj.getQuantity());
					paper.setQuality("Medium");
					paperDetFromDeviceList.add(paper);
				}
				else
				{
					paperDetFromDeviceList.add(paperObj);
				}
				
			}
			//System.out.println("Feedback Response"+new ObjectMapper().writeValueAsString(feedbackResponse));
			//responseEntity = new ResponseEntity<"Details added to DB Successfully!">(feedbackResponse,HttpStatus.OK);
			responseEntity= new ResponseEntity<List<Paper>>(paperDetFromDeviceList,HttpStatus.OK);
		}
		catch(Exception e)
		{
			e.printStackTrace();			
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Error has occurred!", e);			
		}
		return responseEntity;
		
	}

	

}




