#!/bin/bash

node server.js & echo $! > pid.txt
sleep 1
cd Visualizer/
ryu-manager --observe-links gui_start.py controller.py &

sleep 1
sudo python3 network.py
cd ../
sudo mn -c &>/dev/null
echo "Done!"
