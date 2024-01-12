import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@/db/schema"
const handler = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [

  ]
})

export { handler as GET, handler as POST }