module.exports = ({
    name: "recolor",
    aliases: ['re-color','changecolor','change-color'],
    description: "Changes the color of the given role.",
    $if: "old",
    usage: "$getServerVar[prefix]recolor <role> <color>",
    code: `
    $if[$getServerVar[blacklisted]==false]
        $if[$getGlobalUserVar[blacklisted]==false]
            $if[$getServerVar[moderation]==enabled]
                $if[$getServerVar[recolor]==enabled]
                    $if[$message[1]!=]
                        $if[$findRole[$message[1]]!=]
                            $if[$message[2]!=]
                                $if[$isValidHex[$message[2]]==true]
                                    $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                        $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:$message[2]}{title:Role color changed}{description:<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`$message[2]\`}}]
                                    $else
                                    $endif    
                                    $color[$message[2]]
                                    $setRoleColor[$findRole[$message[1]];$message[2]]
                                    $title[Role color changed]
                                    $if[$message[3]==]
                                        $description[<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`$message[2]\`]
                                        $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                            $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:$message[2]}{title:Role color changed}{description:<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`$message[2]\`}}]
                                        $else   
                                        $endif
                                    $else
                                        $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                            $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:$message[2]}{title:Role color changed}{description:<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`$message[2]\`
Reason: \`\`\`
$replaceText[$replaceText[$message;$message[1] ;;1];$message[2] ;;1]
\`\`\`}}]
                                        $else   
                                        $endif
                                        $description[<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`$message[2]\`
Reason: \`\`\`
$replaceText[$replaceText[$message;$message[1] ;;1];$message[2] ;;1]
\`\`\`]
                                    $endif
                                $else  
                                    $if[$toLowercase[$message[2]]==red]
                                        $color[ff0000]
                                        $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                            $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:ff0000}{title:Role color changed}{description:<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`Red\`}}]
                                        $else
                                        $endif    
                                        $setRoleColor[$findRole[$message[1]];ff0000]
                                        $title[Role color changed]
                                        $description[<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`Red\`]
                                    $else
                                        $if[$toLowercase[$message[2]]==green]
                                            $color[00ff00]
                                            $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                                $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:00ff00}{title:Role color changed}{description:<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`Green\`}}]
                                            $else
                                            $endif    
                                            $setRoleColor[$findRole[$message[1]];00ff00]
                                            $title[Role color changed]
                                            $description[<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`Green\`]
                                        $else
                                            $if[$toLowercase[$message[2]]==blue]
                                                $color[0000FF]
                                                $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                                    $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:0000FF}{title:Role color changed}{description:<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`Blue\`}}]
                                                $else
                                                $endif    
                                                $setRoleColor[$findRole[$message[1]];0000FF]
                                                $title[Role color changed]
                                                $description[<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`Blue\`]
                                            $else
                                                $if[$toLowercase[$message[2]]==indigo]
                                                    $color[4b0082]
                                                    $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                                        $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:4b0082}{title:Role color changed}{description:<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`Indigo\`}}]
                                                    $else
                                                    $endif    
                                                    $setRoleColor[$findRole[$message[1]];4b0082]
                                                    $title[Role color changed]
                                                    $description[<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`Indigo\`]
                                                $else
                                                    $if[$toLowercase[$message[2]]==orange]
                                                        $color[FFA500]
                                                        $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                                            $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:FFA500}{title:Role color changed}{description:<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`Orange\`}}]
                                                        $else
                                                        $endif    
                                                        $setRoleColor[$findRole[$message[1]];FFA500]
                                                        $title[Role color changed]
                                                        $description[<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`Orange\`]
                                                    $else
                                                        $if[$toLowercase[$message[2]]==yellow]
                                                            $color[FFFF00]
                                                            $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                                                $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:FFFF00}{title:Role color changed}{description:<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`Yellow\`}}]
                                                            $else
                                                            $endif    
                                                            $setRoleColor[$findRole[$message[1]];FFFF00]
                                                            $title[Role color changed]
                                                            $description[<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`Yellow\`]
                                                        $else
                                                            $if[$toLowercase[$message[2]]==violet]
                                                                $color[8F00FF]
                                                                $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                                                    $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:8F00FF}{title:Role color changed}{description:<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`Violet\`}}]
                                                                $else
                                                                $endif    
                                                                $setRoleColor[$findRole[$message[1]];8F00FF]
                                                                $title[Role color changed]
                                                                $description[<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`Violet\`]
                                                            $else
                                                                $if[$toLowercase[$message[2]]==grey]
                                                                    $color[808080]
                                                                    $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                                                        $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:808080}{title:Role color changed}{description:<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`Grey\`}}]
                                                                    $else
                                                                    $endif    
                                                                    $setRoleColor[$findRole[$message[1]];808080]
                                                                    $title[Role color changed]
                                                                    $description[<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`Grey\`]
                                                                $else
                                                                    $if[$toLowercase[$message[2]]==black]
                                                                        $color[000000]
                                                                        $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                                                            $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:000000}{title:Role color changed}{description:<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`Black\`}}]
                                                                        $else
                                                                        $endif    
                                                                        $setRoleColor[$findRole[$message[1]];000000]
                                                                        $title[Role color changed]
                                                                        $description[<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`Black\`]
                                                                    $else
                                                                        $if[$toLowercase[$message[2]]==cyan]
                                                                            $color[00FFFF]
                                                                            $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                                                                $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:00FFFF}{title:Role color changed}{description:<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`Cyan\`}}]
                                                                            $else
                                                                            $endif    
                                                                            $setRoleColor[$findRole[$message[1]];00FFFF]
                                                                            $title[Role color changed]
                                                                            $description[<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`cyan\`]
                                                                        $else
                                                                            $if[$toLowercase[$message[2]]==pink]
                                                                                $color[ff47ff]
                                                                                $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                                                                    $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:ff47ff}{title:Role color changed}{description:<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`Pink\`}}]
                                                                                $else
                                                                                $endif    
                                                                                $setRoleColor[$findRole[$message[1]];ff47ff]
                                                                                $title[Role color changed]
                                                                                $description[<@$authorID> has changed the color of <@&$findRole[$message[1]]> to \`Pink\`]
                                                                            $else
                                                                                $color[ff3333]
                                                                                $title[❌ couldn't find this color!]
                                                                                $description[Sorry but i couln't find this color, 
please use one of the following:
\`\`\`
Red, Green, Blue, Indigo,
Orange, Yellow, Violet, Grey,
Black, Cyan, Pink
\`\`\`]
                                                                            $endif
                                                                        $endif
                                                                    $endif
                                                                $endif
                                                            $endif
                                                        $endif
                                                    $endif
                                                $endif
                                            $endif
                                        $endif
                                    $endif
                                $endif
                            $else
                                $color[ff3333]
                                $title[❌ Wrong usage!]
                                $description[Wrong usage of the command \`recolor\`.
Try using\`\`\`
$getServerVar[prefix]recolor $message[1] <color> {reason}\`\`\`]                            
                                
                            $endif
                        $else
                            $color[ff3333]
                            $title[❌ Wrong usage!]
                            $description[I couln't find the role \`$message[1]\`.
Try using\`\`\`
$getServerVar[prefix]recolor <role> <color> {reason}\`\`\`]                            
                        $endif
                    $else
                    $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Wrong usage!}{description:Wrong usage of the command \`recolor\`.
Try using
\`\`\`
$getServerVar[prefix]recolor <role> <color> {reason#LEFT_BRACKET#
\`\`\`}}]
                    $endif
                $else
                    $if[$checkContains[$userPerms;manageroles;administrator]==true]
                        $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Command Disabled!}{description:An admin of this server chose to disable the \`Recolor\` command.
You can re-enable it by using:
\`\`\`
a.enable moderation
\`\`\`}}]
                    
                    $else
                        $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Command Disabled!}{description:An admin of this server chose to disable the \`Recolor\` command.]
                    $endif
                $endif
            $else
                $if[$checkContains[$userPerms;manageroles;administrator]==true]
                    $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Module Disabled!}{description:An admin of this server chose to disable the \`Moderation\` module.
You can re-enable it by using:
\`\`\`
a.enable moderation
\`\`\`}}]
                $else
                    $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Module Disabled!}{description:An admin of this server chose to disable the \`Moderation\` module.}}]
                $endif
            $endif
        $else
            $color[ff3333]
            $title[Can't use this command.]
            $description[Sorry but you are on my blacklist.
**Reason:**
\`\`\`
$getServerVar[blacklisted]\`\`\`]
            $addField[How to request to be removed from the blacklist?;You can either join the [support server](https://akira.lynnux.xyz/support) and request to be removed from the blacklist in <#928660365825421322> or you can use \`$getServerVar[prefix]contact blacklist user {explain why you need to be removed from the blacklist}\`.]
        $endif
    $else
        $if[$checkContains[$userPerms[$authorID];admin]==true]
            $color[ff3333]
            $title[Can't use this command.]
            $description[Sorry but this server is on my blacklist.
**Reason:**
\`\`\`
$getServerVar[blacklisted]\`\`\`]
            $addField[How to request to be removed from the blacklist?;You can either join the [support server](https://akira.lynnux.xyz/support) and request to be removed from the blacklist in <#928660365825421322> or you can use \`$getServerVar[prefix]contact blacklist server {explain why you need to be removed from the blacklist}\`.]
        $else
            $color[ff3333]
            $title[Can't use this command.]
            $description[Sorry but this server is on my blacklist.]
        $endif
    $endif
    $suppressErrors[{newEmbed:{title:❌ Something went wrong!}{color:ff3333}{description:I can't change the color of that role, make sure my role is above the other role.}{image:https://cdn.lynnux.xyz/images/RolePossition-ReColor.png}}]
    $onlyIf[$guildID!=;{newEmbed:{color:ff3333}{title:❌ Something went wrong!}{description:Please use this command in a server.}}]
`})