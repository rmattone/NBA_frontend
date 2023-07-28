<template>
  <div class="d-flex">
    <img :src="require(`@/assets/modules/social-app/images/${userImage}`)" alt="userimg" class="avatar-50 rounded-circle me-3 img-fluid" loading="lazy" />
    <div class="w-100">
      <h6 class="mb-1">{{ userName }}</h6>
      <p class="mb-1">{{ userComment }}</p>
      <div class="d-flex flex-wrap align-items-center">
        <a href="javascript:void(0)">Like</a>
        <a class="mx-3" type="button" data-bs-toggle="collapse" :data-bs-target="`#reply-${id}`" aria-expanded="false" :aria-controls="`reply-${id}`">Reply</a>
        <span> {{ commentDuration }} </span>
      </div>
      <div class="collapse" :id="`reply-${id}`">
        <FormComment placeholder="Enter Your Reply..." />
      </div>
    </div>
  </div>
</template>
<script>
import FormComment from '@/components/modules/social-app/widgets/FormComment.vue'
export default {
  name: 'FriendComment',
  components: {
    FormComment
  },
  props: {
    type: String,
    userImage: { default: '' },
    userName: { default: '' },
    id: { default: '' },
    userComment: { default: '' },
    commentDuration: { default: '' }
  }
}
</script>
