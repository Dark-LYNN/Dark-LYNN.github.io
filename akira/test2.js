module.exports = [{
	name: "report",
	description: "Report your problem or user",
    $if: "old",
	usage: "$getServerVar[prefix]report <filter> <message>",
	code: `
	$if[$toLowercase[$message[1]]==bug]
        $if[$message[2]!=]
            $title[Thank you!]
            $description[A report under the category "\`bug\`" has been sent.
Thanks to our awesome members like you we can keep Akira "almost" bug-free.]
            $addField[Keep in mind:;Abusing this command could get you warned or even blacklisted from Akira.]
            $footer[This is your "$getGlobalUserVar[bugNR]"th bug report]
            $color[$getVar[color]]
            $setVar[bugNR;$sum[$getVar[bugNR];1]]
            $channelSendMessage[1085247933726867516;{newEmbed:{color:$getVar[color]}{title:Bug Report #$getServerVar[bugNR;738381353921544282]}{description:
Reported By <@$authorID> - \`@$userTag\` ||$authorID||
Reported On <t:$round[$divide[$djsEval[Date.now();yes];1000]]:t> - <t:$round[$divide[$djsEval[Date.now();yes];1000]]:D>}{field:Bug Explained:
$replaceText[$message;$message[1] ;;1]}}]
            $setServerVar[bugNR;$sum[$getServerVar[bugNR;738381353921544282];1];738381353921544282]
            $setGlobalUserVar[bugNR;$sum[$getGlobalUserVar[bugNR];1]]
            $globalCooldown[1m;{newEmbed:{title:❌ You're on cooldown!}{color:ff3333}{description:You're on a cooldown for another \`%time%\`.}{footer:Report has a cooldown of 1 hour.}}]
        $else
            $title[❌ Something went wrong!]
            $color[ff3333] $description[Wrong usage of the \`report bug\` command:
Try to use
\`\`\`
$getGlobalUserVar[prefix]report bug <bug>\`\`\`]
        $endif
    $else
        $if[$toLowercase[$message[1]]==user]
            $if[$findUser[$message[2]]!=$authorID]
                $if[$message[3]!=]
                    $channelSendMessage[1085269953072070686;{newEmbed:{color:$getVar[color]}{title:Bug Report #$getServerVar[bugNR;738381353921544282]}{description:
Reported By <@$authorID> - \`@$userTag\` ||$authorID||
Reported On <t:$round[$divide[$djsEval[Date.now();yes];1000]]:t> - <t:$round[$divide[$djsEval[Date.now();yes];1000]]:D>}{field:Report Explained:
$replaceText[$replaceText[$message;$message[1] ;;1];$message[2] ;;1]}}]
                    $title[User Reported!]
                    $thumbnail[$userAvatar[$findUser[$message[2]]]]
                    $color[$getVar[color]]
                    $description[A report under the category "\`user\`" has been sent.
Thanks to our awesome members like you we can keep Akira user friendly and safe for everyone.]                    
                    $addField[Keep in mind:;Abusing this command could get you warned or even blacklisted from Akira.]
                    $globalCooldown[1m;{newEmbed:{title:❌ You're on cooldown!}{color:ff3333}{description:You're on a cooldown for another \`%time%\`.}{footer:Report has a cooldown of 1 hour.}}]

                $else
                    $title[❌ Something went wrong!]
                    $color[ff3333] $description[Wrong usage of the \`report user\` command:
Try to use
\`\`\`
$getGlobalUserVar[prefix]report user <user> <reason>\`\`\`]

                $endif
            $else
                $title[❌ Something went wrong!]
                $color[ff3333] $description[Wrong usage of the \`report user\` command:
Try to use
\`\`\`
$getGlobalUserVar[prefix]report user <user> <reason>\`\`\`]$footer[You can't report yourself.]
            $endif
        $else
            $if[$toLowercase[$message[1]]==typo]
                $if[$message[2]!=]
                    $if[$message[3]!=]
                        $if[$message[4]!=]
                            $channelSendMessage[1085274969057017927;{newEmbed:{color:$getVar[color]}{title:Bug Report #$getServerVar[typoNR;738381353921544282]}{description:
Reported By <@$authorID> - \`@$userTag\` ||$authorID||
Reported On <t:$round[$divide[$djsEval[Date.now();yes];1000]]:t> - <t:$round[$divide[$djsEval[Date.now();yes];1000]]:D>
Reported command \`$message[2]\`}{field:Typo:
$replaceText[$replaceText[$message;$message[1] ;;1];$message[2] ;;1]}}]                            
                            $title[Typo Reported!]
                            $color[$getVar[color]]
                            $description[A report under the category "\`typo\`" has been sent.
Thanks to our awesome members like you we can keep Akira easy to use and understandable for everyone.] 
                            $footer[This is your "$getGlobalUserVar[typoNR]"th typo report]
                            $addField[Keep in mind:;Abusing this command could get you warned or even blacklisted from Akira.]
                            $setGlobalUserVar[typoNR;$sum[$getGlobalUserVar[typoNR];1]]
                            $setServerVar[typoNR;$sum[$getServerVar[bugNR;738381353921544282];1];738381353921544282]
                
                            $globalCooldown[1m;{newEmbed:{title:❌ You're on cooldown!}{color:ff3333}{description:You're on a cooldown for another \`%time%\`.}{footer:Report has a cooldown of 1 hour.}}]
                        $else
                            $title[❌ Something went wrong!]
                            $color[ff3333] $description[Wrong usage of the \`report typo\` command:
Try to use
\`\`\`
$getGlobalUserVar[prefix]report typo $message[2] $message[3] <Expected Content>\`\`\`]

                        $endif
                    $else
                        $title[❌ Something went wrong!]
                        $color[ff3333] $description[Wrong usage of the \`report typo\` command:
Try to use
\`\`\`
$getGlobalUserVar[prefix]report typo $message[2] <Current Content> <Expected Content>\`\`\`]

                    $endif
                $else
                    $title[❌ Something went wrong!]
                    $color[ff3333] $description[Wrong usage of the \`report typo\` command:
Try to use
\`\`\`
$getGlobalUserVar[prefix]report typo <command> <Current Content> <Expected Content>\`\`\`]
                $endif
            $else
                $if[$toLowercase[$message[1]]==server]
                    $if[$message[3]!=]
                        $if[$isNumber[$message[2]]==true]
                            $if[$serverExists[$message[2]]==true]
                                $channelSendMessage[1085289598097313845;{newEmbed:{color:$getVar[color]}{title:Server Report}{description:
Reported By <@$authorID> - \`@$userTag\` ||$authorID||
Reported On <t:$round[$divide[$djsEval[Date.now();yes];1000]]:t> - <t:$round[$divide[$djsEval[Date.now();yes];1000]]:D>
Server - $serverName[$message[2]] ||$message[2]||}{field:Reason:
                                $replaceText[$replaceText[$message;$message[1] ;;1];$message[2] ;;1]}}]                            
                                $title[Typo Reported!]
                                $color[$getVar[color]]
                                $description[A report under the category "\`typo\`" has been sent.
Thanks to our awesome members like you we can keep Akira easy to use and understandable for everyone.] 
                                $footer[This is your "$getGlobalUserVar[typoNR]"th typo report]
                            
                                $globalCooldown[1m;{newEmbed:{title:❌ You're on cooldown!}{color:ff3333}{description:You're on a cooldown for another \`%time%\`.}{footer:Report has a cooldown of 1 hour.}}]
                            $else
                                $title[❌ Something went wrong!]
                                $color[ff3333] $description[I can't find this server, this server either doesn't exist or I'm not in that server.]    
                            $endif
                        $else
                            $title[❌ Something went wrong!]
                            $color[ff3333]
                            $addField[Need help to copyIDs?; Check our [Windows/MacOS/Linux\](https://docs.lynnux.xyz/other-tutorials/findingids/windows-macos-linux) tutorials]
                            $description[I can't find \`$message[2]\` in my server lists, make sure to use an server ID]
                        $endif
                    $else
                        $title[❌ Something went wrong!]
                        $color[ff3333] $description[Wrong usage of the \`report SERVER\` command:
Try to use\`\`\`
$getGlobalUserVar[prefix]report server <serverID> <reason>\`\`\`]
                    $endif
                $else
                    $title[❌ No filter Found!]
                    $description[Please use one of the following filters#COLON#\`\`\`
$getGlobalUserVar[prefix]report user <userID> <reason>
$getGlobalUserVar[prefix]report bug <bug>
$getGlobalUserVar[prefix]report typo <command> <Current Content> <Expected Content>
$getGlobalUserVar[prefix]report server <serverID> <reason>
\`\`\`]$color[ff3333]
                $endif
            $endif
        $endif
    $endif
	
	$onlyIf[$message[1]!=;{newEmbed:{title:❌ No filter Found!}{description:Please use one of the following filters#COLON#
\`\`\`
$getGlobalUserVar[prefix]report user <userID> <reason>
$getGlobalUserVar[prefix]report bug <bug>
$getGlobalUserVar[prefix]report typo <command> <Current Content> <Expected Content>
$getGlobalUserVar[prefix]report server <serverID> <reason>
\`\`\`}{color:ff3333}}]
`}]