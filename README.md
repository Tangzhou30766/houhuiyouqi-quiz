# 《后会友期》友情人格测试

21道单选题，七个常规人物 + 隐藏人物。

## 网站结构

```
index.html
app.js
style.css
images/
  张萌.jpg
  马天宇.jpg
  王子璇.jpg
  许飞.jpg
  厉娜.jpg
  青稚.jpg
  白小纯.jpg
  张泉灵.jpg
```

## 上传到 GitHub Pages（无需编程）

1. 登录 GitHub，在 https://github.com/new 新建仓库，推荐命名 `houhuiyouqi-quiz`，选择 **Public**，点 **Create repository**。
2. **解压 ZIP**。进入解压后 `houhuiyouqi-quiz` 目录。注意：不要把 ZIP 本身当网站上传，也不要把整个外层文件夹额外套一层。
3. 在仓库页面选 **Add file → Upload files**，把 `index.html`、`app.js`、`style.css`、`README.md` 和整个 `images` 文件夹拖到上传区域，确保 GitHub 上能看到 `index.html` 位于仓库根目录，且 `images/张萌.jpg` 等图片在 images 内。点 **Commit changes**。
4. 点 **Settings → Pages**。在 **Build and deployment** 中选择 **Deploy from a branch**；Branch 选择 `main`；Folder 选择 `/(root)`；按 **Save**。
5. 发布成功后，在 Pages 页面打开 `https://你的用户名.github.io/houhuiyouqi-quiz/`，把链接分享给朋友。首次部署可能有短暂延迟。

## 修改人物照片

将新照片命名为 `人物名.jpg`，进入 GitHub 仓库中的 `images` 目录上传替换旧照片，提交后网站会自动更新。支持 .jpg/.jpeg/.png/.webp；建议直接采用已有的 `.jpg` 文件名。

## 修改题目和文案

`app.js` 的 `CHARACTERS` 保存八位人物的标准画像、标签、台词与描述；`QUESTIONS` 保存21道题和每个选项的九维计分；`HIDDEN` 保存隐藏结局规则。

## 计分说明

九维分别按本题库的正向/反向理论上限标准化到0-100。常规人物用「用户得分相对题库理论基线的特征方向」与「七位角色画像相对中心的特征方向」计算余弦相似度，以避免中间型人格因数值更靠近中心而长期占优。张泉灵隐藏结局：第20题选D（观察席大磕特磕），同时在第4题C、第12题D、第14题C、第17题D、第18题C这五个选项中至少选中一个，即可解锁。不再校验九维分数门槛。人物数值和阈值属于娱乐模型，不是已验证的心理测量。

## 注意

网站本身不存储作答记录，也没有账户系统或后台。所有匹配都在用户浏览器本地完成。GitHub Pages 免费托管公开静态网站；公开使用节目人物照片请自行确认相应的使用权限。
