import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext"
import { useEffect, useState, useContext } from "react";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";

export const useUserAuth = () => {
    const { user, updateUser, clearUser } = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setLoading(false);
            return;
        }

        let isMounted = true;

        const fetchUserInfo = async () => {
            try {
                const response = await axiosInstance.get(API_PATHS.AUTH.GET_USER_INFO);

                if (isMounted && response.data) {
                    updateUser(response.data);
                }
            } catch (error) {
                console.error("Failed to fetch user info:", error);
                if (isMounted) {
                    clearUser();
                    navigate("/login");
                }
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchUserInfo();

        return () => {
            isMounted = false;
        };
    }, [user, updateUser, clearUser, navigate]);

    return { user, loading };
};
