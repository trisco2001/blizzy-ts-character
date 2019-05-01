import { Handler, Context, Callback, APIGatewayProxyEvent } from "aws-lambda"
import { Environment } from "../environment"
import { GatewayEventInteractor, BasicResponses, BlizzyService } from "blizzy-core";
import { ClassService } from "blizzy-core";
import { RequesterService } from "blizzy-core/dist/services/requesterService";

const classesHandler: Handler = async (event: APIGatewayProxyEvent, context: Context, callback: Callback) => {
    const gatewayEventInteractor = new GatewayEventInteractor(event)
    const token = gatewayEventInteractor.queryString('token')
  
    if (token == null) {
      return BasicResponses.authorizationNeeded("The token is needed to process this request.")
    }
  
    const environment = new Environment()
    console.log(environment)
    const requesterService = new RequesterService(environment, token)
    const blizzyService = new BlizzyService(requesterService)
    const classService = new ClassService(blizzyService)
    return await classService.getClasses()
  }

export { classesHandler }