// import { API_KEY, BASE_API } from "../config/consts"

// export const getAllProductsAPI = (query) => {
//   fetch(BASE_API,
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Authorization': `Bearer ${API_KEY}`,
//       },
//       body: JSON.stringify({
//         query: `{
//           allProducts {
//             image {
//               id
//             },
//             description,
//             rating,
//             price,
//             amount
//           }
//         }`
//       }),
//     }
//   )
//   .then(res => res.json())
//   .then((res) => {
//     // console.log(res.data)
//     return res.data;
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//     // return allProducts;
// }
