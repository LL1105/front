<template>
  <div>
    <IndexHeader></IndexHeader>
    <div class="body">
      <div class="box">
        <div class="title">
          <img :src="detaildata.ownerAvatarUrl || defaultimg" alt="">
          <div style="margin-right: auto; font-weight: bolder;">
            {{ detaildata.name }}
          </div>
          <a :href="detaildata.url" target="_blank">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.05em" height="1em" viewBox="0 0 25 24">
                <path fill="currentColor" d="M12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031a12.35 12.35 0 0 1 4.449 4.422l.031.058a12.2 12.2 0 0 1 1.654 6.166c0 5.406-3.483 10-8.327 11.658l-.087.026a.72.72 0 0 1-.642-.113l.002.001a.62.62 0 0 1-.208-.466v-.014v.001l.008-1.226q.008-1.178.008-2.154a2.84 2.84 0 0 0-.833-2.274a11 11 0 0 0 1.718-.305l-.076.017a6.5 6.5 0 0 0 1.537-.642l-.031.017a4.5 4.5 0 0 0 1.292-1.058l.006-.007a4.9 4.9 0 0 0 .84-1.645l.009-.035a7.9 7.9 0 0 0 .329-2.281l-.001-.136v.007l.001-.072a4.73 4.73 0 0 0-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479a4.25 4.25 0 0 0-.404-1.814l.011.026a2.1 2.1 0 0 0-1.31.181l.012-.005a8.6 8.6 0 0 0-1.512.726l.038-.022l-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433a9 9 0 0 0-1.272-.595l-.066-.022A2.17 2.17 0 0 0 5.837 5.1l.013-.002a4.2 4.2 0 0 0-.393 1.788c0 .531.097 1.04.275 1.509l-.01-.029a4.72 4.72 0 0 0-1.265 3.303v-.004l-.001.13c0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013a4.4 4.4 0 0 0 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012a3 3 0 0 1-.699.236l-.021.004c-.256.051-.549.08-.85.08h-.066h.003a1.9 1.9 0 0 1-1.055-.348l.006.004a2.84 2.84 0 0 1-.881-.986l-.007-.015a2.6 2.6 0 0 0-.768-.827l-.009-.006a2.3 2.3 0 0 0-.776-.38l-.016-.004l-.32-.048a1.05 1.05 0 0 0-.471.074l.007-.003q-.128.072-.08.184q.058.128.145.225l-.001-.001q.092.108.205.19l.003.002l.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024l.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007q.069.002.15.002q.392 0 .767-.062l-.027.004l.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001a.72.72 0 0 1-.645.111l.005.001C3.486 22.286.006 17.692.006 12.285c0-2.268.612-4.393 1.681-6.219l-.032.058a12.35 12.35 0 0 1 4.422-4.449l.058-.031a11.9 11.9 0 0 1 6.073-1.645h.098h-.005zm-7.64 17.666q.048-.112-.112-.192q-.16-.048-.208.032q-.048.112.112.192q.144.096.208-.032m.497.545q.112-.08-.032-.256q-.16-.144-.256-.048q-.112.08.032.256q.159.157.256.047zm.48.72q.144-.112 0-.304q-.128-.208-.272-.096q-.144.08 0 .288t.272.112m.672.673q.128-.128-.064-.304q-.192-.192-.32-.048q-.144.128.064.304q.192.192.32.044zm.913.4q.048-.176-.208-.256q-.24-.064-.304.112t.208.24q.24.097.304-.096m1.009.08q0-.208-.272-.176q-.256 0-.256.176q0 .208.272.176q.256.001.256-.175zm.929-.16q-.032-.176-.288-.144q-.256.048-.224.24t.288.128t.225-.224z"/>
              </svg>
              To Github
            </button>
          </a>
        </div>
        <hr>
        <ul class="information">
          <li>
            <svg aria-hidden="true" height="30" viewBox="0 0 16 16" version="1.1" width="30" data-view-component="true" class="octicon octicon-star mr-2">
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
            </svg>
            {{detaildata.starsCount}} stars
          </li>
          <li>
            <svg aria-hidden="true" height="30" viewBox="0 0 16 16" version="1.1" width="30" data-view-component="true" class="octicon octicon-repo-forked mr-1">
                <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
            </svg>
            {{detaildata.forksCount}} forks
          </li>
          <li>
            <svg aria-hidden="true" height="30" viewBox="0 0 16 16" version="1.1" width="30" data-view-component="true" class="octicon octicon-eye mr-2">
                <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>
            </svg>
            {{detaildata.watchersCount}} watching
          </li>
        </ul>
        <div class="main">
          <div style="display: flex; align-items: center; padding: 20px; font-size: 20px;">
            <img :src="detaildata.ownerAvatarUrl || defaultimg" alt="">
            <p @click="$router.push(`/devdetail/${detaildata.ownerLogin}`)" style="cursor: pointer;">{{ detaildata.ownerLogin }}</p>
            <span style=" margin-left: auto; color: #888;">
              <van-icon name="clock-o" />
              创建时间{{ detaildata.createdAt.substring(0, 10) }}
            </span>
          </div>

          <hr>
          <div class="desc">
            {{ detaildata.description ? detaildata.description : '作者没有给仓库写描述哦~'}}
          </div>
          <hr>
          <div style="display: flex; align-items: center; padding: 20px; font-size: 20px;">
            <div style="border: 2px solid #a0a0a0; padding: 4px 20px; border-radius: 50px; font-size: 20px; color: #a0a0a0;">
              {{ detaildata.private ? 'private' : 'public'}}
            </div>
            <span style=" margin-left: auto; color: #888;">
              <van-icon name="clock-o" />
              更新时间{{ detaildata.updateAt.substring(0, 10) }}
            </span>
          </div>
        </div>

      </div>
    </div>
    <IndexFooter></IndexFooter>
  </div>
