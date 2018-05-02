import {urls} from './urls'

const card_mockup = {
   card_number:"1111111111111111",
   cvv:789,
   expiry_date:"01/18",
}

export async function fetchPayment(destination_user_id: string, value: number){
    const body = {...card_mockup, destination_user_id, value}
    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    }
    console.log(options)
    const response = await fetch(urls.payment, options)
    const paymentData = await response.json()
    return paymentData
}