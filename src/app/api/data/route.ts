import { NextResponse } from "next/server";
const List = ["item1", "item2", "item3"];
let counter = 1;

// export async function GET() {
//   console.log("reques made");
//   if (Math.random() > 0.1) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         if (Math.random() > 0.2) {
//           List.push("new Item" + counter);
//           counter += 1;
//         }
//         resolve(NextResponse.json(List));
//       }, 2500);
//     });
//   }
//   return NextResponse.error();
// }

// export async function POST(request: Request, response: Response) {
//   const { item } = await request.json();
//   if (Math.random() > 0.1) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         List.push(item);
//         resolve(NextResponse.json(List));
//       }, 1000);
//     });
//   }
//   return new Promise((_, reject) => {
//     setTimeout(() => {
//       reject(NextResponse.error());
//     }, 3000);
//   });
// }
