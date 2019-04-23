import { Handler, Context, Callback, APIGatewayProxyEvent } from "aws-lambda"
import { Environment } from "./Environment"
import { GatewayEventInteractor, BasicResponses, BasicResponse, BlizzyService } from "blizzy-core";
import { CharacterService } from "blizzy-core";

const character: Handler = async (event: APIGatewayProxyEvent, context: Context, callback: Callback) => {
  const gatewayEventInteractor = new GatewayEventInteractor(event)
  const token = gatewayEventInteractor.queryString('token')
  const characterName = gatewayEventInteractor.path('characterName')
  const serverName = gatewayEventInteractor.path('serverName')

  if (token == null) {
    return BasicResponses.authorizationNeeded("The token is needed to process this request.")
  }

  if (characterName == null || serverName == null) {
    return BasicResponses.badRequest("The character name and server name were expected components of this request.")
  }

  const environment = new Environment()
  console.log(environment)
  const blizzyService = new BlizzyService(environment)
  const characterService = new CharacterService(blizzyService)
  return await characterService.getCharacterInfo(token, characterName, serverName)
}

export { character }