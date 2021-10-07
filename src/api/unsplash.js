import axios from "axios";

// Customized towards making a request in place of axios.get
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
        Authorization: "Client-ID Gznix7xQuEHdMFMK3bw-7s_8i0CH0zWYptF8Q2MfzCw"
      }
})