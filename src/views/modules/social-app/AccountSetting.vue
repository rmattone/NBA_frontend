<template>
  <b-row>
    <b-col lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>{{ $t('social-app.sidebar.account') }}</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <div class="acc-edit">
            <b-form>
              <b-form-group label="User Name:" label-for="uname">
                <b-form-input type="text" class="form-control" id="uname" placeholder="Barry@01" />
              </b-form-group>
              <b-form-group label="Email Id:" label-for="email">
                <b-form-input type="email" class="form-control" id="email" placeholder="Barryjohn@gmail.com" />
              </b-form-group>
              <b-form-group label="Alternate Email:" label-for="altemail">
                <b-form-input type="email" class="form-control" id="altemail" placeholder="designtheme@gmail.com" />
              </b-form-group>
              <b-form-group label="Language Known:">
                <b-form-checkbox>English</b-form-checkbox>
                <b-form-checkbox>French</b-form-checkbox>
                <b-form-checkbox switchChecked1="switchChecked1">Hindi</b-form-checkbox>
                <b-form-checkbox>Spanish</b-form-checkbox>
                <b-form-checkbox>Arabic</b-form-checkbox>
                <b-form-checkbox>Italian</b-form-checkbox>
              </b-form-group>
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="mm-bg-danger">Cancel</b-button>
            </b-form>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>{{ $t('social-app.sidebar.social') }}</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <div class="acc-edit">
            <b-form>
              <b-form-group label="Facebook:" label-for="facebook">
                <b-form-input type="text" class="form-control" id="facebook" placeholder="www.facebook.com" />
              </b-form-group>
              <b-form-group label="Twitter:" label-for="twitter">
                <b-form-input type="text" class="form-control" id="twitter" placeholder="www.twitter.com" />
              </b-form-group>
              <b-form-group label="Linked In:" label-for="LinkedIn">
                <b-form-input type="text" class="form-control" id="LinkedIn" placeholder="www.linkedin.com" />
              </b-form-group>
              <b-form-group label="Instagram:" label-for="instagram">
                <b-form-input type="text" class="form-control" id="instagram" placeholder="www.instagram.com" />
              </b-form-group>
              <b-form-group label="You Tube:" label-for="youtube">
                <b-form-input type="text" class="form-control" id="youtube" placeholder="www.youtube.com" />
              </b-form-group>
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="mm-bg-danger">Cancel</b-button>
            </b-form>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: 'AccountSetting'
}
</script>
