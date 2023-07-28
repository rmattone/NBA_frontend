<template>
  <b-row>
    <b-col sm="12">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between rounded border-bottom-0 pb-4">
          <div class="header-title">
            <b-card-title>
              {{ $t('social-app.sidebar.today-birthday') }}
            </b-card-title>
          </div>
        </b-card-header>
      </b-card>
      <b-row>
        <b-col lg="6" md="12">
          <BrithdayWidget birthdayimg="01.png" birthdaytitle="Petey Cruiser" birthdy-date="Today" />
        </b-col>
        <div class="col-lg-6 col-md-12">
          <BrithdayWidget birthdayimg="02.png" birthdaytitle="Petey Cruiser" birthdy-date="Today" />
        </div>
      </b-row>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between rounded border-bottom-0 pb-4">
          <div class="header-title">
            <b-card-title>
              {{ $t('social-app.sidebar.upcoming-birthday') }}
            </b-card-title>
          </div>
        </b-card-header>
      </b-card>
      <b-row>
        <b-col lg="6" md="12">
          <BrithdayWidget birthdayimg="03.png" birthdaytitle="Petey Cruiser" birthdy-date="Tomorrow" />
        </b-col>
        <div class="col-lg-6 col-md-12">
          <BrithdayWidget birthdayimg="04.png" birthdaytitle="Paul Molive" birthdaydate="Tomorrow" />
        </div>
      </b-row>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between rounded border-bottom-0 pb-4">
          <div class="header-title">
            <b-card-title>
              {{ $t('social-app.sidebar.jan-birthday') }}
            </b-card-title>
          </div>
        </b-card-header>
      </b-card>
      <b-row>
        <b-col lg="6" md="12">
          <BrithdayWidget birthdayimg="05.png" birthdaytitle="Paige Turner" birthda-date="02-jan-2020" />
        </b-col>
        <b-col lg="6" md="12">
          <BrithdayWidget birthdayimg="06.png" birthdaytitle="Bob Frapples" birthda-date="15-jan-2020" />
        </b-col>
        <b-col lg="6" md="12">
          <BrithdayWidget birthdayimg="07.png" birthdaytitle="Barb Ackue" birthday-ate="15-jan-2020" />
        </b-col>
      </b-row>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between rounded border-bottom-0 pb-4">
          <div class="header-title">
            <b-card-title>
              {{ $t('social-app.sidebar.feb-birthday') }}
            </b-card-title>
          </div>
        </b-card-header>
      </b-card>
      <b-row>
        <b-col lg="6" md="12">
          <BrithdayWidget birthdayimg="08.png" birthdaytitle="Greta Life" birthday-ate="01-feb-2020" />
        </b-col>
      </b-row>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between rounded border-bottom-0 pb-4">
          <div class="header-title">
            <b-card-title>
              {{ $t('social-app.sidebar.march-birthday') }}
            </b-card-title>
          </div>
        </b-card-header>
      </b-card>
      <b-row>
        <b-col lg="6" md="12">
          <BrithdayWidget birthdayimg="09.png" birthdaytitle="Ira Membrit" birthdaydate="01-Mar-2020" />
        </b-col>
        <b-col lg="6" md="12">
          <BrithdayWidget birthdayimg="10.png" birthdaytitle="Pete Sariya" birthdaydate="5-Mar-2020" />
        </b-col>
        <b-col lg="6" md="12">
          <BrithdayWidget birthdayimg="11.png" birthdaytitle="Monty Carlo" birthdaydate="20-Mar-2020" />
        </b-col>
        <b-col lg="6" md="12">
          <BrithdayWidget birthdayimg="12.png" birthdaytitle="Ed Itorial" birthday-ate="30-Mar-2020" />
        </b-col>
      </b-row>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between rounded border-bottom-0 pb-4">
          <div class="header-title">
            <b-card-title>
              {{ $t('social-app.sidebar.april-birthday') }}
            </b-card-title>
          </div>
        </b-card-header>
      </b-card>
      <b-row>
        <b-col lg="6" md="12">
          <BrithdayWidget birthdayimg="13.png" birthdaytitle="Paul Issy" birthday-dte="06-Apr-2020" />
        </b-col>
        <b-col lg="6" md="12">
          <BrithdayWidget birthdayimg="14.png" birthdaytitle="Rick Shaw" birthday-dte="12-Apr-2020" />
        </b-col>
        <b-col lg="6" md="12">
          <BrithdayWidget birthdayimg="15.png" birthdaytitle="Ben Effit" birthday-dte="18-Apr-2020" />
        </b-col>
      </b-row>
      <b-card>
        <b-card-header class="d-flex justify-content-between rounded border-bottom-0 pb-4">
          <div class="header-title">
            <b-card-title>
              {{ $t('social-app.sidebar.may-birthday') }}
            </b-card-title>
          </div>
        </b-card-header>
      </b-card>
      <b-row>
        <b-col lg="6" md="12">
          <BrithdayWidget birthdayimg="16.png" birthdaytitle="Justin Case" birthdaydate="03-May-2020" />
        </b-col>
        <b-col lg="6" md="12">
          <BrithdayWidget birthdayimg="17.png" birthdaytitle="Aaron Ottix" birthdaydate="4-May-2020" />
        </b-col>
        <b-col lg="6" md="12">
          <BrithdayWidget birthdayimg="18.png" birthdaytitle="Pete Sariya" birthdaydate="15-May-2020" />
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>
<script>
import BrithdayWidget from '@/components/modules/social-app/widgets/BrithdayWidget.vue'
export default {
  name: 'BrithdayPage',
  components: {
    BrithdayWidget
  }
}
</script>
