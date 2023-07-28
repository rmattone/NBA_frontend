<template>
  <!-- audio-video modal -->
  <b-modal id="audio-video-modal" title="Audio and Video" hide-footer>
    <b-card body-class="border shadow-none rounded d-flex justify-content-between align-items-center flex-wrap">
      <h6 class="mb-0">Audio</h6>
      <div class="d-flex gap-3">
        <b-button variant="outline-primary active" size="sm" data-toggle="status" data-status="1">Enable</b-button>
        <b-button type="button" variant="outline-primary" size="sm" data-toggle="status" data-status="0">Disable</b-button>
      </div>
    </b-card>
    <b-card class="mb-0" body-class="border shadow-none rounded d-flex justify-content-between align-items-center flex-wrap">
      <h6 class="mb-0">Video</h6>
      <div class="d-flex gap-3">
        <b-button variant="outline-primary active" size="sm" data-toggle="status" data-status="1">Enable</b-button>
        <b-button variant="outline-primary" size="sm" data-toggle="status" data-status="0">Disable</b-button>
      </div>
    </b-card>
  </b-modal>
</template>
<script>
export default {
  name: 'VideoCallModal'
}
</script>
