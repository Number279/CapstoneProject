import React, {useState} from "react"
import Conditions from "../Conditions/Conditions";


let [error, setError] = useState(false);
let [loading, setLoading] = useState(false);
let [responseObj, setResponseObj] = useState({
    data: ""
});

export default function ApiFetch(props) {
     async function getUser(e) {
          e.preventDefault();
            const response = 
              await axios({
                method: 'get',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: `http://localhost:8080/nonprofits/city?city=${props.city}`,
                // data: city
              }).then((response) => {
                console.log(response.data)
                console.log("The name of the Non-Profit at index 0 is: ", response.data[0].nonProfitName)
                  setResponseObj({data: response})
                  // setData({nonProfitName: response.data.nonProfitName, address: response.data.address})
                  console.log("This is the responseObj: ", responseObj);
                  console.log("This is the name of the Non-Profit in responseObj: ", responseObj.data.data[0].nonProfitName);
              })
                .catch((err) => {
                        setError(true);
                        setLoading(false);
                        console.log(err.message);
                      }
                )
            }

            return (
                <div>
                    <NonProfits
        responseObj={responseObj}
        error={error} //new
        loading={loading} //new
      />
                </div>
            )
}