# Matcha
Matcha is a dating website


## Usage

### Run docker-compose to build mysql and phpmyadmin containers
* Run docker machine (for mac)
    * Create virtual machine (for mac)
        * ```docker-machine create --driver virtualbox matcha```
    * Start virtual machine if not running (for mac)
        * ```docker-machine start matcha```
    * Get Ip of virtual machine (for mac)
        * ```docker-machine ip matcha```
    * ```eval $(docker-machine env matcha)```
    
* ```docker-compose up -d --build```






## RESOURCES

* Node.js + mysql CRUD: https://bezkoder.com/node-js-rest-api-express-mysql/