#!/bin/bash

cd ../
path="pid.txt"
echo "$path"
pid=$(head -n 1 $path)
echo $pid
sudo kill -9 $pid
rm $path
cd shell
