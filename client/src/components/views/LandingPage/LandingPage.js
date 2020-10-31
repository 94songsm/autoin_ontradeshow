import React, { useEffect }from 'react'
import { FaCode } from "react-icons/fa";
import axios from 'axios';

function LandingPage() {
    useEffect(() => {
        axios.post('api/product/products')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data);
                } else {
                    alert('fail to load events');
                }
            })
    }, [])
    return (
      <div> landing </div>  
    );
}

export default LandingPage
