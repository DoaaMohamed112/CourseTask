
import * as types from "./types";

const BASE_URL = "https://run.mocky.io/v3/3a1ec9ff-6a95-43cf-8be7-f5daa2122a34";


export const Get = async () => {
    let response;
    try {
      response = await fetch(`${BASE_URL}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          }
      });

        return response;
    } catch (error) {
      console.log("error In API", error);
      return undefined;
    }
  };

  export const GetAllData = (callback) => {
    return async () => {
      try {
        Get().then(async (response) => {
          console.log("response",response);
          if (response != undefined) {
              if(response.status==200)
              {
                let res=await response.json()
              }
              else{
                  callback("error");
              }
            
          } else {
            console.log("error1");
            callback("error");
          }
        });
      } catch (error) {
        console.log(error);
        callback("error");
      }
    };
  };
  


  export const getData = () => {
    return async (dispatch) => {
      try {
        let response = await fetch(`${BASE_URL}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
              }
          });
  
        if (!response.ok) {
          console.log("error case");
          const showerror = await response.json();
          // console.log(showerror)
          throw new Error(showerror.error);
        }
  
        const showData = await response.json();
        // console.log("response status", response.status);
        console.log("response json data",showData);
  
        dispatch(setData(showData));
        return showData.data;
      } catch (err) {
        // console.log("here")
        // console.log(err.message)
        throw err;
      }
    };
  };
  
  
const setData = (data)=> {
    return {
      data: data,
      type: types.GET_COURSE_DATA
    };
  };