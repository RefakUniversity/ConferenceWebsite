# مؤتمر العمارة والإعمار في ليبيا
## جامعة الرفاق للعلوم التطبيقية والإنسانية

---

## نظرة عامة

هذا الموقع هو الموقع الرسمي للمؤتمر العلمي الأول **"العمارة والإعمار في ليبيا - الواقع والتحديات وآفاق المستقبل"** الذي تنظمه جامعة الرفاق للعلوم التطبيقية والإنسانية.

---

## هيكل المشروع

```
conference_static/
│
├── index.html          ← الصفحة الرئيسية (هيكل HTML الكامل)
├── style.css           ← جميع أنماط التصميم (Light/Dark Mode)
├── main.js             ← جميع الوظائف التفاعلية (JavaScript)
├── README.md           ← هذا الملف
│
└── images/
    ├── img1.jpeg       ← صورة مبنى الجامعة (خارجي)
    ├── img2.jpeg       ← شعار جامعة الرفاق (يُستخدم في Navbar والـ Hero والـ Footer)
    ├── img3.jpeg       ← صورة مبنى الجامعة (تُستخدم في قسم "عن المؤتمر")
    ├── img4.jpeg       ← صورة المبنى الرئيسي (خلفية قسم Hero)
    ├── img5.jpeg       ← شعار المؤتمر (خلفية بيضاء - تُستخدم في قسم "عن المؤتمر")
    ├── img6.jpeg       ← شعار المؤتمر (خلفية سوداء)
    └── img7.jpeg       ← إعلان المؤتمر الرسمي
```

---

## التقنيات المستخدمة

| التقنية | الوصف |
|---------|-------|
| HTML5 | هيكل الصفحة الكامل بدون أي Framework |
| CSS3 | التصميم الكامل مع متغيرات CSS للألوان |
| JavaScript (ES6+) | التفاعلية الكاملة بدون أي مكتبة خارجية |
| Google Fonts | خط Tajawal (عربي) + خط Poppins (إنجليزي) |

> **ملاحظة مهمة:** الموقع يعتمد فقط على Google Fonts من الإنترنت. لا توجد أي تبعيات أخرى خارجية.

---

## أقسام الموقع

| القسم | الوصف |
|-------|-------|
| **Navbar** | شريط التنقل الثابت مع شعار الجامعة وروابط الأقسام وأيقونات التواصل الاجتماعي وزر تبديل اللغة والوضع الليلي |
| **Hero** | القسم الرئيسي مع صورة خلفية وعنوان المؤتمر وأزرار التنقل |
| **العداد التنازلي** | يعد تنازلياً حتى موعد انتهاء استقبال الأبحاث (30 أبريل 2026) |
| **عن المؤتمر** | وصف المؤتمر مع إحصائيات وصور الجامعة |
| **أهداف المؤتمر** | ستة أهداف رئيسية مع أيقونات |
| **محاور المؤتمر** | ستة محاور علمية مرقمة |
| **الجمهور المستهدف** | فئات المشاركين المستهدفين |
| **شروط المشاركة** | ثمانية شروط للتقديم مع جدول تنسيق الورقة البحثية |
| **المواعيد المهمة** | جدول زمني تفاعلي بأسلوب Timeline |
| **التواصل** | معلومات التواصل وروابط منصات التواصل الاجتماعي |
| **Footer** | تذييل الصفحة مع روابط سريعة ومعلومات الجامعة |

---

## الميزات التقنية

### 1. ثنائية اللغة (العربية / الإنجليزية)
- تبديل كامل بين العربية والإنجليزية بضغطة زر واحدة
- دعم كامل لاتجاه RTL (يمين لليسار) للعربية و LTR (يسار لليمين) للإنجليزية
- جميع النصوص مترجمة بالكامل في ملف `main.js` ضمن كائن `translations`
- يحفظ تفضيل اللغة في `localStorage` ويتذكره عند إعادة فتح الموقع

### 2. الوضع الليلي (Dark Mode)
- تصميم ليلي احترافي بألوان داكنة عميقة وتوهج ذهبي
- تبديل فوري بضغطة زر في Navbar
- يحفظ التفضيل في `localStorage`
- جميع الألوان معرفة كمتغيرات CSS في ملف `style.css`

