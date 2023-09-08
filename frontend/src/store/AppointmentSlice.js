import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const URL = "http://ec2-3-17-60-17.us-east-2.compute.amazonaws.com:8000/appointments";

export const getAppointmentsFromApi = createAsyncThunk(
  "appointments/getAppointmentsFromApi",
  async () => {
      const req = await fetch(URL)
      const appointments = await req.json()
      console.log("ejecuta thunk !!!")
      return appointments
  }
)

const initialState = {
  loading: false,
  appointments: [],
  error: null,
};

const AppointmentsSlice = createSlice({
  name:"appointments",
  initialState,
  reducers:{
    /* getAppointments: (state, action) => {
      state.loading
    } */
  },
  extraReducers: (builder) => {
    builder 
      .addCase(getAppointmentsFromApi.pending, state => {
        state.loading = true
        state.appointments = []
        state.error = null
      })
      .addCase(getAppointmentsFromApi.fulfilled, (state, action) => {
        console.log("action.payload en fulfilled: ", action.payload)
        state.loading = false
        state.appointments = action.payload
        state.error = null
      })
      .addCase(getAppointmentsFromApi.rejected, (state, action) => {
        state.loading = false
        state.appointments = []
        state.error = action.error.message
      })
  }
})

/* export const { appointments } = AppointmentsSlice.actions */
export default AppointmentsSlice.reducer