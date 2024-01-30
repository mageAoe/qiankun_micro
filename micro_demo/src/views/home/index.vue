<template>
  <el-container>
      <el-header>
        <div class="header">header</div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
          >
            <h5 style="padding: 20px;">Default colors</h5>
            <el-menu-item index="2" @click="goNavigator(1)">
              <el-icon><Menu /></el-icon>
              <span>demo1</span>
            </el-menu-item>
            <el-menu-item index="4" @click="goNavigator(2)">
              <el-icon><setting /></el-icon>
              <span>demo2</span>
            </el-menu-item>
            <el-menu-item index="5">
              <el-icon><setting /></el-icon>
              <span>mirco</span>
            </el-menu-item>
            <el-menu-item index="6" @click="goMircoDmoe(1)">
              <el-icon><setting /></el-icon>
              <span>内部调用mirco - react</span>
            </el-menu-item>
            <el-menu-item index="7" @click="router.push('/micro-app/micro-app-demo2/home')">
              <el-icon><setting /></el-icon>
              <span>外部调用mirco - react</span>
            </el-menu-item>
            <el-menu-item index="8" @click="goMircoDmoe(3)">
              <el-icon><setting /></el-icon>
              <span>内部调用mirco - vue</span>
            </el-menu-item>
            <el-menu-item index="9" @click="router.push('/micro-app/micro-app-demo4')">
              <el-icon><setting /></el-icon>
              <span>外部调用mirco - vue</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router =  useRouter()

const goNavigator = (value: number)=>{
  if(value === 1){
    router.push('/demo1')
  }else{
   router.push('/demo2')
  }
}

const goMircoDmoe = (value: number) => {
  if(value === 3){
    router.push('/mirco_demo2')
  }
  if(value === 1){
    router.push('/mirco_demo1')
  }
}

</script>


<style scoped>
.header{
  background:#545c64;
  height: 100%;
  widows: 100%;
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
}
.el-header{
  background:#545c64;
}
</style>
