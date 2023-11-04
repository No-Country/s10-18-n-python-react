import { URL } from "./url"

export const getDoctors = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_DOCTORS}`, {headers: {accept: "application/json"}})
        const doctors = await response.json()
        return doctors
      } catch (err) {
        console.log(err.message)
      }
    }