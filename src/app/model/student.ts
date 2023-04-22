import { Session } from "./session"

export interface Student {
    id: number
    name: string
    payPerSession: number
    sessions: Session[]
}