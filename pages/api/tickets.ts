import MainDB from "@/server/db/db-instance";
import { NextApiRequest, NextApiResponse } from "next";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const dbInstance = MainDB.getInstance();
  const db = dbInstance.getDB();

  let results: ITicket[] = [];

  const rows = await db!.prepare("SELECT * FROM tickets").get();

  return Response.json(rows);
}
