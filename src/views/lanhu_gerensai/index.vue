<template>
  <div class="page flex-col">
    <img
      class="image_1"
      referrerpolicy="no-referrer"
      src="./assets/img/43e642a4b172d4f89c79f1ae064c0740.png"
    />
    <div class="group_1 flex-col justify-end">
      <img
        class="image_2"
        referrerpolicy="no-referrer"
        src="./assets/img/354fab9ebe4e319c6df257e07ff4a162.png"
      />
      <div class="group_3 flex-col">
        <div class="section_6 flex-row justify-between">
          <div class="text-wrapper_1 flex-col"><span class="text_1">个人组</span></div>
          <div class="text-wrapper_2 flex-col"><span class="text_2">战队组</span></div>
        </div>
      </div>
      <div class="section_3 flex-col">
        <div class="box_5 flex-row justify-between">
          <div class="text-wrapper_3 flex-col"><span class="text_3">个人榜</span></div>
          <img
            class="image_3"
            referrerpolicy="no-referrer"
            src="./assets/img/931a68fc8fedb86e1c76785efad2fc6f.png"
          />
        </div>
        <span class="text_4">我的票数：xxxx票</span>
        <div class="text-wrapper_9 flex-row justify-between">
          <span class="text_5">99999票</span>
          <span class="text_6">99999票</span>
        </div>
        <div class="list_2 flex-col">
          <div class="list-items_1 flex-row" v-for="(item, index) in loopData0" :key="index">
            <span class="text_7" v-html="item.lanhutext0"></span>
            <div class="group_2 flex-col"></div>
            <div class="text-group_5 flex-col justify-between">
              <span class="text_8" v-html="item.lanhutext1"></span>
              <span class="text_9" v-html="item.lanhutext2"></span>
            </div>
            <span class="text_10" v-html="item.lanhutext3"></span>
          </div>
        </div>
        <div class="box_6 flex-row justify-between">
          <div class="box_1 flex-col">
            <div class="section_4 flex-col">
              <div class="text-wrapper_5 flex-col"><span class="text_11">023</span></div>
            </div>
            <div class="text-group_6 flex-col justify-between">
              <span class="text_12">作品名称名称</span>
              <span class="paragraph_1">
                用户昵称
                <br />
                浙江农林大学
              </span>
            </div>
          </div>
          <div class="box_2 flex-col">
            <div class="block_3 flex-col">
              <div class="text-wrapper_6 flex-col"><span class="text_13">001</span></div>
            </div>
            <div class="text-group_7 flex-col">
              <span class="text_14">作品名称名称</span>
              <span class="paragraph_2">
                用户昵称
                <br />
                浙江农林大学
              </span>
              <span class="text_15">99999票</span>
            </div>
          </div>
          <div class="box_3 flex-col">
            <div class="box_4 flex-col">
              <div class="text-wrapper_7 flex-col"><span class="text_16">010</span></div>
            </div>
            <div class="text-group_8 flex-col justify-between">
              <span class="text_17">作品名称名称</span>
              <span class="paragraph_3">
                用户昵称
                <br />
                浙江农林大学
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="section_5 flex-row">
        <div class="text-wrapper_8 flex-col"><span class="text_18">参赛作品</span></div>
        <span class="text_19">活动介绍</span>
        <span class="text_20">活动榜单</span>
        <span class="text_21">获奖结果</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loopData0: [
        {
          lanhutext0: '04',
          lanhutext1: '001&nbsp;&nbsp;作品名称名称',
          lanhutext2: '用户昵称&nbsp;&nbsp;浙江农林大学',
          lanhutext3: '99999票'
        },
        {
          lanhutext0: '05',
          lanhutext1: '001&nbsp;&nbsp;作品名称名称',
          lanhutext2: '用户昵称&nbsp;&nbsp;浙江农林大学',
          lanhutext3: '99999票'
        },
        {
          lanhutext0: '06',
          lanhutext1: '001&nbsp;&nbsp;作品名称名称',
          lanhutext2: '用户昵称&nbsp;&nbsp;浙江农林大学',
          lanhutext3: '99999票'
        },
        {
          lanhutext0: '07',
          lanhutext1: '001&nbsp;&nbsp;作品名称名称',
          lanhutext2: '用户昵称&nbsp;&nbsp;浙江农林大学',
          lanhutext3: '99999票'
        },
        {
          lanhutext0: '08',
          lanhutext1: '001&nbsp;&nbsp;作品名称名称',
          lanhutext2: '用户昵称&nbsp;&nbsp;浙江农林大学',
          lanhutext3: '99999票'
        },
        {
          lanhutext0: '09',
          lanhutext1: '001&nbsp;&nbsp;作品名称名称',
          lanhutext2: '用户昵称&nbsp;&nbsp;浙江农林大学',
          lanhutext3: '99999票'
        },
        {
          lanhutext0: '10',
          lanhutext1: '001&nbsp;&nbsp;作品名称名称',
          lanhutext2: '用户昵称&nbsp;&nbsp;浙江农林大学',
          lanhutext3: '99999票'
        }
      ],
      constants: {}
    };
  },
  methods: {}
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />