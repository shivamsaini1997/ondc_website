// export const OrderData = {
//     getData() {
//         return [
//             {
//                 id: 1000,
//                 name: '1',
//                 country: {
//                     name: '#12837492',
//                 },
//                 company: '343543',
//                 Quantity: 'Paid',
//                 date: '2',
//                 qc:'j',
//                 Paymentmethod:'Mastercard',
//                 availability:'Mark out of Stock',
//                 representative: {
//                     name: 'Name ',
//                 },
//                 balance: 546,
//             },
//             {
//                 id: 1000,
//                 name: '2',
//                 country: {
//                     name: '#12837492',
//                 },
//                 Quantity: 'Cancelled',
//                 date: '2',
//                 qc:'Pending',
//                 Paymentmethod:'Visa',
//                 availability:'Mark out of Stock',
//                 representative: {
//                     name: 'Name ',
//                 },
//                 balance: 546
//             }
//         ];
//     },

//     getCustomersSmall() {
//         return Promise.resolve(this.getData().slice(0, 10));
//     },

//     getCustomersMedium() {
//         return Promise.resolve(this.getData().slice(0, 50));
//     },

//     getCustomersLarge() {
//         return Promise.resolve(this.getData().slice(0, 200));
//     },

//     getCustomersXLarge() {
//         return Promise.resolve(this.getData());
//     },

//     getCustomers(params) {
//         const queryParams = params
//             ? Object.keys(params)
//                   .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
//                   .join('&')
//             : '';

//         return fetch('https://www.primefaces.org/data/customers?' + queryParams).then((res) => res.json());
//     }
// };
