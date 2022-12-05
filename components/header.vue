<template>
	<title>Thorada E-Commerce</title>
    <div>
        	<!-- Header Container  -->
	<header id="header" class=" variantleft type_1">
<!-- Header Top -->
<div class="header-top ">
	<div class="container">
		<div class="row">
			<div class="header-top-left form-inline col-sm-6 col-xs-12 ">
				<div class="form-group languages-block ">
					<form action="index.html" method="post" enctype="multipart/form-data" id="bt-language">
						<a class="btn btn-xs dropdown-toggle" data-toggle="dropdown">
							<span class="">English</span>   
							<span class="fa fa-angle-down"></span>
						</a>
						<ul class="dropdown-menu">
							<li><a href="#">English</a></li>
							
						</ul>
					</form>
				</div>

				<div class="form-group currencies-block">
					<form action="index.html" method="post" enctype="multipart/form-data" id="currency">
						<a class="btn btn-xs dropdown-toggle" data-toggle="dropdown">
							<span class="icon icon-credit "></span> Indian Rupee <span class="fa fa-angle-down"></span>
						</a>
						<ul class="dropdown-menu btn-xs">

							<li><a href="#"><i class="fa fa-indian-rupee-sign"></i> Rupee</a></li>
							

						</ul>
					</form>
				</div>
			</div>
			<div class="header-top-right collapsed-block text-right  col-sm-6 col-xs-12 ">
				<h5 class="tabBlockTitle visible-xs">More<a class="expander " href="#TabBlock-1"><i class="fa fa-angle-down"></i></a></h5>
				<div class="tabBlock" id="TabBlock-1">
					<ul class="top-link list-inline">
						<li class="account" id="my_account">
							<a href="#" title="My Account" class="btn btn-xs dropdown-toggle" data-toggle="dropdown"> <span >My Account</span> <span class="fa fa-angle-down"></span></a>
							

							<ul class="dropdown-menu" v-if="!isLogged">
								
								<li><nuxt-link v-model="register" to="/register"><i class="fa fa-user" v-if="isLogged"></i> Register</nuxt-link>
								</li>
								
								<li><nuxt-link to="/login"><i class="fa fa-pencil-square-o" v-if="userName == ''"></i> Login</nuxt-link>
								</li>
							</ul>

							<ul class="dropdown-menu" v-if="isLogged">
								
								<li>
									<a href="javascript:void(0)" >{{ userName }}</a>
								</li>
								<li>
									<a href="#"><b>Profile</b></a>
								</li>
								<li>
									<a @click="doLogout()"><i class="fa fa-power-off"></i><b> Logout</b></a>
								</li>
							</ul>

						</li>
						
						<li class="wishlist" id="wishlist-total" title="Wish List (2)"><nuxt-link to="/wishlist"> Wish List</nuxt-link></li>
						<li class="checkout"><nuxt-link to="/checkout" class="top-link-checkout" title="Check Out"> Check Out</nuxt-link></li>
						<li class="login"><nuxt-link to="/shopping-cart"  title="Shopping Cart"> Shopping Cart</nuxt-link></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- //Header Top -->

