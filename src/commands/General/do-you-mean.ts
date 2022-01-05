import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '',
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/zerotwo-mean.mp4'
        ]
        let taehyung = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: taehyung }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `𝙅𝙖𝙜𝙞, 𝙩𝙮𝙥𝙚 🐥 ${this.client.config.prefix}ʜᴇʟᴘ\n` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
  
