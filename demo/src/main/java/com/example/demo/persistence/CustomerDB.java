package com.example.demo.persistence;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;

import com.example.demo.beans.Customer;
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

import org.bson.Document;



public class CustomerDB {
	
	public void insertDoc(Customer custJSONObj)
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
	        System.out.println("3");
	        BasicDBObject document = new BasicDBObject();
	        System.out.println("4");
	        
	        //Creating the ObjectMapper object
	        ObjectMapper mapper = new ObjectMapper();
	        //Converting the Object to JSONString
	        
	        String jsonString = mapper.writeValueAsString(custJSONObj);
	        System.out.println(jsonString+"JSONString");
	        Document doc = Document.parse(jsonString);
	        collection.insertOne(doc);
	        	//collection.insert(dbObject);
	        			
	        	System.out.println("Added successfully!");
	       
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
		
	}

	

}
