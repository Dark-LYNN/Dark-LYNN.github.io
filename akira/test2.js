module.exports = [{
	name: "nuke",
	description: "nuke a channel",
    $if: "old",
	usage: "$getServerVar[prefix]nuke <channel> {reason}",
	code: `
        $if[$getServerVar[moderation]==enabled]
            $if[$getServerVar[nuke]==enabled]
                $if[$getChannelVar[ignored]==false]
                    $if[$checkContains[$userPerms;administrator]==true]
                        $if[$message[1]!=]
                            $if[$serverChannelExists[$findServerChannel[$message[1];false];$guildID]==true]
                                $deleteChannels[$findServerChannel[$message[1];false]]

                                $color[$getServerVar[color]]
                                $title[Channel Nuked]
                                $description[The channel \`#$channelName[$findServerChannel[$message[1];false];$guildID]\` has been nuked.]
                                $footer[Nuked by @$usertag]

                                $textSplit[$cloneChannel[$findServerChannel[$message[1];false];$channelName[$findServerChannel[$message[1];false]];true]==OwO==;==OwO==]

                            $else
                                $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ No channel found!}{description:I couldn't find the channel \`$message[1]\`.}{footer:Using ID's could help.}}]
                            $endif
                        $else
                            $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Something went wrong!}{description:Wrong usage of the command \`nuke\`.
Please use\`\`\`
$getServerVar[prefix]nuke <channel> #RIGHT_BRACKET#reason#LEFT_BRACKET#\`\`\`}}]
                        $endif
                    $else
                        $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ No permissions!}{description:You do not have the right permissions to use this command.}{footer:Required permission - Admin}}]
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
                    $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Command Disabled!}{description:An admin of this server chose to disable the \`nuke\` command.
You can re-enable it by using:
\`\`\`
a.enable nuke
\`\`\`}}]
                $else
                    $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Command Disabled!}{description:An admin of this server chose to disable the \`nuke\` command.}}]
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

        $onlyIf[$guildID!=;{newEmbed:{color:ff3333}{title:❌ Something went wrong!}{description:Please use this command in a server.}}]
`}]