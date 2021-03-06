import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
export default class Paypal extends React.Component {
    render() {
        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
            console.log("The payment was succeeded!", payment);

            this.props.onSuccess(payment);
            // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }
 
        let env = 'production'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
        let total = this.props.total; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
 
        const client = {
            sandbox:    'ATLvhBCnLjoJJpTaGx7RxLq2kMz8QrJhoBRQBFeLYmJuIDKrJrIvgez2bkPcXcG6z9vZaRobO1eWJdrU',
            production: 'AVTGoMn8H9F9YqVPP8EshG1M6L0BhU9zNHWfQF9u0FdJa6PTakC1b5kwlfk77cUz81s5_QxbLz1SxFc0',
        }
        // In order to get production's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/
 
        // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
        return (
			<PaypalExpressBtn 
			env={env} 
			client={client} 
			currency={currency} 
			total={total} 
			onError={onError} 
			onSuccess={onSuccess} 
			onCancel={onCancel} 
			//style
			style={{
				size:'large',
				color:'blue',
				shape:'rect',
				label:'checkout'
			}}
			/>
        );
    }
}
//cartpage 마지막에 paypal 버튼 만들기
//cartpage에 import Paypall from '../../utils/Paypal';
