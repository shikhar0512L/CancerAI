import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(
    'postgresql://cancerDB_owner:YSPcqX7wT3CG@ep-falling-sound-a5xlw9xg.us-east-2.aws.neon.tech/cancerDB?sslmode=require'
);
export const db = drizzle(sql, { schema });