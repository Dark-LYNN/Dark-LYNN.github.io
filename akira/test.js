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
    **aliases:** [\`ping\`\] 
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
    **aliases:** [\`user-info\`,\`user\`,\`whois\`,\`who-is\`\] 
    **description:**  \`Check the details about a user\`
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
    **aliases:** [\`command-info\`,\`command\`\] 
    **description:**  \`Check the details about a user\`
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
    **aliases:** [\`bal\`,\`money\`,\`wallet\`\] 
    **description:**  \`Check how much money is in your wallet and in your bank.\`
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
    **aliases:** [\`dep\`\] 
    **description:**  \`Deposit money from your wallet to your bank.\`
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
    **aliases:** [\`with\`\] 
    **description:**  \`Withdraw money from your bank to your wallet.\`
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
    **aliases:** [\`ev\`,\`djs\`\] 
    **description:**  \`Run a d.js/javascript code.\`
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
    **aliases:** [\`server-info\`,\`server\`,\`guildinfo\`,\`guild-info\`,\`guild\`\] 
    **description:**  \`show info about the current server.\`
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
    **aliases:** [\`setting\`\] 
    **description:**  \`See your settings.\`
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
                                            $if[$checkContains[$toLowerCase[$message[1]];prefix;setting]==true]
                                                $description[**Command:** \`prefix\`
    **aliases:** [\`setprefix\`,\`set-prefix\`\] 
    **description:**  \`Change your own or the server prefix.\`
    **Usage:** \`akira prefix [newPrefix\] <user/server>\`
    
    **Example:**
    \`\`\`
    akira prefix ! user
    akira prefix ?
    \`\`\`
    
    **Module\:** \`Utility\`
    ]
                                            $else
                                                $if[$checkContains[$toLowerCase[$message[1]];ban;ban]==true]
                                                    $description[**Command:** \`prefix\`
**aliases:** [\`setprefix\`,\`set-prefix\`\] 
**description:**  \`Change your own or the server prefix.\`
**Usage:** \`akira prefix [newPrefix\] <user/server>\`

**Example:**
\`\`\`
akira prefix ! user
akira prefix ?
\`\`\`

**Module\:** \`Utility\`
]
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
        $addField[Extra links and information:;[[Invite akira\](https://discord.com/api/oauth2/authorize?client_id=738057910923296839&permissions=8&scope=bot%20applications.commands)\] | [Support Server\] | [Vote\] | [Website\] | [Premium\]]
    
    $textSplit[$message[1]1274,^-=-;1274,^-=-]
    `})
    /* 
        name: "Userinfo",
        aliases: ["User","user-info","whois","who-is"],
        description: "show info about a user",
    
    $replaceText[$if[$replaceText[$if[$checkContains[$toLowerCase[owo];about;ping]==true];true;about]==true];false;$checkContains[$toLowerCase[owo];userinfo;whois;who-is;user-info;user];true;userinfo]
    */
    