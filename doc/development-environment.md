# 开发环境配置
## 安装 hexo-cli
hexo-cli 是 hexo 的命令行程序，允许在目录下运行 hexo 的命令
```
# 如果没有 yarn 用 npm，反之亦然
# npm install -g hexo-cli
yarn global add hexo-cli
# 如果是 Linux 系统记得加 sudo
```
## 安装工具
1. `serve` 是用于运行一个服务端的 node 包
2. `nodemon` 是用于运行一个热加载的 node 包
3. `madge` 是用于检查依赖项的 死循环 问题的


```
# 如果没有 yarn 用 npm，反之亦然
# npm install -g serve nodemon madge
yarn global add serve nodemon madge
# 如果是 Linux 系统记得加 sudo
```
## 克隆仓库 & 新建开发分支
```
git clone https://github.com/hanamiyuna/hexo-theme-techcorp.git
cd hexo-theme-techcorp && git checkout -b dev dev-[username]
# username 填写自己的用户名或者喜欢的内容
```
## 安装依赖项
```
# 如果没有 yarn 用 npm，反之亦然
# npm install
yarn install
```

# 启动演示
```
hexo s --debug
```
## 清空缓存
```
hexo clean
```
## 生成静态文件
```
hexo g && hexo s
```

# 工作区文件
模版文件位置：
```
./themes/dev/
```
文章文件地址：
```
./source/_posts/*.md
```
动态文件地址：
```
./source/_updates/*.md
```
案例文件地址：
```
./source/_cases/*.md
```
页面文件地址：
```
./source/[page name].md
```

# 提交更改的模版
[git commit emoji 使用指南](https://github.com/liuchengxu/git-commit-emoji-cn)