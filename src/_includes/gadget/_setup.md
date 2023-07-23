# Set Up Gadget

To get started, download and install the following on your development machine and Gadget compatible device.

## Install Docker

**Note:** Gadget requires Docker version 17.06 or greater. If Docker is already installed check which version of Docker you have with the command `docker -v`.

Gadget makes use of [Docker's](https://www.docker.com/) container system. Dependent on your development machine's OS, download and install the appropriate version of Docker.

* MacOS - [Docker CE](https://store.docker.com/search?type=edition&offering=community)
* Windows 10 (Pro Edition)- [Docker CE](https://store.docker.com/search?type=edition&offering=community)
* Linux - [Docker CE](https://store.docker.com/search?type=edition&offering=community)

After you install Docker, you will need to run it once before using GadgetCLI. GadgetCLI uses the Docker daemon to pull images from [Docker Hub](https://hub.docker.com/) or to build directly from local Dockerfiles. Learn more about Docker Hub and how to use it [here](https://docs.docker.com/docker-hub/).

### Additional Setup for Linux

#### Build and Run ARM Docker Images

If your development machine runs Linux you may need to download extra packages and add missing files to the system for Docker to successfully build an `arm32v7/*` Docker image. Open a terminal window and install [binfmt-support](https://packages.debian.org/stretch/binfmt-support) and [qemu-user-static](https://packages.debian.org/stretch/qemu-user-static) and then reboot.

```
sudo apt-get update
sudo apt-get install binfmt-support qemu-user-static
sudo reboot
```
In addition to installing these packages, your Linux distro may still be missing `qemu-user-static` files . Follow the instructions outlined [here](https://github.com/computermouth/qemu-static-conf) to check whether they are missing and how to obtain them.

Check the [Troubleshooting](/gadget#troubleshooting) section for specific errors you may be getting.

#### Run Docker as Unprivileged User

In some instances, such as building NTC's [Gadget-OS kernel](https://github.com/NextThingCo/Gadget-OS), You need to run Docker as an unprivileged user. To set this up, follow Docker's [Linux Post-install](https://docs.docker.com/engine/installation/linux/linux-postinstall/) instructions. 

## Install Gadget

Download the zip file containing the latest release of GadgetCLI and GadgetOS [here](https://github.com/NextThingCo/gadgetcli/releases). Put the gadget binary in your system's PATH or precede all the commands with `./` e.g., `./gadget` while in the same directory.

**PATH location:**

**MacOS**

On a Mac, place the Gadget binary in this location:

```
/usr/local/bin
```

To view the current value of your PATH environment variable:

```
echo $PATH
```

To add a new path, open the /etc/paths file:

```
nano /etc/paths
```

Add the new path to the end of the file and save. 

**Windows 10**

Put the gadget binary somewhere like C:\Program Files\gadget and edit the *Path* variable to point to that location.

Click the Windows icon to open the Start Menu. Search for *Advanced System Settings*. When the *System Properties* window opens click on *Environment Variables*.

Find and select the *Path* variable under *System Variables*. Click *Edit* and the *Edit Environment Variable* window will open. Click *New* and enter the directory path to the Gadget binary. Then click *OK*.

**Linux**

Put the Gadget binary here:

```
/usr/bin
```

To view the current value of your PATH environment variable:

```
echo $PATH
```

To add a new path to the current value after the default system paths of PATH use this command:

```
PATH=$PATH:/my/new/path
``` 


## Flash GadgetOS 


Use the [web flasher](http://flash.getchip.com/pro) to install GadgetOS on your C.H.I.P. Pro Dev Kit. The latest GadgetOS is required for GadgetCLI to be able to talk to your hardware device and found in the [GitHub repo](https://github.com/NextThingCo/gadgetcli/releases).

Once flashed, power cycle C.H.I.P. Pro Dev Kit by either unplugging it from the USB port or pressing the [On/Off button](/chip_pro_devkit#power).
