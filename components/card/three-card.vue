<template>
    <li>    
        <div class="banners">
            <div>
                <a href="#"><img :src="oneImage" alt="banner1"></a>
                
            </div>
        </div>
    </li>
</template>

<script>
    export default{
            props:{
                oneImage:{
                    default:''
                }

            }
    }
</script>