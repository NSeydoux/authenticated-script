/* 
import {
	someFunction
} from "some-dependency";
*/

export const main = async (session) => {

  console.log("Starting main");
  console.log(`Logged in as ${session.info.webId}`);

	// Your custom code...

  console.log("Terminating main")
};