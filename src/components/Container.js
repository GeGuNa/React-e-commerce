import React from 'react';
import { Link } from 'react-router';
import Footer from './Footer.js' 
 
 
export default function Container({children}){ 

const iconSize = 25;

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
	
	<div class="mh_1q">
	
	
	
		<div>
		
		
			<div class="mn1_hdrflx1">
			
				<div>
							 <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><path d="m9 10 2 2 4-4"></path></svg>  Georgia 
				
				 </div>
				
				<div> 
					
						
		<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Mail"><path d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm-14.87,1h14.87a1.489,1.489,0,0,1,1.49,1.39c-2.47,1.32-4.95,2.63-7.43,3.95a6.172,6.172,0,0,1-1.06.53,2.083,2.083,0,0,1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26-1.14-.6-2.3-1.21-3.44-1.82A1.491,1.491,0,0,1,4.565,5.065Zm16.37,12.37a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V7.6c2.36,1.24,4.71,2.5,7.07,3.75a5.622,5.622,0,0,0,1.35.6,2.872,2.872,0,0,0,2-.41c1.45-.76,2.89-1.53,4.34-2.29,1.04-.56,2.07-1.1,3.11-1.65Z"></path></g></svg>  Admin@EbebeShop.Com
				
				</div>
				
					<div>
					
							<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708"></path></svg>
		
		+999 999 11 22 333
					 </div>
			
			</div>
			
			
			
		
	
		
	
		
		
		
		
		</div>
		<div>
		     <div class="forrightSide">
		     
			<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
			
			
			
			<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
			
			<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
		 </div>
		 
		 </div>
	</div>



	
	
	
	
	
	
	{/* */}
	
	

	<div className="fr_line2">
		<div> 
			<div className="">
				<div className="fntMS123"> <img style={{  maxWidth: '50px', borderRadius: '50%'}} src="/images/757a7fa2-2071-44dc-9051-59d4d92fa312.jpeg" alt="zzz"/></div>
			</div>
		</div>
	
	
		<div className="wi2180px"> 
			<div className="Awsrch1">
			
				<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"></path></svg>
			
			
				<input  placeholder="Search" class="fltext13" style={{width:'100%'}}/>
			</div>
			
			
		</div>
		
	
	
		
		<div class="wi280px">
		
			<div className="hdrlfex1">
			
			
			
				<Link class="BtnsForNav2zq" to="/"> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height={iconSize} width={iconSize} xmlns="http://www.w3.org/2000/svg"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"></path></svg></Link>
				
				<Link class="BtnsForNav2zq" to="/">	<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height={iconSize} width={iconSize} xmlns="http://www.w3.org/2000/svg"><path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg> </Link>
		
		
	<Link class="BtnsForNav2zq awcart" to="/">	
		
	
		
		<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height={iconSize} width={iconSize} xmlns="http://www.w3.org/2000/svg"><circle cx="176" cy="416" r="16" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="400" cy="416" r="16" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 80h64l48 272h256"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"></path></svg> Cart


</Link>
		</div>
		</div>
	
	</div>	
	
	
	
				<div class="flx1_horizCatlinks"> 
					<Link to="/" className="Acolor">wwqeqw</Link><Link to="/" className="Acolor">wwqeqw</Link><Link to="/" className="Acolor">wwqeqw</Link><Link to="/" className="Acolor">wwqeqw</Link><Link to="/" className="Acolor">wwqeqw</Link><Link to="/" className="Acolor">wwqeqw</Link><Link to="/" className="Acolor">wwqeqw</Link><Link to="/" className="Acolor">wwqeqw</Link><Link to="/" className="Acolor">wwqeqw</Link><Link to="/" className="Acolor">wwqeqw</Link><Link to="/" className="Acolor">wwqeqw</Link><Link to="/" className="Acolor">wwqeqw</Link>
				</div>	
	
	
		
	
	
	
	{/* */}
	
	
	
	
<div class="">

	{children}

</div>	



	{/* 
	
<div className="NWE115">
		
				<div className="row">
				
						<div className="col-sm-6 col-lg-6 col-xl-6">
						
							Left
						
						</div>
						
						
						<div className="col-sm-6 col-lg-6 col-xl-6">
						Right
						
						</div>
				
				
				</div>	
					
		
		</div>
		
	 */}
			
		
		
		
		
		
		
{/*  <Footer> </Footer>*/}		
		
	
  
    <Footer /> 
	
	
	{/**/}	
		
			

	</>)
}


