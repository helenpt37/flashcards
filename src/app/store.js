import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import topicsReducer from "../components/topics/topicsSlice";
import quizzesReducer from "../components/quizzes/quizzesSlice";
import cardsReducer from "../components/cards/cardsSlice";
import {persistStore, persistReducer} from "redux-persist";
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers(
  {
    topics: topicsReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer
  }
)

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: hardSet
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);


// const state1 = [
//   {
//     topics: [
//       {
//         id: 1,
//         name: "math",
//         icon: "bird",
//         quizzes: [
//           {
//             id: "math quiz1",
//             quizname: "math quiz1's name",
//             cards: [
//               {
//                 id: "math card1",
//                 front: "card 1 front",
//                 back: "card 1 back"
//               },

//               {
//                 id: "math card2",
//                 front: "",
//                 back: ""
//               }
//             ]
//           },

//           {
//             id: "math quiz2",
//             quizname: "math quiz2's name",
//             cards: [
//               {
//                 id: "math card1",
//                 front: "math card 1 front",
//                 back: "math card 1 back"
//               }
//             ]
//           }
//         ]
//       },

//       {
//         id: 2,
//         name: "science",
//         icon: "numbers",

//       }
//     ]
//   }
// ]