<!-- Header center -->
<div class="header-center left">
	<div class="container">
		<div class="row">
			<!-- Logo -->
			<div class="navbar-logo col-md-3 col-sm-12 col-xs-12">
				<a href="/"><img width="120" src="https://tse2.mm.bing.net/th?id=OIP.gzF-XStMXPZP-gWr6bA7MwHaFe&pid=Api&P=0" title="Your Store" alt="Your Store" /></a>
			</div>
			<!-- //end Logo -->

			<!-- Search -->
			<div id="sosearchpro" class="col-sm-7 search-pro">
				<form method="GET" action="index.html">
					<div id="search0" class="search input-group">
						<div class="select_category filter_type icon-select">
							<select class="no-border" name="category_id">
								<option value="0">All Categories</option>
								<option value="78">Apparel</option>
								<option value="77">Cables &amp; Connectors</option>
								<option value="82">Cameras &amp; Photo</option>
								<option value="80">Flashlights &amp; Lamps</option>
								<option value="81">Mobile Accessories</option>
								<option value="79">Video Games</option>
								<option value="20">Jewelry &amp; Watches</option>
								<option value="76">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Earings</option>
								<option value="26">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wedding Rings</option>
								<option value="27">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Men Watches</option>
							</select>
						</div>

						<input class="autosearch-input form-control" type="text" value="" size="50" autocomplete="off" placeholder="Search" name="search">
						<span class="input-group-btn">
						<button type="submit" class="button-search btn btn-primary" name="submit_search"><i class="fa fa-search"></i></button>
						</span>
					</div>
					<input type="hidden" name="route" value="product/search" />
				</form>
			</div>
			<!-- //end Search -->

			<!-- Secondary menu -->
			<div class="col-md-2 col-sm-5 col-xs-12 shopping_cart pull-right">
				<!--cart-->
				<div id="cart" class=" btn-group btn-shopping-cart">
					<a data-loading-text="Loading..." class="top_cart dropdown-toggle" data-toggle="dropdown">
						<div class="shopcart">
							<span class="handle pull-left"></span>
							<span class="title">My cart</span>
							<p class="text-shopping-cart cart-total-full">{{ cartItems.length }} item(s) - Rs. {{ totalCartAmount }}/- </p>
						</div>
					</a>

					<ul class="tab-content content dropdown-menu pull-right shoppingcart-box" role="menu">
						
						<li>
							<table class="table table-striped">
								<tbody>
									<tr v-for="(item, index) in cartItems" >
										<td class="text-center" style="width:70px">
											<a href="product.html"> <img :src="item.image" style="width:70px" alt="Filet Mign" title="Filet Mign" class="preview"> </a>
										</td>
										<td class="text-left"> <a class="cart_product_name" href="product.html">{{item.title}}</a> </td>
										<td class="text-center"> x{{item.qty}} </td>
										<td class="text-center"> Rs. {{item.price}} /- </td>
										<td class="text-right">
											<a href="product.html" class="fa fa-edit"></a>
										</td>	
										<td class="text-right">
											<a @click="removeItemFromCart(index)" class="fa fa-times fa-delete"></a>
										</td>
									</tr>
									
								</tbody>
							</table>
						</li>
						<li>
							<div>
								<table class="table table-bordered">
									<tbody>
										<tr>
											<td class="text-left"><strong>Total</strong>
											</td>
											<td class="text-right">Rs. {{ totalCartAmount }}/-</td>
										</tr>
									</tbody>
								</table>
								<p class="text-right"> <nuxt-link class="btn view-cart" to="/shopping-cart"><i class="fa fa-shopping-cart"></i>View Cart</nuxt-link>&nbsp;&nbsp;&nbsp; <nuxt-link class="btn btn-mega checkout-cart" to="/checkout"><i class="fa fa-share"></i>Checkout</nuxt-link> </p>
							</div>
						</li>
					</ul>
				</div>

				<!--//cart-->
			</div>
		</div>

	</div>
</div>
<!-- //Header center -->

