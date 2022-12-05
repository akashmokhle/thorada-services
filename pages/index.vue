<template>
    <div>
        <div id="wrapper" class="wrapper-full banners-effect-7">
	<!-- Block Spotlight1  -->
	<section class="so-spotlight1 ">
	<div>	
		<div class="container">
			<div class="row">
				<div id="yt_header_right" class="col-lg-offset-3 col-lg-9 col-md-12">
					<div class="slider-container "> 
							
						<div class="module first-block">
							<div class="modcontent clearfix">
								<div id="custom_popular_search" class="clearfix">
									<h5 class="so-searchbox-popular-title pull-left">Top Search:</h5>
									<div class="so-searchbox-keyword">
										<ul class="list-inline"><li>&nbsp;<a href="#">Acer,</a></li><li><a href="#">APPLE,</a></li><li><a href="#">Black,</a></li><li><a href="#">Canon,</a></li><li><a href="#">Cogs,</a></li><li><a href="#">Confi,</a></li><li><a href="#">Kate,</a></li><li><a href="#">Lor,</a></li><li><a href="#">Product,</a></li><li><a href="#">Zolof The Rock And Roll Destroyer</a></li></ul>
									</div>
								</div>
							</div>
						</div>
						<div id="so-slideshow" class="col-lg-8 col-md-8 col-sm-12 col-xs-12 two-block">
							<div class="module no-margin">
								<div class="yt-content-slider yt-content-slider--arrow1"  data-rtl="yes" data-autoplay="no" data-autoheight="no" data-delay="4" data-speed="0.6" data-margin="0" data-items_column0="1" data-items_column1="1" data-items_column2="1"  data-items_column3="1" data-items_column4="1" data-arrows="yes" data-pagination="no" data-lazyload="yes" data-loop="no" data-hoverpause="yes">
									<div v-for="slider in sliders" class="yt-content-slide">
										<a :href="slider.link"><img :src="slider.image" :alt="slider.title" class="img-responsive"></a>
									</div>
								</div>
								
								<div class="loadeding"></div>
							</div>
							
						</div>

						
						<div class="module col-md-4  hidden-sm hidden-xs three-block ">
							<div class="modcontent clearfix">
								<div class="htmlcontent-block">	
									<ul class="htmlcontent-home">	
										<CardThreeCard v-for="im in productImage "
										:oneImage="im.newImage"/>

									</ul>
								</div>
							</div>
						</div>

						<div class="module hidden-xs col-sm-12 four-block">
							<div class="modcontent clearfix">
								<div class="policy-detail">
									<div class="banner-policy">
										<div class="policy policy1"><a href="#"> <span class="ico-policy"></span> 90 day <br> money back </a></div>
										<div class="policy policy2"><a href="#"> <span class="ico-policy">&nbsp;</span> In-store exchange </a></div>
										<div class="policy policy3"><a href="#"> <span class="ico-policy">&nbsp;</span> lowest price guarantee </a></div>
										<div class="policy policy4"><a href="#"> <span class="ico-policy">&nbsp;</span> shopping guarantee </a></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>  
	</div>	
	</section>
	<!-- //Block Spotlight1  -->
	
	<!-- Main Container  -->
	<div class="main-container container">
		
		<div class="row">
			<div id="content" class="col-sm-12">
			
				<!-- FEATURED PRODUCTS -->

				
			
			<SectionProductList title="Featured Products" :products="fProducts" />

			<!-- END FEATURED PRODUCCTS -->


			<!-- NEW ARRIVAL PRODUCTS -->

			<SectionProductList title="New Arrival Products" :products="nProducts" />
			
			<!-- END NEW ARRIVAL PRODUCTS -->


			<!-- NEW ARRIVAL PRODUCTS -->

			<SectionProductList title="Best Sellers Products" :products="fProducts" />
			
			<!-- END NEW ARRIVAL PRODUCTS -->

				<div class="module ">
					<div class="modcontent clearfix">
						<div class="banner-wraps ">
							<div class="m-banner row">
								<div class="banner htmlconten1 col-lg-4 col-md-4 col-sm-6 col-xs-12">
									<div class="banners">
										<div>
											<a href="#"><img src="image/demo/cms/banner2-1.png" alt="banner1"></a>
										</div>
									</div>
								</div>
								<div class="htmlconten2 col-lg-4 col-md-4 col-sm-6 col-xs-12">
									<div class="module banners">
											<div>
												<a href="#"><img src="image/demo/cms/banner2-2.png" alt="banner1"></a>
											</div>
									</div>
										
									<div class="banners">
										<div>
											<a href="#"><img src="image/demo/cms/banner2-3.png" alt="banner1"></a>
										</div>
									</div>
									
								</div>
								<div class="banner htmlconten3 hidden-sm col-lg-4 col-md-4 col-sm-6 col-xs-12">
									<div class="banners">
										<div>
											<a href="#"><img src="image/demo/cms/banner2-4.png" alt="banner1"></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
	
				<div class="module no-margin titleLine ">
					<h3 class="modtitle">COLLECTIONS</h3>
					<div class="modcontent clearfix">
						<div id="collections_block" class="clearfix  block">
							<ul class="width6">
								<li class="collect collection_4">
									<div class="color_co"><a href="#">Under 7000</a> </div>
								</li>
								<li class="collect collection_4">
									<div class="color_co"><a href="#">Under 12000</a> </div>
								</li>
								<li class="collect collection_4">
									<div class="color_co"><a href="#">Under 15000</a> </div>
								</li>
								<li class="collect collection_4">
									<div class="color_co"><a href="#">Under 25000</a> </div>
								</li>
								<li class="collect collection_4">
									<div class="color_co"><a href="#">Under 30000</a> </div>
								</li>
								<li class="collect collection_4">
									<div class="color_co"><a href="#">Under 50000</a> </div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</div>
	<!-- //Main Container -->
	<!-- Block Spotlight3  -->
	<section class="so-spotlight3">
		<div class="container">
			<div class="row">
				
				<div id="so_categories_173761471880018" class="so-categories module titleLine preset01-4 preset02-3 preset03-3 preset04-1 preset05-1">
					<h3 class="modtitle">Hot Categories</h3>
					
					<div class="wrap-categories">
						<div class="cat-wrap theme3">
							<div class="content-box">
								<div class="image-cat">
									<a href="#" title="Automotive" target="_blank">
										<img  src="image/demo/shop/category/automotive-motocrycle.jpg" title="Automotive" alt="Automotive"> 
									</a> 
									<a class="btn-viewmore hidden-xs" href="#" title="View more">View more</a> 								
								</div>
								<div class="inner">
									<div class="title-cat"> <a href="#" title="Automotive " target="_blank">Automotive</a> </div>
									<div class="child-cat">
										<div class="child-cat-title"> <a title="More Car Accessories" href="#" target="_blank">More Car Accessories		</a> </div>
										<div class="child-cat-title"> <a title="Car Alarms and Security" href="#" target="_blank">Car Alarms and Security		</a> </div>
										<div class="child-cat-title"> <a title="Car Audio &amp; Speakers" href="#" target="_blank">Car Audio &amp; Speakers		</a> </div>
										<div class="child-cat-title"> <a title="Gadgets &amp; Auto Parts" href="#" target="_blank">Gadgets &amp; Auto Parts	</a> </div>
									</div>
								</div>
							</div>
							<div class="clr1"></div>
							<div class="content-box">
								<div class="image-cat">
									<a href="#" title="Automotive" target="_blank">
										<img  src="image/demo/shop/category/health-beauty.jpg" title="Automotive" alt="Automotive"> 
									</a> 
									<a class="btn-viewmore hidden-xs" href="#" title="View more">View more</a> 		
								</div>	
									
								<div class="inner">
									<div class="title-cat"> <a href="#" title="Health & Beauty" target="_blank">Health & Beauty</a> </div>
									<div class="child-cat">
										<div class="child-cat-title"> <a title="More Car Accessories" href="#" target="_blank">Salon & Spa Equipment		</a> </div>
										<div class="child-cat-title"> <a title="Car Alarms and Security" href="#" target="_blank">Fragrances		</a> </div>
										<div class="child-cat-title"> <a title="Car Audio &amp; Speakers" href="#" target="_blank">Shaving & Hair Removal..	</a> </div>
										<div class="child-cat-title"> <a title="Gadgets &amp; Auto Parts" href="#" target="_blank">Bath & Body	</a> </div>
									</div>
								</div>
							</div>
							<div class="clr1 clr2"></div>
							<div class="content-box">
								<div class="image-cat">
									<a href="#" title="Automotive" target="_blank">
										<img  src="image/demo/shop/category/bags-holiday-supplies-gifts.jpg" title="Automotive" alt="Automotive"> 
									</a> 
									<a class="btn-viewmore hidden-xs" href="#" title="View more">View more</a> 		
								</div>	
									
								<div class="inner">
									<div class="title-cat"> <a href="#" title="Health & Beauty" target="_blank">Bags, Holiday Supplies</a> </div>
									<div class="child-cat">
										<div class="child-cat-title"> <a title="More Car Accessories" href="#" target="_blank">Gift & Lifestyle Gadgets..		</a> </div>
										<div class="child-cat-title"> <a title="Car Alarms and Security" href="#" target="_blank">Lighter & Cigar Supplies..		</a> </div>
										<div class="child-cat-title"> <a title="Car Audio &amp; Speakers" href="#" target="_blank">Gift for Woman	</a> </div>
										<div class="child-cat-title"> <a title="Gadgets &amp; Auto Parts" href="#" target="_blank">Gift for Man	</a> </div>
									</div>
								</div>
							</div>
							<div class="clr1 clr3"></div>
							<div class="content-box">
								<div class="image-cat">
									<a href="#" title="Automotive" target="_blank">
										<img  src="image/demo/shop/category/toys-hobbies.jpg" title="Automotive" alt="Automotive"> 
									</a> 
									<a class="btn-viewmore hidden-xs" href="#" title="View more">View more</a> 		
								</div>	
									
								<div class="inner">
									<div class="title-cat"> <a href="#" title="Health & Beauty" target="_blank">Toys & Hobbies</a> </div>
									<div class="child-cat">
										<div class="child-cat-title"> <a title="More Car Accessories" href="#" target="_blank">Helicopters & Parts		</a> </div>
										<div class="child-cat-title"> <a title="Car Alarms and Security" href="#" target="_blank">RC Cars & Parts	</a> </div>
										<div class="child-cat-title"> <a title="Car Audio &amp; Speakers" href="#" target="_blank">FPV System & Parts	</a> </div>
										<div class="child-cat-title"> <a title="Gadgets &amp; Auto Parts" href="#" target="_blank">Walkera	</a> </div>
									</div>
								</div>
							</div>
							<div class="clr1 clr2 clr4"></div>
							<div class="content-box">
								<div class="image-cat">
									<a href="#" title="Automotive" target="_blank">
										<img  src="image/demo/shop/category/electronics.jpg" title="Automotive" alt="Automotive"> 
									</a> 
									<a class="btn-viewmore hidden-xs" href="#" title="View more">View more</a> 		
								</div>	
									
								<div class="inner">
									<div class="title-cat"> <a href="#" title="Health & Beauty" target="_blank">Electronics</a> </div>
									<div class="child-cat">
										<div class="child-cat-title"> <a title="More Car Accessories" href="#" target="_blank">Home Audio</a> </div>
										<div class="child-cat-title"> <a title="Car Alarms and Security" href="#" target="_blank">Mp3 Players & Accessories..	</a> </div>
										<div class="child-cat-title"> <a title="Car Audio &amp; Speakers" href="#" target="_blank">Headphones, Headsets</a> </div>
										<div class="child-cat-title"> <a title="Gadgets &amp; Auto Parts" href="#" target="_blank">Battereries & Chargers..	</a> </div>
									</div>
								</div>
							</div>
							<div class="clr1 clr5"></div>
							<div class="content-box">
								<div class="image-cat">
									<a href="#" title="Automotive" target="_blank">
										<img  src="image/demo/shop/category/jewelry-watches.jpg" title="Automotive" alt="Automotive"> 
									</a> 
									<a class="btn-viewmore hidden-xs" href="#" title="View more">View more</a> 		
								</div>	
									
								<div class="inner">
									<div class="title-cat"> <a href="#" title="Health & Beauty" target="_blank">Jewelry & Watches</a> </div>
									<div class="child-cat">
										<div class="child-cat-title"> <a title="More Car Accessories" href="#" target="_blank">Men Watches	</a> </div>
										<div class="child-cat-title"> <a title="Car Alarms and Security" href="#" target="_blank">Wedding Rings		</a> </div>
										<div class="child-cat-title"> <a title="Car Audio &amp; Speakers" href="#" target="_blank">Earings	</a> </div>
									</div>
								</div>
							</div>
							<div class="clr1 clr2 clr3 clr6"></div>
							<div class="content-box">
								<div class="image-cat">
									<a href="#" title="Automotive" target="_blank">
										<img  src="image/demo/shop/category/sports-outdoors.jpg" title="Automotive" alt="Automotive"> 
									</a> 
									<a class="btn-viewmore hidden-xs" href="#" title="View more">View more</a> 		
								</div>	
									
								<div class="inner">
									<div class="title-cat"> <a href="#" title="Health & Beauty" target="_blank">Sports & Outdoors</a> </div>
									<div class="child-cat">
										<div class="child-cat-title"> <a title="More Car Accessories" href="#" target="_blank">Outdoor & Traveling	</a> </div>
										<div class="child-cat-title"> <a title="Car Alarms and Security" href="#" target="_blank">Camping & Hiking		</a> </div>
										<div class="child-cat-title"> <a title="Car Audio &amp; Speakers" href="#" target="_blank">Golf Supplies	</a> </div>
										<div class="child-cat-title"> <a title="Gadgets &amp; Auto Parts" href="#" target="_blank">Fishing	</a> </div>
									</div>
								</div>
							</div>
							<div class="clr1"></div>
							<div class="content-box">
								<div class="image-cat">
									<a href="#" title="Automotive" target="_blank">
										<img  src="image/demo/shop/category/smartphone-tablets.jpg" title="Automotive" alt="Automotive"> 
									</a> 
									<a class="btn-viewmore hidden-xs" href="#" title="View more">View more</a> 		
								</div>	
									
								<div class="inner">
									<div class="title-cat"> <a href="#" title="Health & Beauty" target="_blank">Smartphone & Tablets</a> </div>
									<div class="child-cat">
										<div class="child-cat-title"> <a title="More Car Accessories" href="#" target="_blank">Accessories for iPhone		</a> </div>
										<div class="child-cat-title"> <a title="Car Audio &amp; Speakers" href="#" target="_blank">Accessories for i Pad	</a> </div>
										<div class="child-cat-title"> <a title="Gadgets &amp; Auto Parts" href="#" target="_blank">Accessories for Tablet PC	</a> </div>
									</div>
								</div>
							</div>
							<div class="clr1 clr2 clr4"></div>
						</div>
					</div>
				</div>
			
				<div id="container-module-newletter" class="hidden-md hidden-sm hidden-xs">
					<div class="so_newletter_custom_popup_bg popup_bg"></div> 
					<div class="module main-newsleter-popup so_newletter_custom_popup so_newletter_oca_popup" id="so_newletter_custom_popup"> <div class="so-custom-popup so-custom-oca-popup" style="width: 850px; background: url('image/demo/cms/newletter-bg.jpg') no-repeat white;  "> 
						<div class="modcontent"> 
							<div class="oca_popup" id="test-popup"> <div class="popup-content"> <p class="newsletter_promo">Daily Promotion</p> 
								<div class="popup-title">SIGN UP FOR NEWSLETTER					</div>
								<form method="post" name="signup" class="form-group signup"> 
									<div class="input-control"> <div class="email"> <input type="email" placeholder="Your email address..." value="" class="form-control" id="txtemail" name="txtemail"> </div> <button class="btn btn-default" type="submit" onclick="return subscribe_newsletter();" name="submit">Subscribe	</button> </div> 
								</form> 
								<label class="hidden-popup"> <input type="checkbox" value="1" name="hidden-popup"> <span class="inline">&nbsp;&nbsp;Don't show this popup again</span> </label> </div> 
							</div> 
						</div> <!--/.modcontent--> 
						<button title="Close" type="button" class="popup-close">×</button> </div> 
					</div> 
				</div>
			</div>
		</div>
	</section>
	<!-- //Block Spotlight3  -->



    </div>
	<!-- Social widgets -->
	<section class="social-widgets visible-lg">
	<ul class="items">
		<li class="item item-01 facebook"> <a href="php/facebook.php?account=envato" class="tab-icon"><span class="fa fa-facebook"></span></a>
			<div class="tab-content">
				<div class="title">
					<h5>FACEBOOK</h5>
				</div>
				<div class="loading">
					<img src="image/theme/lazy-loader.gif" class="ajaxloader" alt="loader">
				</div>
			</div>
		</li>
		<li class="item item-02 twitter"> <a href="php/twitter.php?account_twitter=envato" class="tab-icon"><span class="fa fa-twitter"></span></a>
			<div class="tab-content">
				<div class="title">
					<h5>TWITTER FEEDS</h5> 
				</div>
				<div class="loading">
					<img src="image/theme/lazy-loader.gif" class="ajaxloader" alt="loader">
				</div>
			</div>
		</li>
		<li class="item item-03 youtube"> <a href="php/youtubevideo.php?account_video=PY2RLgTmiZY" class="tab-icon"><span class="fa fa-youtube"></span></a>
			<div class="tab-content">
				<div class="title">
					<h5>YouTube</h5>
				</div>
				<div class="loading"> <img src="image/theme/lazy-loader.gif" class="ajaxloader" alt="loader"></div>
			</div>
		</li>
	</ul>
	</section>	<!-- End Social widgets -->
    </div>
