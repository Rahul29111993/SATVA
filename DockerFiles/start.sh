#!/bin/bash
mongod &
java -jar /opt/tomcat/webapps/demo-0.0.1-SNAPSHOT.jar &
/usr/bin/supervisord -n -c /etc/supervisor/supervisord.conf 
