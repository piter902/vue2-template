<route>
    {
      "name": "home",
      "meta": {
        "requiresAuth": true
      }
    }
</route>
<template>
  <div>
    index
    <div
      class="rounded-tr-3px w-480px border-2 border-level1 p-8 bg-primary text-14px font-600 text-normal leading-loose"
    >
      testBtn
    </div>
    <div class="line-clamp-3 bg-purple-600">
      多行文本自动省略多行文本自动省略多行文本自动省略多行文本自动省略多行文本自动
      省略多行文本自动省略多行文本自动省略多行文本自动省略多行文本自动省略多行文本
      自动省略多行文本自动省略多行文本自动省略多行文本自动省略多行文本自动省略多行
      文本自动省略多行文本自动省略多行文本自动省略多行文本自动省略多行文本自动省略
      多行文本自动省略多行文本自动省略多行文本自动省略多行文本自动省略多行文本自动
      省略多行文本自动省略多行文本自动省略多行文本自动省略多行文本自动省略多行文本
      自动省略多行文本自动省略多行文本自动省略多行文本自动省略多行文本自动省略多行
      文本自动省略多行文本自动省略多行文本自动省略多行文本自动省略多行文本自动省略
      多行文本自动省略多行文本自动省略多行文本自动省略多行文本自动省略多行文本自动
    </div>
    <div class="father">
      <HelloWord />
    </div>
  </div>
</template>
<script>
import HelloWord from '@/components/HelloWorld.vue';
export default {
  name: 'index-com',
  components: {
    HelloWord
  },
  async created() {
    console.log(this.$route);
    const res1 = await this.$testApi.test({ url: '/test/a' });
    const res = await this.$testApi.test1({
      delegate: false,
      a: 123
    });
    console.log('delegate:true=', res, '\ndelegate:false=', res1);
  }
};
</script>
