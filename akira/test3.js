module.exports = ({
    name: "clean",
    aliases: ['clear'],
    description: "Quickly delete multiple messages from a channel.",
    $if: "old",
    usage: "$getServerVar[prefix]clean {channel} <Filter>",
    code: `
    $if[$getServerVar[moderation]==enabled]
        $if[$getServerVar[clean]==enabled]
            $if[$getChannelVar[ignored]==false]
                $if[$checkContains[$userPerms;administrator;managemessages]==true]
                    $if[$message[1]==]
                        $color[ff3333]
                        $title[❌ No filter Found!;https://docs.lynnux.xyz/commands/moderation/clean]
                        $description[No filter given, please use one of the following filters:
\`\`\`
user <member>
bots
akira
me\`\`\`]
                    $else
                        $if[$toLowercase[$message[1]]==user]
                            $if[$findServerChannel[$message[3]]==$channelID]
                                $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                    $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:$getServerVar[color]}{title:Messages Cleared}{footer:Removed by @$userTag}{description:A total of \`$splitText[1]\` messages have been removed from <@$splitText[2]> in <#$findServerChannel[$message[3]]>.}}]
                                $else
                                $endif
                                $title[Messages Cleared]
                                $color[$getServerVar[color]]
                                $description[A total of \`$splitText[1]\` messages have been removed from <@$splitText[2]>.]
                                $footer[Removed by @$userTag]
                                $textSplit[$clear[100000;$findUser[$message[2]];yes;$channelID]-=OwO=-$findUser[$message[2]];-=OwO=-]
                            $else
                                $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                    $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:$getServerVar[color]}{title:Messages Cleared}{footer:Removed by @$userTag}{description:A total of \`$splitText[1]\` messages have been removed from <@$splitText[2]> in <#$findServerChannel[$message[3]]>.}}]
                                $else
                                $endif
                                $title[Messages Cleared]
                                $color[$getServerVar[color]]
                                $description[A total of \`$splitText[1]\` messages have been removed from <@$splitText[2]> in <#$findServerChannel[$message[3]]>.]
                                $footer[Removed by @$userTag]
                                $textSplit[$clear[100000;$findUser[$message[2]];yes;$findServerChannel[$message[3]]]-=OwO=-$findUser[$message[2]];-=OwO=-]
                            $endif
                        $else
                            $if[$toLowercase[$message[1]]==bots]
                                $if[$findServerChannel[$message[2]]==$channelID]
                                    $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                        $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:$getServerVar[color]}{title:Messages Cleared}{footer:Removed by @$userTag}{description:A total of \`$splitText[1]\` messages have been removed from bots in <@$splitText[2]>.}}]
                                    $else
                                    $endif
                                    $title[Messages Cleared]
                                    $color[$getServerVar[color]]
                                    $description[A total of \`$splitText[1]\` messages have been removed from bots in <#$channelID>.]
                                    $footer[Removed by @$userTag]
                                    $textSplit[$clear[100000;bot;yes;$channelID]-=OwO=-$authorID;-=OwO=-]
                                $else
                                    $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                        $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:$getServerVar[color]}{title:Messages Cleared}{footer:Removed by @$userTag}{description:A total of \`$splitText[1]\` messages have been removed from bots in <@$splitText[2]>.}}]
                                    $else
                                    $endif
                                    $title[Messages Cleared]
                                    $color[$getServerVar[color]]
                                    $description[A total of \`$splitText[1]\` messages have been removed from bots in <#$findServerChannel[$message[2]]>.]
                                    $footer[Removed by @$userTag]
                                    $textSplit[$clear[100000;bot;yes;$findServerChannel[$message[2]]]-=OwO=-$authorID;-=OwO=-]
                                $endif
                            $else
                                $if[$toLowercase[$message[1]]==akira]
                                    $if[$findServerChannel[$message[2]]==$channelID]
                                        $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                            $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:$getServerVar[color]}{title:Messages Cleared}{footer:Removed by @$userTag}{description:A total of \`$splitText[1]\` messages have been removed from <@$splitText[2]>.}}]
                                        $else
                                        $endif
                                        $title[Messages Cleared]
                                        $color[$getServerVar[color]]
                                        $description[A total of \`$splitText[1]\` messages have been removed from <@$clientID> in <#$channelID>.]
                                        $footer[Removed by @$userTag]
                                        $textSplit[$clear[100000;$clientID;yes;$channelID]-=OwO=-$authorID;-=OwO=-]
                                    $else
                                        $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                            $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:$getServerVar[color]}{title:Messages Cleared}{footer:Removed by @$userTag}{description:A total of \`$splitText[1]\` messages have been removed from <@$splitText[2]>.}}]
                                        $else
                                        $endif
                                        $title[Messages Cleared]
                                        $color[$getServerVar[color]]
                                        $description[A total of \`$splitText[1]\` messages have been removed from <@$clientID> in <#$findServerChannel[$message[2]]>.]
                                        $footer[Removed by @$userTag]
                                        $textSplit[$clear[100000;$clientID;yes;$findServerChannel[$message[2]]]-=OwO=-$authorID;-=OwO=-]
                                    $endif
                                $else
                                    $if[$toLowercase[$message[1]]==me]
                                        $if[$findServerChannel[$message[2]]==$channelID]
                                            $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                                $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:$getServerVar[color]}{title:Messages Cleared}{footer:Removed by @$userTag}{description:A total of \`$splitText[1]\` messages have been removed from <@$splitText[2]> in <#$channelID>.}}]
                                            $else
                                            $endif
                                            $title[Messages Cleared]
                                            $color[$getServerVar[color]]
                                            $description[A total of \`$splitText[1]\` messages have been removed from <@$authorID> in <#$channelID>.]
                                            $footer[Removed by @$userTag]
                                            $textSplit[$clear[100000;$authorID;yes;$channelID]-=OwO=-$authorID;-=OwO=-]
                                        $else
                                            $if[$getServerVar[botLogChannel]!=1083095711094149180]
                                                $channelSendMessage[$getServerVar[botLogChannel];{newEmbed:{color:$getServerVar[color]}{title:Messages Cleared}{footer:Removed by @$userTag}{description:A total of \`$splitText[1]\` messages have been removed from <@$splitText[2]> in <#$findServerChannel[$message[2]]>.}}]
                                            $else
                                            $endif
                                            $title[Messages Cleared]
                                            $color[$getServerVar[color]]
                                            $description[A total of \`$splitText[1]\` messages have been removed from <@$authorID> in <#$findServerChannel[$message[2]]>.]
                                            $footer[Removed by @$userTag]
                                            $textSplit[$clear[100000;$authorID;yes;$findServerChannel[$message[2]]]-=OwO=-$authorID;-=OwO=-]
                                        $endif
                                    $else
                                        $color[ff3333]
                                        $title[❌ No filter Found!;https://docs.lynnux.xyz/commands/moderation/clean]
                                        $description[No filter found, please use one of the following filters:
\`\`\`
user <member>
bots
akira
me\`\`\`]
            
                                    $endif
                                $endif
                            $endif
                        $endif
                    $endif
                $else
                    $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ No permissions!}{description:You do not have the right permissions to use this command.}{footer:Required permission - ManageMessages/Admin}}]
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
            $if[$checkContains[$userPerms;kickmember;administrator]==true]
                $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Command Disabled!}{description:An admin of this server chose to disable the \`Clean\` command.
You can re-enable it by using:
\`\`\`
a.enable clean
\`\`\`}}]
            $else
                $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Command Disabled!}{description:An admin of this server chose to disable the \`Clean\` command.}}]
            $endif
        $endif
    $else
        $if[$checkContains[$userPerms;kickmember;administrator]==true]
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