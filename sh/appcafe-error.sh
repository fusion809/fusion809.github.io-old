[899/900] Deinstalling zip-3.0_1...
[899/900] Deleting files for zip-3.0_1: .......... done
Installing packages to stage BE... (This may take a while)
pkg-static: Repo pcbsd-major needs schema upgrade from 2011 to 2012 but it is opened readonly
pkg-static: need to re-create repo pcbsd-major to upgrade schema version
pkg-static: Repository pcbsd-major cannot be opened. 'pkg update' required
pkg-static: No packages available to install matching 'ports-mgmt/pkg' have been found in the repositories
GRUB configuration updated successfully
Destroyed successfully
ERROR: Error 1: chroot /.updateStage sh /.doPkgUp.sh
rm: /.updateStage/.doPkgUp.sh: No such file or directory
Unmounting stage BE...
chroot: /bin/freebsd-version: No such file or directory
umount: /.updateStage/dev: statfs: No such file or directory
umount: /.updateStage/dev: unknown file system
ERROR: Error 1: umount -f /.updateStage/dev