### 3. العداد التنازلي
- يعد تنازلياً بدقة حتى: **30 أبريل 2026 الساعة 23:59:59**
- يعرض: الأيام، الساعات، الدقائق، الثواني
- يتحدث كل ثانية تلقائياً
- يدعم اللغتين في التسميات
- عند انتهاء الموعد يعرض رسالة "انتهى موعد استقبال الأبحاث"

### 4. التصميم المتجاوب (Responsive Design)
- متوافق مع جميع أحجام الشاشات: موبايل، تابلت، ديسكتوب
- نقاط التوقف (Breakpoints):
  - أقل من 480px: موبايل صغير
  - أقل من 768px: موبايل وتابلت
  - أقل من 1024px: تابلت وشاشات متوسطة
  - 1024px وأكبر: ديسكتوب

### 5. روابط التواصل الاجتماعي
تظهر في ثلاثة أماكن: Navbar، قسم التواصل، Footer

| المنصة | الرابط |
|--------|--------|
| الموقع الرسمي | https://www.alrefak.edu.ly/MainAR |
| فيسبوك | https://www.facebook.com/alrefakuniversty |
| تيليجرام | https://t.me/+evNaCxBrEOszYTA0 |
| يوتيوب | https://www.youtube.com/channel/UC1ezfa8hTyz6beCt9BOtp2Q |

### 6. تأثيرات الحركة
- تأثير Fade-in عند التمرير لكل البطاقات والعناصر
- تأثير Hover على جميع البطاقات والأزرار
- مؤشر التمرير المتحرك في قسم Hero
- زر "العودة للأعلى" يظهر عند التمرير لأسفل

---

## معلومات التواصل

| | |
|-|-|
| **الجامعة** | جامعة الرفاق للعلوم التطبيقية والإنسانية |
| **الهاتف** | 00218914946810 |
| **البريد الإلكتروني** | ARL2026@alrefak.edu.ly |
| **العنوان** | طرابلس - شارع الجمهورية |
| **الموقع الرسمي** | www.alrefak.edu.ly |

---

## كيفية النشر على سيرفر حقيقي

### الطريقة الأولى: Shared Hosting / cPanel (الأسهل والأشيع)

هذه الطريقة مناسبة لمعظم شركات الاستضافة مثل Hostinger وGoDaddy وNamecheap وغيرها.

**الخطوات:**

1. سجّل الدخول إلى لوحة تحكم cPanel الخاصة بك
2. افتح **File Manager** (مدير الملفات)
3. انتقل إلى مجلد `public_html`
4. ارفع جميع محتويات مجلد `conference_static` مباشرة إلى `public_html`
   - يجب أن يكون `index.html` في جذر `public_html`
   - يجب أن يكون مجلد `images` داخل `public_html` أيضاً
5. تأكد من أن الهيكل النهائي هو:
   ```
   public_html/
   ├── index.html
   ├── style.css
   ├── main.js
   └── images/
       ├── img1.jpeg
       ├── img2.jpeg
       └── ...
   ```
6. افتح المتصفح وأدخل اسم الدومين الخاص بك

> **ملاحظة:** إذا أردت نشر الموقع في مجلد فرعي (مثل: `yourdomain.com/conference`) فارفع الملفات إلى مجلد باسم `conference` داخل `public_html`.

---

### الطريقة الثانية: سيرفر Nginx

**1. رفع الملفات إلى السيرفر:**
```bash
scp -r conference_static/ user@your-server-ip:/var/www/html/conference/
```

**2. إنشاء ملف إعدادات Nginx:**
```bash
sudo nano /etc/nginx/sites-available/conference
```

**3. محتوى ملف الإعدادات:**
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    root /var/www/html/conference;
    index index.html;

    # ضغط الملفات لتحسين السرعة
    gzip on;
    gzip_types text/plain text/css application/javascript image/jpeg image/png;

    # تخزين مؤقت للصور والملفات الثابتة
    location ~* \.(jpg|jpeg|png|gif|css|js)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }

    # توجيه جميع الطلبات إلى index.html
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

**4. تفعيل الإعدادات:**
```bash
sudo ln -s /etc/nginx/sites-available/conference /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

**5. إضافة SSL مجاني (Let's Encrypt):**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

### الطريقة الثالثة: سيرفر Apache

**1. رفع الملفات:**
```bash
scp -r conference_static/ user@your-server-ip:/var/www/html/conference/
```

**2. إنشاء ملف `.htaccess` في مجلد المشروع:**
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]

# ضغط الملفات
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>

# تخزين مؤقت
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpeg "access plus 30 days"
    ExpiresByType text/css "access plus 7 days"
    ExpiresByType application/javascript "access plus 7 days"
</IfModule>
```

