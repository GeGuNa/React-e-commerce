import React from 'react';
import { Link } from 'react-router';
 
export function Main(){ 








const Categories = [
	{ id: 1, name: "Marketing", price: "$10" },
	{ id: 2, name: "Marketing", price: "$15" },
	{ id: 3, name: "Marketing", price: "$20" },
	{ id: 4, name: "Marketing", price: "$20" },
	{ id: 5, name: "Marketing", price: "$20" },
	{ id: 6, name: "Marketing", price: "$20" },
	{ id: 7, name: "Marketing", price: "$20" },
	{ id: 8, name: "Marketing", price: "$20" },
	{ id: 9, name: "Marketing", price: "$20" },
	{ id: 10, name: "Marketing", price: "$20" },
	{ id: 11, name: "Marketing", price: "$20" },
	{ id: 12, name: "Marketing", price: "$20" },
];



const Products = [
	{ id: 1, name: "ProductAProductAProductA", price: "$10" },
	{ id: 2, name: "ProductB", price: "$15" },
	{ id: 3, name: "ProductC", price: "$20" },
	{ id: 4, name: "ProductC", price: "$20" },
	{ id: 5, name: "ProductC", price: "$20" },
	{ id: 6, name: "ProductC", price: "$20" },
	{ id: 7, name: "ProducC", price: "$20" },
	{ id: 8, name: "ProductC", price: "$20" },
	{ id: 9, name: "ProductC", price: "$20" },
	{ id: 10, name: "ProductC", price: "$20" },
	{ id: 11, name: "ProductC", price: "$20" },
];


const LatestCats = [
	{ id: 1, name: "Beauty", pic: "/icons/CE24_SUM_GW_DQC_NW_GamingWeek_PC_v2_1x._SY116_CB558844445_ (1).jpg" },
	{ id: 2, name: "Electronics", pic: "/icons/CE24_SUM_GW_DQC_NW_GamingWeek_PC_v2_1x._SY116_CB558844445_ (1).jpg" },
	{ id: 3, name: "Fashion", pic: "/icons/CE24_SUM_GW_DQC_NW_GamingWeek_PC_v2_1x._SY116_CB558844445_ (1).jpg" },
	{ id: 4, name: "Home", pic: "/icons/CE24_SUM_GW_DQC_NW_GamingWeek_PC_v2_1x._SY116_CB558844445_ (1).jpg" },
	{ id: 5, name: "Home", pic: "/icons/CE24_SUM_GW_DQC_NW_GamingWeek_PC_v2_1x._SY116_CB558844445_ (1).jpg" },
	{ id: 6, name: "Home", pic: "/icons/CE24_SUM_GW_DQC_NW_GamingWeek_PC_v2_1x._SY116_CB558844445_ (1).jpg" },
	{ id: 7, name: "Home", pic: "/icons/CE24_SUM_GW_DQC_NW_GamingWeek_PC_v2_1x._SY116_CB558844445_ (1).jpg" },
	{ id: 8, name: "Home", pic: "/icons/CE24_SUM_GW_DQC_NW_GamingWeek_PC_v2_1x._SY116_CB558844445_ (1).jpg" },
	{ id: 9, name: "Home", pic: "/icons/CE24_SUM_GW_DQC_NW_GamingWeek_PC_v2_1x._SY116_CB558844445_ (1).jpg" },
	{ id: 10, name: "Home", pic: "/icons/CE24_SUM_GW_DQC_NW_GamingWeek_PC_v2_1x._SY116_CB558844445_ (1).jpg" },
];





	return (<>
	
	



	<div className="First_LineH">
	
		<div> 
			<div className="HeaderLink">
			
				<div className="white"> Hi, guest!</div>
			
			
			
		
		
		
				
			</div>
		</div>
		
		<div>
		
			<div className="HeaderLink">
				<Link to="/"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
			 Best sellers</Link>
			
			
			
				<Link to="/"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM403.029 192H360v-60c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v60h-43.029c-10.691 0-16.045 12.926-8.485 20.485l67.029 67.029c4.686 4.686 12.284 4.686 16.971 0l67.029-67.029c7.559-7.559 2.205-20.485-8.486-20.485z"></path></svg> Cart</Link>
				
				<Link to="/"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path></svg> Sign in</Link>
		
		

		</div>
		</div>
	
	</div>	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	<div className="header">
	
		<div> 
			<Link to="/" className="Acolor">
				<div className="Home_Pic"> </div> 
			</Link>
		</div>
		
		<div> 
			<div className="drhrighr2">
				<Link to="/">Sign in</Link>
				<Link to="/">Sign up</Link>
			</div>
		</div>
		
		
	</div>
	
	
	<div className="SRoundeDDivs_mnmm">
	
	<div className="Title">All for you</div>
	
<div className="SRoundeDDivs">
	<Link to="/" className="active">Saved </Link>	
	<Link to="/">Motors</Link>	
	<Link to="/">Fashion</Link>	
	<Link to="/">Sports</Link>	
	<Link to="/">Phones</Link>	
	<Link to="/">Explore</Link>	
</div>	

		

	
	</div>
	
	
	
	
	

<div className="PProducts">

{Products.map((value,key) => (<>

<div>
	<div className="pbf">
		<img alt="" src="/shop/59ed820d-c060-4546-b963-b8fd36619340.webp"/>
		<Link to="/"> Usb disk drive</Link>
		<div className="bl">   {value.price}  </div>
	 </div>
 </div>

</>))}

</div>	
	
	
	
	
<div className="NWE115">


<h4 className="phtc">The best products</h4>

<div className="row gap_151">



{Categories.map((value,index)=> (<>
<div className="col-sm-4 col-lg-2 col-xl-2">

<div className="p12G12">

<img alt="" src="/icons/Headphone_1x._SY116_CB566164844_.jpg"/>
<Link to="/"> Headphones </Link>

</div>


</div>	
	
</>))}

</div>


</div>	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

<div className="YmayLike">



<h4> Additional items to explore </h4>


<div className="New_Books">


{LatestCats.map((value,key) => (<>

<div className="">

<Link to="/" >
	<img alt="" src="/icons/books/71IvxSNVoaL._AC_SY200_.jpg" />
</Link>
 
 
 </div>

</>))}





</div>

</div>
	
	
	
	
	
	
	
<div className="latest_arrivals">	
	
<div className="SpaceBetween mr15 alcenter">

	<div><h4>	Discover the latest arrivals </h4> </div>

<div>

<div className="FeaturedFLex">	
	<Link className="ActiveFeaturedLinks" to="/">All</Link>
	<Link className="ActiveFeaturedLink" to="/">Used</Link>
	<Link className="ActiveFeaturedLink" to="/">New</Link>
	<Link className="ActiveFeaturedLink" to="/">Old</Link>
</div>
	
	
</div>


</div>	




	
	<div className="row gap15">

{LatestCats.map((value,key) => (<>

<div className="col-sm-6 col-lg-4 col-xl-3">

	<div className="item">
		<div className="Flexing">
			<img alt="" src={value.pic} />
			<Link className="item-links" to="/"> {value.name} </Link>
		</div>
	</div>
 
 
 </div>

</>))}

</div>	
	
	
	
	</div>	
	
	
	
<div className="NWE115">

<div className="row">

<div className="col-sm-6 col-lg-6 col-xl-6">

	qweqwe

</div>


<div className="col-sm-6 col-lg-6 col-xl-6">
qweqwe

</div>


</div>	
	
	
	</div>	
	
	
	
	</>)
}


