package com.example.rps.beans;
import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
public class LocalDateTimeSerializer extends JsonSerializer<LocalDateTime> {

    private static final long serialVersionUID = 1L;

  

    @Override
    public void serialize(LocalDateTime value, JsonGenerator gen, SerializerProvider sp) throws IOException, JsonProcessingException {
    	
    	System.out.println("Seria"+value.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
    	//gen.writeRaw(value.format(DateTimeFormatter.ISO_LOCAL_DATE));
    	gen.writeString(value.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
    }

}
