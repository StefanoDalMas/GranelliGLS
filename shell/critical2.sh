#!/bin/bash

#reset previous configuration, this is done to avoid errors
bash ./shell/reset.sh
# S1-eth1
echo ' ---------------------------------------------- '
echo '*** Network Slicing: Creating 3 slices of 3, 7, 10 Mbps each ...'
echo 'Switch 1:'
sudo ovs-vsctl -- \
set port s1-eth1 qos=@newqos -- \
set port s1-eth2 qos=@newqos -- \
--id=@newqos create QoS type=linux-htb \
other-config:max-rate=20000000 \
queues:123=@1q \
queues:234=@2q \
queues:456=@4q -- \
--id=@1q create queue other-config:min-rate=1000000 other-config:max-rate=3000000 -- \
--id=@2q create queue other-config:min-rate=1000000 other-config:max-rate=10000000 -- \
--id=@4q create queue other-config:min-rate=1000000 other-config:max-rate=7000000

# S2
echo 'Switch 2:'
sudo ovs-vsctl -- \
set port s2-eth1 qos=@newqos -- \
set port s2-eth2 qos=@newqos -- \
--id=@newqos create QoS type=linux-htb \
other-config:max-rate=20000000 \
queues:123=@1q \
queues:234=@2q -- \
--id=@1q create queue other-config:min-rate=1000000 other-config:max-rate=3000000 -- \
--id=@2q create queue other-config:min-rate=1000000 other-config:max-rate=10000000


# S3
echo 'Switch 3:'
sudo ovs-vsctl -- \
set port s3-eth1 qos=@newqos -- \
set port s3-eth2 qos=@newqos -- \
--id=@newqos create QoS type=linux-htb \
other-config:max-rate=20000000 \
queues:123=@1q \
queues:456=@4q -- \
--id=@1q create queue other-config:min-rate=1000000 other-config:max-rate=3000000 -- \
--id=@4q create queue other-config:min-rate=1000000 other-config:max-rate=7000000

echo '*** Slices Created!'
echo ' ---------------------------------------------- '

# [SWITCH 1]
sudo ovs-ofctl add-flow s1 ip,priority=65500,in_port=1,idle_timeout=0,actions=set_queue:234,output:4
sudo ovs-ofctl add-flow s1 ip,priority=65500,nw_src=10.0.0.3,idle_timeout=0,actions=set_queue:123,output:3
sudo ovs-ofctl add-flow s1 ip,priority=65500,nw_src=10.0.0.8,idle_timeout=0,actions=set_queue:456,output:6
sudo ovs-ofctl add-flow s1 ip,priority=65500,in_port=3,idle_timeout=0,actions=set_queue:123,output:2
sudo ovs-ofctl add-flow s1 ip,priority=65500,in_port=4,idle_timeout=0,actions=set_queue:234,output:1
sudo ovs-ofctl add-flow s1 ip,priority=65500,in_port=5,actions=drop
sudo ovs-ofctl add-flow s1 ip,priority=65500,in_port=6,idle_timeout=0,actions=set_queue:456,output:2

# [SWITCH 2]
sudo ovs-ofctl add-flow s2 ip,priority=65500,in_port=1,idle_timeout=0,actions=set_queue:234,output:4
sudo ovs-ofctl add-flow s2 ip,priority=65500,in_port=2,idle_timeout=0,actions=set_queue:123,output:3
sudo ovs-ofctl add-flow s2 ip,priority=65500,in_port=3,idle_timeout=0,actions=set_queue:123,output:2
sudo ovs-ofctl add-flow s2 ip,priority=65500,in_port=4,idle_timeout=0,actions=set_queue:234,output:1
sudo ovs-ofctl add-flow s2 ip,priority=65500,in_port=5,actions=drop

# [SWITCH 3]
sudo ovs-ofctl add-flow s3 ip,priority=65500,nw_src=10.0.0.1,idle_timeout=0,actions=set_queue:123,output:1
sudo ovs-ofctl add-flow s3 ip,priority=65500,nw_src=10.0.0.7,idle_timeout=0,actions=set_queue:456,output:3
sudo ovs-ofctl add-flow s3 ip,priority=65500,in_port=1,idle_timeout=0,actions=set_queue:123,output:2
sudo ovs-ofctl add-flow s3 ip,priority=65500,in_port=3,idle_timeout=0,actions=set_queue:456,output:2
