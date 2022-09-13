import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";

const userBusiness = new UserBusiness()

export default class UserController {
    public healthcheck = (req: Request, res: Response) => {
        try {
            res.status(200).send({'opa':'ok'})
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "unexpected error"})
        }
    }


    public signup = async (req: Request, res: Response) => {
        try {
            const input: any = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const response = await userBusiness.signup(input)
            
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "unexpected error"})
        }
    }
    public login = async (req: Request, res: Response) => {
        try {
            const input: any = {
                email: req.body.email,
                password: req.body.password
            }

            const response = await userBusiness.login(input)
            
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "unexpected error"})
        }
    }
    public listusers = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const response = await userBusiness.listusers(token)
            
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "unexpected error"})
        }
    }
    public deleteuser = async (req: Request, res: Response) => {
        try {
            const input: any = {
                token: req.headers.authorization,
                id: req.params.id
            }

            const response = await userBusiness.deleteUser(input)
            
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "unexpected error"})
        }
    }
}