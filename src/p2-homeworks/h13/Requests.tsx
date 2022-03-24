import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {requestTC, setSuccessAC} from "./request-reducer";
import {AppStoreType} from "../h10/bll/store";
import React from "react";

const Requests = () => {
    const success = useSelector<AppStoreType, boolean>(state => state.request.body.success)
    const error = useSelector<AppStoreType, string>(state => state.request.error)
    const dispatch = useDispatch()
    const changeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSuccessAC(e.currentTarget.checked))
    }
    const onClick1 = () => {
        dispatch(requestTC(success))
    }
    return (
        <div>
            <div>
                error:{error}
            </div>
            <SuperCheckbox checked={success} onChange={changeCheckbox}/>
            <SuperButton onClick={onClick1}>button</SuperButton>
        </div>
    )
}

export default Requests