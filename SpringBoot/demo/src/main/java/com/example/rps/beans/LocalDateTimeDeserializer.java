package com.example.rps.beans;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

public class LocalDateTimeDeserializer extends JsonDeserializer<LocalDateTime> {

	    private static final long serialVersionUID = 1L;
	    private final DateTimeFormatter fmt = DateTimeFormatter.ISO_DATE_TIME;

	   

	    @Override
	    public LocalDateTime deserialize(JsonParser jp, DeserializationContext ctxt)
	            throws IOException, JsonProcessingException {
	        return LocalDateTime.parse(jp.readValueAs(String.class),fmt);
	    }

	}