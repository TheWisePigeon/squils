#!/usr/bin/env node

import { migrate } from "./commands/migrate.js";
import { connect } from "./commands/connect.js";
import { command_is_valid } from "./utils.js";
import * as dotenv from "dotenv"

dotenv.config()

const [_,__, command, ...args] = process.argv

if (
  command_is_valid(command)
) {
  switch (command) {
    case "migrate": {
      await migrate()
      process.exit()
    }
    case "init":{

    }
    case "connect":{
      await connect()
    }
  }
}
console.log(`Invalid command ${command}`)
process.exit()
