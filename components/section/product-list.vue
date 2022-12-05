<template>
    <div class="module tab-slider titleLine">
				<h3 class="modtitle">{{title}}</h3>
				<div id="so_listing_tabs_1" class="so-listing-tabs so_listing_tab_custom first-load module">
					<div class="loadeding"></div>
					<div class="ltabs-wrap">
						<div class="ltabs-tabs-container" data-rtl="yes" data-delay="300" data-duration="600" data-effect="starwars" data-ajaxurl="" data-type_source="0" data-lg="4" data-md="3" data-sm="2" data-xs="1" data-margin="30">
							<!--Begin Tabs-->
							<div class="ltabs-tabs-wrap"> 
							<span class="ltabs-tab-selected">Jewelry &amp; Watches</span><span class="ltabs-tab-arrow">▼</span>
								<div class="item-sub-cat">
									<ul class="ltabs-tabs cf">
										<li class="ltabs-tab tab-sel d-none" data-category-id="20" data-active-content=".items-category-20"> <span class="ltabs-tab-label"></span> </li>
										
									</ul>
								</div>
							</div>
							<!-- End Tabs-->
						</div>
						<div class="ltabs-items-container">
							<!--Begin Items-->
							<div class="ltabs-items ltabs-items-selected items-category-20 grid" data-total="10">
								<div class="ltabs-items-inner ltabs-slider ">
									<CardProduct v-for="fp in products" 
									:id="fp.p_id"
									:title="fp.p_name" 
									:slug="fp.p_slug"
									:normalImage="'https://thorada.sitentweb.com'+fp.product_medias[0].pm_image" 
									:hoverImage="'https://thorada.sitentweb.com'+fp.product_medias[0].pm_image" 
									:isDiscount="fp.p_in_discount"
									:isSale="fp.p_in_sale"
									:mainPrice="fp.p_price" 
									:salePrice="fp.p_sale_price" 
									:discountPercent="fp.p_discount_percent" 
									:isNew="true" />
								</div>
								
							</div>
							<div class="ltabs-items items-category-18 grid" data-total="11">
								<div class="ltabs-loading"></div>
								
							</div>
							<div class="ltabs-items  items-category-25 grid" data-total="11">
								<div class="ltabs-loading"></div>
							</div>
						</div>
						<!--End Items-->
					</div>
					
				</div>
			</div>
</template>

<script>
    export default {
        props: {
            title: {
                default: ''
            },
            products: {
                default: []
            }
        },
        async mounted() {

        }
    }
</script>