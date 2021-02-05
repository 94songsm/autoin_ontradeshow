import React from 'react'

function HistoryPage(props) {
	console.log("what the fuck : "+props.user.userData);
	return (
		
		<div style={{ width: '80%', margin: '3rem auto'}}>
			<div style={{ textAlign: 'center' }}>
				<h1> History </h1>
			</div>
			<br />

			<table>
				<thead>
					<tr style={{width: '100%'}}>
						<th>Payment Id</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Date of Purchase</th>
						<th>john Na sibal</th>
					</tr>
				</thead>
				<tbody>
					{props.user.userData && props.user.userData.history.map(item => (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.price}</td>
								<td>{item.quantity}</td>
								<td>{item.dateOfPurchase}</td>
								<td>{item.paymentId}</td>
							</tr>
						))
					}
				</tbody>
			</table>
			
		</div>
		
	)
	
	
}

export default HistoryPage
