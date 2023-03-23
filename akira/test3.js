module.exports = ({
    name: "recolor",
    description: "Quickly delete multiple messages from a channel.",
    $if: "old",
    usage: "$getServerVar[prefix]clean {channel} <Filter>",
    code: `
    $onlyIf[$guildID!=;{newEmbed:{color:ff3333}{title:❌ Something went wrong!}{description:Please use this command in a server.}}]
`})