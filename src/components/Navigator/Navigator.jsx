import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../../redux/selectors"
import { useNavigate } from "react-router-dom";
import { getCurrentUserOp } from "../../redux/operations";
import { useEffect } from "react";

const Navigator = () => {
    const navigate = useNavigate();
    const userState = useSelector(getUser);
    const dispatch = useDispatch();
    if (userState.token === null) {
        navigate('/login');
    }
    dispatch(getCurrentUserOp);
    useEffect()
    return <></>
}