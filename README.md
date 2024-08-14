

### dotenv file variables
- Firebase configuration
```env
VITE_APIKEY=
VITE_AUTHDOMAIN=
VITE_PROJECTID=
VITE_STORAGEBUCKET=
VITE_MESSAGINGSENDERID=
VITE_APPID=
```
my-app/
├── src/
│   ├── index.js
│   ├── app.js
│   ├── controller/
│   │   ├── user/
│   │   │   └── user.controller.js
│   │   └── post/
│   │       └── post.controller.js
│   ├── model/
│   │   ├── user.model.js
│   │   └── blog.model.js
│   ├── routes/
│   │   ├── user.routes.js
│   │   └── post.routes.js
│   ├── db/
│   │   └── db.js
│   ├── middlewares
│   └── utils/
│       └── uploadImage.js
├── public/
│   └── temp
├── package.json
├── .
└── .