
const { ChatChannels } = require("../models/chat-channels-model")



module.exports = { 
    exibirList(req, res){
        const channels = new ChatChannels()
        const channelList = channels.listChannels()

        channels.listChannels(res.render("vie-channels", { channelList }))
    }
};