import {
  createSlice,
  configureStore,
  PayloadAction,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { ITicket } from "../types/types";

export const fetchTickets = createAsyncThunk(
  "tickets/fetchTickets",
  async (startIndex: number, { dispatch }) => {
    const data = await fetch(
      `http://localhost:3001/tickets?_start=0&_limit=${startIndex}`
    ).then((res) => res.json());
    dispatch(setAllTickets({ tickets: data }));
  }
);

export interface ITicketsAll {
  tickets: ITicket[];
}

export interface ITicketsFilter {
  tickets: ITicket[];
  company: string[];
  transfers: number[];
}

// const ticketsAdapter = createEntityAdapter<ITicket[]>();

// const ticketsSortPrice = createEntityAdapter<ITicket>({
//   selectId: (ticket) => ticket.id,
//   sortComparer: (a, b) => a.price - b.price,
// });

// const ticketsSortNumberTransfers = createEntityAdapter<ITicket>({
//   sortComparer: (a, b) => a.transfers - b.transfers,
// });

const initialState: ITicketsFilter = {
  tickets: [],
  company: ["Redwings", "Ssevenair", "Pobeda"],
  transfers: [0.1,1,2,3],
};

const ticketSlice = createSlice({
  name: "tickets",
  initialState: initialState,
  reducers: {
    setAllTickets: (state, action: PayloadAction<{ tickets: ITicket[] }>) => {
      state.tickets = action.payload.tickets;
    },
    sortTransfers: (state) => {
      state.tickets = state.tickets.sort((x, y) => x.transfers - y.transfers);
    },
    sortPrice: (state) => {
      state.tickets = state.tickets.sort((x, y) => x.price - y.price);
    },
    sortFlightDuration: (state) => {
      state.tickets = state.tickets.sort((x, y) => x.duration - y.duration);
    },
    setFilter(state, action: PayloadAction<{ company: string }>) {
      if (state.company.includes(action.payload.company)) {
        state.company = state.company.filter(
          (el) => el !== action.payload.company
        );
      } else {
        state.company.push(action.payload.company);
      }
    },

    filterNumberTransfer(state, action: PayloadAction<{ transfers: number }>) {
      if (state.transfers.includes(action.payload.transfers)) {
        state.transfers = state.transfers.filter(
          (el) => el !== action.payload.transfers
        );
      } else {
        state.transfers.push(action.payload.transfers);
      }
    },
  },
});

export const {
  setFilter,
  setAllTickets,
  sortTransfers,
  sortPrice,
  sortFlightDuration,
  filterNumberTransfer,
} = ticketSlice.actions;

export const store = configureStore({
  reducer: { tickets: ticketSlice.reducer },
});


// export const selectTickets = (state: AppRootStoreType) => state.tickets;

export type AppRootStoreType = ReturnType<typeof ticketSlice.reducer>;

export type RootState = ReturnType<typeof store.getState>;

export type RootDispatch = typeof store.dispatch;
