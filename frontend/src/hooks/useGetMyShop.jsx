import axios from "axios";
import React, { useEffect } from "react";
import { serverUrl } from "../config";
import { useDispatch } from "react-redux";
import { setMyShopData } from "../redux/ownerSlice";

function useGetMyshop() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchShop = async () => {
      try {
        const result = await axios.get(`${serverUrl}/api/shop/get-my`, {
          withCredentials: true,
        });

        dispatch(setMyShopData(result.data.shop));
      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };

    fetchShop();
  }, []);
}

export default useGetMyshop;
