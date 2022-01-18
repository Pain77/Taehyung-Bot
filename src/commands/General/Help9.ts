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
		const taehyung = 
			"https://c.tenor.com/BWxhZ3pJZqcAAAPo/kim-taehyung.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: taehyung },
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
🌫️ ${this.client.config.prefix}ᴄʜʀɪꜱᴛᴍᴀꜱ
🌫️ ${this.client.config.prefix}ʙᴏx
🌫️ ${this.client.config.prefix}ᴄᴀɴᴅʏ
🌫️ ${this.client.config.prefix}ᴄʀᴀᴄᴋ
🌫️ ${this.client.config.prefix}ᴅᴇᴇᴘꜱᴇᴀ
🌫️ ${this.client.config.prefix}ꜰɪᴄᴛɪᴏɴ
🌫️ ${this.client.config.prefix}ꜰᴏɢɢʏᴡɪɴᴅᴏᴡ
🌫️ ${this.client.config.prefix}ᴍᴇᴛᴀʟᴅᴀʀᴋ
🌫️ ${this.client.config.prefix}ᴛʜᴜɴᴅᴇʀ
🌫️ ${this.client.config.prefix}ᴛʀᴀɴꜱꜰᴏʀᴍᴇʀ
🌫️ ${this.client.config.prefix}ɢʀᴀꜰꜰɪᴛɪᴀʀᴛ
───────────
🎗 ɴᴏᴛᴇ: ᴜꜱᴇ ${this.client.config.prefix}ʜᴇʟᴘ <ᴄᴏᴍᴍᴀɴᴅ_ɴᴀᴍᴇ> ᴛᴏ ᴠɪᴇᴡ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ɪɴꜰᴏ.
───────────    
    `,
			}
		);
	};
}
