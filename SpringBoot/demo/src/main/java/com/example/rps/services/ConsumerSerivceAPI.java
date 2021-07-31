package com.example.rps.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.rps.beans.Login;
import com.example.rps.beans.PaperMaster;
import com.example.rps.beans.buy.BuyTransaction;
import com.example.rps.beans.buy.Consumer;
import com.example.rps.beans.sell.Customer;
import com.example.rps.beans.sell.SellTransaction;
import com.example.rps.persistence.ConsumerDB;
import com.example.rps.persistence.CustomerDB;



@RestController
@CrossOrigin
public class ConsumerSerivceAPI {

	
	@PostMapping(value="/validateConsumer")
	public ResponseEntity<Boolean> validateCustomer(@RequestBody Login loginObj) throws ResponseStatusException
	{
		
		ResponseEntity<Boolean> responseEntity = null;
		try
		{
		
			
			CustomerDB custDBObj = new CustomerDB();
			custDBObj.validateCustomer(loginObj);
			
			
			//System.out.println("Feedback Response"+new ObjectMapper().writeValueAsString(feedbackResponse));
			//responseEntity = new ResponseEntity<"Details added to DB Successfully!">(feedbackResponse,HttpStatus.OK);
			responseEntity= new ResponseEntity<>(true,HttpStatus.OK);
		}
		catch(Exception e)
		{
			//e.printStackTrace();
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Details could not be added to DB!", e);
		}
		return responseEntity;
		
	}
	

	@PostMapping(value="/storeConsumerRegDetails")
	public ResponseEntity<Integer> getFeedbackDetails(@RequestBody Consumer consObj) throws ResponseStatusException
	{
		//List<FeedbackMasterDetails> feedbackResponse = null;
		ResponseEntity<Integer> responseEntity = null;
		try
		{
		
			//System.out.println(new Obj);
			ConsumerDB consDBObj = new ConsumerDB();
			int res = consDBObj.insertConsumerDoc(consObj);
			
			
			//System.out.println("Feedback Response"+new ObjectMapper().writeValueAsString(feedbackResponse));
			//responseEntity = new ResponseEntity<"Details added to DB Successfully!">(feedbackResponse,HttpStatus.OK);
			responseEntity= new ResponseEntity<>(res,HttpStatus.OK);
		}
		catch(Exception e)
		{
			//e.printStackTrace();
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Details could not be added to DB!", e);
		}
		return responseEntity;
		
	}
	
	@PostMapping(value="/storeBuyTransactionDetails")
	public ResponseEntity<Boolean> getFeedbackDetails(@RequestBody BuyTransaction transObj) throws ResponseStatusException
	{
		//List<FeedbackMasterDetails> feedbackResponse = null;
		
		ResponseEntity<Boolean> responseEntity = null;
		try
		{
		
			//System.out.println(custObj.getFirstName());
			ConsumerDB consDBObj = new ConsumerDB();
			Boolean res = consDBObj.insertTransDoc(transObj);
			
			
			//System.out.println("Feedback Response"+new ObjectMapper().writeValueAsString(feedbackResponse));
			//responseEntity = new ResponseEntity<"Details added to DB Successfully!">(feedbackResponse,HttpStatus.OK);
			responseEntity= new ResponseEntity<>(res,HttpStatus.OK);
		}
		catch(Exception e)
		{
			//e.printStackTrace();
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Transaction details could not be added to DB!", e);
		}
		return responseEntity;
		
	}
	
	@PostMapping(value="/getPaperMasterDetails")
	public ResponseEntity<List<PaperMaster>> getPaperMasterDetails() throws ResponseStatusException
	{
		ResponseEntity<List<PaperMaster>> responseEntity = null;
		try
		{
		
			
			ConsumerDB consDBObj = new ConsumerDB();
			List<PaperMaster> res = consDBObj.getPaperMasterDetails();
			
			for(int count=0;count<res.size();count++)
			{
				PaperMaster obj = res.get(count);
				System.out.println(obj.getQoh()+":"+obj.getType()+":"+obj.getQuality());
			}
			
			
			//System.out.println("Feedback Response"+new ObjectMapper().writeValueAsString(feedbackResponse));
			//responseEntity = new ResponseEntity<"Details added to DB Successfully!">(feedbackResponse,HttpStatus.OK);
			responseEntity= new ResponseEntity<>(res,HttpStatus.OK);
		}
		catch(Exception e)
		{
			//e.printStackTrace();
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Transaction details fetched from DB!", e);
		}
		return responseEntity;
	
	}
	@PostMapping(value="/getBuyTransactionDetails")
	public ResponseEntity<List<BuyTransaction>> getTransDetails(@RequestBody Integer consumerId) throws ResponseStatusException
	{
		//List<FeedbackMasterDetails> feedbackResponse = null;
		ResponseEntity<List<BuyTransaction>> responseEntity = null;
		try
		{
		
			
			ConsumerDB consDBObj = new ConsumerDB();
			List<BuyTransaction> res = consDBObj.getTransDocs(consumerId);
			
			
			//System.out.println("Feedback Response"+new ObjectMapper().writeValueAsString(feedbackResponse));
			//responseEntity = new ResponseEntity<"Details added to DB Successfully!">(feedbackResponse,HttpStatus.OK);
			responseEntity= new ResponseEntity<>(res,HttpStatus.OK);
		}
		catch(Exception e)
		{
			//e.printStackTrace();
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Transaction details fetched from DB!", e);
		}
		return responseEntity;
		
	}
	

	@PostMapping(value="/getConsumer")
	public ResponseEntity<Consumer> getConsumer(@RequestBody int consumerId) throws ResponseStatusException
	{
		ResponseEntity<Consumer> responseEntity = null;
		try
		{
		
			
			ConsumerDB consDBObj = new ConsumerDB();
			Consumer consObj = consDBObj.getConsumer(consumerId);
			
			
			//System.out.println("Feedback Response"+new ObjectMapper().writeValueAsString(feedbackResponse));
			//responseEntity = new ResponseEntity<"Details added to DB Successfully!">(feedbackResponse,HttpStatus.OK);
			responseEntity= new ResponseEntity<>(consObj,HttpStatus.OK);
		}
		catch(Exception e)
		{
			//e.printStackTrace();
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Consumer details fetched from DB!", e);
		}
		return responseEntity;
	
	}

}




