<template>
    <div>
        <div id="wrapper" class="wrapper-full ">
	<!-- Header Container  -->
	<header id="header" class=" variantleft type_1">
	</header>

	<!-- Main Container  -->
	<div class="main-container container">
		<ul class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i></a></li>
			<li><a href="#">Account</a></li>
			<li><a href="#">Login</a></li>
		</ul>
		
		<div class="row">
			<div id="content" class="col-sm-12">
				<div class="page-login">
				
					<div class="account-border">
						<div class="row">
							<div class="col-sm-6 new-customer">
								<div class="well">
									<h2><i class="fa fa-file-o" aria-hidden="true"></i> New Customer</h2>
									<p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
								</div>
								<div class="bottom-form">
									<a href="#" class="btn btn-default pull-right">Continue</a>
								</div>
							</div>
							
							<form action="javaScript:void(0)" @submit="doLogin" enctype="multipart/form-data">
								<div class="col-sm-6 customer-login">
									<div class="well">
										<h2><i class="fa fa-file-text-o" aria-hidden="true"></i> Returning Customer</h2>
										<p><strong>I am a returning customer</strong></p>
										<div class="form-group">
											<label class="control-label " for="input-email" >E-Mail Address</label>
											<input v-model="email"  type="text" class="form-control" placeholder="abc@gmail.com" />
										</div>
										<div class="form-group">
											<label class="control-label " for="input-password">Password</label>
											<input v-model="password" type="password"  class="form-control" placeholder="**********" />
										</div>
									</div>
									<div class="bottom-form">
										<a href="#" class="forgot">Forgotten Password</a>
										<nuxt-link to=""><button :disable="isLogin" class="btn btn-default pull-right">{{isLogin ? 'Loading...': 'Login'}}</button></nuxt-link>
									</div>

								</div>
							</form>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	<!-- //Main Container -->
    </div>
    </div>
</template>

<script>
import axios from 'axios';
import { apiUrl } from '~~/config/url';
	export default{
			data() {
				return{
					email:'',
					password:'',
					isLogin: false
				}
		},
		methods:{
			async doLogin() {

				if(this.email == ''){
					alert('Email Is Empty');
					return false;
				}

				if(this.password == ''){
					alert('Password Is Empty');
					return false;
				}
				
				console.log(this.email);
				var formData = new FormData();

				formData.append('email', this.email);
				formData.append('password', this.password);

					const response = await axios.post(apiUrl.customerLogin, formData);
					console.log(response);

					var user = response.data.user;

				if(response.status == 200){

					if(response.data.status) {

						await localStorage.setItem('isLogged', true);
						await localStorage.setItem('userID', user.u_id);
						await localStorage.setItem('userFullName', user.u_first_name + ' ' + user.u_last_name );
						await localStorage.setItem('userMobile', user.u_mobile_number);
						await localStorage.setItem('userRole', user.u_role);
						await localStorage.setItem('userEmail', user.u_email_address);

						location.href = '/';

					}
					
				}else{
						alert('incorrect ID');
					
				}


			}
				


			}
		}
	
</script>