</template>

<script>
import axios from 'axios';
import { sliderUpdate } from '~~/config/sliderUpdate';
import {apiUrl, baseurl} from '~~/config/url';
import {sliderApi} from '~~/apis/sliderApi';

export default {
    data() {
        return {
			
			newArrivalProducts: [
			],
			productImage: [
				{	id: 1,
					newImage: '/image/demo/cms/banner1.jpg'
				},
				{	id: 2,
					newImage: 'image/demo/cms/banner2.jpg'
				},
				{	id: 3,
					newImage: 'image/demo/cms/banner3.jpg'
				}
			],
			sliders: [],
			fProducts: [],
			nProducts:[],
			bProducts: [],
			websiteUrl: baseurl
        }
    },
    methods: {
		init() {
			// var newName = testApi.anotherFunction()

			// console.log(newName);

		},
        async fetchSlider() {


			const response = await sliderApi.fetchSliders();


			if(response.status) {

				// EVERYTHING IS RIGHT

				this.sliders = response.sliders;


				this.sliders.forEach((slider) => {
						// /asset/image.jpg = https://thoroda.com/ + /asset/image.jpg
						slider.image = baseurl + slider.image
					});

			}else{
				// SOMETHING WENT WRONG

				alert(response.message);

			}


			// const response = await axios.get('https://thorada.sitentweb.com/api/sliders');

			// console.log(response);
			// if(response.status == 200) {

			// 	if(response.data.status) {

			// 		this.sliders = response.data.sliders;

					// this.sliders.forEach((slider) => {
					// 	// /asset/image.jpg = https://thoroda.com/ + /asset/image.jpg
					// 	slider.image = baseurl + slider.image
					// });

			// 	}else{
			// 		alert(response.data.message);
			// 	}

			// }

		},
		
		async fetchFeaturedProducts() {
			const response = await axios.get(apiUrl.fetchFeaturedProducts);

			console.log(response);

			if(response.status == 200) {

				if(response.data.status) {
					this.fProducts = response.data.products;
				}

			}

		},

		async fetchNewArrivalProducts() {
			const response = await axios.get(apiUrl.fetchNewArrivalProducts);

			console.log(response);

			if(response.status == 200) {

				if(response.data.status) {
					this.nProducts = response.data.products;
				}
			}

		},

		async fetchBestSellerProducts() {
			const response = await axios.get('');

			console.log(response);

			if(response.status == 200) {
				 
				if(response.data.status) {
					this.bProducts = response.data.products;
				}
			}
		},

		async runSlider() {
            $(document).ready(function ($) {
                "use strict";
                // Content slider
                $('.yt-content-slider').each(function () {
                    var $slider = $(this),
                        $panels = $slider.children('div'),
                        data = $slider.data();
                    // Remove unwanted br's
                    //$slider.children(':not(.yt-content-slide)').remove();
                    // Apply Owl Carousel
                    $slider.owlCarousel2({
                        responsiveClass: true,
                        mouseDrag: true,
                        video:true,
                        
                        lazyLoad: (data.lazyload == 'yes') ? true : false,
                        autoplay: (data.autoplay == 'yes') ? true : false,
                        autoHeight: (data.autoheight == 'yes') ? true : false,
                        autoplayTimeout: data.delay * 1000,
                        smartSpeed: data.speed * 1000,
                        autoplayHoverPause: (data.hoverpause == 'yes') ? true : false,
                        center: (data.center == 'yes') ? true : false,
                        loop: (data.loop == 'yes') ? true : false,
                        dots: (data.pagination == 'yes') ? true : false,
                        nav: (data.arrows == 'yes') ? true : false,
                        dotClass: "owl-dot",
                        dotsClass: "owl-dots",
                        margin: data.margin,
                        navText: ['',''],
                        
                        responsive: {
                            0: {
                                items: data.items_column4 
                                },
                            480: {
                                items: data.items_column3
                                },
                            768: {
                                items: data.items_column2
                                },
                            992: { 
                                items: data.items_column1
                                },
                            1200: {
                                items: data.items_column0 
                                }
                        }
                    });
                    
                });
            });

        }
    },
	async mounted() {
		this.init();
		await this.fetchSlider().then(() => {
			this.runSlider()
		});

		await this.fetchFeaturedProducts().then(() => {
			// sliderUpdate.updateSlider();
		});

		await this.fetchNewArrivalProducts().then(() => {
		});

		await this.fetchBestSellerProducts().then(() =>{

		});

			await sliderUpdate.updateSlider();
		
	}
}
</script>