/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "mods",
			description: "Generally used to check if bot is Up",
			category: "general",
            usage: `${client.config.prefix}mods`,
            dm: true,
            aliases: ['moderators', 'mod', 'owner'],
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const taehyung =
			"https://c.tenor.com/nqYtJ9f5yPkAAAPo/bts-merrychristmas.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: taehyung },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `š® į“į“į“į“Źį“į“į“Ź\n

ā°ā¢ āPāAāIāNā
šį“į“É“į“į“į“į“: wa.me/919662713165?text=ššš”š”š¤+į“į“ÉŖÉ“
š»É¢ÉŖį“Źį“Ź: https://github.com/Pain77
 
ā°ā¢ Juice WRLD
šį“į“É“į“į“į“į“: wa.me/263780699988?text=ššš”š”š¤+į“į“ÉŖį“į“+į“”ŹŹį“

ā¢āāā ā½ ā¢ ā½ āāāā¢`,
			}
		);
	};
}
