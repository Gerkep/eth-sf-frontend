import React from "react";
import Loading from "../components/Loading";
import Stores from "../components/store/Stores";


const StoreList = () => {

    return <div className="m-3">
        <Loading />
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">Our partners</h2>
        <Stores />
    </div>
}

export default StoreList;