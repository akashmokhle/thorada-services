<template>
    <div>
        	<!-- Main Container  -->
	<div class="main-container container">
		<ul class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i></a></li>
			<li><a href="#">Account</a></li>
			<li><a href="#">Register</a></li>
		</ul>
		
		<div class="row">
			<div id="content" class="col-sm-12">
				<h2 class="title">Register Account</h2>
				<p>If you already have an account with us, please login at the <nuxt-link to="/login">login page</nuxt-link>.</p>
				<form @submit="doRegister()" action="javaScript:void(0)" method="post" enctype="multipart/form-data" class="form-horizontal account-register clearfix">
					<fieldset id="account">
						<legend>Your Personal Details</legend>
						<div class="form-group required" style="display: none;">
							<label class="col-sm-2 control-label">Customer Group</label>
							<div class="col-sm-10">
								<div class="radio">
									<label>
										<input type="radio" name="customer_group_id" value="1" checked="checked"> Default
									</label>
								</div>
							</div>
						</div>
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="input-firstname">First Name</label>
							<div class="col-sm-10">
								<input v-model="firstName" type="text" name="firstname"  placeholder="First Name" id="input-firstname" class="form-control">
							</div>
						</div>
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="input-lastname">Last Name</label>
							<div class="col-sm-10">
								<input v-model="lastName" type="text" name="lastname"  placeholder="Last Name" id="input-lastname" class="form-control">
							</div>
						</div>
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="input-email">E-Mail</label>
							<div class="col-sm-10">
								<input v-model="email" type="email" name="email"  placeholder="E-Mail" id="input-email" class="form-control">
							</div>
						</div>
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="Mmbile-number">Mobile Number</label>
							<div class="col-sm-10">
								<input v-model="mobileNumber" type="tel" name="Mobile Number" placeholder="Mobile Number" id="input-telephone" class="form-control">
							</div>
						</div>
					</fieldset>
					<fieldset>
						<legend>Your Password</legend>
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="input-password">Password</label>
							<div class="col-sm-10">
								<input v-model="password" type="password" name="password" placeholder="Password" id="input-password" class="form-control">
							</div>
						</div>
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="input-confirm">Password Confirm</label>
							<div class="col-sm-10">
								<input v-model="confirmPassword" type="password" name="confirm" placeholder="Password Confirm" id="input-confirm" class="form-control">
							</div>
						</div>
					</fieldset>
					<div class="buttons">
						<div class="pull-right">I have read and agree to the <a href="#" class="agree"><b>Pricing Tables</b></a>
							<input class="box-checkbox" type="checkbox" name="agree" value="1"> &nbsp;
							<NuxtLink to=""><button :disabled="isRegistered" class="btn btn-dark">{{ isRegistered ? 'Loading...': 'Continue'}}</button></NuxtLink>
							<!-- <input type="submit" value="Continue" class="btn btn-primary"> -->
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	<!-- //Main Container -->
    </div>
</template>

<script>
import axios from 'axios';
import { apiUrl } from '~~/config/url';

	export default{
		data(){
			return{
				firstName:'',
				lastName:'',
				email:'',
				mobileNumber:'',
				password:'',
				confirmPassword:'',
				isRegistered: false
			}
		},
		methods:{
			async doRegister(){

				if(this.firstName == ''){
					alert('First Name Is Empty');
					return false;
				}

				if(this.lastName == ''){
					alert('Last Name Is Empty');
					return false;
				}

				if(this.email == ''){
					alert('Email Is Empty');
					return false;
				}

				if(this.mobileNumber == ''){
					alert('Mobile Number Is Empty');
					return false;
				}

				if(this.password == ''){
					alert('Password Is Empty');
					return false;
				}

				if(this.confirmPassword == ''){
					alert('Confirm Password Is Empty');
					return false;
				}

				console.log(this.firstName);
				var formData = new FormData();

				formData.append('first_name', this.firstName);
				formData.append('last_name', this.lastName);
				formData.append('email', this.email);
				formData.append('mobile_number', this.mobileNumber);
				formData.append('password', this.password);
				formData.append('confirm_password', this.confirmPassword);

					const response = await axios.post(apiUrl.customerRegister, formData);
					console.log(response);

					var	user = response.data.user_data;
				
					if(response.status == 200){

						if(response.data.status) {

							await localStorage.setItem('isLogged', true);
							await localStorage.setItem('userID', user.u_id);	
							await localStorage.setItem('userFullName', user.u_first_name + ' ' + user.u_last_name );
							await localStorage.setItem('userMobile', user.u_mobile_number);
							await localStorage.setItem('userRole', user.u_role);
							await localStorage.setItem('userEmail', user.u_email_address);

							location.href = '/'
						}
					}else{

						alert('Already Registred');
					}


			}
		}
	}
</script>