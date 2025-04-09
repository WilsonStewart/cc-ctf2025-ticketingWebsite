// import MainDB from "@/server/db/db-instance";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  // const dbInstance = MainDB.getInstance();
  // const db = dbInstance.getDB();

  // // let results: ITicket[] = [];

  // // const rows = await db!.prepare("SELECT * FROM tickets").get();

  // const result = db?.get("SELECT * FROM tickets")

  return Response.json({ message: "ok" });
}
