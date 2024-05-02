# MVC Cat Application

## Introduction
This document outlines the steps required to install and run the MVC Cat application using Docker, ensuring an isolated environment that maximizes compatibility across different systems.

## Prerequisites
- Docker must be installed on your machine. If Docker is not installed, please visit [Docker's official site](https://www.docker.com/get-started) to download and install it.

## Installation and Running the Application

### Step 1: Clone the repository
Clone the repository containing the MVC Cat application to your local system:

```bash
git clone https://github.com/maxwellc21/sit725-2024-t1-prac8.git
cd mvc-cat-app 
```
### Step 2. Build the Docker Image
Build the Docker image using the Dockerfile in the repository:
```bash
docker build -t maxwellc21/mymvcapp .
```
### Step 3. Run the application 
Run the application in a Docker container: 
```bash
docker run -d -p 4000:8080 maxwellc21/mymvcapp

```
This command maps port 4000 of the host to port 8080 of the Docker container, allowing you to access the app on port 4000. You can specify a different port, but ensure that the port is free and is not used by other processes on the host

### Step 4. Accessing the Application
After running the Docker container, the MVC Cat application will be accessible at:
```arduino
http://localhost:4000
```
### Managing the Docker container 
To stop the running Docker container, you can use the following command:
```bash 
docker stop [CONTAINER ID]
```
To start the container again:
```bash
docker start [CONTAINER ID]
```
