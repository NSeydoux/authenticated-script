import { config } from "dotenv-flow";
import { Session } from "@inrupt/solid-client-authn-node";
import { main } from "./main.mjs";


config();

(async () => {

	const session = new Session();
	await session.login({
		clientId: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		oidcIssuer: process.env.IDP_URL
	});
  
  await main(session);
	
  await session.logout();
})();
