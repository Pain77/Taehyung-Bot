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
				caption: `━━❰•𝙈𝙚𝙙𝙞𝙖•❱━━
🏮 ${this.client.config.prefix}ɪɢᴜꜱᴇʀ 
🏮 ${this.client.config.prefix}ᴋᴀʀᴀᴏᴋᴇ 
🏮 ${this.client.config.prefix}ʟʏʀɪᴄꜱ 
🏮 ${this.client.config.prefix}ᴘʟᴀʏ 
🏮 ${this.client.config.prefix}ꜱᴘᴏᴛɪꜰʏ 
🏮 ${this.client.config.prefix}ʏᴛᴀᴜᴅɪᴏ 
🏮 ${this.client.config.prefix}ʏᴛꜱᴇᴀʀᴄʜ 
🏮 ${this.client.config.prefix}ʏᴛᴠɪᴅᴇᴏ 
🏮 ${this.client.config.prefix}ɪɢ 
🏮 ${this.client.config.prefix}ɪɢᴘᴏsᴛ
🏮 ${this.client.config.prefix}ᴘɪɴᴛᴇʀᴇsᴛ
───────────
🎗 ɴᴏᴛᴇ: ᴜꜱᴇ ${this.client.config.prefix}ʜᴇʟᴘ <ᴄᴏᴍᴍᴀɴᴅ_ɴᴀᴍᴇ> ᴛᴏ ᴠɪᴇᴡ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ɪɴꜰᴏ.
───────────    
    `,
			}
		);
	};
}
