module.exports = [{
    name: "help",
    aliases: ['sos'],
    $if: "old",
    description: "show info about akira",
    usage: "$getServerVar[prefix]help",
    code: `
    	$color[$getServerVar[color]]
		$author[Akira's Features;$userAvatar[$clientID]]
		$description[**To check out a section or command use** \`akira help \[section / command\]\`
**If you want this command to show up in chat instead of dms add -c at the end of the command.**
{Ex. \`Akira help -c\` or \`Akira help moderation -c\`}

For arguments in commands:
\`[]\` means it's required.
\`<>\` means it's optional.
\`()\` means it's either required or not based on the usage.
**Do not actually include the [\], <> & () symbols in the command.**]
			$addField[Extra links and information:;[[Invite akira\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\] | \[[Support Server](https://discord.com/invite/TUqZTutDUz)\] | \[[Vote](https://akira.lynnux.xyz/vote)\] | \[[Website](https://akira.lynnux.xyz)\] | [Premium\]]
			$addField[:flashlight: Utility;Useful left over commands that don't fit elsewhere
**3 Commands**;yes]
			$addField[:wrench: Settings;Configure some of my settings for your server
**0 Commands** \`(soon)\`;yes]
			$addField[:mag_right: Search;Find anything and everything on the internet
**0 Commands** \`(soon)\`;yes]
			$addField[:hugging: Roleplay;Give people hugs, kisses, cuddles and way more
**0 Commands** \`(soon)\`;yes]
			$addField[:point_up_2: Reaction-Roles;Let people pick their roles from a nice and easy menu
**0 Commands** \`(soon)\`;yes]
			$addField[:frame_photo: Profile;See and manage your akira profile
**0 Commands** \`(soon)\`;yes]
			$addField[:star: Premium;Gives you all the premium commands
**0 Commands** \`(soon)\`;yes]
			$addField[:shield: Moderation;Keep your server safe with advanced moderation commands
**5 Commands**;yes]
			$addField[:up: Leveling;Reward members for talking with xp and even give roles at milestones
**0 Commands** \`(soon)\`;yes]
			$addField[:dollar: Economy;Get an economy rolling in your server work, shop, and way more
**3 Commands**;yes]
			$addField[:hammer: Automod;Automatically punish users for swearing or posting server invites
**0 Commands** \`(soon)\`;yes]
			$addField[:robot: Automation;Automatically do things, like welcomemessages and autoroles
**0 Commands** \`(soon)\`;yes]
			
			$addButton[2;Close;danger;Close;no]
			
			$addSelectMenu[1;Help;Which command category do you want to see?;1;1;no;Automation:Automatically do things, like welcomemessages etc:Automation:no:🤖;Automod:Automatically punish users:Automod:no:🔨;Economy:Get an economy rolling in your server:Economy:no:💵;Leveling:Reward members for talking:Leveling:no:🆙;Moderation:Keep your server safe:Moderation:no:🛡️;Premium:shows all the premium commands:Premium:no:⭐;Profile:See and manage your akira profile:Profile:no:📝;Reaction-Roles:Let people pick their roles:Reaction-Roles:no:☝️;Roleplay:Give people hugs, kisses and more:Roleplay:no:🤗;Search:Find anything and everything on the internet:Search:no:🔎;Settings:Configure some of my settings for your server:Settings:no:🔧;Utility:Useful left over commands:Utility:no:🔦]

		$if[$checkContains[$message;-c;-chat]!=true]
			$dm[$authorID]
		$else
		$endif
		$if[$guildID!=]
			$deletecommand
		$else
		$endif
`}, {
	name: "Close",
	type: "interaction",
    prototype: "button",
	code: `
		$deleteCommand
`},  {
	name: "Back",
	type: "interaction",
    prototype: "button",
	code: `
		$color[$getServerVar[color]]
		$author[Akira's Features;$userAvatar[$clientID]]
		$description[**To check out a section or command use** \`akira help \[section / command\]\`
**If you want this command to show up in chat instead of dms add -c at the end of the command.**
{Ex. \`Akira help -c\` or \`Akira help moderation -c\`}

For arguments in commands:
\`[]\` means it's required.
\`<>\` means it's optional.
\`()\` means it's either required or not based on the usage.
**Do not actually include the [\], <> & () symbols in the command.**]
			$addField[Extra links and information:;[[Invite akira\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\] | \[[Support Server](https://discord.com/invite/TUqZTutDUz)\] | \[[Vote](https://akira.lynnux.xyz/vote)\] | \[[Website](https://akira.lynnux.xyz)\] | [Premium\]]
			$addField[:flashlight: Utility;Useful left over commands that don't fit elsewhere
**3 Commands**;yes]
			$addField[:wrench: Settings;Configure some of my settings for your server
**0 Commands** \`(soon)\`;yes]
			$addField[:mag_right: Search;Find anything and everything on the internet
**0 Commands** \`(soon)\`;yes]
			$addField[:hugging: Roleplay;Give people hugs, kisses, cuddles and way more
**0 Commands** \`(soon)\`;yes]
			$addField[:point_up_2: Reaction-Roles;Let people pick their roles from a nice and easy menu
**0 Commands** \`(soon)\`;yes]
			$addField[:frame_photo: Profile;See and manage your akira profile
**0 Commands** \`(soon)\`;yes]
			$addField[:star: Premium;Gives you all the premium commands
**0 Commands** \`(soon)\`;yes]
			$addField[:shield: Moderation;Keep your server safe with advanced moderation commands
**5 Commands**;yes]
			$addField[:up: Leveling;Reward members for talking with xp and even give roles at milestones
**0 Commands** \`(soon)\`;yes]
			$addField[:dollar: Economy;Get an economy rolling in your server work, shop, and way more
**3 Commands**;yes]
			$addField[:hammer: Automod;Automatically punish users for swearing or posting server invites
**0 Commands** \`(soon)\`;yes]
			$addField[:robot: Automation;Automatically do things, like welcomemessages and autoroles
**0 Commands** \`(soon)\`;yes]
			
			$addButton[2;Close;danger;Close;no]
			
			$addSelectMenu[1;Help;Which command category do you want to see?;1;1;no;Automation:Automatically do things, like welcomemessages etc:Automation:no:🤖;Automod:Automatically punish users:Automod:no:🔨;Economy:Get an economy rolling in your server:Economy:no:💵;Leveling:Reward members for talking:Leveling:no:🆙;Moderation:Keep your server safe:Moderation:no:🛡️;Premium:shows all the premium commands:Premium:no:⭐;Profile:See and manage your akira profile:Profile:no:📝;Reaction-Roles:Let people pick their roles:Reaction-Roles:no:☝️;Roleplay:Give people hugs, kisses and more:Roleplay:no:🤗;Search:Find anything and everything on the internet:Search:no:🔎;Settings:Configure some of my settings for your server:Settings:no:🔧;Utility:Useful left over commands:Utility:no:🔦]
		$deletecommand
`}, {
	name: "Help",
	type: "interaction",
    prototype: "selectMenu",
	code: `
		$interactionUpdate[;{newEmbed:{author:Akira's Features:$userAvatar[$clientID]}{description:**To check out a section or command use** \`akira help \[section / command\]\`
**If you want this command to show up in chat instead of dms add -c at the end of the command.**
(Ex. \`Akira help -c\` or \`Akira help moderation -c\`)

For arguments in commands:
\`[]\` means it's required.
\`<>\` means it's optional.
\`()\` means it's either required or not based on the usage.
**Do not actually include the [\], <> & () symbols in the command.**
~~-------------------------------------------------------------------------------------~~}
{footer:Use "akira command <command>" for more info}
{color:$getServerVar[color]}
{field:Extra links and information:\[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server](https://discord.com/invite/TUqZTutDUz)\] | \[[Vote](https://akira.lynnux.xyz/vote)\] | \[[Website\\](https://akira.lynnux.xyz)\] | [Premium\]:no}}
;{actionRow:{button:Back:secondary:Back:no}{button:Close:danger:Close:no}}

]
        $onlyIf[$interactionData[values[0]]==Automation;]

`}, {
	name: "Help",
	type: "interaction",
    prototype: "selectMenu",
	code: `
		$interactionUpdate[;{newEmbed:{author:Akira's Features:$userAvatar[$clientID]}{description:**To check out a section or command use** \`akira help \[section / command\]\`
**If you want this command to show up in chat instead of dms add -c at the end of the command.**
(Ex. \`Akira help -c\` or \`Akira help moderation -c\`)

For arguments in commands:
\`[]\` means it's required.
\`<>\` means it's optional.
\`()\` means it's either required or not based on the usage.
**Do not actually include the [\], <> & () symbols in the command.**
~~-------------------------------------------------------------------------------------~~}
{footer:Use "akira command <command>" for more info}
{color:$getServerVar[color]}
{field:Extra links and information:\[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server](https://discord.com/invite/TUqZTutDUz)\] | \[[Vote](https://akira.lynnux.xyz/vote)\] | \[[Website\\](https://akira.lynnux.xyz)\] | [Premium\]:no}}
;{actionRow:{button:Back:secondary:Back:no}{button:Close:danger:Close:no}}

]
        $onlyIf[$interactionData[values[0]]==Automod;]

`}, {
	name: "Help",
	type: "interaction",
    prototype: "selectMenu",
	code: `
		$interactionUpdate[;{newEmbed:{author:Akira's Features:$userAvatar[$clientID]}{description:**To check out a section or command use** \`akira help \[section / command\]\`
**If you want this command to show up in chat instead of dms add -c at the end of the command.**
(Ex. \`Akira help -c\` or \`Akira help moderation -c\`)

For arguments in commands:
\`[]\` means it's required.
\`<>\` means it's optional.
\`()\` means it's either required or not based on the usage.
**Do not actually include the [\], <> & () symbols in the command.**
~~-------------------------------------------------------------------------------------~~}
{footer:Use "akira command <command>" for more info}
{color:$getServerVar[color]}
{field:akira balance:Check how much money you have in the server:no}
{field:akira deposit:Deposit some money to your bank account:no}
{field:akira withdraw:Withdraw some money from your bank account:no}
{field:Extra links and information:\[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server](https://discord.com/invite/TUqZTutDUz)\] | \[[Vote](https://akira.lynnux.xyz/vote)\] | \[[Website\\](https://akira.lynnux.xyz)\] | [Premium\]:no}}
;{actionRow:{button:Back:secondary:Back:no}{button:Close:danger:Close:no}}

]
        $onlyIf[$interactionData[values[0]]==Economy;]

`}, {
	name: "Help",
	type: "interaction",
    prototype: "selectMenu",
	code: `
		$interactionUpdate[;{newEmbed:{author:Akira's Features:$userAvatar[$clientID]}{description:**To check out a section or command use** \`akira help \[section / command\]\`
**If you want this command to show up in chat instead of dms add -c at the end of the command.**
(Ex. \`Akira help -c\` or \`Akira help moderation -c\`)

For arguments in commands:
\`[]\` means it's required.
\`<>\` means it's optional.
\`()\` means it's either required or not based on the usage.
**Do not actually include the [\], <> & () symbols in the command.**
~~-------------------------------------------------------------------------------------~~}
{footer:Use "akira command <command>" for more info}
{color:$getServerVar[color]}
{field:Extra links and information:\[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server](https://discord.com/invite/TUqZTutDUz)\] | \[[Vote](https://akira.lynnux.xyz/vote)\] | \[[Website\\](https://akira.lynnux.xyz)\] | [Premium\]:no}}
;{actionRow:{button:Back:secondary:Back:no}{button:Close:danger:Close:no}}

]
        $onlyIf[$interactionData[values[0]]==Leveling;]

`}, {
	name: "Help",
	type: "interaction",
    prototype: "selectMenu",
	code: `
		$interactionUpdate[;{newEmbed:{author:Akira's Features:$userAvatar[$clientID]}{description:**To check out a section or command use** \`akira help \[section / command\]\`
**If you want this command to show up in chat instead of dms add -c at the end of the command.**
(Ex. \`Akira help -c\` or \`Akira help moderation -c\`)

For arguments in commands:
\`[]\` means it's required.
\`<>\` means it's optional.
\`()\` means it's either required or not based on the usage.
**Do not actually include the [\], <> & () symbols in the command.**
~~-------------------------------------------------------------------------------------~~}{footer:Use "akira command <command>" for more info}{color:$getServerVar[color]}
{field:akira ban:ban's the user with the given reason.:no}
{field:akira clean:Quickly delete multiple messages from a channel.:no}
{field:akira giverole:Quickly assign a role to a member.:no}
{field:akira kick:Kicks the given member from the server.:no}
{field:akira prefix:Changes Akira's command prefix.:no}
{field:Extra links and information:\[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server](https://discord.com/invite/TUqZTutDUz)\] | \[[Vote](https://akira.lynnux.xyz/vote)\] | \[[Website\\](https://akira.lynnux.xyz)\] | [Premium\]:no}}
{actionRow:{button:Back:secondary:Back:no}
{button:Close:danger:Close:no}}

]
        $onlyIf[$interactionData[values[0]]==Moderation;]

`}, {
	name: "Help",
	type: "interaction",
    prototype: "selectMenu",
	code: `
		$interactionUpdate[;{newEmbed:{author:Akira's Features:$userAvatar[$clientID]}{description:**To check out a section or command use** \`akira help \[section / command\]\`
**If you want this command to show up in chat instead of dms add -c at the end of the command.**
(Ex. \`Akira help -c\` or \`Akira help moderation -c\`)

For arguments in commands:
\`[]\` means it's required.
\`<>\` means it's optional.
\`()\` means it's either required or not based on the usage.
**Do not actually include the [\], <> & () symbols in the command.**
~~-------------------------------------------------------------------------------------~~}
{footer:Use "akira command <command>" for more info}
{color:$getServerVar[color]}
{field:akira balance:Check how much money you have in the server:no}
{field:akira deposit:Deposit some money to your bank account:no}
{field:akira withdraw:Withdraw some money from your bank account:no}
{field:Extra links and information:\[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server](https://discord.com/invite/TUqZTutDUz)\] | \[[Vote](https://akira.lynnux.xyz/vote)\] | \[[Website\\](https://akira.lynnux.xyz)\] | [Premium\]:no}}
;{actionRow:{button:Back:secondary:Back:no}{button:Close:danger:Close:no}}

]
        $onlyIf[$interactionData[values[0]]==Premium;]

`}, {
	name: "Help",
	type: "interaction",
    prototype: "selectMenu",
	code: `
		$interactionUpdate[;{newEmbed:{author:Akira's Features:$userAvatar[$clientID]}{description:**To check out a section or command use** \`akira help \[section / command\]\`
**If you want this command to show up in chat instead of dms add -c at the end of the command.**
(Ex. \`Akira help -c\` or \`Akira help moderation -c\`)

For arguments in commands:
\`[]\` means it's required.
\`<>\` means it's optional.
\`()\` means it's either required or not based on the usage.
**Do not actually include the [\], <> & () symbols in the command.**
~~-------------------------------------------------------------------------------------~~}
{footer:Use "akira command <command>" for more info}
{color:$getServerVar[color]}
{field:akira balance:Check how much money you have in the server:no}
{field:akira deposit:Deposit some money to your bank account:no}
{field:akira withdraw:Withdraw some money from your bank account:no}
{field:Extra links and information:\[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server](https://discord.com/invite/TUqZTutDUz)\] | \[[Vote](https://akira.lynnux.xyz/vote)\] | \[[Website\\](https://akira.lynnux.xyz)\] | [Premium\]:no}}
;{actionRow:{button:Back:secondary:Back:no}{button:Close:danger:Close:no}}

]
        $onlyIf[$interactionData[values[0]]==Profile;]

`}, {
	name: "Help",
	type: "interaction",
    prototype: "selectMenu",
	code: `
		$interactionUpdate[;{newEmbed:{author:Akira's Features:$userAvatar[$clientID]}{description:**To check out a section or command use** \`akira help \[section / command\]\`
**If you want this command to show up in chat instead of dms add -c at the end of the command.**
(Ex. \`Akira help -c\` or \`Akira help moderation -c\`)

For arguments in commands:
\`[]\` means it's required.
\`<>\` means it's optional.
\`()\` means it's either required or not based on the usage.
**Do not actually include the [\], <> & () symbols in the command.**
~~-------------------------------------------------------------------------------------~~}
{footer:Use "akira command <command>" for more info}
{color:$getServerVar[color]}
{field:akira balance:Check how much money you have in the server:no}
{field:akira deposit:Deposit some money to your bank account:no}
{field:akira withdraw:Withdraw some money from your bank account:no}
{field:Extra links and information:\[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server](https://discord.com/invite/TUqZTutDUz)\] | \[[Vote](https://akira.lynnux.xyz/vote)\] | \[[Website\\](https://akira.lynnux.xyz)\] | [Premium\]:no}}
;{actionRow:{button:Back:secondary:Back:no}{button:Close:danger:Close:no}}

]
        $onlyIf[$interactionData[values[0]]==Reaction-Roles;]

`}, {
	name: "Help",
	type: "interaction",
    prototype: "selectMenu",
	code: `
		$interactionUpdate[;{newEmbed:{author:Akira's Features:$userAvatar[$clientID]}{description:**To check out a section or command use** \`akira help \[section / command\]\`
**If you want this command to show up in chat instead of dms add -c at the end of the command.**
(Ex. \`Akira help -c\` or \`Akira help moderation -c\`)

For arguments in commands:
\`[]\` means it's required.
\`<>\` means it's optional.
\`()\` means it's either required or not based on the usage.
**Do not actually include the [\], <> & () symbols in the command.**
~~-------------------------------------------------------------------------------------~~}
{footer:Use "akira command <command>" for more info}
{color:$getServerVar[color]}
{field:akira balance:Check how much money you have in the server:no}
{field:akira deposit:Deposit some money to your bank account:no}
{field:akira withdraw:Withdraw some money from your bank account:no}
{field:Extra links and information:\[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server](https://discord.com/invite/TUqZTutDUz)\] | \[[Vote](https://akira.lynnux.xyz/vote)\] | \[[Website\\](https://akira.lynnux.xyz)\] | [Premium\]:no}}
;{actionRow:{button:Back:secondary:Back:no}{button:Close:danger:Close:no}}

]
        $onlyIf[$interactionData[values[0]]==Roleplay;]

`}, {
	name: "Help",
	type: "interaction",
    prototype: "selectMenu",
	code: `
		$interactionUpdate[;{newEmbed:{author:Akira's Features:$userAvatar[$clientID]}{description:**To check out a section or command use** \`akira help \[section / command\]\`
**If you want this command to show up in chat instead of dms add -c at the end of the command.**
(Ex. \`Akira help -c\` or \`Akira help moderation -c\`)

For arguments in commands:
\`[]\` means it's required.
\`<>\` means it's optional.
\`()\` means it's either required or not based on the usage.
**Do not actually include the [\], <> & () symbols in the command.**
~~-------------------------------------------------------------------------------------~~}
{footer:Use "akira command <command>" for more info}
{color:$getServerVar[color]}
{field:akira balance:Check how much money you have in the server:no}
{field:akira deposit:Deposit some money to your bank account:no}
{field:akira withdraw:Withdraw some money from your bank account:no}
{field:Extra links and information:\[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server](https://discord.com/invite/TUqZTutDUz)\] | \[[Vote](https://akira.lynnux.xyz/vote)\] | \[[Website\\](https://akira.lynnux.xyz)\] | [Premium\]:no}}
;{actionRow:{button:Back:secondary:Back:no}{button:Close:danger:Close:no}}

]
        $onlyIf[$interactionData[values[0]]==Search;]

`}, {
	name: "Help",
	type: "interaction",
    prototype: "selectMenu",
	code: `
		$interactionUpdate[;{newEmbed:{author:Akira's Features:$userAvatar[$clientID]}{description:**To check out a section or command use** \`akira help \[section / command\]\`
**If you want this command to show up in chat instead of dms add -c at the end of the command.**
(Ex. \`Akira help -c\` or \`Akira help moderation -c\`)

For arguments in commands:
\`[]\` means it's required.
\`<>\` means it's optional.
\`()\` means it's either required or not based on the usage.
**Do not actually include the [\], <> & () symbols in the command.**
~~-------------------------------------------------------------------------------------~~}
{footer:Use "akira command <command>" for more info}
{color:$getServerVar[color]}
{field:akira balance:Check how much money you have in the server:no}
{field:akira deposit:Deposit some money to your bank account:no}
{field:akira withdraw:Withdraw some money from your bank account:no}
{field:Extra links and information:\[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server](https://discord.com/invite/TUqZTutDUz)\] | \[[Vote](https://akira.lynnux.xyz/vote)\] | \[[Website\\](https://akira.lynnux.xyz)\] | [Premium\]:no}}
;{actionRow:{button:Back:secondary:Back:no}{button:Close:danger:Close:no}}

]
        $onlyIf[$interactionData[values[0]]==Settings;]

`}, {
	name: "Help",
	type: "interaction",
    prototype: "selectMenu",
	code: `
		$interactionUpdate[;{newEmbed:{author:Akira's Features:$userAvatar[$clientID]}{description:**To check out a section or command use** \`akira help \[section / command\]\`
**If you want this command to show up in chat instead of dms add -c at the end of the command.**
(Ex. \`Akira help -c\` or \`Akira help moderation -c\`)

For arguments in commands:
\`[]\` means it's required.
\`<>\` means it's optional.
\`()\` means it's either required or not based on the usage.
**Do not actually include the [\], <> & () symbols in the command.**
~~-------------------------------------------------------------------------------------~~}
{footer:Use "akira command <command>" for more info}
{color:$getServerVar[color]}
{field:akira about:show info about akira:no}
{field:akira userinfo:show info about a user:no}
{field:akira serverinfo:show info about the current server:no}
{field:akira settings:Show your personal and server settings:no}
{field:akira prefix:change your personal or server prefix:no}
{field:Extra links and information:\[[Invite akira\\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\\] | \[[Support Server](https://discord.com/invite/TUqZTutDUz)\] | \[[Vote](https://akira.lynnux.xyz/vote)\] | \[[Website\\](https://akira.lynnux.xyz)\] | [Premium\]:no}}
;{actionRow:{button:Back:secondary:Back:no}{button:Close:danger:Close:no}}

]
        $onlyIf[$interactionData[values[0]]==Utility;]

`}]