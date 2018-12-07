<template>
  <div class="chat">
    <!-- history component -->
    <!-- form component -->
    <Form />
  </div>
</template>
<script>
// @ is an alias to /src
import Form from '@/components/chat/Form.vue';

export default {
  name: 'chat',
  components: {
    Form,
  },
};
</script>
