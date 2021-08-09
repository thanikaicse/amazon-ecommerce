import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Cloth from "./component/product/cloths.js"
import Cookware from "./component/product/cookwares.js"
import Electronic from "./component/product/electronics.js"
import Furniture from "./component/product/furnitures.js"
import WP from "./component/cookware/waterpurifier.js"
import MR from "./component/cookware/mixierjar.js"
import Vessel from "./component/cookware/vessel.js"
import PS from "./component/cookware/pressurecooker.js"
import Shirt from "./component/cloth/shirt.js"
import Pant from "./component/cloth/pant.js"
import Sareer from "./component/cloth/sareer.js"
import Chudi from "./component/cloth/chudi.js"
import CT from "./component/furniture/computertable.js"
import DT from "./component/furniture/dinningtable.js"
import SS from "./component/furniture/sofaset.js"
import ST from "./component/furniture/studytable.js"
import Camera from "./component/electronic/camera.js"
import Laptop from "./component/electronic/laptop.js"
import MP from "./component/electronic/mobilephone.js"
import Printer from "./component/electronic/printer.js"



export default class adult extends Component {
    render() {
		return(
			<Router>
        <div>
        <form>
	<div class="Header">Amazon Shopping</div>
	
	<div class="bar1">
		<span>Menu</span>
		<span>Delivery</span>
		<span><input type="search"/></span>
		<span><input type="login"/></span>
		<span>Return</span>
		<span>Chart</span>
	</div>
	
	<div class="bar1">
		<span>TodaysDeal</span>
		<span>CustomerService</span>
		<span>GiftCard</span>
		<span>Sell</span>
		<span>AmazonResponsetoCovid-19</span>
	</div>
	
	<div class="bar1">
		<span>AmazoneLogin</span>
		<span>Login</span>
		<span>Create</span>
		<span>
			<label for="filter">select</label>
			<select name="filter" id="fil">
			<option value="select">Select</option>
			<option value="Men" onselect="men()">Men</option>
  			<option value="Women" onselect="women()">Women</option>
  			<option value="Child" onselect="child()">Child</option>
  			</select>
		</span>	
		<br></br>

	</div>

	<section class="sec">
		<span class="bar1">Exclusive Offers</span>
	<div class="sec1">
	{/* 	<Switch>
<Route  path="/product"> */}	{/*<link to="/electronics.js"><div id="electronic" class="product"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Arduino_ftdi_chip-1.jpg" class="pimg"/><span class="bitem">Electrionics</span></div></link>*/}
		<div id="electronic" class="product" onClick={Electronic}><img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Arduino_ftdi_chip-1.jpg" class="pimg"/><span class="bitem">Electrionics</span></div>
		<div id="cookware" class="product" onClick={Cookware}><img src="https://robbreport.com/wp-content/uploads/2020/04/71maiin-1rl._ac_sl1500_.jpg?w=1000" class="pimg"/><span class="bitem">Cookwares</span></div>
		<div id="cloth" class="product" onClick={Cloth}><img src="https://img1.exportersindia.com/product_images/bc-full/2019/6/4747320/fabric-cloth-1560924094-4959588.jpeg" class="pimg"/><span class="bitem">cloths</span></div>
		<div id="furniture" class="product" onClick={Furniture}><img src="https://images.financialexpress.com/2021/03/furniture-1.jpg" class="pimg"/><span class="bitem">Furnitures</span></div>
		{/* </Route> 
		</Switch>
 */}
	</div>
	<span class="bar1">Electronics</span>
	<div class="sec1">
		<div id="mobilephone" class="product" onClick={MP}><img src="https://www.ineedamobile.com/wp-content/uploads/2018/04/Refurbished-Mobile-Phones.png" class="pimg"/><span class="bitem">Mobile phone</span></div>
		<div id="laptop" class="product" onClick={Laptop}><img src="https://techcrunch.com/wp-content/uploads/2020/12/nokia-laptop.jpg" class="pimg"/><span class="bitem">Laptop</span></div>
		<div id="printer" class="product" onClick={Printer}><img src="https://cdn.thewirecutter.com/wp-content/uploads/2019/10/allinoneprinters-lowres-2x1-5889.jpg" class="pimg"/><span class="bitem">Printers</span></div>
		<div id="camera"  class="product" onClick={Camera}><img src="https://www.geeky-gadgets.com/wp-content/uploads/2014/02/sony-a6000-1.jpg" class="pimg"/><span class="bitem">Camera</span></div>
	</div>
	<span class="bar1">Cookwares</span>
	<div class="sec1">
		<div id="vessel" class="product" onClick={Vessel}><img src="https://content3.jdmagicbox.com/comp/chennai/n3/044pxx44.xx44.160513150139.d3n3/catalogue/smd-industries-korukkupet-chennai-stainless-steel-vessel-manufacturers-yya9t.jpg" class="pimg"/><span class="bitem">Vessels</span></div>
		<div id="ps" class="product" onClick={PS}><img src="https://c.ndtvimg.com/2020-11/d9g74aio_pressure-cooker_625x300_30_November_20.jpg	" class="pimg"/><span class="bitem">PressureCooker</span></div>
		<div id="wp" class="product" onClick={WP}><img src="https://www.mrright.in/ideas/wp-content/uploads/2014/10/Water-Purifiers.png" class="pimg"/><span class="bitem">WaterPurifier</span></div>
		<div id="mr" class="product" onClick={MR}><img src="https://www.ttkprestige.com/media/images/html/TTK_47623_Prestige-Ultimate-3-Jar-Mixer-Grinder-Red-750W-V1_Pkg.jpg" class="pimg"/><span class="bitem">MixierJar</span></div>
	</div>
	<span class="bar1">Cloths</span>
	<div class="sec1">
		<div id="shirt" class="product" onClick={Shirt}><img src="https://www.vitruvien.com/images/shop-shirt-banner-new.jpg" class="pimg"/><span class="bitem">Shirts</span></div>
		<div id="pant" class="product" onClick={Pant}><img src="https://usatsneakhype.files.wordpress.com/2009/02/stussy-dickies-work-pant3.jpg" class="pimg"/><span class="bitem">Pants</span></div>
		<div id="sareer" class="product" onClick={Sareer}><img src="https://thumbs.dreamstime.com/z/indian-saree-design-19704578.jpg" class="pimg"/><span class="bitem">sarees</span></div>
		<div id="chudi" class="product" onClick={Chudi}><img src="https://cdn.slidesharecdn.com/ss_thumbnails/mohinifashionglamourvol39presentingdesignerchuridaronlineforwomen-170923092829-thumbnail-4.jpg?cb=1506196877" class="pimg"/><span class="bitem">Chudi</span></div>
	</div>
	<span class="bar1">Furnitures</span>
	<div class="sec1">
		<div id="st" class="product" onClick={ST}><img src="data:image/jpeg;base64,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" class="pimg"/><span class="bitem">StudyTable</span></div>
		<div id="ss" class="product" onClick={SS}><img src="https://img1.exportersindia.com/product_images/bc-full/2019/12/4852280/luxury-sofa-set-1576642397-5211188.jpeg" class="pimg"/><span class="bitem">SofaSet</span></div>
		<div id="ct" class="product" onClick={CT}><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhIQExMVFRUVEhAPFRUVExYVFg8QFxYXGhUVFhUYHyggGBolGxUVITEhJSktLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGyslHR0vKy0tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xABPEAACAQECBgsKCwYFBQAAAAAAAQIDBBEFBhIhMdEHExRBUVJhcZGSkyJCU3JzgaGxssEWFyMkMjM0Q2Jjs3SDotLh8BVUgqPCNWSEw+L/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQMFBAIG/8QANBEBAAECAgYHCAMBAQEAAAAAAAECEQMEEjEzUXGBExQhMlKhsQUVQUJhYpHhIyTBIvDR/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFq1SmoSdNJzueSm7k5b15FV7dmtNNr9upp2GMPYRs+Q50qV05qnG5X909F/d5lnOOas1Hwp83bFGVn41f+5M5V8K79Oj0r+YXze6nzRbK76vJU6+FPB0r+eP8xN819vmi2V31PNtwpxKfTDWR/b+3zT/V+5ZrSws/oxgvPTItm99KYnKfVFUML4UnaKllWRtlOMZyzU8m5pNXPf8ApIf2r2vD1/UtftXMEYSwpaHUjCVNbXLJllKKz3vRdF3/AEWTbNb4eZnKx8JbZgSnalGW6Z05SvWTkLRG7OnmW+dGFGJEf9zHJzYs4cz/ABxPNJFqoAAAAAAAAAAAAClzXCukCl2iHGj1kReE2l5umHHj1kLwWk3TDjx6yF4LSbohx49ZC8FpN0w48esheC0m6YcePWQvBaTdMOPHrIXgtJumHHj1kLwWk3TDjx6yF4LSbphx49ZC8FpN0w48esheC0m6YcePWQvBaTdEOPHrIXgtJuiHHj1kLwWk3TDjx6yF4LSbphx49ZC8FpN0w48esheC0tXx5rRas10k/l4aGnd3cCKph6piWz7qp8ePWRN4ebSbqp8ePWQvBaTddPjw6yF4LSbrp8eHWQvBaWqYKrQ/xW2Syo3OlTz5SueamtJETF3qYnRhcxIqLLtbvWepDf5JayYRVDbUyXkAAAAAAAAAAAACKwpgfbpZW2OOa67Jv95y4+W6Wq+lMOrAzPRRbRujJYnp/fPqLWc/u6PFK/3hPhhG4fxd3PQqV41HNwUXkuNyd8ktN/KV42SjDomrS1LcHOTiVxTo62i1cNTX3a6z1HHFP1d0wos2GZyk1kJZr/pPhXJyl2Dl+kqtdTj4vRU6Vrsa14wTp1JU9rTuyXflNX3+YnGy3Rza71l8XpaZmYsxKuNs00tqWd3fTeorjB7Na6bQ9eNk9G1R0tfTeo9Tga+3U8RX2R9VSxrn4Jdd6jz0X1TMw8eNk/BLrvUT0X1ebixsn4KPXeodF9S71Y1z8FHrvUOj+qHvwqn4Jdd6h0f1BY0z8Euu9ROh9Sz34Uy8Euu9Q0PqWPhTLwS671DRRonwol4Jdo9ROgWUyxpfg4r949Q0JRaFDxr/AAQ7T+hPRyXhR8KZeCj13qI6L6gsaJP7laUvpvk5OU9dDq7daJqtf6Hwml4Jdd6jx0f1e16y4clOcYbWllX58pu70FmFl9ObXVY2L0dN7L2E8IulKMMhO9ZWm670DFy/Rza6MDG6SL2VYOtzq1qNHIUVUq0qOUnfk5c1G+67PdfeV0YWlVEX1rq6tGmZ3OkfF5H/ADEuz/8Ao7eoR4pZ/vCfC8+LvPerVNc0Lv8AkeoyVvmlE5+/yw3SzUsmEINuTjGMcp6ZXK69nbEWizgmbzddJQAAAAAAAAAAAABEY2xvslZckfaic+a2NToyu1pcjtVAxIltsexUflPM/WjuyU/ycnJntnzReGKXy9Tmp+pnvOd6EZCf+JRVahnXIc0T2OydbGr1YJq9pZ3dnz6eAvtMzVZRpRalVCtHP3S0lcxKy46sL/pLpFpLwqVSHGXSLSdipVIcZdJFpOxUqkONHpItKbw92yHGj0i0l4e7ZDjR6RaS5tkOMukWkNshxl0i0l1ubpvvl0nqNJ5my24UuGPSTepFoVUatNNX3SSbvWVdeudaBab9sInV2StUKsW7k02pRzX8qPcUz2PM1RaV1FS1I4DjfaKf+t+g6cr3nJnO4z8ZF8rHyf8AyeoZvvRwMj3J4r+AnGVssmTHJW6rJmvv0VYX5+k58O3SRbfC/EvGFVfdL6CNhhgAAAAAAAAAAAAAAACKxq+yVvFXtIozWxqX5ba0uUV2YLdhj2b6fmfuO7I7Tk489subAwxD5WT4Yw95bne9DxkO7KJqo5IdyqyWmnTjkOhTqO9vLmu6d7vub3z3XM1Te6qmjRiy4sKUr7ty0TzoTvem54iYu0LfCrOUIU9rnGF0YKV98b7850YOW6SJmZly5jMThTER8W0fFpZuGPZR1l3UY8Uufr1W578Wll5OyjrHUo8UnXqtx8Wtm4Y9ktY6lHik69VuefFrZuGPZLWT1KPFJ16rcfFrZuFdktY6lHik69VuPi1s3DHslrHUo8UnXqtzz4s7NwrslrHUo8UnXqtx8Wdm4V2S1jqUeKTr1W558WVm4Y9ktZHUo8UnXqtzmOMNSjZrTWs6oU5KlUlTymrnK7fu3jlrw5pqmLu7Dq0qIq3oK2W2nNK6jCm008qOnNy3E0Xpm6K6YqizGVQWWXTWLOesnwJ+lM6Mr3pcec7sL+M1T5deSh7UiM3H/ccE5LuTxXsU532yxr/uaHtplGDH8kL8ef46uD6HNdiAAAAAAAAAAAAAAAEJbMY4RvUIym02uLG/nef0HJXnMOmbR2uujKV1ds9jW8M4ZtNaEqdyjGSucYrO1yyfuuOTGzVVdM073Xg5aiiqJ+MNUqYPq8T0rWcNpd2lSxFZK8ZX7VKXNKHvaOnLVxh16UqMzT0lFqWHbbBaqk3LaJRVyWeVPev4JPhLMzi04kxMPGUonDiYqYc8B2p/dvrR1lETDpmYWZ4v2rifxR1nrTg7GPLAFoi75RyU3nba9x6iu/Yi0Or7DlJQp2qCvbVSne33zcODeO/KapZee70OiHW4QAAAAAAAAB89454N2632va78tV55UX32fTF+4zMabVy2cDZ03QfwatHg5dMdZT0i3sevF60L7qXTHWTpwdjNwTYLRRmpbRUkt+5w5eGS4S7BxaaZvMufMUTXFqV/CWD61aptjozj3Kjc5R3m33snwnjHxYqqvCcvRoU2lewVg2rSq06sYNSpzjUi277pLQ7t8qpxJibrq4pqpmJdMwbjxUVyr0k/xU3c+q8z6UdlOcj5nBVk/DLbcF4Tp14ZdNtpPJd6acZXX3O/nR14eJTXF6XJXh1UTapmHt4AAAAAAAAAAAAA4/supwqZVOUoXyhF5EnHvG9EWZOPERjzwhs5Sb4UXcltOErQvv63bVNZdRFM/CPwmtjQwraP8xW7aessmmndH4UxMrkcKWjw9btZ6zzNNO6Pw9xMq1hOv4et2s9ZGjG6Pwm8n+JV/D1u1nrI0Y3R+C8pPF22RnXhG1WqvTovLy5xrVL49xLJ4e+yVo3yymiidcQprrrjU2PAyk7LZ5ynKTnGbeVJy0Td2lnDXtKrO2ib0w6NsTLNbPKUfYZ25LVPFwe0NdPB0A7WeAAAAAAAAAOFW3/qVuf50vaeoysbvy2MLZ08Gt422upTruMKtSKyIu5VJLTfynnCiJpe6pa9UwpX8PW7WesvimN0PEzLGrYVtG9XrafCz1llNFO6PwrrmVLwtaPD1u1nrJ0Kd0fhF5IYWtF/19btZ6xNFO6PwRMpvF61Vp1YRlWqtOUb76k3mv5zlxoiI1Oih9JYo0oxslG5JXxvbuzyks17e+82k7svERhU8GVmJmcSUwXqQAAAAAAAAAAAAOPbMcu7/eR/S/qZGPt55NnJx/FHP1cdtpfhprYcC6VMLsWeJelSZCXt4S8bCHRsDfY7J5Ob/jZx17Spfh6nRNitfbPHoewzsyWqri4vaGulvx3M4AAAAAAAAAcNrwvwjbvLz9uRkYs/yVcW1hx/HTwafj7K61Nflw9cj1gR/wAlTWJSOiIeJWZnuHiVDPTzMS8hpEka214oL5WD5Y+tHDjumjU+ksVH80o+LL2maGX2VPBlZjaSli5SAAAAAAAAAAAABxnZjl8o/KL9KJkY23q5ejbymxjn6uQWtnRhwjEYcGXSohcjI8zD1D1TIsm73LFi7xzFh0vAy+aWTyL9pnDXtKnTh92HRNi3TbPGs/sSOzI6qnF7Q1082+nczQAAAAAAAABxOS+f239oqe3Ix8XaVcW3RsqeCIw/i4rTaJ1NsycikpSShlZNNSfdt35lfJIjCrq0bUxcq0Y7ZRMsWLOtNpXVu956nFrjsmCIie2FMsXrGtNqj0f1EYtadGNw8AWP/NQ6P6jpKzRjcLAFi/zUP7846TENGNzNwVgyhSqQdO0QlfKKybs7z72crrqmqO16iLO64nv5nR5p+3I1MtsqWPmNpKZL1IAAAAAAAAAAAAHF9lyzVKlaUadOU2qivyYt5K2uNzd2gyMWYjHqvO70ht5XYU8/Vzh4sWqWmlJc+8e4zFEPc4cyu0MU60lelm4VnPM5mDol9YoVeB9DPPWU9FCpYpVOB9DI6ydFDz4Kz4H0MdYT0UKfgvPgfQx1lMYMNpslLIo0KfFpuPnTKoq0qpne9aNuxvuxd9K2c9n9mRoZHVUzvaGunm347maAAAAAAAAAOKr7dbP2ir+pMxcTv1cZbtGzp4Qi8O2qcKtRQk4qpSVOd3fQyr7n54ojCrmjthM4cVx2oCq73ez1VVNU3l6poimLQxqsSISx5x0nqELdGOcmSE3gKnfVg+BplNcvU6nfMS38yo/vP1JmtltlDEzG1lNl6gAAAAAAAAAAAADnOMabtddK/vHmd3exMPMxfHq5ekNzK7Cnn6oWpGbzbXN3rjlejSvu8s1mksyhKK5Z3+8iqwydz8suszx2Dx2fll1gKdzLhl1hcUblXDLrEXShaULm1wTrJcyqO4upJb1sXfTtvPZvZmaOS1VM32h8vNvx3M0AAAAAAAAAcWp/bbZ+0Vv1JmJX36uM+rdp2dPCPRC4yL5Z+KvWyunUsp1IaSPaVmqiYGLU0vmXvPcPKiks4lMNixfj3af96UU1pnU7jiT9io/vP1JmvltlDEzO1lOF6gAAAAAAAAAAAADnmHPttblSfogYma21XL0beW2FPP1ljSZzrmOrSnmz9BNk2WpWnkfoIsPY1ryLJVtkClsJQsoXP/XWf+4y6hE6m57GH1lt/wDF9VQ0clqqZ3tD5ebfjuZoAAAAAAAAA4tQ+2Wv9orP/cmYlXfq4z6t2NnTwj0Q2MX1r8VetldOpZTqQ8ke0rFVEwMSrp8y957h5lTS0iUw2TAWleb1ooqTOp27EpfMqHNU/UkbGW2UMTM7WU4XqAAAAAAAAAAAAAOeYeV1uq8q/wCNIxM1tquXo2stsaefqx5XnOuWJqXAv784emHaMrMtrhct9JqT53F5y+MaLW0Y/CnobzfSn8sW9ppqLzX5llvK5L5M814kVxa0Rwe6MLRm95nivRts9G0yXO4lc0xvWLynJ7yXnbPCUdUWdPlqe2y6hE6m4bGX1lt5rL6qpoZL5uTO9ofLz/xvp3s0AAAAAAAAAcXsi+d2ry9X25mJV3quM+rdjZ08I9ELjB9a/FXrZXSsp1IiZ7SsVSYGBaJd1FcKl6LiymOyXiZ7YKOlkS9Q2jACzrm98SipM6nbcTVdY6PNP25Gzl9lDDzG1lNFykAAAAAAAAAAAADnmMf26p4q9imYmb21XL0bWV2NPP1liuRzr1OUQmylzQLLcpx32iE2WK1oS+i10k2TEKY2uO+0vORZNmFVkm01obqNddluG8zqbbsZfW23xbJ/7jSyXzcmd7Q+Xn/jfjuZoAAAAAAAAA4tYn86tXl6ntzMSrvVcZ9W78lPCPRCYwP5V+KveV06llOpEyZ7SsVmTAwbQs6fBeulf0LKdTzOso6SJTDasX1/fnRRVrTOp27FJfNKHit/xM2cvsqWHmNpKXLlIAAAAAAAAAAAAHOcbqd9snffoi80nHvI76aMXN9mLVy9G1lNjHP1Rbssfx9pPWct5dSl2SP4+0qfzEaQodij+LtJ6xpJupdhh+LtJ6xpBuOHL156ydKRS7NH8XXnrPOlIxZZslctRab+/e+y6hEtt2MX8tbPEsnrrGjkvm5M32hqp5/46Ad7NAAAAAAAAAHE7A/nNq8vU9uZiVd6eM+re+SnhHohMYH8s+aJXTqe6dSInI9pWK8vWeoRLFqvOe4hEqaLz+cSQ23F16PN7jnr1vU6nb8Vl80oeIn6WbOBs6eDCx9pVxSpcqAAAAAAAAAAAAA59jbmtj8WPsrUY2d2s8mzk9jHNGNnE6lLkEseVpV9xNgjXTzCwVJtK+6/m3wlhK2Sf3ctN1+8ucmaY3pWqks0eet+oz3Shtuxb9ba3+XZem+saWR+bkzfaOqnn/joZ3swAAAAAAAAAcPwdP5zavL1PbmYdfenjLejuU8IQWMNRbdLPvR9RFMdj3GpB2irouffItphEyotNTga6RTBMsWdRX6T3EPNyhMVQmJbfiw9HmOavW9fB3XFpfNbP5KHqNnA2dPCGHjbSriki1UAAAAAAAAAAAABz7HaeTalK5yvhHMle3meox87H8vJs5HZc0BG3N/dTXOkjkmn6uuy65t7yXnPKVis53KKVJpX6YO/pTRfTmJiIi0Tb6KZwImb3nt+qyqEr07oRud/cxd7525M8142lFrRHCE0YUUze8zxlmXPhXR/UpWvHEiUoivLNzTrL+NstpIdD2MLFk2V12s9abkvJxzR95rZKi1GlvY+fxNLE0fC3E7HCAAAAAAAAAOP4XsO58IWiCWabjXjyqV7d3M20Y2Zp0K5htZevTwond2NIxjtF1eSu3o+o8UU9i+JQzm/TfzFopmxCVmSPTyojmZOt5bnivvcy9Ry163v4O84BjdZrOvyaXso2sLuU8IYWL36uMs8sVgAAAAAAAAAAAAaJjrJK1Qva+qT9MjH9obSODYyGynj/wDGv1q92i5+c4rO2IUq0x32ukixZ7t0OFdItJaVuVogu+QtKbLTt9Nd96GToSKXhCnxvQ9RGhUIatPbXtVN3yqV3SjzzaXvLqaZvEEzFMTM/B3jB9kjSpU6UdEIRguZK43qaYpiIj4Pm66pqqmqfiyD08gAAAAAAAADSdkOwd1QtKWhujJ/heePpvM/P0dkVcmhka9dHNxTGF32ib8X2UctHdaDCjSb0Jnq4uxsknvEaUJV/wCHsjTTZW8G8hGmaKdxcjku57yfRcV1TeSY7He8Eq6hRX5VJfwo3aOymGBid6eLLPTwAAAAAAAAAAAABAYZxWpWibqSedpLPGMtCS3+Y48bJxiV6V5h14Ocqw6dGIaxS2Oqjk1OdnjC991ClLLu3rk3cvSVxkPuld7xnw+aQp7HNBJLLT5XSjn9JM5CPFJ7wq8MPXsdUOMuyjrI6h90nvCfC9Wx3RWiaX7pax1D7pPeE+E+L2l4T/bWsj3f90nvCfCwcIbHk0k6E6UnnvVVSgruRwyvUOofd5J94/b5s7FzESNGpC0VXB1ItyyacboZV1ybk88rvMW4WTiiqKpqvZXjZ6rEommItduh2OEAAAAAAAAAAMPC2D416UqUtDuz3X3NchXi4cYlM0yswsScOqKoc2wxsc2nLkqELLKDWac6s6Uk+WEaU83+o44yMx83l+3Z177fP9JKhsaXRSdaLdyv+Senf74TkZn5vL9p6/8Ab5/pX8W/50ezf8xHUJ8Xl+zr/wBvn+nj2N/zo9m/5h1CfF5fs6/9vn+lq2bHM1CTpzpznvRmpU4yfLNZTXVY6hPi8v2df+3z/TEwTse2mWVt6o0brsnIqSrOXDenGGTvb78w6hPi8v2df+3z/To+DLJtVKnRysrIhGGU1dfdybx30U6NMU7nBXVpVTO9lHp5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q==" class="pimg"/><span class="bitem">ComputerTables</span></div>
		<div id="dt" class="product" onClick={DT}><img src="https://i.pinimg.com/564x/24/5e/1d/245e1dbd027f2732e86ddce058334631.jpg" class="pimg"/><span class="bitem">DinningTable</span></div>
	</div>
	</section>
	
	<div class="Footer">AmazonServiceSpecification</div>

	<div class="Footer">CustomerServiceupport</div>
</form>
	
	<Route exact path="/electronics.js" Component={Electronic}></Route>
    </div>        
	</Router>        
        
        )
    }
}

