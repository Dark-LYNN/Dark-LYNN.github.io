module.exports = ({
    name: "ban",
    description: "bans the user with the given reason",
    $if: "old",
    usage: "$getServerVar[prefix]ban <user> {reason}",
    code: `
    $if[$getServerVar[moderation]==enabled]
        $if[$getServerVar[ban]==enabled]
            $if[$getChannelVar[ignored]==false]
                $if[$checkContains[$userPerms[$authorID];kickmembers;admin]==true]
                    $if[$findUser[$message[1]]!=$authotID]
                        $if[$findUser[$message[1]]!=$ownerID]
                            $if[$findUser[$message[1]]!=738057910923296839]
                                $if[$authorID==$ownerID]
                                    $if[$message[2]==]
                                        $if[$rolePosition[$highestRole[$findUser[$message[1]];$guildID;id];$guildID]>$rolePosition[$highestRole[$clientID;$guildID;id];$guildID]]
                                            $title[User Banned]
                                            $thumbnail[$userAvatar[$splitText[1]]]
                                            $color[$getServerVar[color]]
                                            $description[**User:** <@$splitText[1]> ||$splitText[1]||
**Reason:** \`\`\`
No reason given.
\`\`\`]
                                            $footer[Banned by @$userTag]
                                            $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                                $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:$getServerVar[color]}{title:User Banned}{thumbnail:$userAvatar[$findUser[$message[1]]]}{footer:Banned by @$userTag}{description:**User** <@$findUser[$message[1]]> ||$findUser[$message[1]]||
**Reason** \`\`\`
No reason given.
\`\`\`}}]
                                            $else
                                            $endif
                                            $ban[$guildID;$findUser[$message[1]];7;No Reason Given! ~ Banned By @$userTag]
                                        $else
                                            $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Can't ban this user!}{description:This user has a higher or the same role as me,
if you want me to ban them put my highest role above the user's highest role.}{image:https://cdn.lynnux.xyz/images/RolePossition-Ban.png}}]                                            
                                        $endif
                                    $else   
                                        $if[$rolePosition[$highestRole[$findUser[$message[1]];$guildID;id];$guildID]>$rolePosition[$highestRole[$clientID;$guildID;id];$guildID]]
                                            $title[User Banned]
                                            $thumbnail[$userAvatar[$splitText[1]]]
                                            $color[$getServerVar[color]]
                                            $description[**User:** <@$splitText[1]> ||$splitText[1]||
**Reason:** \`\`\`
$replaceText[$message;$message[1] ;;1]
\`\`\`]
                                            $footer[Banned by @$userTag]
                                            $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                                $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:$getServerVar[color]}{title:User Banned}{thumbnail:$userAvatar[$findUser[$message[1]]]}{footer:Banned by @$userTag}{description:**User** <@$findUser[$message[1]]> ||$findUser[$message[1]]||
**Reason** \`\`\`
$replaceText[$message;$message[1] ;;1]
\`\`\`}}]
                                            $else
                                            $endif
                                            $ban[$guildID;$findUser[$message[1]];7;$replaceText[$message;$message[1] ;;1] ~ Banned By @$userTag]
                                        $else
                                            $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Can't ban this user!}{description:This user has a higher or the same role as me,
if you want me to ban them put my highest role above the user's highest role.}{image:https://cdn.lynnux.xyz/images/RolePossition-Ban.png}}]                                                                                        
                                        $endif
                                    $endif
                                $else
                                    $if[$rolePosition[$highestRole[$findUser[$message[1]];$guildID;id];$guildID]>$rolePosition[$highestRole[$clientID;$guildID;id];$guildID]]
                                        $if[$rolePosition[$highestRole[$findUser[$message[1]];$guildID;id];$guildID]>$rolePosition[$highestRole[$authorID;$guildID;id];$guildID]]
                                            $if[$message[2]==]
                                                $title[User Banned]
                                                $thumbnail[$userAvatar[$splitText[1]]]
                                                $color[$getServerVar[color]]
                                                $description[**User:** <@$splitText[1]> ||$splitText[1]||
**Reason:** \`\`\`
No reason given.
\`\`\`]
                                                $footer[Banned by @$userTag]
                                                $if[$getServerVar[botLogChannel]!=926203126116122625]
                                                    $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:$getServerVar[color]}{title:User Banned}{thumbnail:$userAvatar[$findUser[$message[1]]]}{footer:Banned by @$userTag}{description:**User** <@$findUser[$message[1]]> ||$findUser[$message[1]]||
**Reason** \`\`\`
No reason given.
\`\`\`}}]
                                                $else
                                                $endif
                                                $ban[$guildID;$findUser[$message[1]];7;No Reason Given! ~ Banned By @$userTag]
                                            $else
                                                $title[User Banned]
                                                $thumbnail[$userAvatar[$splitText[1]]]
                                                $color[$getServerVar[color]]
                                                $description[**User:** <@$splitText[1]> ||$splitText[1]||
**Reason:** \`\`\`
$replaceText[$message;$message[1] ;;1]
\`\`\`]
                                                $footer[Banned by @$userTag]
                                                $if[$getServerVar[botLogChannel]!=926203126116122625]
                                                    $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:$getServerVar[color]}{title:User Banned}{thumbnail:$userAvatar[$findUser[$message[1]]]}{footer:Banned by @$userTag}{description:**User** <@$findUser[$message[1]]> ||$findUser[$message[1]]||
**Reason** \`\`\`
$replaceText[$message;$message[1] ;;1]
\`\`\`}}]
                                                $else
                                                $endif
                                                $ban[$guildID;$findUser[$message[1]];7;$replaceText[$message;$message[1] ;;1] ~ Banned By @$userTag]
                                            $endif
                                        $else
                                            $if[$splitText[2]!=$ownerID]
                                                $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Can't ban this user!}{description:This user has a higher or the same role as you.}}]
                                            $else
                                                $if[$message[2]==]
                                                    $title[User Banned]
                                                    $thumbnail[$userAvatar[$splitText[1]]]
                                                    $color[$getServerVar[color]]
                                                    $description[**User:** <@$splitText[1]> ||$splitText[1]||
**Reason:** \`\`\`
No reason given.
\`\`\`]
                                                    $footer[Banned by @$userTag]
                                                    $if[$getServerVar[botLogChannel]!=926203126116122625]
                                                        $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:$getServerVar[color]}{title:User Banned}{thumbnail:$userAvatar[$findUser[$message[1]]]}{footer:Banned by @$userTag}{description:**User** <@$findUser[$message[1]]> ||$findUser[$message[1]]||
**Reason** \`\`\`
No reason given.
\`\`\`}}]
                                                    $else
                                                    $endif
                                                    $ban[$guildID;$findUser[$message[1]];7;No Reason Given! ~ Banned By @$userTag]
                                                $else
                                                    $title[User Banned]
                                                    $thumbnail[$userAvatar[$splitText[1]]]
                                                    $color[$getServerVar[color]]
                                                    $description[**User:** <@$splitText[1]> ||$splitText[1]||
**Reason:** \`\`\`
$replaceText[$message;$message[1] ;;1]
\`\`\`]
                                                    $footer[Banned by @$userTag]
                                                    $if[$getServerVar[botLogChannel]!=926203126116122625]
                                                        $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:$getServerVar[color]}{title:User Banned}{thumbnail:$userAvatar[$findUser[$message[1]]]}{footer:Banned by @$userTag}{description:**User** <@$findUser[$message[1]]> ||$findUser[$message[1]]||
**Reason** \`\`\`
$replaceText[$message;$message[1] ;;1]
\`\`\`}}]
                                                    $else
                                                    $endif
                                                    $ban[$guildID;$findUser[$message[1]];7;$replaceText[$message;$message[1] ;;1] ~ Banned By @$userTag]
                                                $endif
                                            $endif
                                        $endif
                                    $else
                                        $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Can't ban this user!}{description:This user has a higher or the same role as me,
if you want me to ban them put my highest role above the user's highest role.}{image:https://cdn.lynnux.xyz/images/RolePossition-Ban.png}}]
                                    $endif
                                $endif
                            $else
                                $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Can't ban this user!}{description:You cannot ban me, if you want me to leave please use
\`\`\`
a.pleaseleavemyserver
\`\`\`}{footer:Only the server owner can use the above mentioned command.}}]
                            $endif
                        $else
                            $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Couldn't ban this user!}{description:The server owner can't be banned.}}]
                        $endif
                    $else
                        $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Couldn't find this user!}{description:}}]
                    $endif
                $else
                    $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ No permissions!}{description:You do not have the right permission to use this command}{footer:Required permission = BanMembers / Admin}}]
                $endif
            $else
                $if[$checkContains[$userPerms;banmembers;administrator]==true]
                    $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Channel Ignored!}{description:An admin of this server choose to ignore this channel.
You can stop ignoring this channel by using:
\`\`\`
a.listen
\`\`\`}}]
                $else
                    $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Channel Ignored!}{description:An admin of this server choose to ignore this channel.}}]
                $endif
            $endif
        $else
            $if[$checkContains[$userPerms;banmembers;administrator]==true]
                $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Module Disabled!}{description:An admin of this server chose to disable the \`Ban\` Command.
You can re-enable it by using:
\`\`\`
a.enable ban
\`\`\`}}]
            $else
                $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Module Disabled!}{description:An admin of this server chose to disable the \`Ban\` Command.}}]
            $endif
        $endif
    $else
        $if[$checkContains[$userPerms;banmembers;administrator]==true]
            $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Module Disabled!}{description:An admin of this server chose to disable the \`Moderation\` module.
You can re-enable it by using:
\`\`\`
a.enable moderation
\`\`\`}}]
        $else
            $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Module Disabled!}{description:An admin of this server chose to disable the \`Moderation\` module.}}]
        $endif
    $endif

    $textSplit[$findUser[$message[1]]-=OwO=-$authorID;-=OwO=-]

	$onlyIf[$checkContains[$toLowerCase[$userPerms[$clientID]];admin;banmem]==true;{newEmbed:{color:ff3333}{title:❌ Missing perms!}{description:I am missing the banMembers permissions in this server.}}]
    $onlyIf[$guildID!=;{newEmbed:{color:ff3333}{title:❌ Something went wrong!}{description:Please use this command in a server.}}]
`})


/*
Text Split Map

1 = User Found In Message 1
2 = AuthorID
*/
