import axios from "axios";

const serverUrl = "http://127.0.0.1:9002"; // https://oyster-app-l5cwr.ondigitalocean.app
const chainId = "0x2696efe5"

export const registerUserInServer = async (companyName : any, email : any) => {
    try {
        const response = await axios.post(`${serverUrl}/verify-worldcoin-dev`, {
            chainId,
            storeKey : companyName
          });
        console.log(response);
        if(response.status == 200){
            return response.data.storeID
        }else {
            return null 
        }
    }catch (e)  {
        console.log(e);
        return null;
    }
    
}

export const submitReceiptServer = async (receiptData : any, storeKey : any, storeId : any, currency : any, country : any = "Malaysia", buyerAddr : any) => {

    let newReceiptData = receiptData;
    newReceiptData.currency = currency;
    newReceiptData.buyer = buyerAddr || "No-Identified";

    console.log("enter here");
    try {
        if(buyerAddr){
            const response = await axios.post(`${serverUrl}/submit-receipt-v1`, {
                chainId,
                storeKey,
                storeSignal : storeId,
                country,
                buyerAddr,
                receiptData : newReceiptData
              });
            console.log(response);
            if(response.status == 200){
                return response.data
            }else {
                return null 
            }

        }else {
            const response = await axios.post(`${serverUrl}/submit-receipt-v1`, {
                chainId,
                storeKey,
                storeSignal : storeId,
                country,
                receiptData : newReceiptData
              });
            console.log(response);
            if(response.status == 200){
                return response.data
            }else {
                return null 
            }
        }
        
    }catch (e)  {
        console.log(e);
        return null;
    }
}

export const verifyUser = async (userAddr : any) => {
    try {
        const response = await axios.post(`${serverUrl}/verify-worldcoin-dev-user`, {
            chainId,
            userAddr
          });
        console.log(response);
        if(response.status == 200){
            return response.data.userID
        }else {
            return null 
        }
    }catch (e)  {
        console.log(e);
        return null;
    }
}

export const getReceiptsUserServer = async (userAddr : any) => {
    try {
        const response = await axios.post(`${serverUrl}/get-user-transactions`, {
            "buyerAddr" : userAddr
          });
        console.log(response);
        if(response.status == 200){
            return response.data.transactions
        }else {
            return null 
        }
    }catch (e)  {
        console.log(e);
        return null;
    }
}

export const getReceiptsStoreServer = async (storeKey : any, storeSignal : any) => {
    try {
        const response = await axios.post(`${serverUrl}/get-store-transactions`, {
            "storeKey" : storeKey,
            "storeSignal" : storeSignal
          });
        console.log(response);
        if(response.status == 200){
            return response.data.transactions
        }else {
            return null 
        }
    }catch (e)  {
        console.log(e);
        return null;
    }
}