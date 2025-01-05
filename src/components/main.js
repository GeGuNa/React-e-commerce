import React from 'react';
import { Link } from 'react-router';
import Container from './Container.js' 

 
export function Main(){ 



const Main_category = [
	{ id: 1, name: "PC Fans", price: "$10", pics: '/cats/ZSo7H5sfNrb4MKx8PxmddZ-1200-80.jpg' },
	{ id: 2, name: "PC RAM", price: "$15", pics: '/cats/download (2).jpeg' },
	{ id: 3, name: "Motherboards", price: "$20", pics: '/cats/asus-z790-dark-hero-lga1700-motherboard.webp' },
	{ id: 4, name: "PC disk drives", price: "$20", pics: '/cats/images (1).jpeg' },
	{ id: 5, name: "Headphones", price: "$20", pics: '/cats/4hU7T5fQYWbnU5vxHZnAZE.jpg' },
	{ id: 6, name: "Power supply", price: "$20", pics: '/cats/images (3).jpeg' },
	
];




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

	
	
	
	
	<Container>
	

{/*	<div class="f_1p13"></div>*/ }
	
	<div class="hmImage">
		<div class="hmTextOverImage">
    			<h1>The best shop ever</h1>
    			<h5>Welcome friend</h5>
    			<button>Fresh Vegetables</button>
		</div>
	 </div>
	
	

<div class="MN_dets1">


	<div class="flx_1qq1">
	
		<div> 
			<div class="flx_1qqdiv">
			
			
				<div class="disp_mn_hrd123z">
				
				<div class="pallcnterslfc"> <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path><path d="M3 9l4 0"></path></svg>  </div>
				
					<div>
							<div class="pLinkBold"> Free Delivery </div>
							<div class="pLinkRegular"> Orders from all items	 </div>
					</div>
				
				</div>
			
				
				
			</div>
		
		 </div>
		 
	
			<div> 
			
			<div class="flx_1qqdiv">
			
				<div class="disp_mn_hrd123z">
				
						<div class="pallcnterslfc">	<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M10.75 10.818v2.614A3.13 3.13 0 0 0 11.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 0 0-1.138-.432ZM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 0 0-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152Z"></path><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-6a.75.75 0 0 1 .75.75v.316a3.78 3.78 0 0 1 1.653.713c.426.33.744.74.925 1.2a.75.75 0 0 1-1.395.55 1.35 1.35 0 0 0-.447-.563 2.187 2.187 0 0 0-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 1 1-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 1 1 1.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 0 1-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 0 1 1.653-.713V4.75A.75.75 0 0 1 10 4Z" clip-rule="evenodd"></path></svg> </div>
					
				
				<div>
					<div class="pLinkBold"> Secure payment</div>
					<div class="pLinkRegular"> With local payment methods	 </div>
				</div>
		
		</div>	
			
			
	
		
		
			</div>
		
		 </div>	 
	
	
	
	
	
	
	
	
	
	
		<div> 
			<div class="flx_1qqdiv">
			
			
			<div class="disp_mn_hrd123z">
				
					<div class="pallcnterslfc"> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M12.0049 2C17.5277 2 22.0049 6.47715 22.0049 12C22.0049 17.5228 17.5277 22 12.0049 22C9.57847 22 7.3539 21.1358 5.62216 19.6985L5.37815 19.4892L6.27949 17.5875C7.73229 19.0759 9.76067 20 12.0049 20C16.4232 20 20.0049 16.4183 20.0049 12C20.0049 7.58172 16.4232 4 12.0049 4C7.66997 4 4.14034 7.44784 4.00869 11.7508L4.00488 12H6.50488L3.79854 17.7161C2.66796 16.096 2.00488 14.1254 2.00488 12C2.00488 6.47715 6.48204 2 12.0049 2ZM13.0049 6V8H15.5049V10H10.0049C9.72874 10 9.50488 10.2239 9.50488 10.5C9.50488 10.7455 9.68176 10.9496 9.91501 10.9919L10.0049 11H14.0049C15.3856 11 16.5049 12.1193 16.5049 13.5C16.5049 14.8807 15.3856 16 14.0049 16H13.0049V18H11.0049V16H8.50488V14H14.0049C14.281 14 14.5049 13.7761 14.5049 13.5C14.5049 13.2545 14.328 13.0504 14.0948 13.0081L14.0049 13H10.0049C8.62417 13 7.50488 11.8807 7.50488 10.5C7.50488 9.11929 8.62417 8 10.0049 8H11.0049V6H13.0049Z"></path></svg>  </div>
					
					<div>
					<div class="pLinkBold"> Return & Refund </div>
					<div class="pLinkRegular"> Orders from all items	 </div>
					</div>
		
		
		</div>	
			
			
			</div>
		
		 </div>
		 
		 
	{/*	 
		 		<div> 
			<div class="flx_1qqdiv">
				<div class="pLinkBold"> Member Discount </div>
				<div class="pLinkRegular"> Orders from all items	 </div>
			</div>
		
		 </div>
		*/} 
	
		 
		 
		 		<div> 
			<div class="flx_1qqdiv">
			
			
		<div class="disp_mn_hrd123z">
				
						<div class="pallcnterslfc">	 
						
						<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"></path><circle cx="9" cy="13" r="1"></circle><circle cx="15" cy="13" r="1"></circle><path d="M18 11.03A6.04 6.04 0 0 0 12.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 0 0 4.86-5.89c1.31 2.63 4 4.44 7.12 4.47z"></path></svg> </div>
				
						<div>
							<div class="pLinkBold"> Support 24/7/365 </div>
							<div class="pLinkRegular"> Orders from all items	 </div>
						</div>
				
				</div>
				
			</div>
		
		 </div>
		 
		
		
	</div>
	
</div>	
	

	
		<div class="main_cntr">
	
	
	
	
{/* */}	


<div class="responsive-container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
    <div class="item">Item 7</div>
    <div class="item">Item 8</div>
    <div class="item">Item 9</div>
    <div class="item">Item 10</div>
</div>
	
	
	
	
{/**/}
	
	
	
	
	
	
	
	
	
	<div className="MainHS1">
	
<div className="NWE115">

<h2 style={{textAlign:'center'}} className="h21">

	<div class="">Categories to explore</div>
	
	</h2>

<div className="row rg1ap">


{/*
	
	
		{ id: 1, name: "Marketing", price: "$10" },
	*/}

{Main_category.map((data, key)=> (<>
	<div key={key} className="col-6 col-md-4 col-lg-2">

		<div className="Maincsatcategory">
			
			<div>
				<img className="n_img1" src="/cats/download.jpeg" alt=""/>
			</div>
			{/*
			<div className="pZindexingObjects">
				<Link to="/">{data.name}</Link>
			</div>*/}
			
			<div className="">
				<Link to="/" class="pcnt125">{data.name}</Link>
				<p class="pcnt12">6 products</p>
			</div>
		</div>

	</div>

</>))}

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


<h4 className="pcntermx1">The best products</h4>

<div className="row gap_151">



{Categories.map((value,index)=> (<>
<div className="col-sm-4 col-lg-2 col-xl-2">

<div className="p12G12">

<div class="flx_11q">
	<img alt="" src="/icons/Headphone_1x._SY116_CB566164844_.jpg"/>
	<Link to="/" class="pcnt125"> Headphones </Link>
	<div>15 reviews</div>
</div>


<div>$15</div>
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
	
	
	</div>	
		
			
	
	
</Container>
	
	</>)
}


