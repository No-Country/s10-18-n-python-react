import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const URL = "http://https://discord.com/channels/1141541352040050831/1141556250006523954/1149908951207522407";

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
    createAppointment: (state, action) => {
      state.appointments.push(action.payload)
      console.log("payload en createAppointment: ",action.payload)
    }
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

export const { createAppointment } = AppointmentsSlice.actions
export default AppointmentsSlice.reducer