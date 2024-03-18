// 引入Express模块
const express = require('express');
const path = require('path');

// 创建Express应用程序
const app = express();

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 设置简单的路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 监听端口
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

