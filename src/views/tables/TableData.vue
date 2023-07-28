<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-header">
          <h5 class="mb-0">Bootstrap Datatable</h5>
        </div>
        <div class="card-body">
          <p class="mb-3">Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales with the parent element.</p>
          <div class="custom-table-effect table-responsive mt-3">
            <data-table :data="DataTableOptions.data" :columns="DataTableOptions.columns" isFooter="bootstrap-data-table" />
          </div>
        </div>
      </div>
      <!-- Column Hidden Datatable -->
      <div class="card">
        <div class="card-header">
          <h5 class="mb-0">Column Hidden Datatable</h5>
        </div>
        <div class="card-body">
          <p class="mb-3">Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales with the parent element.</p>
          <div class="custom-table-effect table-responsive mt-3">
            <div class="mb-3">
              Toggle column: <a class="toggle-vis btn btn-outline-primary" data-column="0">Name</a> - <a class="toggle-vis btn btn-outline-primary" data-column="1">Position</a> - <a class="toggle-vis btn btn-outline-primary" data-column="2">Office</a> - <a class="toggle-vis btn btn-outline-primary" data-column="3">Age</a> - <a class="toggle-vis btn btn-outline-primary" data-column="4">Start date</a> -
              <a class="toggle-vis btn btn-outline-primary" data-column="5">Salary</a>
            </div>
            <data-table :data="DataTableOptions.data" :columns="DataTableOptions.columns" isFooter="column-hidden" isToggleFilter="data-table-column-hidden" />
          </div>
        </div>
      </div>
      <!-- Input Search Datatable-->
      <div class="card">
        <div class="card-header">
          <h5 class="mb-0">Input Search Datatable</h5>
        </div>
        <div class="card-body">
          <p class="mb-3">Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales with the parent element.</p>
          <div class="custom-table-effect table-responsive mt-3">
            <data-table :data="DataTableOptions.data" :columns="DataTableOptions.columns" isColumnFilter="eCommerce-admin" />
          </div>
        </div>
      </div>
      <!-- Multi-language Datatable -->
      <div class="card">
        <div class="card-header">
          <h5 class="mb-0">Multi-language Datatable</h5>
        </div>
        <div class="card-body">
          <p class="mb-3">Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales with the parent element.</p>
          <div class="custom-table-effect table-responsive mt-3">
            <select id="langSelector" class="form-control mb-3">
              <option value="eng" id="english" data-path="//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/English.json" selected>English</option>
              <option value="german" id="german" data-path="//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/German.json">German</option>
              <option value="french" id="french" data-path="//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json">French</option>
              <option value="hindi" id="hindi" data-path="//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Hindi.json">Hindi</option>
              <option value="japanase" id="japanase" data-path="//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Japanese.json">Japanese</option>
            </select>

            <data-table :data="DataTableOptions.data" :columns="DataTableOptions.columns" isFooter="multi-language" isLanguageFilter="data-table-multi-language" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import DataTable from '@/components/DataTable.vue'

const DataTableOptions = {
  columns: [{ title: 'Name' }, { title: 'Position' }, { title: 'Office' }, { title: 'Age' }, { title: 'Startdate' }, { title: 'Salary' }],
  data: [
    ['Airi Satou', 'Accountant', 'Tokyo', '33', '2008/11/28', '$162,700'],
    ['Angelica Ramos', 'Chief Executive Officer (CEO)', 'London', '47', '2009/10/09', '$1,200,000'],
    ['Ashton Cox', 'Junior Technical Author', 'San Francisco', '66', '2009/01/12', '$86,000'],
    ['Bradley Greer', 'Software Engineer', 'London', '41', '2012/10/13', '$132,000'],
    ['Brenden Wagner', 'Software Engineer', 'San Francisco', '28', '2011/06/07', '$206,850'],
    ['Brielle Williamson', 'Integration Specialist', 'New York', '61', '2012/12/02', '$372,000'],
    ['Bruno Nash', 'Software Engineer', 'London', '38', '2011/05/03', '$163,500'],
    ['Caesar Vance', 'Pre-Sales Support', 'New York', '21', '2011/12/12', '$106,450'],
    ['Cara Stevens', 'Sales Assistant', 'New York', '46', '2011/12/06', '$145,600'],
    ['Cedric Kelly', 'Senior Javascript Developer', 'Edinburgh', '22', '2012/03/29', '$433,060'],
    ['Bradley Greer', 'Software Engineer', 'London', '41', '2012/10/13', '$132,000'],
    ['Brenden Wagner', 'Software Engineer', 'San Francisco', '28', '2011/06/07', '$206,850'],
    ['Brielle Williamson', 'Integration Specialist', 'New York', '61', '2012/12/02', '$372,000'],
    ['Bruno Nash', 'Software Engineer', 'London', '38', '2011/05/03', '$163,500'],
    ['Caesar Vance', 'Pre-Sales Support', 'New York', '21', '2011/12/12', '$106,450'],
    ['Airi Satou', 'Accountant', 'Tokyo', '33', '2008/11/28', '$162,700'],
    ['Angelica Ramos', 'Chief Executive Officer (CEO)', 'London', '47', '2009/10/09', '$1,200,000'],
    ['Ashton Cox', 'Junior Technical Author', 'San Francisco', '66', '2009/01/12', '$86,000'],
    ['Bradley Greer', 'Software Engineer', 'London', '41', '2012/10/13', '$132,000'],
    ['Brenden Wagner', 'Software Engineer', 'San Francisco', '28', '2011/06/07', '$206,850'],
    ['Brielle Williamson', 'Integration Specialist', 'New York', '61', '2012/12/02', '$372,000'],
    ['Bruno Nash', 'Software Engineer', 'London', '38', '2011/05/03', '$163,500']
  ]
}
</script>
