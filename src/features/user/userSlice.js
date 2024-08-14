/* This code demonstrates how to use Redux Toolkit's createAsyncThunk and createSlice
 to manage user-related state in a React application, particularly focusing on fetching 
 the user's geolocation and reverse geocoding it to get their address.*/

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAddress } from '../../services/apiGeocoding';

//1. Getting User's Geolocation
//utility function that returns a promise to get the user's current position using the
//navigator.geolocation.getCurrentPosition API.It resolves with the user's position
//object or rejects with an error.

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

//Asynchronous Thunk for Fetching Address
/* fetchAddress is an asynchronous thunk action created using createAsyncThunk. It handles fetching 
the user's geolocation and then reverse geocoding it to get the address.
Get Position: Calls getPosition to retrieve the user's latitude and longitude.
Reverse Geocoding: Uses the getAddress function to convert the latitude and longitude into
 a human-readable address.
Return Data: Returns an object containing the user's position and address, which will be
 used in the Redux store when the thunk is fulfilled. */

export const fetchAddress = createAsyncThunk(
  'userFetchAddress',
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address,
    // so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality},
   ${addressObj?.city} ${addressObj?.postcode},
    ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    //payload of the FULFILLED state
    console.log(address);
    return { position, address };
  },
);

//Initial State

const initialState = {
  userName: '',
  status: 'idle',
  position: {},
  address: '',
  error: '',
};

//  User Slice
/*createSlice:
This function creates a slice of the Redux store for managing user-related state.
Reducers:
updateName: Updates the userName in the state.
Extra Reducers:
These handle the different states of the fetchAddress async thunk:
pending: Sets the status to 'loading' while the thunk is in progress.
fulfilled: Updates the state with the fetched position and address, and sets the status to 'idle'.
rejected: Sets the status to 'error' and updates the error message when the thunk fails. */

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.userName = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = 'idle';
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = 'error';
        state.error = `${action.error.message}. Please fill the address field`;
      }),
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
export const getUsername = (state) => state.user.userName;
