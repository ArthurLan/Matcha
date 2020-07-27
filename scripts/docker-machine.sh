##########################################################
## DOCKER

#Before launching docker-machine
# export VIRTUALBOX_SHARE_FOLDER="$PWD:$PWD"
# Create virtual machine (for mac)
docker-machine create --driver virtualbox matcha
# Start virtual machine if not running (for mac)
docker-machine start matcha
# Get Ip of virtual machine (for mac)
docker-machine ip matcha # 192.168.99.100

eval $(docker-machine env matcha)

# Remove any existing images
docker-machine rm -f matcha

# Enter containers terminal
docker exec -it matcha_mysql-server_1 /bin/bash

# Delete created volumes
docker-compose rm -v

##########################################################
## Mount localmachine with virtual machine

# Install sshfs (takes ages)
brew install sshfs 
# create directory in v machine
docker-machine ssh matcha mkdir data
# machinename:/path/to/dir
docker-machine mount matcha:/home/docker/data data

##########################################################
## MYSQL

# Connect from terminal as root
mysql -u root -p