package com.example.rps.persistence;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;

import com.example.rps.beans.buy.Consumer;
import com.example.rps.beans.sell.Customer;
import com.example.rps.beans.Feedback;
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



public class CustomerDB {
	
	public int insertCustDoc(Customer custJSONObj)
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
			MongoCollection<Document> collection = db.getCollection("customer");
	       // System.out.println("3");
	        BasicDBObject document = new BasicDBObject();
	        //System.out.println("4");
	        
	        //collection.aggregate([{$group : {_id : "$firstName", count : {$max : $custId}}}]);
	        
	        FindIterable<Document> iterDoc = collection.find();
	        
	        int maxId =0;
	        for (Document doc : iterDoc)
	        {
	        	if(doc.get("custId")!=null)
	        	{
	        		int maxIdCheck = new Integer(doc.get("custId").toString());
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
	        	 custJSONObj.setCustId(1001);
	        }
	        else
	        {
	        	custJSONObj.setCustId(maxId+1);
	        }
	       
	        String jsonString = mapper.writeValueAsString(custJSONObj);
	        System.out.println(jsonString+"JSONString");
	        Document doc = Document.parse(jsonString);
	        collection.insertOne(doc);
	        	//collection.insert(dbObject);
	        			
	        	System.out.println("Added successfully!");
	        	return custJSONObj.getCustId();
	       
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
	
	public boolean insertTransDoc(SellTransaction transObj)
	{
		
		MongoClient mongoClient = MongoClients.create("mongodb://localhost:27017");
		try
		{
			
			
	        MongoDatabase db = mongoClient.getDatabase("SATVA");
			MongoCollection<Document> collection = db.getCollection("selltransaction");
	        
	        
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
	        	transObj.setTransactionId(5001);
	        }
	        else
	        {
	        	transObj.setTransactionId(maxId+1);
	        }
	        
	        transObj.setDateOfTransaction(LocalDateTime.now());
	        System.out.println(LocalDateTime.now());
	       
	        String jsonString = mapper.writeValueAsString(transObj);
	        System.out.println(jsonString+"JSONString");
	        Document doc = Document.parse(jsonString);
	        collection.insertOne(doc);
	        	//collection.insert(dbObject);
	        			
	        	System.out.println("Added successfully!");
	        	MongoCollection<Document> custCollection = db.getCollection("customer");
	        	
	        	Document custDoc = custCollection.find(Filters.eq("custId", transObj.getCustId())).first();
	        	int existingRewardPoints = new Integer(custDoc.get("rewardPoints").toString());
	        	
	        	custCollection.updateOne(Filters.eq("custId", transObj.getCustId()), Updates.set("rewardPoints", existingRewardPoints+transObj.getRewardPoints())); 
	        	
	        	MongoCollection<Document> paperMasterCollection = db.getCollection("papermaster");
	        	
	        	for(Paper paperObj:transObj.getPaperList())
	        	{
	        	
	        		Bson typeFilter = Filters.eq("type", paperObj.getType());
	        		Bson qualityFilter = Filters.eq("quality", paperObj.getQuality());
	        		
	        		Document paperMasterDoc = paperMasterCollection.find(Filters.and(typeFilter,qualityFilter)).first();
	        		int existingQOH = 0;
		        	
	        		if(paperMasterDoc!=null && paperMasterDoc.get("qoh") !=null)
	        		{
	        			existingQOH = new Integer(paperMasterDoc.get("qoh").toString());
	        			
	        		
	        		}
	        		paperMasterCollection.updateOne(Filters.and(typeFilter,qualityFilter), Updates.set("qoh", existingQOH+paperObj.getQuantity()));
	        		
	        		
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
	
	public List<SellTransaction> getTransDocs(int custId)
	{
		MongoClient mongoClient = MongoClients.create("mongodb://localhost:27017");
		List<SellTransaction> transList = new ArrayList<>();
		try
		{
			
			
	        MongoDatabase db = mongoClient.getDatabase("SATVA");
			MongoCollection<Document> collection = db.getCollection("selltransaction");
	       
	        ObjectMapper mapper = new ObjectMapper();
	        
	        
	       
	        
	        FindIterable<Document> iterDoc = collection.find();
	        for (Document doc : iterDoc)
	        {
	        	if(doc.get("custId")!=null && new Integer(doc.get("custId").toString()) == custId)
	        	{
	        		String transJSON = doc.toJson();
	        		SellTransaction transObj = mapper.readValue(transJSON, SellTransaction.class);
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
			MongoCollection<Document> collection = db.getCollection("customer");
	       // System.out.println("3");
	        BasicDBObject document = new BasicDBObject();
	        //System.out.println("4");
	        
	        //collection.aggregate([{$group : {_id : "$firstName", count : {$max : $custId}}}]);
	        
	        FindIterable<Document> iterDoc = collection.find();
	        
	        
	        for (Document doc : iterDoc)
	        {
	        	if(new Integer(doc.get("custId").toString())==loginObj.getCustId() && doc.get("passWord").equals(loginObj.getPassword()))
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
	
	public int insertFeedback(Feedback feedbackObj)
	{
		MongoClient mongoClient = MongoClients.create("mongodb://localhost:27017");
		try
		{
			
			
	        //System.out.println("1");
			//MongoDatabase db = mongoClient.getDatabase(custProp.getDatabaseName());
			MongoDatabase db = mongoClient.getDatabase("SATVA");
			//System.out.println("2");
	        //MongoCollection<Document> collection = db.getCollection(custProp.getCollectionName());
			MongoCollection<Document> collection = db.getCollection("feedback");
	       // System.out.println("3");
	        BasicDBObject document = new BasicDBObject();
	        //System.out.println("4");
	        
	        //collection.aggregate([{$group : {_id : "$firstName", count : {$max : $custId}}}]);
	        
	        FindIterable<Document> iterDoc = collection.find();
	       
	        
	        //Creating the ObjectMapper object
	        ObjectMapper mapper = new ObjectMapper();
	       
	       
	        String jsonString = mapper.writeValueAsString(feedbackObj);
	        System.out.println(jsonString+"JSONString");
	        Document doc = Document.parse(jsonString);
	        collection.insertOne(doc);
	        	//collection.insert(dbObject);
	        			
	        	System.out.println("Added successfully!");
	        	return 0;
	       
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
	
	public Customer getCustomer(int custId)
	{
		MongoClient mongoClient = MongoClients.create("mongodb://localhost:27017");
		List<PaperMaster> listPaperMaster = new ArrayList<>();
		Customer custObj = null;
		try
		{
			
			
			MongoDatabase db = mongoClient.getDatabase("SATVA");
			
			MongoCollection<Document> collection = db.getCollection("customer");
	       
	        BasicDBObject document = new BasicDBObject();
	        ObjectMapper mapper = new ObjectMapper();
	        
	        Document custDoc = collection.find(Filters.eq("custId", custId)).first();
	        
	       
	        String custJSON = custDoc.toJson();
	        custObj = mapper.readValue(custJSON, Customer.class);  
	        	
	        	
	                
	       
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
		return custObj;
	}

	
	

}
