// import { gql } from 'graphql-request';
// import { client } from '../../lib/client';

// type ServiceParam = {
//   params: { serviceId: string };
// }

// interface ServiceDetails {
//   price: number;
//   images: {
//     url: string;
//   }[];
//   techSummary: string;
//   summary: string;
// }

// const GET_SERVICE_DETAILS = gql`
//   query ServiceID($serviceId: ID!) {
//     service(where: { id: $serviceId }) {
//       price
//       images {
//         url
//       }
//       techSummary
//       summary
//     }
//   }
// `;

// async function page({ params: { serviceId } }: ServiceParam) {
//   const { service } = await client.request<{ service: ServiceDetails }>(
//     GET_SERVICE_DETAILS,
//     { serviceId }
//   );

//   const { summary, images, techSummary, price } = service;

//   return (
//     <div>
//       <div>
//         <h1>Summary: {summary}</h1>
//         <p>Tech Summary: {techSummary}</p>
//         <p>Price: {price}</p>
//         <div>
//           <h2>Images:</h2>
//           {images.map((image, index) => (
//             <img
//               key={index}
//               src={image.url}
//               alt={`Image ${index}`}
//               style={{ height: '200px', objectFit: 'cover' }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default page;
