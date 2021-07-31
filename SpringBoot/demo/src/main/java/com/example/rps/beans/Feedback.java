package com.example.rps.beans;

public class Feedback 
{
	private int custConsumerId;
	private int rating;
	private String suggestions;
	public int getCustConsumerId() {
		return custConsumerId;
	}
	public void setCustConsumerId(int custConsumerId) {
		this.custConsumerId = custConsumerId;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public String getSuggestions() {
		return suggestions;
	}
	public void setSuggestions(String suggestions) {
		this.suggestions = suggestions;
	}

}
