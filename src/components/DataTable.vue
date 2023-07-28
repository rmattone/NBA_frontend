<template>
  <table :class="'table ' + className" ref="tableRef"></table>
</template>

<script setup>
import { onMounted, ref, defineProps } from 'vue'
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'
import 'datatables.net-bs5/js/dataTables.bootstrap5.min.js'
import 'datatables.net-bs5'
import $ from 'jquery'
import mitt from 'mitt'
const emitter = mitt()
const props = defineProps({
  data: Array,
  columns: Array,
  options: Object,
  className: String,
  isFooter: { type: String },
  isColumnFilter: { type: String },
  isToggleFilter: { type: String },
  isLanguageFilter: { type: String }
})

const toggleFilter = () => {
  const table = $(tableRef.value).DataTable()
  $('a.toggle-vis').on('click', function (e) {
    e.preventDefault()
    const column = table.column($(this).attr('data-column'))
    column.visible(!column.visible())
  })
}

const inputSearchDatatable = () => {
  const table = $(tableRef.value).DataTable()
  const footerRow = document.createElement('tr')
  props.columns.forEach((column) => {
    const footerCell = document.createElement('td')
    const input = document.createElement('input')
    input.type = 'text'
    input.className = 'form-control form-control-sm'
    input.placeholder = column.title
    input.addEventListener('keyup', (event) => {
      const columnIndex = props.columns.findIndex((c) => c.title === column.title)
      table.column(columnIndex).search(event.target.value).draw()
      console.log(table.column(columnIndex).search(event.target.value).draw())
    })

    footerCell.append(input)
    footerRow.append(footerCell)
  })

  $(tableRef.value).append($('<tfoot>').append(footerRow))
}

const languageSelect = () => {
  return Array.from(document.querySelector('#langSelector').options)
    .filter((option) => option.selected)
    .map((option) => option.getAttribute('data-path'))
}
const dataTableInit = () => {
  const langUrl = languageSelect()
  if (langUrl) {
    $(tableRef.value).DataTable({
      language: {
        url: langUrl
      }
    })
  }
}
const multiLanguage = () => {
  const langSelector = document.querySelector('#langSelector')
  if (langSelector) {
    langSelector.addEventListener('change', function () {
      $(tableRef.value).dataTable().fnDestroy()
      dataTableInit() // binding object
    })
  }
}
// const footerExisted = () => {
//    const tableExisted = tableRef.value
//         const footerExisted = tableExisted.querySelector('tfoot')
//         if (footerExisted) {
//           $(footerExisted).remove()
//         }
// }
// console.log(footerExisted)
const fetchData = () => {
  const table = $(tableRef.value).DataTable({
    autoWidth: false,
    data: props.data,
    columns: props.columns,
    dom: '<"row align-items-center"<"col-md-6" l><"col-md-6" f>><"table-responsive my-3" rt><"row align-items-center" <"col-md-6" i><"col-md-6" p>><"clear">',
    destroy: true,
    initComplete: () => {
      if (props.isFooter) {
        const footerRow = document.createElement('tr')
        props.columns.forEach((column) => {
          const footerCell = document.createElement('th')
          const input = column.title
          footerCell.append(input)
          footerRow.append(footerCell)
        })

        $(tableRef.value).append($('<tfoot>').append(footerRow))
      }
      if (props.isColumnFilter) {
        inputSearchDatatable()
      }

      if (props.isToggleFilter) {
        toggleFilter()
      }

      if (props.isLanguageFilter) {
        multiLanguage()
      }
    }
  })
  emitter.on('hook:beforeDestroy', function () {
    table.destroy()
  })
}

const tableRef = ref(null)

onMounted(fetchData)
</script>

Was this response better or worse? Better Worse Same

<style scoped lang="css">
@import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
</style>
