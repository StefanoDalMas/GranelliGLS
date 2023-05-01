#!/bin/bash

sudo mn -c &>/dev/null
echo "Cleared Mininet"
cd Visualizer/
ryu-manager --observe-links gui_start.py controller.py &

sleep 1
sudo python3 network.py
sudo mn -c &>/dev/null
echo "Done!"

