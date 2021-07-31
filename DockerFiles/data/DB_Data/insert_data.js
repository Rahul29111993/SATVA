var db = connect('127.0.0.1:27017/SATVA'),
    SATVA = null;

print('* Database created');

//create the names collection and add documents to it



db.papermaster.insert( 
  {
  "type":"Newspaper",
  "quality":"Low",
  "qoh":NumberInt(0),
  "pricePerUnit":NumberInt(5)
  }
);


db.papermaster.insert( 
  {
  "type":"Newspaper",
  "quality":"High",
  "qoh":NumberInt(0),
  "pricePerUnit":NumberInt(8)
  }
);

db.papermaster.insert( 
  {
  "type":"Newspaper",
  "quality":"Medium",
  "qoh":NumberInt(0),
  "pricePerUnit":NumberInt(6)
  }
);

db.papermaster.insert( 
  {
  "type":"Notebooks",
  "quality":"Low",
  "qoh":NumberInt(0),
  "pricePerUnit":NumberInt(4)
  }
);


db.papermaster.insert( 
  {
  "type":"Notebooks",
  "quality":"High",
  "qoh":NumberInt(0),
  "pricePerUnit":NumberInt(7)
  }
);

db.papermaster.insert( 
  {
  "type":"Notebooks",
  "quality":"Medium",
  "qoh":NumberInt(0),
  "pricePerUnit":NumberInt(5)
  }
);


db.papermaster.insert( 
  {
  "type":"Cardboard",
  "quality":"Low",
  "qoh":NumberInt(0),
  "pricePerUnit":NumberInt(8)
  }
);


db.papermaster.insert( 
  {
  "type":"Cardboard",
  "quality":"High",
  "qoh":NumberInt(0),
  "pricePerUnit":NumberInt(10)
  }
);

db.papermaster.insert( 
  {
  "type":"Cardboard",
  "quality":"Medium",
  "qoh":NumberInt(0),
  "pricePerUnit":NumberInt(9)
  }
);

db.papermaster.insert( 
  {
  "type":"Magazines",
  "quality":"Low",
  "qoh":NumberInt(0),
  "pricePerUnit":NumberInt(6)
  }
);


db.papermaster.insert( 
  {
  "type":"Magazines",
  "quality":"High",
  "qoh":NumberInt(0),
  "pricePerUnit":NumberInt(9)
  }
);

db.papermaster.insert( 
  {
  "type":"Magazines",
  "quality":"Medium",
  "qoh":NumberInt(0),
  "pricePerUnit":NumberInt(7)
  }
);



db.papermaster.insert( 
  {
  "type":"Shredded",
  "quality":"Low",
  "qoh":NumberInt(0),
  "pricePerUnit":NumberInt(10)
  }
);


db.papermaster.insert( 
  {
  "type":"Shredded",
  "quality":"High",
  "qoh":NumberInt(0),
  "pricePerUnit":NumberInt(12)
  }
);

db.papermaster.insert( 
  {
  "type":"Shredded",
  "quality":"Medium",
  "qoh":NumberInt(0),
  "pricePerUnit":NumberInt(11)
  }
);


db.papermaster.insert( 
  {
  "type":"Other",
  "quality":"Low",
  "qoh":NumberInt(0),
  "pricePerUnit":NumberInt(5)
  }
);


db.papermaster.insert( 
  {
  "type":"Other",
  "quality":"High",
  "qoh":NumberInt(0),
  "pricePerUnit":NumberInt(8)
  }
);

db.papermaster.insert( 
  {
  "type":"Other",
  "quality":"Medium",
  "qoh":NumberInt(0),
  "pricePerUnit":NumberInt(6)
  }
);

