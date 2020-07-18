#################################################
## DOCKER

# Create virtual machine (for mac)
docker-machine create --driver virtualbox matcha
# Start virtual machine if not running (for mac)
docker-machine start matcha                     
# Get Ip of virtual machine (for mac)
docker-machine ip matcha # 192.168.99.101

eval $(docker-machine env matcha)

# Remove any existing images
docker-machine rm -f default

# Enter containers terminal
docker exec -it matcha_mysql-server_1 /bin/bash

# Delete created volumes
docker-compose rm -v

#################################################
## MYSQL

# Connect from terminal as root
mysql -u root -p