</template>

<script>
import { getProdeltail } from '@/api/project'
import defaultimg from '@/assets/imgs/githubuser.png'
import IndexFooter from '@/components/IndexFooter.vue'
import IndexHeader from '@/components/IndexHeader.vue'
export default {
  name: 'prodetailIndex',
  data () {
    return {
      detaildata: {},
      defaultimg
    }
  },
  computed: {
    repoOwner () {
      return this.$route.params.repoOwner
    },
    repoName () {
      return this.$route.params.repoName
    }
  },
  components: {
    IndexFooter,
    IndexHeader
  },
  async created () {
    const res = await getProdeltail(this.repoOwner, this.repoName)
    console.log(res)
    this.detaildata = res.data
  }
}
</script>

<style lang="less" scoped>
  .body {
    margin: 80px auto;
    width: 1170px;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 30px;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
  }

  .title {
    display: flex;
    align-items: center;
    margin: 40px 80px;
    font-size: 40px;
    width: 85%;
    justify-content: flex-end;
  }

  .title img {
    height: 160px;
    border: 3px solid #a0a0a0;
    border-radius: 20px;
    margin-right: auto;
  }

  .title button {
    right: 0px;
    font-size: 25px;
    height: 60px;
    width: 200px;
    border-radius: 20px;
    border: 0px;
    background-color: #3460d8;
    font-weight: bold;
    color: #fff;
    position: relative;
    text-align: right;
    padding: 0px 20px;
    cursor: pointer;
    transition: 0.5s ease;

  }

  .title button:hover {
    box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
  }

  .title a {
    justify-content: flex-end;
  }

  .title button svg {
    position: absolute;
    top: 17px;
    left: 20px;
  }

  .information li {
    font-size: 30px;
    margin: 30px 89px;
  }

  .main {
    // background-color: #fff;
    width: 1000px;
    // height: 200px;
    margin: auto;
    border: #a0a0a0 1px solid;
    border-radius: 20px;
    margin-bottom: 40px;
  }

  .main img {
    height: 50px;
    margin-right: 30px;
    border-radius: 100px;
    border: black 1px solid;
  }

  .main .desc {
    margin: 30px 80px;
    font-size: 30px;
  }

  .main p:hover {
    color: #3460d8;
  }

</style>
