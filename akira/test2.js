module.exports = [{
	name: "report",
	description: "Report your problem or user",
    $if: "old",
	usage: "$getServerVar[prefix]report <filter> <message>",
	code: `
	$if[$toLowercase[$message[1]]==bug]
        $if[$message[2]!=]
            $title[Thank you!]
            $description[A report under the category "\`bug\`" has been send.
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
            $globalCooldown[1m;{newEmbed:{title:❌ Your on cooldown!}{color:ff3333}{description:Your on a cooldown for another \`%time%\`.}{footer:Report has a cooldown of 1 hour.}}]
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
                    $description[A report under the category "\`user\`" has been send.
Thanks to our awesome members like you we can keep Akira user friendly and safe for everyone.]                    
                    $addField[Keep in mind:;Abusing this command could get you warned or even blacklisted from Akira.]
                    $globalCooldown[1m;{newEmbed:{title:❌ Your on cooldown!}{color:ff3333}{description:Your on a cooldown for another \`%time%\`.}{footer:Report has a cooldown of 1 hour.}}]

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
                            $description[A report under the category "\`typo\`" has been send.
Thanks to our awesome members like you we can keep Akira easy to use and understandable for everyone.] 
                            $footer[This is your "$getGlobalUserVar[typoNR]"th typo report]
                            $addField[Keep in mind:;Abusing this command could get you warned or even blacklisted from Akira.]
                            $setGlobalUserVar[typoNR;$sum[$getGlobalUserVar[typoNR];1]]
                            $setServerVar[typoNR;$sum[$getServerVar[bugNR;738381353921544282];1];738381353921544282]
                
                            $globalCooldown[1m;{newEmbed:{title:❌ Your on cooldown!}{color:ff3333}{description:Your on a cooldown for another \`%time%\`.}{footer:Report has a cooldown of 1 hour.}}]
                        $else
                            $title[❌ Something went wrong!]
                            $color[ff3333] $description[Wrong usage of the \`report typo\` command:
Try to use
\`\`\`
$getGlobalUserVar[prefix]report typo $message[2] $message[3] <Exected Content>\`\`\`]

                        $endif
                    $else
                        $title[❌ Something went wrong!]
                        $color[ff3333] $description[Wrong usage of the \`report typo\` command:
Try to use
\`\`\`
$getGlobalUserVar[prefix]report typo $message[2] <Current Content> <Exected Content>\`\`\`]

                    $endif
                $else
                    $title[❌ Something went wrong!]
                    $color[ff3333] $description[Wrong usage of the \`report typo\` command:
Try to use
\`\`\`
$getGlobalUserVar[prefix]report typo <command> <Current Content> <Exected Content>\`\`\`]
                $endif
            $else
                $if[$toLowercase[$message[1]]==server]
                    $if[$isNumber[$message[2]]==true]
                        $if[]
                    $else
                    $endif
                $else
                $endif
            $endif
        $endif
    $endif
	
	$onlyIf[$message[1]!=;{newEmbed:{title:❌ No filter Found!}{description:Please use one of the following filters#COLON#
\`\`\`
$getGlobalUserVar[prefix]report user <userID> <reason>
$getGlobalUserVar[prefix]report bug <bug>
$getGlobalUserVar[prefix]report typo <command> <Current Content> <Exected Content>
$getGlobalUserVar[prefix]report server <serverID> <reason>
\`\`\`}{color:ff3333}}]
`}]