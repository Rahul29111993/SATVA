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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.rps.beans.buy.Consumer;
import com.example.rps.beans.sell.Customer;
import com.example.rps.beans.Feedback;
import com.example.rps.beans.Login;
import com.example.rps.beans.Paper;
import com.example.rps.beans.PaperList;
import com.example.rps.beans.sell.SellTransaction;
import com.example.rps.persistence.ConsumerDB;
import com.example.rps.persistence.CustomerDB;
import com.fasterxml.jackson.databind.ObjectMapper;


@RestController
@CrossOrigin
public class CustomerSerivceAPI {

	
	@GetMapping(value="/sampleReq")
	public ResponseEntity<String> sampleReq() throws ResponseStatusException
	{
		return new ResponseEntity<>("For checking purpose only!",HttpStatus.OK);
		
	}
	
	@PostMapping(value="/validateCustomer")
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
	
	@PostMapping(value="/storeCustomerRegDetails")
	public ResponseEntity<Integer> getFeedbackDetails(@RequestBody Customer custObj) throws ResponseStatusException
	{
		//List<FeedbackMasterDetails> feedbackResponse = null;
		ResponseEntity<Integer> responseEntity = null;
		try
		{
		
			System.out.println(custObj.getFirstName());
			CustomerDB custDBObj = new CustomerDB();
			int res = custDBObj.insertCustDoc(custObj);
			
			
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
	
	//Device related implementation is pending and hence the logic in this method is static
	
	@PostMapping(value="/fetchPaperDetails")
	public ResponseEntity<List<Paper>> fetchPaperDetails(@RequestBody PaperList paperList) throws ResponseStatusException
	{
		
		ResponseEntity<List<Paper>> responseEntity = null;
		try
		{
			
			//System.out.println("123");
			List<Paper> paperDetFromDeviceList = new ArrayList<>();
			int numOfRands=paperList.getPaperListObj().size();
			if(numOfRands >2)
			{
				numOfRands = (numOfRands *40)/100;
			}
			
			Random randObj = new Random();
			int[] randNums = new int[numOfRands];
			System.out.println("Random value"+numOfRands);
			for(int count=0;count<numOfRands;count++)
			{
				randNums[count] = randObj.nextInt(paperList.getPaperListObj().size());
				System.out.println("Random index"+randNums[count]);
			}
			Arrays.sort(randNums);
			
			int index=0;
			boolean flag=false;
			
			
			for(int count=0;count<paperList.getPaperListObj().size();count++)
			//for(Paper paperObj:paperList.getPaperListObj())
			{
				Paper paperObj = paperList.getPaperListObj().get(count);
			
				Paper paper = new Paper();
			//	System.out.println(count+":"+index+":"+numOfRands+":"+randNums[index]+":"+flag);
				
				if(index<numOfRands && count==randNums[index] && !flag)
				{
					System.out.println("Changing Quantity!");
					paper.setType(paperObj.getType());
					paper.setQuantity(paperObj.getQuantity()-1);
					paper.setQuality(paperObj.getQuality());
					paperDetFromDeviceList.add(paper);
					index++;
					flag=true;
					

				}
				else if(index<numOfRands && count==randNums[index] && flag)
				{
					System.out.println("Changing Quality!");
					paper.setType(paperObj.getType());
					paper.setQuantity(paperObj.getQuantity());
					if(paperObj.getQuality().equalsIgnoreCase("Low")){
						paper.setQuality("Medium");	
					}
					else
					{
						paper.setQuality("Low");
					}
					
					paperDetFromDeviceList.add(paper);
					index++;
					flag=false;
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
	
	@PostMapping(value="/storeSellTransactionDetails")
	public ResponseEntity<Boolean> getFeedbackDetails(@RequestBody SellTransaction transObj) throws ResponseStatusException
	{
		//List<FeedbackMasterDetails> feedbackResponse = null;
		//System.out.println(transObj.getCustId()+" "+transObj.getDateOfTransaction()+" "+transObj.getRewardPoints()+" "+transObj.getPaperList());
		for(Paper paperObj:transObj.getPaperList()){
			System.out.println("Checking"+ paperObj.getType());
			System.out.println("Checking"+ paperObj.getQuality());
		}
		ResponseEntity<Boolean> responseEntity = null;
		try
		{
		
			//System.out.println(custObj.getFirstName());
			CustomerDB custDBObj = new CustomerDB();
			Boolean res = custDBObj.insertTransDoc(transObj);
			
			
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
	
	
	@PostMapping(value="/getSellTransactionDetails")
	public ResponseEntity<List<SellTransaction>> getTransDetails(@RequestBody Integer custId) throws ResponseStatusException
	{
		//List<FeedbackMasterDetails> feedbackResponse = null;
		ResponseEntity<List<SellTransaction>> responseEntity = null;
		try
		{
		
			
			CustomerDB custDBObj = new CustomerDB();
			List<SellTransaction> res = custDBObj.getTransDocs(custId);
			
			
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
	
	@PostMapping(value="/storeFeedback")
	public ResponseEntity<Integer> storeFeedback(@RequestBody Feedback feedbackObj) throws ResponseStatusException
	{
		//List<FeedbackMasterDetails> feedbackResponse = null;
				ResponseEntity<Integer> responseEntity = null;
				try
				{
				
					
					CustomerDB custDBObj = new CustomerDB();
					int res = custDBObj.insertFeedback(feedbackObj);
					
					
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
	
	@PostMapping(value="/getCustomer")
	public ResponseEntity<Customer> getCustomer(@RequestBody int custId) throws ResponseStatusException
	{
		ResponseEntity<Customer> responseEntity = null;
		try
		{
		
			
			CustomerDB custDBObj = new CustomerDB();
			Customer custObj = custDBObj.getCustomer(custId);
			
			
			responseEntity= new ResponseEntity<>(custObj,HttpStatus.OK);
		}
		catch(Exception e)
		{
			//e.printStackTrace();
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Customer details fetched from DB!", e);
		}
		return responseEntity;
	
	}

	

}




