interface IUser {
    id: number;
    name?: string;
}

interface IPayment {
    id: number;
    method?: string;
}

interface IUserPayment extends IUser, IPayment {
    id: number;
    user_id: number;
    payment_id: number;
}

let user_5: IUser = { id: 1, name: "Davi" }
let payment: IPayment = { id: 1, method: "Cartão de crédito" }
let user_payment: IUserPayment = { id: 1, user_id: user_5.id, payment_id: payment.id }

console.log(user_payment)
console.log(`usário: ${user_5.name}, forma de pagamento: ${payment.method}`)