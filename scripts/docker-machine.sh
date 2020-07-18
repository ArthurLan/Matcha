# Create virtual machine (for mac)
docker-machine create --driver virtualbox matcha
# Get Ip of virtual machine (for mac)
docker-machine ip matcha # 192.168.99.101

eval $(docker-machine env matcha)

# Remove any existing images
docker-machine rm -f default