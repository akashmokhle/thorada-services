    <template>
        <div class="ltabs-item product-layout">
            <div class="product-item-container">
                <div class="left-block">
                    <div class="product-image-container second_img ">
                        <img :src="normalImage"  alt="Apple Cinema 30" class="img-responsive" />
                        <img :src="hoverImage"  alt="Apple Cinema 30" class="img_0 img-responsive" />
                    </div>
                    <!--Sale Label-->
                    <span v-if="isNew" class="label label-new">New</span>
                    <span v-if="isDiscount" class="label label-sale">-{{ discountPercent }}%</span>
                    <!--full quick view block-->
                    <a class="quickview iframe-link visible-lg" data-fancybox-type="iframe"  href="product/slug">  Quickview</a>
                    <!--end full quick view block-->
                </div>
                <div class="right-block">
                    <div class="caption">
                        <h4><a :href="'product/'+slug">{{title}}</a></h4>		
                        <div class="ratings">
                            <div class="rating-box">
                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span>
                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span>
                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span>
                                <span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span>
                                <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span>
                            </div>
                        </div>
                                            
                        <div class="price">
                            <span class="price-new">Rs. {{ isSale ? salePrice : mainPrice }}/-</span> 
                            <span v-if="isSale" class="price-old">Rs. {{mainPrice}}/-</span>		 
                        </div>
                    </div>
                    
                        <div class="button-group">
                        <button class="addToCart " type="button" data-toggle="tooltip" title="Add to Cart" @click="addToCart()" ><i class="fa fa-shopping-cart"></i> <span class="">Add to Cart</span></button>
                        <NuxtLink to="/emi"><button class="wishlist " type="button" data-toggle="tooltip" title="EMI" ><i class="fa-sharp fa-solid fa-sack-dollar"></i> EMI</button></NuxtLink>
                        </div>
                </div><!-- right block -->
            </div>
        </div>
    </template>

  <script>

import { useCartStore } from '~~/store/cart'

    export default {
    props: {
        id: {
            default: 0
        },
        title: {
            default: ""
        },
        slug: {
            default: ""
        },
        image: {
            default: ""
        },
        normalImage: {
            defalut: ""
        },
        hoverImage: {
            defaut: ""
        },
        isDiscount: {
            default: false
        },
        isSale: {
            default: false
        },
        mainPrice: {
            default: "0.00"
        },
        salePrice: {
            default: "0.00"
        },
        discountPercent: {
            default: "0"
        },
        isNew: {
            default: false
        }
    },
    // add to cart pinia Plugin
    methods: {
        addToCart() {
            const cartStore = useCartStore();
            var productData = {
                image: this.normalImage,
                title: this.title,
                qty: 1,
                price: this.salePrice
            };
            cartStore.addProductToCart(productData);
            console.log(cartStore.cartList);
        }
    }
}
</script>

<style>
.button-group button{
	margin-right: 5px;
}
</style>