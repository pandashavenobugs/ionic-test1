* to run our code on andriod emulator
* install andriod stuido and sdk
* enable svm option in cpu (amd)
* sudo apt install qemu-kvm
* sudo adduser berat(USERNAME whatever you want to use) kvm
* sudo chown berat /dev/kvm
* "linuxAndroidStudioPath":"/home/berat/android-studio/bin/studio.sh" this must be added to capacitor.config.json  or else capacitor doesnt work well

* **this code has to be run every before start emulator** sudo chown berat /dev/kvm

* and to start project : ionic capacitor run android