package com.example.rps.beans.sell;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import com.example.rps.beans.LocalDateTimeDeserializer;
import com.example.rps.beans.LocalDateTimeSerializer;
import com.example.rps.beans.Paper;
import com.example.rps.beans.Transaction;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
//import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
//import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;

@JsonIgnoreProperties(ignoreUnknown = true)
public class SellTransaction extends Transaction
{
	
	private int custId;	
	private int rewardPoints;
	
	
	public int getRewardPoints() {
		return rewardPoints;
	}
	public void setRewardPoints(int rewardPoints) {
		this.rewardPoints = rewardPoints;
	}
	
	public int getCustId() {
		return custId;
	}
	public void setCustId(int custId) {
		this.custId = custId;
	}
	

}
