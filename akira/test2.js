module.exports = ({
    name: "kick",
    description: "kick a user from the server",
    $if: "old",
    usage: "$getServerVar[prefix]kick <user> {reason}",
    code: `
    $if[$getServerVar[moderation]==enabled]
        $if[$getServerVar[kick]==enabled]
            $if[$getChannelVar[ignored]==false]
                $if[$checkContains[$userPerms[$authorID];kickmembers;admin]==true]
                    $if[$findUser[$message[1]]!=$authotID]
                        $if[$findUser[$message[1]]!=$ownerID]
                            $if[$findUser[$message[1]]!=$clientID]
                                $if[$authorID==$ownerID]
                                    $if[$message[2]==]
                                        $if[$rolePosition[$highestRole[$findUser[$message[1]]];$guildID]>$rolePosition[$highestRole[$clientID;$guildID;id];$guildID]]
                                            $title[User kicked]
                                            $thumbnail[$userAvatar[$splitText[1]]]
                                            $color[$getServerVar[color]]
                                            $description[**User:** <@$splitText[1]> ||$splitText[1]||
**Reason:** \`\`\`
No reason given.
\`\`\`]
                                            $footer[Kicked by @$userTag]
                                            $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                                $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:$getServerVar[color]}{title:User kicked}{thumbnail:$userAvatar[$findUser[$message[1]]]}{footer:Kicked by @$userTag}{description:**User** <@$findUser[$message[1]]> ||$findUser[$message[1]]||
**Reason** \`\`\`
No reason given.
\`\`\`}}]
                                            $else
                                            $endif
                                            $kick[$findUser[$message[1]];$guildID;No Reason Given! ~ Kicked By @$userTag]
                                        $else
                                        $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Can't kick this user!}{description:This user has a higher or the same role as me,
if you want me to kick, put my highest role above the user's higest role.}{image:https://cdn.lynnux.xyz/images/RolePossition-kick.png}}]                                            
                                        $endif
                                    $else
                                        $if[$rolePosition[$highestRole[$findUser[$message[1]]];$guildID]>$rolePosition[$highestRole[$clientID;$guildID;id];$guildID]]
                                            $title[User kicked]
                                            $thumbnail[$userAvatar[$splitText[1]]]
                                            $color[$getServerVar[color]]
                                            $description[**User:** <@$splitText[1]> ||$splitText[1]||
**Reason:** \`\`\`
$replaceText[$message;$message[1] ;;1]
\`\`\`]
                                            $footer[kicked by @$userTag]
                                            $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                                $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:$getServerVar[color]}{title:User kicked}{thumbnail:$userAvatar[$findUser[$message[1]]]}{footer:Kicked by @$userTag}{description:**User** <@$findUser[$message[1]]> ||$findUser[$message[1]]||
**Reason** \`\`\`
$replaceText[$message;$message[1] ;;1]
\`\`\`}}]
                                            $else
                                            $endif
                                            $kick[$findUser[$message[1]];$guildID;$replaceText[$message;$message[1] ;;1] ~ Kicked By @$userTag]
                                        $else
                                        $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Can't kick this user!}{description:This user has a higher or the same role as me,
if you want me to kick, put my highest role above the user's higest role.}{image:https://cdn.lynnux.xyz/images/RolePossition-kick.png}}]                                                                                                                            
                                        $endif
                                    $else
                                    $endif
                                $else
                                    $if[$rolePosition[$highestRole[$findUser[$message[1]];$guildID;id];$guildID]>$rolePosition[$highestRole[$clientID;$guildID;id];$guildID]]
                                        $if[$rolePosition[$highestRole[$findUser[$message[1]];$guildID;id];$guildID]>$rolePosition[$highestRole[$authorID;$guildID;id];$guildID]]
                                            $if[$message[2]==]
                                                $title[User kicked]
                                                $thumbnail[$userAvatar[$splitText[1]]]
                                                $color[$getServerVar[color]]
                                                $description[**User:** <@$splitText[1]> ||$splitText[1]||
**Reason:** \`\`\`
No reason given.
\`\`\`]
                                                $footer[Kicked by @$userTag]
                                                $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                                    $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:$getServerVar[color]}{title:User kicked}{thumbnail:$userAvatar[$findUser[$message[1]]]}{footer:kicked by @$userTag}{description:**User** <@$findUser[$message[1]]> ||$findUser[$message[1]]||
**Reason** \`\`\`
No reason given.
\`\`\`}}]
                                                $else
                                                $endif
                                                $kick[$findUser[$message[1]];$guildID;No Reason Given! ~ Kicked By @$userTag]
                                            $else
                                                $title[User kicked]
                                                $thumbnail[$userAvatar[$splitText[1]]]
                                                $color[$getServerVar[color]]
                                                $description[**User:** <@$splitText[1]> ||$splitText[1]||
**Reason:** \`\`\`
$replaceText[$message;$message[1] ;;1]
\`\`\`]
                                                $footer[kicked by @$userTag]
                                                $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                                    $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:$getServerVar[color]}{title:User kicked}{thumbnail:$userAvatar[$findUser[$message[1]]]}{footer:Kicked by @$userTag}{description:**User** <@$findUser[$message[1]]> ||$findUser[$message[1]]||
**Reason** \`\`\`
$replaceText[$message;$message[1] ;;1]
\`\`\`}}]
                                                $else
                                                $endif
                                                $kick[$findUser[$message[1]];$guildID;$replaceText[$message;$message[1] ;;1] ~ Kicked By @$userTag]
                                            $endif
                                        $else
                                            $if[$splitText[2]!=$ownerID]
                                                $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Can't kick this user!}{description:This user has a higher or the same role as you.}}]
                                            $else
                                                $if[$message[2]==]
                                                    $title[User kicked]
                                                    $thumbnail[$userAvatar[$splitText[1]]]
                                                    $color[$getServerVar[color]]
                                                    $description[**User:** <@$splitText[1]> ||$splitText[1]||
**Reason:** \`\`\`
No reason given.
\`\`\`]
                                                    $footer[Kicked by @$userTag]
                                                    $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                                        $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:$getServerVar[color]}{title:User kicked}{thumbnail:$userAvatar[$findUser[$message[1]]]}{footer:Kicked by @$userTag}{description:**User** <@$findUser[$message[1]]> ||$findUser[$message[1]]||
**Reason** \`\`\`
No reason given.
\`\`\`}}]
                                                    $else
                                                    $endif
                                                    $kick[$findUser[$message[1]];$guildID;No Reason Given! ~ Kicked By @$userTag]
                                                $else
                                                    $title[User kicked]
                                                    $thumbnail[$userAvatar[$splitText[1]]]
                                                    $color[$getServerVar[color]]
                                                    $description[**User:** <@$splitText[1]> ||$splitText[1]||
**Reason:** \`\`\`
$replaceText[$message;$message[1] ;;1]
\`\`\`]
                                                    $footer[Kicked by @$userTag]
                                                    $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                                        $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:$getServerVar[color]}{title:User kicked}{thumbnail:$userAvatar[$findUser[$message[1]]]}{footer:Kicked by @$userTag}{description:**User** <@$findUser[$message[1]]> ||$findUser[$message[1]]||
**Reason** \`\`\`
$replaceText[$message;$message[1] ;;1]
\`\`\`}}]
                                                    $else
                                                    $endif
                                                    $kick[$findUser[$message[1]];$guildID;$replaceText[$message;$message[1] ;;1] ~ Kicked By @$userTag]
                                                $endif
                                            $endif
                                        $endif
                                    $else
                                        $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Can't kick this user!}{description:This user has a higher or the same role as me,
if you want me to kick, put my highest role above the user's highest role.}{image:https://cdn.lynnux.xyz/images/RolePossition-kick.png}}]
                                    $endif
                                $endif
                            $else
                                $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Can't kick this user!}{description:You cannot kick me, if you want me to leave please use
\`\`\`
a.pleaseleavemyserver
\`\`\`}{footer:Only the server owner can use the above mentioned command.}}]
                            $endif
                        $else
                            $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Couldn't kick this user!}{description:The server owner can't be kick.}}]
                        $endif
                    $else
                        $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Couldn't find this user!}{description:}}]
                    $endif
                $else
                    $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ No permissions!}{description:You do not have the right permission to use this command}{footer:Required permission = KickMembers / Admin}}]
                $endif
            $else
                $if[$checkContains[$userPerms;administrator]==true]
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
            $if[$checkContains[$userPerms;administrator]==true]
                $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Module Disabled!}{description:An admin of this server chose to disable the \`Kick\` command.
You can re-enable it by using:
\`\`\`
a.enable kick
\`\`\`}}]
            $else
                $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Module Disabled!}{description:An admin of this server chose to disable the \`Kick\` command.}}]
            $endif
        $endif
    $else
        $if[$checkContains[$userPerms;administrator]==true]
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

    $onlyIf[$guildID!=;{newEmbed:{color:ff3333}{title:❌ Something went wrong!}{description:Please use this command in a server.}}]
`})


/*
Text Split Map

1 = User Found In Message 1
2 = AuthorID
*/
