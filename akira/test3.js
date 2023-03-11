module.exports = ({
    name: "commandinfo",
    aliases: ['command-info','command'],
    $if: "old",
    description: "show info about akira",
    usage: "$getServerVar[prefix]commandinfo",
    code: `
        $title[Commandinfo: "$message[1]"]
        $color[$getServerVar[color]]
        $if[$checkContains[$toLowerCase[$message[1]];about;ping]==true]
        $description[**Command:** \`about\`
**Aliases:** [\`ping\`\] 
**description:**  \`Check the details about akira like latancy etc\`
**Usage:** \`akira about\`

**Example:**
\`\`\`
akira about
\`\`\`
**Module\:** \`Utility\`
]
        $else
            $if[$checkContains[$toLowerCase[$message[1]];whois;who-is;user;userinfo;user-info]==true]
            $description[**Command:** \`userinfo\`
**Aliases:** [\`user-info\`,\`user\`,\`whois\`,\`who-is\`\] 
**Description:**  \`Check the details about a user\`
**Usage:** \`akira userinfo [user]\`

**Example:**
\`\`\`
akira userinfo @Dark-LYNN#6568
akira userinfo 705306248538488947
\`\`\`
**Module\:** \`Utility\`
]		
            $else
                $if[$checkContains[$toLowerCase[$message[1]];commandinfo;command-info;command]==true]
                    $description[**Command:** \`commandinfo\`
**Aliases:** [\`command-info\`,\`command\`\] 
**Description:**  \`Check the details about a user\`
**Usage:** \`akira commandinfo [command]\`

**Example:**
\`\`\`
akira commandinfo ping
\`\`\`
**Module\:** \`Help\`
]		
                $else
                    $if[$checkContains[$toLowerCase[$message[1]];balance;bal;money;wallet]==true]
                    $description[**Command:** \`balance\`
**Aliases:** [\`bal\`,\`money\`,\`wallet\`\] 
**Description:**  \`Check how much money is in your wallet and in your bank.\`
**Usage:** \`akira balance <user>\`

**Example:**
\`\`\`
akira balance
akira balance @Dark-LYNN#6568
\`\`\`
**Module\:** \`Economy\`
]		
                    $else
                        $if[$checkContains[$toLowerCase[$message[1]];deposit;dep]==true]
                        $description[**Command:** \`deposit\`
**Aliases:** [\`dep\`\] 
**Description:**  \`Deposit money from your wallet to your bank.\`
**Usage:** \`akira deposit [amount]\`

**Example:**
\`\`\`
akira deposit 100
\`\`\`
**Module\:** \`Economy\`
]
                        $else
                            $if[$checkContains[$toLowerCase[$message[1]];withdraw;with]==true]
                            $description[**Command:** \`withdraw\`
**Aliases:** [\`with\`\] 
**Description:**  \`Withdraw money from your bank to your wallet.\`
**Usage:** \`akira withdraw [amount]\`

**Example:**
\`\`\`
akira withdraw 100
\`\`\`
**Module\:** \`Economy\`
]
                            $else
                                $if[$checkContains[$toLowerCase[$message[1]];eval;ev;djs]==true]
                                $description[**Command:** \`eval\`
**Aliases:** [\`ev\`,\`djs\`\] 
**Description:**  \`Run a d.js/javascript code.\`
**Usage:** \`akira eval [code]\`

**Example:**
\`\`\`
akira eval message.channel.send('hello world')
\`\`\`
**Module\:** \`Dev\`
]
                                $else
                                    $if[$checkContains[$toLowerCase[$message[1]];serverinfo;server-info;server;guildinfo;guild-info;guild]==true]
                                        $description[**Command:** \`ServerInfo\`
**Aliases:** [\`server-info\`,\`server\`,\`guildinfo\`,\`guild-info\`,\`guild\`\] 
**Description:**  \`show info about the current server.\`
**Usage:** \`akira serverinfo\`

**Example:**
\`\`\`
akira serverinfo
\`\`\`
**Module\:** \`Utility\`
]
                                    $else
                                        $if[$checkContains[$toLowerCase[$message[1]];settings;setting]==true]
                                            $description[**Command:** \`Settings\`
**Aliases:** [\`setting\`\] 
**Description:**  \`See your settings.\`
**Usage:** \`akira settings\`

**Example:**
\`\`\`
akira settings
\`\`\`
**Note:** 
\`\`\`
to see the server setting you need "Admin" permission in discord or the "server-settings" permission in akira {akira perms add server-settings} 
\`\`\`

**Module\:** \`Utility\`
]
                                        $else
                                            $if[$checkContains[$toLowerCase[$message[1]];prefix;setprefix;set-prefix]==true]
                                                $description[**Command:** \`prefix\`
**Aliases:** [\`setprefix\`,\`set-prefix\`\] 
**Description:**  \`Change your own or the server prefix.\`
**Usage:** \`akira prefix [newPrefix\] <user/server>\`

**Example:**
\`\`\`
akira prefix ! user
akira prefix ?
\`\`\`

**Module\:** \`Utility\`]
                                            $else
                                                $if[$checkContains[$toLowerCase[$message[1]];ban]==true]
                                                    $description[**Command:** \`ban\`
**Aliases:** [\`None\`\] 
**Description:**  \`bans the user with the given reason.\`
**Usage:** \`akira ban <user> {reason}\`
**Bot Perms:** \`BanMembers or Admin\`
**User Perms:** \`BanMembers or Admin\`

**Example:**\`\`\`
akira ban @Dark-LYNN
akira ban @Dark-LYNN spamming\`\`\`

**Module\:** \`Moderation\`]
                                                $else
                                                    $if[$checkContains[$toLowerCase[$message[1]];kick]==true]
                                                        $description[**Command:** \`kick\`
**Aliases:** [\`None\`\] 
**Description:**  \`kick a user from the server.\`
**Usage:** \`akira kick <user> {reason}\`
**Bot Perms:** \`KickMembers or Admin\`
**User Perms:** \`KickMembers or Admin\`

**Example:**\`\`\`
akira kick @Dark-LYNN
akira kick @Dark-LYNN spamming\`\`\`

**Module\:** \`Moderation\`]
                                                    $else
                                                        $if[$checkContains[$toLowerCase[$message[1]];clean;clear]==true]
                                                            $description[**Command:** \`clean\`
**Aliases:** [\`clear\`\] 
**Description:**  \`Quickly delete multiple messages from a channel.\`
**Usage:** \`akira clean {channel} <Filter>\`
**Bot Perms:** \`ManageMessages or Admin\`
**User Perms:** \`ManageMessages or Admin\`

**Example:**\`\`\`
akira clear user @Dark-LYNN
akira clear bots
akira clear akira
akira clear me\`\`\`

**Module\:** \`Moderation\`]
                                                        $else
                                                            $if[$checkContains[$toLowerCase[$message[1]];giverole]==true]
                                                                $description[**Command:** \`giverole\`
**Aliases:** [\`none\`\] 
**Description:**  \`Quickly assign a role to a member.\`
**Usage:** \`akira giverole <user> <role> {reason}\`
**Bot Perms:** \`ManageRoles or Admin\`
**User Perms:** \`ManageRoles or Admin\`

**Example:**\`\`\`
akira giverole @Dark-LYNN @developer
akira giverole @Dark-LYNN @mod became moderator\`\`\`

**Module\:** \`Moderation\`]
                                                            $else
                                                                $description[I couldn't found "$message" in my command list.]
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
            $endif
        $endif
        $onlyIf[$message!=;{newEmbed:{color:ff3333}{title:❌ Something went wrong!}{description:Wrong usage of the command \`commandinfo\`
please try:
\`\`\`
$getGlobalUserVar[prefix] commandinfo <command>\`\`\`}}]
    $addField[Extra links and information:;[[Invite akira\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\] | \[[Support Server](https://discord.com/invite/TUqZTutDUz)\] | \[[Vote](https://akira.lynnux.xyz/vote)\] | \[[Website](https://akira.lynnux.xyz)\] | [Premium\]]
    
    $textSplit[$message[1]1274,^-=-;1274,^-=-]
    `})
    /* 
        name: "Userinfo",
        aliases: ["User","user-info","whois","who-is"],
        description: "show info about a user",
    
    $replaceText[$if[$replaceText[$if[$checkContains[$toLowerCase[owo];about;ping]==true];true;about]==true];false;$checkContains[$toLowerCase[owo];userinfo;whois;who-is;user-info;user];true;userinfo]
    */
    