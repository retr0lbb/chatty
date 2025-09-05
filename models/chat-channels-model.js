class ChatChannels {
    channelList = [];

    constructor() {
        this.channelList = [];
    }

    // Adiciona um novo canal
    addChannel(channelName) {
        if (!this.channelList.includes(channelName)) {
            this.channelList.push(channelName);
            console.log(`✅ Canal "${channelName}" adicionado.`);
        } else {
            console.log(`⚠️ Canal "${channelName}" já existe.`);
        }
    }

    // Remove um canal
    removeChannel(channelName) {
        this.channelList = this.channelList.filter(ch => ch !== channelName);
        console.log(`🗑️ Canal "${channelName}" removido.`);
    }

    // Lista todos os canais
    listChannels() {
        if (this.channelList.length === 0) {
            console.log("Nenhum canal criado ainda.");
            return [];
        }
        console.log("📋 Canais disponíveis:");
        this.channelList.forEach((ch, i) => console.log(`${i + 1}. ${ch}`));
        return this.channelList;
    }
}

// --------------------
// Exemplo de uso
// --------------------
const channels = new ChatChannels();

channels.addChannel("geral");
channels.addChannel("games");
channels.addChannel("música");

channels.listChannels();

channels.removeChannel("games");
channels.listChannels();


module.exports = {ChatChannels}