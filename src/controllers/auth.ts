import { NextFunction, Request, Response } from "express";
import Auth from "../models/auth";
import APIError from "../utils/error";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import IResponse from "../utils/response";


export const register = async (req: Request, res: Response, next: NextFunction) => {
    const {name, email, password} = req.body;

    try {
        const user = await Auth.findOne({
            where: {
                email: email
            }
        });

        if(user) {
            next(new APIError("Email Adresi Zaten Kayıtlı", 401));
        }

        const hashPassword: string = await bcrypt.hash(password, 10);


        const newUser: any = await Auth.create({name, email, password: hashPassword});

        const token = jwt.sign({sub: newUser.id, name: newUser.name}, process.env.JWT_KEY || "", {
            expiresIn: "7d",
            algorithm: "HS512"
        });

        return new IResponse("Kayıt İşlemi Başarılı", newUser, token).created(res);


    } catch (error) {
        throw new APIError("Kayıt İşlemi Başarısız!", 400);
    }
}