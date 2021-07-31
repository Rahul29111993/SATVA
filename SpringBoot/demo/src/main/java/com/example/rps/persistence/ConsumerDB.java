package com.example.rps.persistence;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;

import com.example.rps.beans.buy.BuyTransaction;
import com.example.rps.beans.buy.Consumer;
import com.example.rps.beans.sell.Customer;
import com.example.rps.beans.Login;
import com.example.rps.beans.Paper;
import com.example.rps.beans.PaperMaster;
import com.example.rps.beans.sell.SellTransaction;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.mongodb.BasicDBObject;
import com.mongodb.BasicDBObjectBuilder;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClientURI;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Updates;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.bson.Document;
import org.bson.conversions.Bson;



public class ConsumerDB {
	
	public int insertConsumerDoc(Consumer consJSONObj)
	{
		//MongoClient mongoClient = MongoClients.create(custProp.getDbPath());
		//MongoClient mongoClient = MongoClients.create("mongodb://ec2-15-207-247-213.ap-south-1.compute.amazonaws.com:27017");
		MongoClient mongoClient = MongoClients.create("mongodb://localhost:27017");
		try
		{
			
			
	        //System.out.println("1");
			//MongoDatabase db = mongoClient.getDatabase(custProp.getDatabaseName());
			MongoDatabase db = mongoClient.getDatabase("SATVA");
			//System.out.println("2");
	        //MongoCollection<Document> collection = db.getCollection(custProp.getCollectionName());
			MongoCollection<Document> collection = db.getCollection("consumer");
	       // System.out.println("3");
	        BasicDBObject document = new BasicDBObject();
	        //System.out.println("4");
	        
	        //collection.aggregate([{$group : {_id : "$firstName", count : {$max : $custId}}}]);
	        
	        FindIterable<Document> iterDoc = collection.find();
	        
	        int maxId =0;
	        for (Document doc : iterDoc)
	        {
	        	if(doc.get("consumerId")!=null)
	        	{
	        		int maxIdCheck = new Integer(doc.get("consumerId").toString());
		        	if(maxIdCheck>maxId)
		        	{
		        		maxId=maxIdCheck;
		        	}
	        	}   	
	        	
	        	
	        }
	        System.out.println(maxId);
	        
	        //Creating the ObjectMapper object
	        ObjectMapper mapper = new ObjectMapper();
	        //Converting the Object to JSONString
	        if(maxId==0)
	        {
	        	 consJSONObj.setConsumerId(6001);
	        }
	        else
	        {
	        	consJSONObj.setConsumerId(maxId+1);
	        }
	       
	        String jsonString = mapper.writeValueAsString(consJSONObj);
	        System.out.println(jsonString+"JSONString");
	        Document doc = Document.parse(jsonString);
	        collection.insertOne(doc);
	        	//collection.insert(dbObject);
	        			
	        	System.out.println("Added successfully!");
	        	return consJSONObj.getConsumerId();
		}
	       

		catch(Exception e)
		{
			System.out.println("Exception!");
			e.printStackTrace();
		}
		finally
		{
			mongoClient.close();
		}
		return -1;
		
	}
	
	public boolean insertTransDoc(BuyTransaction transObj)
	{
		
		MongoClient mongoClient = MongoClients.create("mongodb://localhost:27017");
		try
		{
			
			
	        MongoDatabase db = mongoClient.getDatabase("SATVA");
			MongoCollection<Document> collection = db.getCollection("buytransaction");
	        
	        
	        FindIterable<Document> iterDoc = collection.find();
	        
	        int maxId =0;
	        for (Document doc : iterDoc)
	        {
	        	if(doc.get("transactionId")!=null)
	        	{
	        		int maxIdCheck = new Integer(doc.get("transactionId").toString());
		        	if(maxIdCheck>maxId)
		        	{
		        		maxId=maxIdCheck;
		        	}
	        	}
	        	
	        	
	        	
	        }
	        System.out.println(maxId);
	        
	        //Creating the ObjectMapper object
	        ObjectMapper mapper = new ObjectMapper();
	        //Converting the Object to JSONString
	        if(maxId==0)
	        {
	        	transObj.setTransactionId(9001);
	        }
	        else
	        {
	        	transObj.setTransactionId(maxId+1);
	        }
	        
	        transObj.setDateOfTransaction(LocalDateTime.now());
	        System.out.println(LocalDateTime.now());
	        transObj.getOnlinePayment().setPaymentDate(LocalDateTime.now());
	       
	        String jsonString = mapper.writeValueAsString(transObj);
	        System.out.println(jsonString+"JSONString");
	        Document doc = Document.parse(jsonString);
	        collection.insertOne(doc);
	        	//collection.insert(dbObject);
	        			
	        	System.out.println("Added successfully!");
	        	
	        	MongoCollection<Document> paperMasterCollection = db.getCollection("papermaster");
	        	
	        	for(Paper paperObj:transObj.getPaperList())
	        	{
	        	
	        		Bson typeFilter = Filters.eq("type", paperObj.getType());
	        		Bson qualityFilter = Filters.eq("quality", paperObj.getQuality());
	        		
	        		Document paperMasterDoc = paperMasterCollection.find(Filters.and(typeFilter,qualityFilter)).first();
	        		int existingQOH = 0;
		        	
	        		if(paperMasterDoc.get("qoh") !=null)
	        		{
	        			existingQOH = new Integer(paperMasterDoc.get("qoh").toString());
	        			
	        		
	        		}
	        		paperMasterCollection.updateOne(Filters.and(typeFilter,qualityFilter), Updates.set("qoh", existingQOH-paperObj.getQuantity()));
	        		
	        		
	        	}
	        
	        	return true;
	       
		}
		catch(Exception e)
		{
			System.out.println("Exception!");
			e.printStackTrace();
		}
		finally
		{
			mongoClient.close();
		}
		return false;
		
	}
	
