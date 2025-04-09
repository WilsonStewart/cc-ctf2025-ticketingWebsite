// import "dotenv/config";
// import BetterSqlite3, { Database } from "better-sqlite3";
// import { Database, sqlite3 } from "sqlite3";

// type Opts = {
//   debug?: boolean;
// };

// let initializedTimes: number = 0;

// class MainDB {
//   private static instance: MainDB | null = null;
//   private db: Database | undefined;

//   private constructor(opts: Opts) {
//     this.initializeDB(opts);
//   }

//   public static getInstance(opts?: Opts): MainDB {
//     if (!MainDB.instance) {
//       MainDB.instance = new MainDB(opts!);
//     }
//     return MainDB.instance;
//   }

//   private initializeDB(opts: Opts) {
//     initializedTimes++;
//     const db = new Database("main.db");
//     console.log("INSTANCE HAS BEEN INITIALIZED " + initializedTimes + " TIMES");
//   }

//   public getDB() {
//     return this.db;
//   }
// }

// export default MainDB;
