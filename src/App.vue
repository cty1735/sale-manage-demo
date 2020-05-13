<template>
  <div id='app' style="height=100%">
    <!-- <div id='nav'>
      <router-link to='/'>Home</router-link> |
      <router-link to='/about'>About</router-link>
    </div>
    <router-view/>-->
    <el-container style="height=100%" d >
      <el-aside>
        <el-menu
          default-active='2'
          class='el-menu-vertical-demo'
          router
        >
          <el-menu-item index='/home'>
            <i class='el-icon-menu'></i>
            <span slot='title'>首页</span>
          </el-menu-item>

          <el-submenu index='2'>
            <template slot='title'>
              <i class='el-icon-location'></i>
              <span>应用管理</span>
            </template>
            <el-menu-item index='/manage'>选项1</el-menu-item>
            <el-menu-item index='1-2'>选项2</el-menu-item>
          </el-submenu>
          <el-menu-item index='/config'>
            <i class='el-icon-setting'></i>
            <span slot='title'>配置管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="font-size:20px">后台管理系统</el-header>
        <el-main>
          <router-view/>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style>
html,body,#app,.el-container{
        /*设置内部填充为0，几个布局元素之间没有间距*/
        padding: 0px;
         /*外部间距也是如此设置*/
        margin: 0px;
        /*统一设置高度为100%*/
        height: 100%;
    }
.container{
  width: 100%;
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  width: 30%;
  height: 100%;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
body > .el-container {
  margin-bottom: 40px;
  height: 500px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
