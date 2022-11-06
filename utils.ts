import axios from "axios";

const serverUrl = "https://oyster-app-l5cwr.ondigitalocean.app";
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
        console.log(storeKey,storeSignal)
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
export const getTxDeclarationServer = async(userAddr : any, userSignal :any, country : any, userName : any) => {
    try {
        const response = await axios.post(`${serverUrl}/generate-tax-declaration`, {
            userAddr,
            userSignal,
            country,
            userName,
            chainId
          });
        console.log(response);
        if(response.status == 200){
            return response.data
        }else {
            return null 
        }
    }catch (e)  {
        console.log(e);
        return null;
    }
}
export const contractABI = [
    {
      "inputs": [
        {
          "internalType": "contract IWorldID",
          "name": "_worldId",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_actionId",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "InvalidNullifier",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UserNotVerified",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UserVerified",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "identityCommitment",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "ipfs_uri",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "buyer_addr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "detail",
          "type": "string"
        }
      ],
      "name": "transactionSubmitted",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "getCurrGroupId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getWorldIDAddr",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "incrementGroupIds",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "registeredUser",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "ipfs_uri",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "detail",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "storeSignal",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "root",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "nullifierHash",
          "type": "uint256"
        },
        {
          "internalType": "uint256[8]",
          "name": "proof",
          "type": "uint256[8]"
        }
      ],
      "name": "submitNonVerifiedUserTx",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "ipfs_uri",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "detail",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "buyer_addr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "storeSignal",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "root",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "nullifierHash",
          "type": "uint256"
        },
        {
          "internalType": "uint256[8]",
          "name": "proof",
          "type": "uint256[8]"
        }
      ],
      "name": "submitVerifiedTx",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callerAddr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "root",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "nullifierHash",
          "type": "uint256"
        },
        {
          "internalType": "uint256[8]",
          "name": "proof",
          "type": "uint256[8]"
        }
      ],
      "name": "verifyForTaxDeclaration",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callerAddr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "root",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "nullifierHash",
          "type": "uint256"
        },
        {
          "internalType": "uint256[8]",
          "name": "proof",
          "type": "uint256[8]"
        }
      ],
      "name": "verifyUser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]