# SATVA

[![License](https://img.shields.io/badge/License-Apache2-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0) [![Community](https://img.shields.io/badge/Join-Community-blue)](http://169.57.112.133:30164/) [![Website](https://img.shields.io/badge/View-Website-blue)](http://satvav1.ddns.net:30164/)

### “Don't throw your paper away, it can be effectively reused!”


## Contents

- [SATVA](#satva)
  - [Contents](#contents)
  - [Short description](#short-description)
    - [What's the problem?](#whats-the-problem)
    - [How can technology help?](#how-can-technology-help)
    - [The idea](#the-idea)
  - [Demo video](#demo-video)
  - [The architecture](#the-architecture)
  - [Long description](#long-description)
  - [Project roadmap](#project-roadmap)
  - [Getting started](#getting-started)
  - [Live demo](#live-demo)
  - [Built with](#built-with)
  - [Authors](#authors)
 


## <a id = "short-description">Short description </a>

### <a id = "whats-the-problem">What's the problem? </a>

Paper recycling is an essential part of the recycling industry. Almost all kinds of paper are recyclable. The most commonly recycled paper items include cardboard, newspaper and magazines etc.

### <a id = "how-can-technology-help">How can technology help? </a>

People can effectively make use of the application which connects the customers to consumers in need of the type of paper available.


### <a id = "the-idea"> The idea </a>

The recycling of paper is the process by which wastepaper is turned into a new paper product. The idea behind our problem solution is recycling paper for saving energy and landfill space. 


## <a id = "demo-video"> Demo video  </a>

[![Watch the video](https://github.com/Rahul29111993/SATVA/blob/main/Images/SATVA_Vimeo_Image.png)](https://vimeo.com/581537692)

## <a id = "the-architecture"> The architecture </a>

![Video transcription/translation app](./Images/SATVA_Architecture.jpg)

1. The customer/consumer logins to the portal via the web application deployed on IBM Cloud Kubernetes Cluster Service.
2. The Web application uses Angular for frontend and Java Spring boot for the backend.
3. The customer and consumer data is stored in Mongo DB.
4. The app connects the customer and consumer via various functionalities.


## <a id = "long-description"> Long description </a>

[More detail is available here](./Docs/SATVA_Long_Description.docx)

## <a id = "project-roadmap"> Project roadmap </a>

The project currently does the following things.

- Customer Can Sell Paper and Gain Reward Points
- Consumer Can Buy Paper


It's in a free tier IBM Cloud Kubernetes cluster. In the future we plan to run on Red Hat OpenShift.

See below for our proposed schedule on next steps after Call for Code 2021 submission.

![Roadmap](./Images/Solution_Roadmap_Satva.png)

## <a id="getting-started" > Getting started </a>

### Prerequisites

- Install and configure  [Java 8](https://www.java.com/en/download/help/windows_manual_download.html) and above, [Spring boot 5.x](https://docs.spring.io/spring-boot/docs/current/reference/html/getting-started.html), [maven 4.x.](https://maven.apache.org/install.html).
- Install and configure [nodejs](https://nodejs.org/en/download/).
- Register for an [IBM Cloud](https://www.ibm.com/account/reg/us-en/signup?formid=urx-42793&eventid=cfc-2020?cm_mmc=OSocial_Blog-_-Audience+Developer_Developer+Conversation-_-WW_WW-_-cfc-2020-ghub-starterkit-cooperation_ov75914&cm_mmca1=000039JL&cm_mmca2=10008917) account.
- Install and configure [IBM Cloud CLI](https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started#overview).
- Install and configure [Docker](https://docs.docker.com/engine/install/).
- Clone the [repository](https://github.com/Call-for-Code/Solution-Starter-Kit-Cooperation-2020).

### Steps

1. [Build the Frontend code on local](#1-frontend-build)
2. [Build the Backend code on local](#2-backend-build).
3. [Build the Docker Image](#3-build-the-docker-image).
4. [Deploy the Web App on IBM Cloud Kubernetes Cluster](#4-deploy-the-app).
5. [Accessing the Deployed Web Application](#5-access-the-app)


### <a id="1-frontend-build" > 1. Build the Frontend code on local </a>
1. Go to the `Angular/satva/src/app` directory of the cloned repo.

1. Edit the `store-ip.service.ts` file:
    - Update the `IP` with the IP to the Sever IP where Spring services hosted.
        > **Note**: If you are running the server locally and testing, set the `IP` as `localhost`. If you are deploying the application on IBM Cloud Kubernetes Service, get the Cluster Public IP and update it accordingly.

    - Update the `PORT` with the appropriate port number being used for deploying the Java Spring Boot Services.
        > **Note**: If you are running the server using the deployment file provided in repo without any changes, use port number 30163.
1. From a terminal:
    1. Go to the `Angular/satva` directory.
    1. Install the dependencies: `npm install`.

### <a id="2-backend-build" > 2. Build the Backend code on local </a>

1. From a terminal:
    1. Go to the `SpringBoot/demo` directory.
    1. Install the dependencies: `mvn install`.


### <a id="3-build-the-docker-image" > 3. Build the Docker Image </a>

1. From a terminal:
    1. Go to the `DockerFiles/data` directory.
    1. Place the Angular build code in `DockerFiles/data/Angular/docs/` directory.
    1. Place the JAR file built in `DockerFiles/data/SpringBoot/target/` directory.
    1. Login to your IBM Cloud Account using command `ibmcloud login`.
    1. Login to IBM Cloud Container Registry using command `ibmcloud cr login`.
    1. Add namespace to your Container Registry using the following commands.
      - `export ICR_NAMESPACE=<your_namespace>`
      - `ibmcloud cr namespace-add $ICR_NAMESPACE`
    7. Build Docker Image and push it to the Container Registry using the following commands.
      - `export APP_IMAGENAME=us.icr.io/$ICR_NAMESPACE/discovery-demo-app:v8`
      - `docker build -t $APP_IMAGENAME .`
      - `docker push $APP_IMAGENAME`

### <a id="5-access-the-app" > 4. Deploy the Web App on IBM Cloud Kubernetes Cluster </a>

1. From a terminal:
    1. Create a free 1 worker [IBM Kubernetes Service](https://cloud.ibm.com/kubernetes/catalog/create?cm_sp=ibmdev-_-developer-tutorials-_-cloudreg) cluster.
    1. Connect to your IBM Kubernetes Service cluster using below command.
      - `ibmcloud ks cluster config --cluster  <your_cluster_name>`
    3. Go to the `KubernetesDeployment/` directory and edit `deployment.yaml` file and provide the appropriate name space and image name used.
    4. Deploy the build using below commands.
      - `kubectl apply -f deployment.yaml`
      - `kubectl apply -f service.yaml`


### <a id="4-deploy-the-app" > 5. Accessing the Deployed Web Application </a>
1. From a browser, access the web application using the public IP of the kubernetes cluster and port 30164 as follows `http://<cluster-public-ip>:30164`


## <a id="live-demo" >Live demo </a>

You can find a running system to test at [satvav1.ddns.net:30164](http://satvav1.ddns.net:30164//).


## <a id="built-with"> Built with </a>

- [Angular](https://angular.io/) - The Frontend Framework Used
- [Spring Boot](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/) - The Backend Framework Used
- [Maven](https://maven.apache.org/) - Dependency management
- [Mongo DB](https://www.mongodb.com/) - The No SQL Database Used
- [IBM Cloud Kubernetes Cluser](https://www.ibm.com/in-en/cloud/kubernetes-service?p1=Search&p4=43700056949486558&p5=e&gclid=Cj0KCQjw6ZOIBhDdARIsAMf8YyEKkQWRKbgPfkPxNkpXP-i0TaJ7oy3gLYAR4W2-CjiGcGsg-dm4HEUaAq9wEALw_wcB&gclsrc=aw.ds) - Used for Deploying the Web Application


## <a id="authors"> Authors </a>
1. Malathi M (malathi_m@infosys.com)
1. Maheshwary Swetha R C (Swetha_Maheshwary@infosys.com)
1. Nandini Gowdru (Nandini_Gowdru@infosys.com)
1. Rahul Singh Rajaput (rahul.rajaput@infosys.com)
1. Apoorva Nag (apoorva.nag@infosys.com)


