/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help5",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}taehyung`,
		        dm: true,
                        aliases: ['h5','?5','well5','menu5']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const taehyung = 
			"https://c.tenor.com/sFB3mIhE_WQAAAPo/taehyung-crying.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: taehyung },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `âââ°â¢ðððððâ¢â±ââ
ð® ${this.client.config.prefix}ÉªÉ¢á´ê±á´Ê 
ð® ${this.client.config.prefix}á´á´Êá´á´á´á´ 
ð® ${this.client.config.prefix}ÊÊÊÉªá´ê± 
ð® ${this.client.config.prefix}á´Êá´Ê 
ð® ${this.client.config.prefix}ê±á´á´á´Éªê°Ê 
ð® ${this.client.config.prefix}Êá´á´á´á´Éªá´ 
ð® ${this.client.config.prefix}Êá´ê±á´á´Êá´Ê 
ð® ${this.client.config.prefix}Êá´á´ Éªá´á´á´ 
ð® ${this.client.config.prefix}ÉªÉ¢ 
ð® ${this.client.config.prefix}ÉªÉ¢á´á´sá´
ð® ${this.client.config.prefix}á´ÉªÉ´á´á´Êá´sá´
âââââââââââ
ð É´á´á´á´: á´ê±á´ ${this.client.config.prefix}Êá´Êá´ <á´á´á´á´á´É´á´_É´á´á´á´> á´á´ á´ Éªá´á´¡ á´Êá´ á´á´á´á´á´É´á´ ÉªÉ´ê°á´.
âââââââââââ    
    `,
			}
		);
	};
}
