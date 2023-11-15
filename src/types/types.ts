export interface ITicket {
    id: number
    from: string
    to: string
    company: string
    price: number
    currency: string
    startTime: string
    endTime: string
    duration: number
    date: string
    transfers: number
}