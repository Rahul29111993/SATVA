package com.example.rps.beans.buy;

import java.time.LocalDateTime;

import com.example.rps.beans.LocalDateTimeDeserializer;
import com.example.rps.beans.LocalDateTimeSerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

public class OnlinePayment {
	
	private String paymentMode;
	private String cardType;
	
	 @JsonSerialize(using = LocalDateTimeSerializer.class)
	 @JsonDeserialize(using = LocalDateTimeDeserializer.class)
	private LocalDateTime paymentDate;
	private float amount;
	
	public String getPaymentMode() {
		return paymentMode;
	}
	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}
	public String getCardType() {
		return cardType;
	}
	public void setCardType(String cardType) {
		this.cardType = cardType;
	}
	public LocalDateTime getPaymentDate() {
		return paymentDate;
	}
	public void setPaymentDate(LocalDateTime paymentDate) {
		this.paymentDate = paymentDate;
	}
	public float getAmount() {
		return amount;
	}
	public void setAmount(float amount) {
		this.amount = amount;
	}
	

}
