<template>
  <!-- Massaging modal -->
  <b-modal id="message-modal" title="Massaging" hide-footer>
    <div class="d-flex justify-content-between align-items-center pb-3 border-bottom">
      <label class="form-check-label mb-0" for="message-2001">Web link previews</label>
      <div class="form-check form-switch mb-0">
        <input class="form-check-input" type="checkbox" id="message-2001" checked="" />
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center py-3 border-bottom">
      <label class="form-check-label mb-0" for="message-2002">Text Size</label>
      <div class="form-check form-switch mb-0">
        <input class="form-check-input" type="checkbox" id="message-2002" />
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center py-3 border-bottom">
      <label class="form-check-label mb-0" for="message-2003">Send message with Enter key</label>
      <div class="form-check form-switch mb-0">
        <input class="form-check-input" type="checkbox" id="message-2003" checked="" />
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center py-3 border-bottom">
      <label class="form-check-label mb-0" for="message-2004">Auto-download photos</label>
      <div class="form-check form-switch mb-0">
        <input class="form-check-input" type="checkbox" id="message-2004" />
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center py-3 border-bottom">
      <label class="form-check-label mb-0" for="message-2005">Auto-download files</label>
      <div class="form-check form-switch mb-0">
        <input class="form-check-input" type="checkbox" id="message-2005" checked="" />
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center pt-3">
      <label class="form-check-label mb-0" for="message-2006">When I recieve a File</label>
      <div class="form-check form-switch mb-0">
        <input class="form-check-input" type="checkbox" id="message-2006" />
      </div>
    </div>
  </b-modal>
</template>
<script>
export default {
  name: 'MessageModal'
}
</script>
