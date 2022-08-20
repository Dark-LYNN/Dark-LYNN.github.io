# Akira Commands
### Permissions:
Command | Usage | Description | Akira Perms | Discord Perms | aliasses
----|----|----|----|----|----
Admin-Role | a.adminrole [ROLE] | Gives Admin perms to a role | Admin | Admin | adminrole / AR / Admin-role
srmod-role | a.srmodrole [ROLE] | Give SR-Mod perms to a role | Admin | Admin | srmodrole / SRMR / sr-mod-role
mod-role | a.modrole [ROLE] | Give Mod perm to a role | Admin | Admin | modrole / MR / mod-role

### Log Channels
Command | Usage | Description | Akira Perms | Discord Perms | aliasses
----|----|----|----|----|----
Set Log Channel | a.logchannel (command) [channel] | Send Command usage to channel | Admin | Admin | logchannel / log-channel set-log-channel / setlogchannel / log-channel / log-channel

### Moderation:
Command | Usage | Description | Akira Perms | Discord Perms | aliasses
----|----|----|----|----|----
warn | a.warn [USER] (Reason) {dm} | Warn a user |  Warn / Mod / SR-Mod / Admin |  Kick / Admin | warn
kick | a.kick [USER] (Reason) {dm}   | kick a user from the server | Kick / Mod / SR-Mod / Admin | Kick / Admin | kick / remove / send-away / sendaway
mute | a.mute [users] (time) (reason) {dm} | mute a user so they can't send messages anymore. | Mute / Mod / SR-Mod / Admin | Kick / Admin | mute / timeout / time-out
unmute | a.unmute [user] (reason) | Unmute a user so they can send messages again | Unmute / Mod / SR-Mod / Admin | Kick / Admin | unmute / un-mute / untimeout 
ban | a.ban [users] (time) (reason) {DM_OR_NOT} | Ban a user from the server | Ban / Mod / SR-Mod / Admin | Ban / Admin | ban
unban | a.unban [user] (reason) | Unban a user from the server | Unban / Mod / SR-Mod / Admin | Ban / Admin | unban
purge | a.purge (user) {amount} (reason) | Mass delete messages up to 1000 messages at once. | Purge / Mod / SR-Mod / Admin | Manage-Messages / Admin | clear / clean / delete
