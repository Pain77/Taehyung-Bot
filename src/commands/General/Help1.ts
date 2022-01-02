/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help1",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}taehyung`,
		        dm: true,
                        aliases: ['h1','?1','well1','menu1']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const taehyung = 
			"https://c.tenor.com/AQPsoa6-yx0AAAPo/bts-bangtan-boys.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: taehyung },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `━━❰•𝙒𝙚𝙚𝙗•❱━━
🎄 ${this.client.config.prefix}ᴀɴɪᴍᴇ 
🎄 ${this.client.config.prefix}ᴀɴɪᴍᴇᴘᴀᴘᴇʀ 
🎄 ${this.client.config.prefix}ᴀɴɪᴍᴇQᴜᴏᴛᴇ 
🎄 ${this.client.config.prefix}ᴀᴍᴇᴍᴇ 
🎄 ${this.client.config.prefix}ᴄʜᴀʀᴀᴄᴛᴇʀ 
🎄 ${this.client.config.prefix}ᴄᴏsᴘʟᴀʏ 
🎄 ${this.client.config.prefix}ɢᴇɴꜱʜɪɴᴄʜᴀʀᴀᴄᴛᴇʀ 
🎄 ${this.client.config.prefix}ʜᴀɪɢᴜꜱʜᴀ 
🎄 ${this.client.config.prefix}ᴋɪᴛꜱᴜɴᴇ 
🎄 ${this.client.config.prefix}ʟᴏʟɪ 
🎄 ${this.client.config.prefix}ᴍᴀɴɢᴀ 
🎄 ${this.client.config.prefix}ɴᴇᴋᴏ 
🎄 ${this.client.config.prefix}ᴘᴏᴋᴇᴍᴏɴ 
🎄 ${this.client.config.prefix}ʀᴇᴄᴏᴍᴍᴇɴᴅ 
🎄 ${this.client.config.prefix}ʀᴘᴀᴘᴇʀ 
🎄 ${this.client.config.prefix}ᴡᴀɪꜰᴜ 
🎄 ${this.client.config.prefix}ɪɴꜰᴏᴡᴀɪꜰᴜ 
🎄 ${this.client.config.prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ
───────────
🎗 ɴᴏᴛᴇ: ᴜꜱᴇ ${this.client.config.prefix}ʜᴇʟᴘ <ᴄᴏᴍᴍᴀɴᴅ_ɴᴀᴍᴇ> ᴛᴏ ᴠɪᴇᴡ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ɪɴꜰᴏ.
───────────    
    `,
			}
		);
	};
}
