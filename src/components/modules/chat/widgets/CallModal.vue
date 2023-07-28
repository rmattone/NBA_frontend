<template>
  <!-- calling modal -->
  <b-modal id="calling-modal" title="Calling" hide-footer>
    <div class="d-flex justify-content-between align-items-center pb-3 border-bottom">
      <label class="form-check-label mb-0" for="call-001">Caller ID</label>
      <div class="form-check form-switch mb-0">
        <input class="form-check-input" type="checkbox" id="call-001" />
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center pt-3 pb-3 border-bottom">
      <label class="form-check-label mb-0" for="call-002">Call Forwarding and Voicemall</label>
      <div class="form-check form-switch mb-0">
        <input class="form-check-input" type="checkbox" id="call-002" />
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center pt-3 pb-3 border-bottom">
      <label class="form-check-label mb-0" for="call-003">Show Call Window When Hope UI is in the background</label>
      <div class="form-check form-switch mb-0">
        <input class="form-check-input" type="checkbox" id="call-003" checked="" />
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center pt-3">
      <label class="form-check-label mb-0" for="call-004">Only allow Hope UI calls from contacts to ring on this device</label>
      <div class="form-check form-switch mb-0">
        <input class="form-check-input" type="checkbox" id="call-004" />
      </div>
    </div>
  </b-modal>
</template>
<script>
export default {
  name: 'CallModal'
}
</script>
