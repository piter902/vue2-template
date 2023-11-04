# 基于vue2的pc端项目模板
## 能力介绍
1.路由
  - 根据views目录结构自动生成路由表临时文件.route.js，生成规则和Nuxt框架一致
  ![route](image-1.png)
  - 路由meta信息配置可以在路由的对应.vue文件中添加route标签
  ![meta](image.png)

2.API函数全局注入，自动挂载到vue全局,.vue文件中无需导入，直接从this.$文件名.函数名调用
![api](image-2.png)
3.环境变量配置
![env](image-3.png)
4.常用的开源包由@peter.fe/core统一导出
![core](image-4.png)
5.支持tailwindcss2.x  
6.支持ElementUI  
7.支持dayjs  
8.支持lodash  

