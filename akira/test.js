module.exports = ({
    name: "giverole",
    description: "Quickly assign a role to a member.",
    $if: "old",
    usage: "$getServerVar[prefix]giverole <user> <role> {reason}",
    code: `
    $if[$getServerVar[moderation]==enabled]
        $if[$getServerVar[giverole]==enabled]
            $if[$getChannelVar[ignored]==false]
                $if[$checkContains[$userPerms[$authorID];manageroles;admin]==true]
                    $if[$message!=]
                        $if[$findRole[$message[2]]!=]
                            $if[$message[3]==]
                                $color[$getVar[color]]
                                $title[Role given]
                                $if[$serverIcon==]
                                    $thumbnail[]
                                $else
                                    $thumbnail[$serverIcon]
                                $endif
                            $else
                                no reason given 
                            $endif
                        $else
                            $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Wrong usage!}{description:Wrong usage of the command \`giverole\`,
Try to use
\`\`\`
a.giverole $message[1] <role> {reason}
\`\`\`}}]   
                        $endif
                    $else
                        $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Wrong usage!}{description:Wrong usage of the command \`giverole\`,
Try to use
\`\`\`
a.giverole <user> <role> {reason}
\`\`\`}}]                    
                    $endif
                $else
                    $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ No permissions!}{description:You do not have the right permission to use this command}{footer:Required permission = ManageRoles / Admin}}]
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
                $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Module Disabled!}{description:An admin of this server chose to disable the \`giverole\` command.
You can re-enable it by using:
\`\`\`
a.enable giverole
\`\`\`}}]
            $else
                $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Module Disabled!}{description:An admin of this server chose to disable the \`giverole\` command.}}]
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
