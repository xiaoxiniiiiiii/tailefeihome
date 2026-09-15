# tailefeihome

Tailefei Home 是一个原创视觉的家居生活百货 React/Vite 演示站，当前目录由 `src/main.jsx`、`src/styles.css` 和 `public/products/` 组成。

## 本地运行

```powershell
npm.cmd i
npm.cmd run dev
```

生产构建：

```powershell
npm.cmd run build
```

当前商品图已由 ImageGen 按产品逐张生成，再转换为 50 张本地 WebP；每张使用独立提示词，按家具、软装、日用品、灯饰和餐厨/浴室用品对应，不使用图库回退。提示词排除了品牌、文字、水印、人物、动物、陶瓷、玻璃、镜子及其他易碎品。`npm.cmd run build` 不会重新覆盖这些已生成的 ImageGen 素材。

## 演示路径

- 商品站：`http://127.0.0.1:5178/`
- 后台演示：`http://127.0.0.1:5178/#/admin`（当前由前端路由进入）
- 后台演示账户：`admin@tailefeihome.demo`
- 后台演示密码：`demo-home-2026`

后台和支付都是前端演示，不是真实的服务器鉴权或支付收款；接入生产环境前需要替换为服务端认证、订单服务和 PayPal/银行卡支付服务。公司未提供电话与注册号，页脚已明确标注未提供，没有虚构这些法人信息。
