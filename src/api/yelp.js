import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer TTlRuK07QK0zC1LVaLfT8wvLKl4BtjhAr-MW9tqNUBFZOXqfUlobw_bmYOhIpbOuwL6iTKFAT0CSKvWCLPaWWfNeKtT_Sv1CT1wTO14gYL_ILw90d5zQ5F61IMK5XXYx"
  }
});
