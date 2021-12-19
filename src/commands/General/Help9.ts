/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help9",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}help9`,
		        dm: true,
                        aliases: ['h9','?9','well9','menu9']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const zerotwo = 
			"https://c.tenor.com/S4na5ZkZnVQAAAAC/zerotwo-002.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: zerotwo },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `━━❰•𝙇𝙤𝙜𝙤•❱━━
🌫️ ${this.client.config.prefix}ʙʟᴀᴄᴋᴘɪɴᴋ
🌫️ ${this.client.config.prefix}ɢʟɪᴛᴄʜ
🌫️ ${this.client.config.prefix}ᴅᴇᴠɪʟ
🌫️ ${this.client.config.prefix}ʜᴏʀʀᴏʀ
🌫️ ${this.client.config.prefix}ʜᴀʀʀʏᴘᴏᴛᴛᴇʀ
───────────
🎗 ɴᴏᴛᴇ: ᴜꜱᴇ ${this.client.config.prefix}ʜᴇʟᴘ <ᴄᴏᴍᴍᴀɴᴅ_ɴᴀᴍᴇ> ᴛᴏ ᴠɪᴇᴡ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ɪɴꜰᴏ.
───────────    
    `,
			}
		);
	};
}
