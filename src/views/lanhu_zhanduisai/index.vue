<template>
  <div class="page flex-col justify-between">
    <img
      class="image_1"
      referrerpolicy="no-referrer"
      src="./assets/img/ea3d68807d414dff09f4487dc3fcd96d.png"
    />
    <div class="box_1 flex-col justify-end">
      <div class="group_1 flex-row justify-between">
        <div class="text-wrapper_1 flex-col"><span class="text_1">个人组</span></div>
        <div class="text-wrapper_2 flex-col"><span class="text_2">战队组</span></div>
      </div>
      <div class="group_2 flex-col">
        <div class="block_1 flex-row justify-end">
          <div class="group_3 flex-col justify-between">
            <div class="group_4 flex-col"></div>
            <div class="group_5 flex-col"></div>
          </div>
          <div class="group_6 flex-col">
            <div class="group_7 flex-col"></div>
            <img
              class="label_1"
              referrerpolicy="no-referrer"
              src="./assets/img/7684c0189c382ff3fe86ec39c6e17374.png"
            />
          </div>
          <div class="image-wrapper_1 flex-col">
            <img
              class="label_2"
              referrerpolicy="no-referrer"
              src="./assets/img/2c9babf521c89e5e9fa5d442b2527b1b.png"
            />
          </div>
          <div class="group_8 flex-row">
            <img
              class="label_3"
              referrerpolicy="no-referrer"
              src="./assets/img/6f3ecf48c4bae7359fb8c9b8ecc5d5d5.png"
            />
            <div class="group_9 flex-col"></div>
            <span class="text_3">战队榜</span>
          </div>
        </div>
        <span class="text_4">我的战队：xxxx票&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的票数：xxxx票</span>
        <div class="block_2 flex-col">
          <div class="text-wrapper_3 flex-col"><span class="text_5">黄连上清队</span></div>
          <div class="text-wrapper_4 flex-row justify-between">
            <span class="text_6">作品名称：作品名称名称</span>
            <span class="text_7">9999票</span>
          </div>
          <div class="group_10 flex-row justify-between">
            <div class="box_2 flex-col">
              <div class="group_11 flex-row justify-between">
                <div class="block_3 flex-col"></div>
                <div class="block_4 flex-col justify-between">
                  <img
                    class="image_2"
                    referrerpolicy="no-referrer"
                    src="./assets/img/e60bf21bb707371ed38d90768ed9156e.png"
                  />
                  <span class="text_8">用户昵称</span>
                </div>
              </div>
              <span class="text_9">9999票</span>
              <div class="group_12 flex-col">
                <div class="text-wrapper_5 flex-col"><span class="text_10">001</span></div>
              </div>
            </div>
            <div class="list_1 flex-row">
              <div
                class="list-items_1 flex-col"
                :style="{ background: item.lanhuBg0 }"
                v-for="(item, index) in loopData0"
                :key="index"
              >
                <div class="box_3 flex-col">
                  <div class="text-wrapper_6 flex-col"><span class="text_11" v-html="item.lanhutext0"></span></div>
                </div>
                <div class="box_4 flex-row justify-between">
                  <div class="section_1 flex-col"></div>
                  <span class="text_12" v-html="item.lanhutext1"></span>
                </div>
                <span class="text_13" v-html="item.lanhutext2"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="block_5 flex-col">
          <div class="text-wrapper_7 flex-col"><span class="text_14">黄连上清队</span></div>
          <div class="text-wrapper_8 flex-row justify-between">
            <span class="text_15">作品名称：作品名称名称</span>
            <span class="text_16">9999票</span>
          </div>
          <div class="box_5 flex-row justify-between">
            <div class="section_2 flex-col">
              <div class="group_13 flex-row justify-between">
                <div class="section_3 flex-col"></div>
                <div class="section_4 flex-col justify-between">
                  <img
                    class="image_3"
                    referrerpolicy="no-referrer"
                    src="./assets/img/2ec0790a1c012c0feff52904f8d0c9d0.png"
                  />
                  <span class="text_17">用户昵称</span>
                </div>
              </div>
              <span class="text_18">9999票</span>
              <div class="group_14 flex-col">
                <div class="text-wrapper_9 flex-col"><span class="text_19">001</span></div>
              </div>
            </div>
            <div class="section_5 flex-col">
              <div class="box_6 flex-col">
                <div class="text-wrapper_10 flex-col"><span class="text_20">001</span></div>
              </div>
              <div class="box_7 flex-row justify-between">
                <div class="group_15 flex-col"></div>
                <span class="text_21">用户昵称</span>
              </div>
              <span class="text_22">9999票</span>
            </div>
            <div class="section_6 flex-col">
              <div class="box_8 flex-col">
                <div class="text-wrapper_11 flex-col"><span class="text_23">001</span></div>
              </div>
              <div class="box_9 flex-row justify-between">
                <div class="group_16 flex-col"></div>
                <span class="text_24">用户昵称</span>
              </div>
              <span class="text_25">9999票</span>
            </div>
          </div>
          <div class="box_10 flex-row justify-between">
            <div class="box_11 flex-col">
              <div class="section_7 flex-col">
                <div class="text-wrapper_12 flex-col"><span class="text_26">001</span></div>
              </div>
              <div class="section_8 flex-row justify-between">
                <div class="group_17 flex-col"></div>
                <span class="text_27">用户昵称</span>
              </div>
              <span class="text_28">9999票</span>
            </div>
            <div class="box_12 flex-col">
              <div class="group_18 flex-col">
                <div class="text-wrapper_13 flex-col"><span class="text_29">001</span></div>
              </div>
              <div class="group_19 flex-row justify-between">
                <div class="box_13 flex-col"></div>
                <span class="text_30">用户昵称</span>
              </div>
              <span class="text_31">9999票</span>
            </div>
            <div class="box_14 flex-col">
              <div class="group_20 flex-col">
                <div class="text-wrapper_14 flex-col"><span class="text_32">001</span></div>
              </div>
              <div class="group_21 flex-row justify-between">
                <div class="box_15 flex-col"></div>
                <span class="text_33">用户昵称</span>
              </div>
              <span class="text_34">9999票</span>
            </div>
          </div>
        </div>
        <div class="block_6 flex-col">
          <div class="text-wrapper_15 flex-col"><span class="text_35">黄连上清队</span></div>
          <div class="text-wrapper_16 flex-row justify-between">
            <span class="text_36">作品名称：作品名称名称</span>
            <span class="text_37">9999票</span>
          </div>
          <div class="box_16 flex-row justify-between">
            <div class="group_22 flex-col">
              <div class="box_17 flex-row justify-between">
                <div class="box_18 flex-col"></div>
                <div class="box_19 flex-col justify-between">
                  <img
                    class="image_4"
                    referrerpolicy="no-referrer"
                    src="./assets/img/e925815861a6a892b8834e62b9817882.png"
                  />
                  <span class="text_38">用户昵称</span>
                </div>
              </div>
              <span class="text_39">9999票</span>
              <div class="box_20 flex-col">
                <div class="text-wrapper_17 flex-col"><span class="text_40">001</span></div>
              </div>
            </div>
            <div class="group_23 flex-col">
              <div class="block_7 flex-col">
                <div class="text-wrapper_18 flex-col"><span class="text_41">001</span></div>
              </div>
              <div class="block_8 flex-row justify-between">
                <div class="section_9 flex-col"></div>
                <span class="text_42">用户昵称</span>
              </div>
              <span class="text_43">9999票</span>
            </div>
            <div class="group_24 flex-col">
              <div class="section_10 flex-col">
                <div class="text-wrapper_19 flex-col"><span class="text_44">001</span></div>
              </div>
              <div class="section_11 flex-row justify-between">
                <div class="block_9 flex-col"></div>
                <span class="text_45">用户昵称</span>
              </div>
              <span class="text_46">9999票</span>
            </div>
          </div>
        </div>
        <div class="list_2 flex-col">
          <div class="list-items_2 flex-col" v-for="(item, index) in loopData1" :key="index">
            <div class="text-wrapper_20 flex-row justify-between">
              <span class="text_47" v-html="item.lanhutext0"></span>
              <span class="text_48" v-html="item.lanhutext1"></span>
            </div>
            <div class="text-wrapper_21 flex-row justify-between">
              <span class="text_49" v-html="item.lanhutext2"></span>
              <span class="text_50" v-html="item.lanhutext3"></span>
            </div>
            <div class="group_25 flex-row justify-between">
              <div class="box_21 flex-col">
                <div class="block_10 flex-col">
                  <div class="text-wrapper_22 flex-col" :style="{ background: item.lanhuBg6 }">
                    <span class="text_51" v-html="item.lanhutext4"></span>
                  </div>
                </div>
                <div class="block_11 flex-row justify-between">
                  <div class="box_22 flex-col"></div>
                  <span class="text_52" v-html="item.lanhutext5"></span>
                </div>
                <span class="text_53" v-html="item.lanhutext6"></span>
              </div>
              <div class="box_23 flex-col">
                <div class="box_24 flex-col">
                  <div class="text-wrapper_23 flex-col"><span class="text_54" v-html="item.lanhutext7"></span></div>
                </div>
                <div class="box_25 flex-row justify-between">
                  <div class="box_26 flex-col"></div>
                  <span class="text_55" v-html="item.lanhutext8"></span>
                </div>
                <span class="text_56" v-html="item.lanhutext9"></span>
              </div>
              <div class="box_27 flex-col">
                <div class="group_26 flex-col">
                  <div class="text-wrapper_24 flex-col"><span class="text_57" v-html="item.lanhutext10"></span></div>
                </div>
                <div class="group_27 flex-row justify-between">
                  <div class="block_12 flex-col"></div>
                  <span class="text_58" v-html="item.lanhutext11"></span>
                </div>
                <span class="text_59" v-html="item.lanhutext12"></span>
              </div>
              <div class="box_28 flex-col">
                <div class="box_29 flex-col">
                  <div class="text-wrapper_25 flex-col"><span class="text_60" v-html="item.lanhutext13"></span></div>
                </div>
                <div class="box_30 flex-row justify-between">
                  <div class="box_31 flex-col"></div>
                  <span class="text_61" v-html="item.lanhutext14"></span>
                </div>
                <span class="text_62" v-html="item.lanhutext15"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="group_28 flex-row">
        <div class="text-wrapper_26 flex-col"><span class="text_63">参赛作品</span></div>
        <span class="text_64">活动介绍</span>
        <span class="text_65">活动榜单</span>
        <span class="text_66">获奖结果</span>
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
          lanhuBg0: 'url(https://lanhu.oss-cn-beijing.aliyuncs.com/49300c5c194e73ef8a85be9075304402) 100% no-repeat',
          lanhutext0: '001',
          lanhutext1: '用户昵称',
          lanhutext2: '9999票'
        },
        {
          lanhuBg0: 'url(https://lanhu.oss-cn-beijing.aliyuncs.com/9176fd8f3283a44a2bc582b808a98c5b) 100% no-repeat',
          lanhutext0: '001',
          lanhutext1: '用户昵称',
          lanhutext2: '9999票'
        },
        {
          lanhuBg0: 'url(https://lanhu.oss-cn-beijing.aliyuncs.com/e580934dddb8ef906fe47777f89c5eba) 100% no-repeat',
          lanhutext0: '001',
          lanhutext1: '用户昵称',
          lanhutext2: '9999票'
        }
      ],
      loopData1: [
        {
          lanhutext0: '04',
          lanhutext1: '黄连上清队',
          lanhutext2: '作品名称：作品名称名称',
          lanhutext3: '9999票',
          lanhuBg6: 'url(https://lanhu.oss-cn-beijing.aliyuncs.com/dadaf3c263fe7ab51a1e3b7dca802d97) 100% no-repeat',
          lanhutext4: '001',
          lanhutext5: '用户昵称',
          lanhutext6: '9999票',
          lanhutext7: '001',
          lanhutext8: '用户昵称',
          lanhutext9: '9999票',
          lanhutext10: '001',
          lanhutext11: '用户昵称',
          lanhutext12: '9999票',
          lanhutext13: '001',
          lanhutext14: '用户昵称',
          lanhutext15: '9999票'
        },
        {
          lanhutext0: '04',
          lanhutext1: '黄连上清队',
          lanhutext2: '作品名称：作品名称名称',
          lanhutext3: '9999票',
          lanhuBg6: 'rgba(153,159,164,1.000000)',
          lanhutext4: '001',
          lanhutext5: '用户昵称',
          lanhutext6: '9999票',
          lanhutext7: '001',
          lanhutext8: '用户昵称',
          lanhutext9: '9999票',
          lanhutext10: '001',
          lanhutext11: '用户昵称',
          lanhutext12: '9999票',
          lanhutext13: '001',
          lanhutext14: '用户昵称',
          lanhutext15: '9999票'
        }
      ],
      constants: {}
    };
  },
  methods: {}
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />