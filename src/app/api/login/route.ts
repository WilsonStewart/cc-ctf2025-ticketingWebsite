import "dotenv/config";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  return Response.redirect(process.env.APP_URL!, 307);
}
