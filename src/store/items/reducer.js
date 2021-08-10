import { produce } from "immer";
import { ITEM_ADDED, ITEM_PRICE_UPDATED, ITEM_QUANTITY_UPDATED, ITEM_REMOVED } from "./actions";
import { selectItem } from "./selectors";

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast Awesome', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = produce((state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
    const item = { uuid: id++, quantity: 1, ...action.payload };
    state.push(item);
  }
  if (action.type === ITEM_REMOVED) {
    return state.filter(item => item.uuid !== action.payload.uuid)
  }
  if (action.type === ITEM_PRICE_UPDATED) {
    const item = selectItem(state, action.payload);
    item.price = parseInt(action.payload.price);
  }
  if (action.type === ITEM_QUANTITY_UPDATED) {
    const item = selectItem(state, action.payload);
    item.quantity = parseInt(action.payload.quantity);
  }
}, initialItems);


// export const reducer = (state = initialItems, action) => {

//   // if (action.type === ITEM_ADDED) {
//   //   const item = { uuid: id++, quantity: 1, ...action.payload };
//   //   return [...state, item]
//   // }
//   if (action.type === ITEM_ADDED) {
//     return produce(state, (draftState) => {
//       const item = { uuid: id++, quantity: 1, ...action.payload };
//       draftState.push(item);
//     })
//   }

//   if (action.type === ITEM_REMOVED) {
//     return state.filter(item => item.uuid !== action.payload.uuid)
//   }
//   if (action.type === ITEM_PRICE_UPDATED) {
//     return produce(state, (draftState) => {
//       const item = draftState.find(item => item.uuid === action.payload.uuid);
//       item.price = parseInt(action.payload.price);
//     })
//   }
//   if (action.type === ITEM_QUANTITY_UPDATED) {
//     return state.map(item => {
//       if (item.uuid === action.payload.uuid) {
//         return {
//           ...item,
//           quantity: action.payload.quantity
//         }
//       }
//       return item;
//     })
//   }
//   return state;
// };

export default reducer;