	public List<BuyTransaction> getTransDocs(int consumerId)
	{
		MongoClient mongoClient = MongoClients.create("mongodb://localhost:27017");
		List<BuyTransaction> transList = new ArrayList<>();
		try
		{
			
			
	        MongoDatabase db = mongoClient.getDatabase("SATVA");
			MongoCollection<Document> collection = db.getCollection("buytransaction");
	       
	        ObjectMapper mapper = new ObjectMapper();
	        
	        
	       
	        
	        FindIterable<Document> iterDoc = collection.find();
	        for (Document doc : iterDoc)
	        {
	        	if(doc.get("consumerId")!=null && new Integer(doc.get("consumerId").toString()) == consumerId)
	        	{
	        		String transJSON = doc.toJson();
	        		BuyTransaction transObj = mapper.readValue(transJSON, BuyTransaction.class);
	        		transList.add(transObj);
	        	}
	        }
	        
		}
		catch(Exception e)
		{
			System.out.println("Exception!");
			e.printStackTrace();
		}
		finally
		{
			mongoClient.close();
		}
		return transList;
	}


	public boolean validateCustomer(Login loginObj)
	{
		//MongoClient mongoClient = MongoClients.create(custProp.getDbPath());
		//MongoClient mongoClient = MongoClients.create("mongodb://ec2-15-207-247-213.ap-south-1.compute.amazonaws.com:27017");
		MongoClient mongoClient = MongoClients.create("mongodb://localhost:27017");
		try
		{
			
			
	        //System.out.println("1");
			//MongoDatabase db = mongoClient.getDatabase(custProp.getDatabaseName());
			MongoDatabase db = mongoClient.getDatabase("SATVA");
			//System.out.println("2");
	        //MongoCollection<Document> collection = db.getCollection(custProp.getCollectionName());
			MongoCollection<Document> collection = db.getCollection("consumer");
	       // System.out.println("3");
	        BasicDBObject document = new BasicDBObject();
	        //System.out.println("4");
	        
	        //collection.aggregate([{$group : {_id : "$firstName", count : {$max : $custId}}}]);
	        
	        FindIterable<Document> iterDoc = collection.find();
	        
	        
	        for (Document doc : iterDoc)
	        {
	        	if(new Integer(doc.get("consumerId").toString())==loginObj.getCustId() && doc.get("passWord").equals(loginObj.getPassword()))
	        	{
	        		return true;
	        	}         	
	        	
	        }	        
	       
		}
		catch(Exception e)
		{
			System.out.println("Exception!");
			e.printStackTrace();
		}
		finally
		{
			mongoClient.close();
		}
		return false;
		
	}

	public List<PaperMaster> getPaperMasterDetails()
	{
		MongoClient mongoClient = MongoClients.create("mongodb://localhost:27017");
		List<PaperMaster> listPaperMaster = new ArrayList<>();
		try
		{
			
			
			MongoDatabase db = mongoClient.getDatabase("SATVA");
			
			MongoCollection<Document> collection = db.getCollection("papermaster");
	       
	        BasicDBObject document = new BasicDBObject();
	        ObjectMapper mapper = new ObjectMapper();
	        
	        
	        
	        
	        FindIterable<Document> iterDoc = collection.find();
	        
	        
	        
	        for (Document doc : iterDoc)
	        {
	        	String paperMasterJSON = doc.toJson();
	        	PaperMaster paperMasterObj = mapper.readValue(paperMasterJSON, PaperMaster.class); 
	        	System.out.println("JSON"+paperMasterJSON);
	        	listPaperMaster.add(paperMasterObj);
	        	
	        }	        
	        System.out.println("list"+listPaperMaster);
	       
		}
		catch(Exception e)
		{
			System.out.println("Exception!");
			e.printStackTrace();
		}
		finally
		{
			mongoClient.close();
		}
		return listPaperMaster;
	}
	
	public Consumer getConsumer(int consumerId)
	{
		MongoClient mongoClient = MongoClients.create("mongodb://localhost:27017");
		List<PaperMaster> listPaperMaster = new ArrayList<>();
		Consumer consumerObj = null;
		try
		{
			
			
			MongoDatabase db = mongoClient.getDatabase("SATVA");			
			MongoCollection<Document> collection = db.getCollection("consumer");
	       
	       
	        ObjectMapper mapper = new ObjectMapper();	        
	        Document consDoc = collection.find(Filters.eq("consumerId", consumerId)).first();
	        
	       
	        String consumerJSON = consDoc.toJson();
	        consumerObj = mapper.readValue(consumerJSON, Consumer.class);  
	        	
	        	
	                
	       
		}
		catch(Exception e)
		{
			System.out.println("Exception!");
			e.printStackTrace();
		}
		finally
		{
			mongoClient.close();
		}
		return consumerObj;
	}

}
