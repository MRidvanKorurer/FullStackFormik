import { Response } from "express";

class IResponse {
    message: string | null;
    data: any;
    token?: string | null;

    constructor(message: string | null = null, data: any = null, token: string | null = null) {
        this.message = message;
        this.data = data,
        this.token = token
    }


    success(res: Response) {
        return res.status(200).json({
            message: this.message ?? "İşlem Başarılı",
            data: this.data,
            token: this.token
        })
    }


    created(res: Response) {
        return res.status(201).json({
            message: this.message ?? "Create İşlemi Başarılı",
            data: this.data,
            token: this.token
        })
    }
}



export default IResponse;