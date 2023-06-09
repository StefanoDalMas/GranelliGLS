#!/usr/bin/env python3

import os
from mininet.topo import Topo
from mininet.node import RemoteController, OVSKernelSwitch
from mininet.net import Mininet
from mininet.link import TCLink
from mininet.cli import CLI


class OnDemandSlicingTopo(Topo):
    def __init__(self):
        Topo.__init__(self)

        # two templates for links creation
        host_config = {}
        switch_config = {}

        # creates 3 switches
        for i in range(3):
            sconfig = {"dpid": "%016x" % (i + 1)}
            self.addSwitch("s%d" % (i + 1), **sconfig)
        # creates 8 hosts
        for i in range(8):
            self.addHost("h%d" % (i + 1))

        # add links between switches
        self.addLink("s1", "s2", **switch_config)
        self.addLink("s2", "s3", **switch_config)
        self.addLink("s1", "s3", **switch_config)

        # add links between hosts and switches
        self.addLink("h1", "s1", **host_config)
        self.addLink("h2", "s1", **host_config)
        self.addLink("h3", "s2", **host_config)
        self.addLink("h4", "s2", **host_config)
        self.addLink("h5", "s1", **host_config)
        self.addLink("h6", "s2", **host_config)
        self.addLink("h7", "s1", **host_config)
        self.addLink("h8", "s3", **host_config)


if __name__ == "__main__":
    topo = OnDemandSlicingTopo()  # build the topology
    # create a Mininet object with the given topology and a RemoteController
    net = Mininet(
        topo=topo,
        link=TCLink,
        controller=RemoteController("c0", ip="127.0.0.1"),
        switch=OVSKernelSwitch,
        build=False,
        autoSetMacs=True,
        autoStaticArp=True,
    )
    net.build()  # build the netwwork
    net.start()  # start the network
    CLI(net)  # give the control to the user
    os.chdir("../")
    fd = open("pid.txt", "r")
    pid = fd.readline()
    fd.close()
    print("Killing the controller with pid: " + pid)
    os.system("kill -9 " + pid)
    os.remove("pid.txt")
    os.chdir("Visualizer")
    net.stop()