<!-- Header Bottom -->
<div class="header-bottom">
	<div class="container">
		<div class="row">
			
			<div class="sidebar-menu col-md-3 col-sm-6 col-xs-12 ">
				<div class="responsive so-megamenu ">
					<div class="so-vertical-menu no-gutter ">
						<nav class="navbar-default">	
							
							<div class="container-megamenu vertical open">
								<div id="menuHeading">
									<div class="megamenuToogle-wrapper">
										<div class="megamenuToogle-pattern">
											<div class="container">
												<div>
													<span></span>
													<span></span>
													<span></span>
												</div>
												All Categories							
												<i class="fa pull-right arrow-circle fa-chevron-circle-up"></i>
											</div>
										</div>
									</div>
								</div>
								<div class="navbar-header">
									<button type="button" id="show-verticalmenu" data-toggle="collapse" class="navbar-toggle fa fa-list-alt">
										
									</button>
									All Categories		
								</div>
								<div class="vertical-wrapper" >
									<span id="remove-verticalmenu" class="fa fa-times"></span>
									<div class="megamenu-pattern">
										<div class="container">
											<ul class="megamenu">
												<li class="item-vertical style1 with-sub-menu hover">
													<p class="close-menu"></p>
													<a href="#" class="clearfix">
														<img src="image/theme/icons/9.png" alt="icon">
														<span>Automotive &amp; Motocrycle</span>
														<b class="caret"></b>
													</a>
													<div class="sub-menu" data-subwidth="100" >
														<div class="content" >
															<div class="row">
																<div class="col-sm-12">
																	<div class="row">
																		<div class="col-md-4 static-menu">
																			<div class="menu">
																				<ul>
																					<li>
																						<a href="#"  class="main-menu">Apparel</a>
																						<ul>
																							<li><a href="#" >Accessories for Tablet PC</a></li>
																							<li><a href="#" >Accessories for i Pad</a></li>
																							<li><a  href="#" >Accessories for iPhone</a></li>
																							<li><a href="#" >Bags, Holiday Supplies</a></li>
																							<li><a href="#" >Car Alarms and Security</a></li>
																							<li><a href="#" >Car Audio &amp; Speakers</a></li>
																						</ul>
																					</li>
																					<li>
																						<a href="#"  class="main-menu">Cables &amp; Connectors</a>
																						<ul>
																							<li><a href="#" >Cameras &amp; Photo</a></li>
																							<li><a href="#" >Electronics</a></li>
																							<li><a href="#" >Outdoor &amp; Traveling</a></li>
																						</ul>
																					</li>
																				</ul>
																			</div>
																		</div>
																		<div class="col-md-4 static-menu">
																			<div class="menu">
																				<ul>
																					<li>
																						<a href="#"  class="main-menu">Camping &amp; Hiking</a>
																						<ul>
																							<li><a href="#" >Earings</a></li>
																							<li><a href="#" >Shaving &amp; Hair Removal</a></li>
																							<li><a href="#" >Salon &amp; Spa Equipment</a></li>
																						</ul>
																					</li>
																					<li>
																						<a href="#" class="main-menu">Smartphone &amp; Tablets</a>
																						<ul>
																							<li><a href="#" >Sports &amp; Outdoors</a></li>
																							<li><a href="#" >Bath &amp; Body</a></li>
																							<li><a href="#" >Gadgets &amp; Auto Parts</a></li>
																						</ul>
																					</li>
																				</ul>
																			</div>
																		</div>
																		<div class="col-md-4 static-menu">
																			<div class="menu">
																				<ul>
																					<li>
																						<a href="#"  class="main-menu">Bags, Holiday Supplies</a>
																						<ul>
																							<li><a href="#" onclick="window.location = '18_46';">Battereries &amp; Chargers</a></li>
																							<li><a href="#" onclick="window.location = '24_64';">Bath &amp; Body</a></li>
																							<li><a href="#" onclick="window.location = '18_45';">Headphones, Headsets</a></li>
																							<li><a href="#" onclick="window.location = '18_30';">Home Audio</a></li>
																						</ul>
																					</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</li>
												<li class="item-vertical">
													<p class="close-menu"></p>
													<a href="#" class="clearfix">
														<img src="image/theme/icons/10.png" alt="icon">
														<span>Electronic</span>
														
													</a>
												</li>
												<li class="item-vertical with-sub-menu hover">
													<p class="close-menu"></p>
													<a href="#" class="clearfix">
														<span class="label"></span>
														<img src="image/theme/icons/3.png" alt="icon">
														<span>Sports &amp; Outdoors</span>
														<b class="caret"></b>
													</a>
													<div class="sub-menu" data-subwidth="60" >
														<div class="content">
															<div class="row">
																<div class="col-md-6">
																	<div class="row">
																		<div class="col-md-12 static-menu">
																			<div class="menu">
																				<ul>
																					<li>
																						<a href="#" onclick="window.location = '81';" class="main-menu">Mobile Accessories</a>
																						<ul>
																							<li><a href="#" onclick="window.location = '33_63';">Gadgets &amp; Auto Parts</a></li>
																							<li><a href="#" onclick="window.location = '24_64';">Bath &amp; Body</a></li>
																							<li><a href="#" onclick="window.location = '17';">Bags, Holiday Supplies</a></li>
																						</ul>
																					</li>
																					<li>
																						<a href="#" onclick="window.location = '18_46';" class="main-menu">Battereries &amp; Chargers</a>
																						<ul>
																							<li><a href="#" onclick="window.location = '25_28';">Outdoor &amp; Traveling</a></li>
																							<li><a href="#" onclick="window.location = '80';">Flashlights &amp; Lamps</a></li>
																							<li><a href="#" onclick="window.location = '24_66';">Fragrances</a></li>
																						</ul>
																					</li>
																					<li>
																						<a href="#" onclick="window.location = '25_31';" class="main-menu">Fishing</a>
																						<ul>
																							<li><a href="#" onclick="window.location = '57_73';">FPV System &amp; Parts</a></li>
																							<li><a href="#" onclick="window.location = '18';">Electronics</a></li>
																							<li><a href="#" onclick="window.location = '20_76';">Earings</a></li>
																							<li><a href="#" onclick="window.location = '33_60';">More Car Accessories</a></li>
																						</ul>
																					</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-md-6">
																	<div class="row banner">
																		<a href="#">
																			<img src="/image/demo/cms/menu_bg2.jpg" alt="banner1">
																			</a>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</li>
													<li class="item-vertical with-sub-menu hover">
														<p class="close-menu"></p>
														<a href="#" class="clearfix">
															<img src="/image/theme/icons/2.png" alt="icon">
															<span>Health &amp; Beauty</span>
															<b class="caret"></b>
														</a>
														<div class="sub-menu" data-subwidth="100" >
															<div class="content" >
																<div class="row">
																	<div class="col-md-12">
																		<div class="row">
																			<div class="col-md-4 static-menu">
																				<div class="menu">
																					<ul>
																						<li>
																							<a href="#" class="main-menu">Car Alarms and Security</a>
																							<ul>
																								<li><a href="#" >Car Audio &amp; Speakers</a></li>
																								<li><a href="#" >Gadgets &amp; Auto Parts</a></li>
																								<li><a href="#" >Gadgets &amp; Auto Parts</a></li>
																								<li><a href="#" >Headphones, Headsets</a></li>
																							</ul>
																						</li>
																						<li>
																							<a href="24" onclick="window.location = '24';" class="main-menu">Health &amp; Beauty</a>
																							<ul>
																								<li>
																									<a href="#" >Home Audio</a>
																								</li>
																								<li>
																									<a href="#" >Helicopters &amp; Parts</a>
																								</li>
																								<li>
																									<a href="#" >Outdoor &amp; Traveling</a>
																								</li>
																								<li>
																									<a href="#">Toys &amp; Hobbies</a>
																								</li>
																							</ul>
																						</li>
																					</ul>
																				</div>
																			</div>
																			<div class="col-md-4 static-menu">
																				<div class="menu">
																					<ul>
																						<li>
																							<a href="#"  class="main-menu">Electronics</a>
																							<ul>
																								<li>
																									<a href="#">Earings</a>
																								</li>
																								<li>
																									<a href="#" >Salon &amp; Spa Equipment</a>
																								</li>
																								<li>
																									<a href="#" >Shaving &amp; Hair Removal</a>
																								</li>
																								<li>
																									<a href="#">Smartphone &amp; Tablets</a>
																								</li>
																							</ul>
																						</li>
																						<li>
																							<a href="#"  class="main-menu">Sports &amp; Outdoors</a>
																							<ul>
																								<li>
																									<a href="#" >Flashlights &amp; Lamps</a>
																								</li>
																								<li>
																									<a href="#" >Fragrances</a>
																								</li>
																								<li>
																									<a href="#" >Fishing</a>
																								</li>
																								<li>
																									<a href="#" >FPV System &amp; Parts</a>
																								</li>
																							</ul>
																						</li>
																					</ul>
																				</div>
																			</div>
																			<div class="col-md-4 static-menu">
																				<div class="menu">
																					<ul>
																						<li>
																							<a href="#" class="main-menu">More Car Accessories</a>
																							<ul>
																								<li>
																									<a href="#" >Lighter &amp; Cigar Supplies</a>
																								</li>
																								<li>
																									<a href="#" >Mp3 Players &amp; Accessories</a>
																								</li>
																								<li>
																									<a href="#" >Men Watches</a>
																								</li>
																								<li>
																									<a href="#" >Mobile Accessories</a>
																								</li>
																							</ul>
																						</li>
																						<li>
																							<a href="#" class="main-menu">Gadgets &amp; Auto Parts</a>
																							<ul>
																								<li>
																									<a href="#" >Gift &amp; Lifestyle Gadgets</a>
																								</li>
																								<li>
																									<a href="#" >Gift for Man</a>
																								</li>
																								<li>
																									<a href="#" >Gift for Woman</a>
																								</li>
																								<li>
																									<a href="#" >Gift for Woman</a>
																								</li>
																							</ul>
																						</li>
																					</ul>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</li>
													<li class="item-vertical css-menu with-sub-menu hover">
														<p class="close-menu"></p>
														<a href="#" class="clearfix">
															
															<img src="/image/theme/icons/2.png" alt="icon">
															<span>Smartphone &amp; Tablets</span>
															<b class="caret"></b>
														</a>
														<div class="sub-menu" data-subwidth="30" style="width: 270px; display: none; right: 0px;">
															<div class="content" style="display: none;">
																<div class="row">
																	<div class="col-sm-12">
																		<div class="row">
																			<div class="col-sm-12 hover-menu">
																				<div class="menu">
																					<ul>
																						<li>
																							<a href="#" class="main-menu">Headphones, Headsets</a>
																						</li>
																						<li>
																							<a href="#" class="main-menu">Home Audio</a>
																						</li>
																						<li>
																							<a href="#" class="main-menu">Health &amp; Beauty</a>
																						</li>
																						<li>
																							<a href="#" class="main-menu">Helicopters &amp; Parts</a>
																						</li>
																						<li>
																							<a href="#" class="main-menu">Helicopters &amp; Parts</a>
																						</li>
																					</ul>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</li>
													<li class="item-vertical">
														<p class="close-menu"></p>
														<a href="#" class="clearfix">
															<img src="image/theme/icons/11.png" alt="icon">
															<span>Flashlights &amp; Lamps</span>
															
														</a>
													</li>
													<li class="item-vertical">
														<p class="close-menu"></p>
														<a href="#" class="clearfix">
															<img src="image/theme/icons/4.png" alt="icon">
															<span>Camera &amp; Photo</span>
														</a>
													</li>
													<li class="item-vertical">
														<p class="close-menu"></p>
														<a href="#" class="clearfix">
															<img src="image/theme/icons/5.png" alt="icon">
															<span>Smartphone &amp; Tablets</span>
														</a>
													</li>
													<li class="item-vertical" >
														<p class="close-menu"></p>
														<a href="#" class="clearfix">
															<img src="/image/theme/icons/7.png" alt="icon">
															<span>Outdoor &amp; Traveling Supplies</span>
														</a>
													</li>
													<li class="item-vertical" style="display: none;">
														<p class="close-menu"></p>
														
														<a href="#" class="clearfix">
															<img src="/image/theme/icons/6.png" alt="icon">
															<span>Health &amp; Beauty</span>
														</a>
													</li>
													<li class="item-vertical" >
														<p class="close-menu"></p>
														<a href="#" class="clearfix">
															<img src="/image/theme/icons/8.png" alt="icon">
															<span>Toys &amp; Hobbies </span>
														</a>
													</li>
													<li class="item-vertical" >
														<p class="close-menu"></p>
														<a href="#" class="clearfix">
															<img src="/image/theme/icons/12.png" alt="icon">
															<span>Jewelry &amp; Watches</span>
														</a>
													</li>
													<li class="item-vertical" >
														<p class="close-menu"></p>
														<a href="#" class="clearfix">
															<img src="/image/theme/icons/13.png" alt="icon">
															<span>Bags, Holiday Supplies</span>
														</a>
													</li>
													<li class="item-vertical" >
														<p class="close-menu"></p>
														
														<a href="#" class="clearfix">
															<img src="/image/theme/icons/13.png" alt="icon">
															<span>More Car Accessories</span>
														</a>
													</li>
													<li class="loadmore">
														<i class="fa fa-plus-square-o"></i>
														<span class="more-view">More Categories</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</nav>
					</div>
				</div>

			</div>
			
			<!-- Main menu -->
			<div class="megamenu-hori header-bottom-right  col-md-9 col-sm-6 col-xs-12 ">
				<div class="responsive so-megamenu ">
	<nav class="navbar-default">
		<div class=" container-megamenu  horizontal">
			<div class="navbar-header">
				<button type="button" id="show-megamenu" data-toggle="collapse" class="navbar-toggle">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				Navigation		
			</div>
			
			<div class="megamenu-wrapper">
				<span id="remove-megamenu" class="fa fa-times"></span>
				<div class="megamenu-pattern">
					<div class="container">
						<ul class="megamenu " data-transition="slide" data-animationtime="250">
							<li class="home hover">
                                <a href="/">Home <b class="caret"></b></a>
							</li>

							<li class="with-sub-menu hover">
								<p class="close-menu"></p>
								<a href="#" class="clearfix">
									<strong>Features</strong>
                                    <!-- <div>Features</div> -->
									<img class="label-hot" src="/image/theme/icons/hot-icon.png" alt="icon items">
									<b class="caret"></b>
								</a>
							</li>

							<li class="with-sub-menu hover">
								<p class="close-menu"></p>
								<a href="#" class="clearfix">
									<strong>Pages</strong>
									<img class="label-hot" src="/image/theme/icons/hot-icon.png" alt="icon items">
									<b class="caret"></b>
								</a>
							</li>

							<li class="with-sub-menu hover">
								<p class="close-menu"></p>
								<a href="#" class="clearfix">
									<strong>Categories</strong>
									<span class="label"></span>
									<b class="caret"></b>
								</a>
							</li>
							
							<li class="with-sub-menu hover">
								<p class="close-menu"></p>
								<a href="#" class="clearfix">
									<strong>Accessories</strong>
									
									<b class="caret"></b>
								</a>
							</li>
						</ul>
						
					</div>
				</div>
			</div>
		</div>
	</nav>
