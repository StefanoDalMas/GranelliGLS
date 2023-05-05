#!/bin/bash

node server.js & echo $! > pid.txt
sudo mn -c &>/dev/null
echo "Cleared Mininet"
cd Visualizer/
ryu-manager --observe-links gui_start.py controller.py &

sleep 1
sudo python3 network.py
cd ../
echo "Done!"
