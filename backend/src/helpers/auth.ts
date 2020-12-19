import { Context } from "koa";
import JWT from "jsonwebtoken";
import HTTP_STATUS from "http-status-codes";

export async function verifyToken(ctx: Context, next: () => void) {
  if (!ctx.request.headers.authorization) {
    ctx.response.status = HTTP_STATUS.UNAUTHORIZED;
    ctx.body = { message: "No authorization headers" };
    return;
  }

  const token = ctx.request.headers.authorization.token;
  if (!token) {
    ctx.response.status = HTTP_STATUS.FORBIDDEN;
    ctx.body = { message: "No token provided" };
    return;
  }

  try {
    const decode: any = JWT.verify(token, "testsecret");
    ctx.state.user = decode.data;
  } catch (error) {
    console.log(error);
    ctx.response.status = HTTP_STATUS.UNAUTHORIZED;
    ctx.body = { message: "Token is not valid" };
  }

  await next();
}
