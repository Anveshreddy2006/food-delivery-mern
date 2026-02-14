import axios from "axios";
import React, { useEffect } from "react";
import { serverUrl } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { setMyShopData } from "../redux/ownerSlice";
import { setMyOrders } from "../redux/userSlice";

function useGetMyOrders() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const result = await axios.get(`${serverUrl}/api/order/my-orders`, {
          withCredentials: true,
        });

        dispatch(setMyOrders(result.data));
        console.log(result.data);
      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };

    fetchOrders();
  }, [userData]);
}

export default useGetMyOrders;
