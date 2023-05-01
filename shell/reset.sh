#!/bin/bash

echo "Cleaning switches flow entries"
sudo ovs-ofctl del-flows s1
sudo ovs-ofctl del-flows s2
sudo ovs-ofctl del-flows s3
