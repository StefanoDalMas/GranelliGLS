#!/bin/bash

sudo mn -c &>/dev/null
echo "Cleared Mininet"
cd Visualizer/
ryu-manager --observe-links gui_start.py simple_switch.py &
sleep 1
sudo python3 ~/comnetsemu/progettoNet2/OnDemandSlicing/topology.py
sudo mn -c &>/dev/null
echo "Done!"

