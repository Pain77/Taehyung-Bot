import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'taehyung',
            description: 'Chat with Taehyung.',
            aliases: ['kim','tae'],
            category: 'fun',
            usage: `${client.config.prefix}taehyung (text)`
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void M.reply('_*Annyeonghaseyo 🌸*_')
        const taehyung = joined.trim()
        await axios.get(`https://api.simsimi.net/v2/?text=${taehyung}&lc=en`)
        .then((response) => {
                // console.log(response);
                const text = `_*🎈Taehyung:*_  ${response.data.success}`
                M.reply(text);
            }).catch(err => {
                M.reply(`_*Annyeonghaseyo 🌸*_`)
            }
            )
    };
}
