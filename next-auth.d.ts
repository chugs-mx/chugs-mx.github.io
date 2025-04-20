import "next-auth";
import { Roles } from "./types/roles";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

declare module "next-auth"{
    interface User {
        id: string;
        role: Roles;
    }

    interface Session {
        user: User; 
    }

    interface JWT {
        role: Roles;
    }
}