</div>
									</div>
			<!-- //end Main menu -->
			
		</div>
	</div>

</div>

<!-- Navbar switcher -->
<!-- //end Navbar switcher -->
	</header>
	<!-- //Header Container  -->

    </div>
</template>

<script>
	import { useCartStore } from '~~/store/cart';
	export default {

		data() {
			return {
				userName: '',
				isLogged: false,
			}
		},
		methods: {
			async onUser() {

				this.isLogged = await localStorage.getItem('isLogged');

				if(this.isLogged){

					const cartStore = useCartStore();


					this.userName = await localStorage.getItem('userFullName');

					// localStorage.setItem('userName',)

				}else{

					this.userName = '';
				}

			},
			async doLogout() {

				this.userName = '';
				await localStorage.clear();

				location.href = '/login'

			},

				// add to cart pinia

			removeItemFromCart(index) {

				const cartStore = useCartStore();

				cartStore.removeProductFromCart(index);

			}
			},
			computed: {
				
				cartItems() {
					const cartStore = useCartStore();
					return cartStore.cartList.reverse();
				},

				totalCartAmount() {

					const cartStore = useCartStore();

					var amount = 0;
					cartStore.cartList.forEach((product) => {
						amount = amount + parseInt(product.price);
					})

					return amount;
				}

			},
			
			mounted() {
				this.onUser();
			}
	}
</script>

