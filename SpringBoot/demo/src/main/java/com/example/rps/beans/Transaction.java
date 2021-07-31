package com.example.rps.beans;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import com.example.rps.beans.LocalDateTimeDeserializer;
import com.example.rps.beans.LocalDateTimeSerializer;
import com.example.rps.beans.Paper;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
//import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
//import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Transaction 
{
	private int transactionId;
	
	private List<Paper> paperList;
	 @JsonSerialize(using = LocalDateTimeSerializer.class)
	 @JsonDeserialize(using = LocalDateTimeDeserializer.class)

	private LocalDateTime dateOfTransaction;
	
	
	public int getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(int transactionId) {
		this.transactionId = transactionId;
	}
	
	public LocalDateTime getDateOfTransaction() {
		return dateOfTransaction;
	}
	public void setDateOfTransaction(LocalDateTime dateOfTransaction) {
		this.dateOfTransaction = dateOfTransaction;
	}
	
	public List<Paper> getPaperList() {
		return paperList;
	}
	public void setPaperList(List<Paper> paperList) {
		this.paperList = paperList;
	}
	
	
	

}
