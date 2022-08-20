# Akira Commands
### Permissions:
Command | Usage | Description | Akira Perms | Discord Perms | aliasses
----|----|----|----|----|----
Admin-Role | a.adminrole [ROLE] | Gives Admin perms to a role | Owner | Admin | AR 
srmod-role | a.srmodrole [ROLE] | Give SR-Mod perms to a role | Admin | Admin | SRMR
mod-role | a.modrole [ROLE] | Give Mod perm to a role | Admin | Admin | MR 

### Log Channels
Command | Usage | Description | Akira Perms | Discord Perms | aliasses
----|----|----|----|----|----
Set Log Channel | a.logchannel (command) [channel] | Send Command usage to channel | Admin | Admin | logchannel / log-channel 

### Moderation:
Command | Usage | Description | Akira Perms | Discord Perms | aliasses
----|----|----|----|----|----
warn | a.warn [USER] (Reason) {dm} | Warn a user |  Warn / Mod / SR-Mod / Admin |  Kick / Admin | None
kick | a.kick [USER] (Reason) {dm}   | kick a user from the server | Kick / Mod / SR-Mod / Admin | Kick / Admin | remove / send-away / sendaway
mute | a.mute [users] (time) (reason) {dm} | mute a user so they can't send messages anymore. | Mute / Mod / SR-Mod / Admin | Kick / Admin | timeout
unmute | a.unmute [user] (reason) | Unmute a user so they can send messages again | Unmute / Mod / SR-Mod / Admin | Kick / Admin | un-mute / untimeout 
ban | a.ban [users] (time) (reason) {DM_OR_NOT} | Ban a user from the server | Ban / Mod / SR-Mod / Admin | Ban / Admin | None
unban | a.unban [user] (reason) | Unban a user from the server | Unban / Mod / SR-Mod / Admin | Ban / Admin | None
purge | a.purge (user) {amount} (reason) | Mass delete messages up to 1000 messages at once. | Purge / Mod / SR-Mod / Admin | Manage-Messages / Admin | clear / clean / delete
punishments | a.punishments (user) (page) | See the past punishment history of a user in the server | Punishment / Mod / SR-Mod / Admin | Manage-Messages / Admin |  punishment
warn | a.warn [users] [reason] | Warn a user so you can track of who has been warninged before | Warn / Mod / SR-Mod / Admin | Manage-Messages / Admin | None
unwarn | a.unwarn [user] [warning ID] (reason) | Remove the warn from a user. | Unwarn / Mod / SR-Mod / Admin | Manage-Messages / Admin | None
warnings | a.warnings (user) (page) | See the warnings of a user | Warnings / Mod / SR-Mod / Admin | Manage-Messages / Admin | Warns
stafflog | a.stafflog (user) | See how much punishments a staff member has given | stafflog / Mod / SR-Mod / Admin | ban / Admin | None
nuke | a.nuke (channel) | Destroy all messages sent in a channel by cloning the channel. | Nuke / Admin | Admin | None
punishmessage | a.punishmessage (text) | Change the default punishment message | Punishmessage / Admin | Admin | punishmsg
