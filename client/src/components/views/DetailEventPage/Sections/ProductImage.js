import React, { useState, useEffect } from 'react'
import ImageGallery from 'react-image-gallery';

function ProductImage(props) {
	const [Images, setImages] = useState([])
	useEffect(() => {
		if (props.detail.images && props.detail.images.length > 0) {
			let images = [];
			props.detail.images.map(item => {
				console.log(item);
				images.push({
					original: `http://15.164.163.196:80/api/${item}`,		//해당 ec2 인스턴스 퍼블릭 주소:PORT 번호를 이곳에 작성해야 이미지가 정상적으로 업로드됨.
					thumbnail: `http://15.164.163.196:80/api/${item}`
				})
			})
			setImages(images);
		}
	}, [props.detail])

	// image는 포스터 한 개만 있다고 가정
	return (
		<div>
			{Images.length > 0 &&
				<div >
				<img src={Images[0].original} style={{width: '100%', maxHeight:'400px'}} />
			</div>
			}
		</div>
		
	)
}

export default ProductImage
