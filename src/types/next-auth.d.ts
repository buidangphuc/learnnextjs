import NextAuth, {DefaultSession} from "next-auth";
import JWT from "next-auth/jwt";

interface IUser{
    _id: string;
    username: string;
    email: string;
    isVerify: boolean;
    type: string;
    role: string;
}
declare module "next-auth/jwt" {
    interface JWT {
        accessToken: string;
        refreshToken: string;
        user: IUser;
    }
}

declare module "next-auth" {
    interface Session{
        user:IUser;
        accessToken: string;
        refreshToken: string;
    }
}