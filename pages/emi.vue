<template>
    <div>
                	<!-- Main Container  -->
	<div class="main-container container">
		<ul class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i></a></li>
			<li><a href="#">Account</a></li>
			<li><a href="#">EMI</a></li>
		</ul>
		
		<div class="row">
			<div id="content" class="col-sm-12">
				<h2 class="title">EMI Account</h2>
				<p>If you already have an account with us, please login at the <nuxt-link to="/login">login page</nuxt-link>.</p>
				<form action="" method="post" enctype="multipart/form-data" class="form-horizontal account-register clearfix">
					<fieldset id="account">
						<legend>Your Personal Details</legend>
						<div class="form-group required" style="display: none;">
							<label class="col-sm-2 control-label">Customer Group</label>
							<div class="col-sm-10">
								<div class="radio">
									<label>
										<input type="radio" name="customer_group_id" value="1" checked="true"> Default
									</label>
								</div>
							</div>
						</div>
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="input-firstname">First Name</label>
							<div class="col-sm-10">
								<input type="text" name="firstname" value="" placeholder="First Name" id="input-firstname" class="form-control">
							</div>
						</div>
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="input-lastname">Last Name</label>
							<div class="col-sm-10">
								<input type="text" name="lastname" value="" placeholder="Last Name" id="input-lastname" class="form-control">
							</div>
						</div>
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="input-email">E-Mail</label>
							<div class="col-sm-10">
								<input type="email" name="email" value="" placeholder="E-Mail" id="input-email" class="form-control">
							</div>
						</div>
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="Mmbile-number">Mobile Number</label>
							<div class="col-sm-10">
								<input type="tel" name="Mobile Number" value="" placeholder="Mobile Number" id="input-telephone" class="form-control">
							</div>
						</div>
                        <div class="form-group required">
							<label class="col-sm-2 control-label" for="Aadhar Number">Aadhar Number</label>
							<div class="col-sm-10">
								<input type="tel" name="Aadhar Number" value="" placeholder="Aadhar Number" id="input-telephone" class="form-control">
							</div>
						</div>
					</fieldset>
					<fieldset id="address">
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="input-city">City</label>
							<div class="col-sm-10">
								<input type="text" name="city" value="" placeholder="City" id="input-city" class="form-control">
							</div>
						</div>
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="input-postcode">Post Code</label>
							<div class="col-sm-10">
								<input type="text" name="postcode" value="" placeholder="Post Code" id="input-postcode" class="form-control">
							</div>
						</div>
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="input-country">Country</label>
							<div class="col-sm-10">
								<select name="country_id" id="input-country" class="form-control">
									<option value=""> --- Please Select --- </option>
									<option value="244"></option>
									<option value="1"></option>
									<option value="2"></option>
									<option value="3"></option>
									<option value="4"></option>
									<option value="5"></option>
									<option value="6"></option>
								</select>
							</div>
						</div>
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="input-zone">Region / State</label>
							<div class="col-sm-10">
								<select name="zone_id" id="input-zone" class="form-control">
									<option value=""> --- Please Select --- </option>
									<option value="3513"></option>
									<option value="3514"></option>
									<option value="3515"></option>
									<option value="3516"></option>
								  
								</select>
							</div>
						</div>
					</fieldset>
					<div class="buttons">
						<div class="pull-right">I have read and agree to the <a href="#" class="agree"><b>Pricing Tables</b></a>
							<input class="box-checkbox" type="checkbox" name="agree" value="1"> &nbsp;
							<input type="submit" value="Continue" class="btn btn-primary">
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	<!-- //Main Container -->
    </div>
</template>