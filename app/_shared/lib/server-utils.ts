import "server-only";
import crypto from "crypto";

export function getMD5(...inputs: string[]) {
  return crypto.createHash("md5").update(inputs.join("-")).digest("hex");
}

export function getDateObjectFromUnixNanoTime(time: string) {
  return new Date(Number(time) / 1e6);
}