**3. تفعيل mod_rewrite:**
```bash
sudo a2enmod rewrite
sudo systemctl restart apache2
```

---

### الطريقة الرابعة: Vercel (مجاني وسريع)

1. أنشئ حساباً على [vercel.com](https://vercel.com)
2. ثبّت Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. انتقل إلى مجلد المشروع:
   ```bash
   cd conference_static
   ```
4. انشر الموقع:
   ```bash
   vercel
   ```
5. اتبع التعليمات وستحصل على رابط مباشر للموقع

---

### الطريقة الخامسة: Netlify (مجاني وسريع)

**الطريقة السهلة (Drag & Drop):**
1. افتح [netlify.com](https://netlify.com) وأنشئ حساباً
2. اسحب مجلد `conference_static` كاملاً وأفلته في صفحة Netlify
3. سيتم النشر تلقائياً خلال ثوانٍ

**عبر CLI:**
```bash
npm install -g netlify-cli
cd conference_static
netlify deploy --prod --dir .
```

---

### الطريقة السادسة: GitHub Pages (مجاني)

1. أنشئ مستودعاً جديداً على GitHub
2. ارفع محتويات مجلد `conference_static` إلى المستودع:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/repo-name.git
   git push -u origin main
   ```
3. افتح إعدادات المستودع (Settings)
4. انتقل إلى قسم **Pages**
5. اختر الفرع `main` والمجلد `/ (root)`
6. سيكون الموقع متاحاً على: `https://username.github.io/repo-name`

---

## تعديل المحتوى

### تغيير تاريخ العداد التنازلي
افتح ملف `main.js` وابحث عن السطر:
```javascript
const targetDate = new Date('2026-04-30T23:59:59');
```
غيّر التاريخ بالصيغة: `YYYY-MM-DDTHH:MM:SS`

### تغيير النصوص
جميع النصوص موجودة في ملف `main.js` ضمن كائن `translations`:
- `translations.ar` للنصوص العربية
- `translations.en` للنصوص الإنجليزية

### تغيير الألوان
افتح ملف `style.css` وعدّل المتغيرات في أعلى الملف:
```css
:root {
  --primary: #1a3a52;   /* اللون الأزرق الداكن */
  --accent:  #c9a227;   /* اللون الذهبي */
  --bg:      #f5f4f0;   /* لون الخلفية */
}
```

### تغيير الصور
استبدل أي صورة في مجلد `images/` بصورة جديدة مع الاحتفاظ بنفس الاسم.

### تغيير روابط التواصل الاجتماعي
ابحث في ملف `index.html` عن الروابط وعدّلها مباشرة في خاصية `href`.

---

## متطلبات السيرفر

| المتطلب | التفاصيل |
|---------|---------|
| نوع السيرفر | أي سيرفر ويب (Apache / Nginx / IIS / Caddy) |
| قاعدة البيانات | **غير مطلوبة** |
| Node.js / PHP | **غير مطلوب** |
| SSL | مستحسن (HTTPS) لكن ليس إلزامياً |
| مساحة التخزين | ~2 MB كافية |
| الاتصال بالإنترنت | مطلوب لتحميل خطوط Google Fonts فقط |

> **للعمل بدون إنترنت:** يمكن تحميل خطوط Google Fonts محلياً وتعديل رابط الاستيراد في `index.html`.

---

## الأداء والتحسين

- حجم الملفات الإجمالي (بدون الصور): ~100 KB
- حجم الصور: ~930 KB
- لا توجد مكتبات JavaScript خارجية
- لا توجد طلبات API خارجية (ما عدا Google Fonts)
- يعمل بشكل كامل بدون قاعدة بيانات أو Backend

---

## الدعم الفني

للاستفسارات التقنية المتعلقة بالموقع:
- **البريد الإلكتروني:** ARL2026@alrefak.edu.ly
- **الهاتف:** 00218914946810

---

*جامعة الرفاق للعلوم التطبيقية والإنسانية - طرابلس، ليبيا*
*جميع الحقوق محفوظة © 2026*
