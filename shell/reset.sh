#!/bin/bash

echo "Cleaning switches flow entries"
sudo ovs-vsctl del-br s1
sudo ovs-vsctl del-br s2
sudo ovs-vsctl del-br s3
sudo ovs-vsctl add-br s1
sudo ovs-vsctl add-br s2
sudo ovs-vsctl add-br s3
sudo ovs-vsctl add-port s1 s1-eth1
sudo ovs-vsctl add-port s1 s1-eth2
sudo ovs-vsctl add-port s1 s1-eth3
sudo ovs-vsctl add-port s1 s1-eth4
sudo ovs-vsctl add-port s1 s1-eth5
sudo ovs-vsctl add-port s1 s1-eth6
sudo ovs-vsctl add-port s2 s2-eth1
sudo ovs-vsctl add-port s2 s2-eth2
sudo ovs-vsctl add-port s2 s2-eth3
sudo ovs-vsctl add-port s2 s2-eth4
sudo ovs-vsctl add-port s2 s2-eth5
sudo ovs-vsctl add-port s3 s3-eth1
sudo ovs-vsctl add-port s3 s3-eth2
sudo ovs-vsctl add-port s3 s3-eth3
