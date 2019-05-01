import { Handler, Context, Callback, APIGatewayProxyEvent } from "aws-lambda"
import { BasicResponse } from "blizzy-core";
import dynamodb from './dynamodb';

const userCharactersList: Handler = (event: APIGatewayProxyEvent, context: Context, callback: Callback) => {
    const params = {
        TableName: 'botanybay-character-dev-UserCharacters',
        Limit: 10, // optional (limit the number of items to evaluate)
    };
    dynamodb.scan(params, function(err: any, data: any) {
        if (err) {
            console.log(err)
            const response: BasicResponse = {
                statusCode: 500,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(err),
            }
            callback(err, response)
        }
        else {
            console.log(data)
            const response = {
                statusCode: 200,
                body: JSON.stringify(data),
            };
            callback(null, response)
        }
    })
  }

export default userCharactersList