#!/bin/bash
cd backend
docker build -t backend
docker wait backend

cd ../backend2
docker build -t backend2
docker wait backend2

cd ..
docker-compose up -d