const cardMockup = {
    card_number: '1111111111111111',
    cvv: 789,
    expiry_date: '01/18',
};

class CareersPicPayAPI {
    address = 'http://careers.picpay.com/tests/mobdev';

    async fetchPayment(destination_user_id: string, value: number) {
        const body = {...cardMockup, destination_user_id, value};
        const options = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        };
        console.log(options);
        const response = await fetch(`${this.address}/transaction`, options);
        const paymentData = await response.json();
        return paymentData;
    }

    async fetchUsers() {
        const response = await fetch(`${this.address}/users`);
        return await response.json();
    }
}

export default new CareersPicPayAPI();
