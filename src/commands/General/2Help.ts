import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'


export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '2help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            aliases: ['2h']
        })
    }

     run = async (M: ISimplifiedMessage, parsedArgs: IParsedArgs): Promise<void> => {
           const n = [
           'https://www.allkpop.com/upload/2020/08/content/041254/1596560063-0af58a51-bdc1-4c4b-8f6f-63460af31ae4.jpeg'
        ]
        let taehyung = n[Math.floor(Math.random() * n.length)]
        if (!parsedArgs.joined) {
            const commands = this.handler.commands.keys()
            const categories: { [key: string]: ICommand[] } = {}
            for (const command of commands) {
                const info = this.handler.commands.get(command)
                if (!command) continue
                if (!info?.config?.category || info.config.category === 'dev') continue
                if (Object.keys(categories).includes(info.config.category)) categories[info.config.category].push(info)
                else {
                    categories[info.config.category] = []
                    categories[info.config.category].push(info)
                }
            }
            let text = `ðð» (ð) Annyeonghaseyo! *${M.sender.username}*\n`
            const keys = Object.keys(categories)
            for (const key of keys)
                text += `âââ°â¢Bot ${this.emojis[keys.indexOf(key)]} ${this.client.util.capitalize(key)}â¢â±ââ\nâ¢ \`\`\`${categories[
                    key
                ]
                    .map((command) => command.config?.command)
                     .join(' \n')}\`\`\`\n\n`
            return void this.client.sendMessage(M.from, { url: taehyung }, MessageType.image, {quoted:M.WAMessage,


            caption: `${text} ð *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*` }
            )
        }
        const key = parsedArgs.joined.toLowerCase()
        const command = this.handler.commands.get(key) || this.handler.aliases.get(key)
        if (!command) return void M.reply(`No Command of Alias Found | "${key}"`)
        const state = await this.client.DB.disabledcommands.findOne({ command: command.config.command })
        M.reply(
            `ð *Command:* ${this.client.util.capitalize(command.config?.command)}\nð *Status:* ${
                state ? 'Disabled' : 'Available'
            }\nâ© *Category:* ${this.client.util.capitalize(command.config?.category || '')}${
                command.config.aliases
                    ? `\nâ¦ï¸ *Aliases:* ${command.config.aliases.map(this.client.util.capitalize).join(', ')}`
                    : ''
            }\nð *Group Only:* ${this.client.util.capitalize(
                JSON.stringify(!command.config.dm ?? true)
            )}\nð *Usage:* ${command.config?.usage || ''}\n\nð *Description:* ${command.config?.description || ''}`
        )
    }

    emojis = ['ð','ð','ð','ð','ð','ð','ð','ð','ð','ð','ð','ð','ð','ð','ð']
}
