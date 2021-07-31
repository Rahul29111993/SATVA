package com.example.rps.beans.buy;

import com.example.rps.beans.Address;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Consumer 
{
	private int consumerId;
	private String firmName;
	private String emailId;
	private String password;
	private Address firmAddress;
	private String gstin;
	public String getGstin() {
		return gstin;
	}
	public void setGstin(String gstin) {
		this.gstin = gstin;
	}
	public String getFirmName() {
		return firmName;
	}
	public void setFirmName(String firmName) {
		this.firmName = firmName;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Address getFirmAddress() {
		return firmAddress;
	}
	public void setFirmAddress(Address firmAddress) {
		this.firmAddress = firmAddress;
	}
	
	public int getConsumerId() {
		return consumerId;
	}
	public void setConsumerId(int consumerId) {
		this.consumerId = consumerId;
	}

}
