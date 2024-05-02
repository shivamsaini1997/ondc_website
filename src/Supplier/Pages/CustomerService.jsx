// export const CustomerService = {
//     getData() {
//         return [
//             {
//                 id: 1000,
//                 name: '1',
//                 country: {
//                     name: 'Kurtis',
//                 },
//                 company: '343543',
//                 Quantity: '14',
//                 date: '2',
//                 qc:'j',
//                 availability:'Mark out of Stock',
//                 representative: {
//                     name: 'Number-12837492',
//                 },
//                 balance: 70663,
//             },
//             {
//                 id: 1000,
//                 name: '2',
//                 country: {
//                     name: 'Kurtis',
//                 },
//                 Quantity: '64',
//                 date: '2',
//                 qc:'Pending',
//                 availability:'Mark out of Stock',
//                 representative: {
//                     name: 'Number-12837492',
//                 },
//                 balance: 70663
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
