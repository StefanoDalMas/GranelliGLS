#!/bin/bash

bash reset.sh
sudo ovs-ofctl mod-port s1 s1-eth1 flood
sudo ovs-ofctl mod-port s1 s1-eth2 flood
sudo ovs-ofctl mod-port s1 s1-eth3 flood
sudo ovs-ofctl mod-port s1 s1-eth4 flood
sudo ovs-ofctl mod-port s1 s1-eth5 flood
sudo ovs-ofctl mod-port s1 s1-eth6 flood
sudo ovs-ofctl mod-port s2 s2-eth1 flood
sudo ovs-ofctl mod-port s2 s2-eth2 flood
sudo ovs-ofctl mod-port s2 s2-eth3 flood
sudo ovs-ofctl mod-port s2 s2-eth4 flood
sudo ovs-ofctl mod-port s2 s2-eth5 flood
sudo ovs-ofctl mod-port s3 s3-eth1 flood
sudo ovs-ofctl mod-port s3 s3-eth2 flood
sudo ovs-ofctl mod-port s3 s3-eth3 flood

