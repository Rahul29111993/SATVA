#!/bin/bash
mongod &
sleep 20
java -jar /opt/tomcat/webapps/rps-0.0.1-SNAPSHOT.jar &
mongo /insert_data.js &
/usr/bin/supervisord -n -c /etc/supervisor/supervisord.conf 
