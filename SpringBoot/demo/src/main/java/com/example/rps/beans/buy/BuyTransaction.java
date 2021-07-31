package com.example.rps.beans.buy;

import com.example.rps.beans.Transaction;

public class BuyTransaction extends Transaction 
{
	private int consumerId;
	
	private OnlinePayment onlinePayment;
	
	public int getConsumerId() {
		return consumerId;
	}

	public void setConsumerId(int consumerId) {
		this.consumerId = consumerId;
	}


	public OnlinePayment getOnlinePayment() {
		return onlinePayment;
	}

	public void setOnlinePayment(OnlinePayment onlinePayment) {
		this.onlinePayment = onlinePayment;
	}

}
