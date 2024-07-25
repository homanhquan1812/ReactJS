# ReactJS

## Bước 1
Tạo project ReactJS bằng **Vite**, phiên bản này tối ưu hơn ReactJS truyển thống:
```
npm create vite@latest
```

Chọn **React** rồi **Javascript**, sau đó hoàn thành quy trình cài đặt. Tiếp theo, làm theo hướng dẫn trên terminal.

**http://localhost:5173** là website ReactJS của bạn.

## Bước 2
Cài đặt những gói thư viện cần thiết này:
```
npm install react-router-dom react-helmet axios jwt-decode vite-plugin-mkcert
```

Cụ thể hơn:
* `react-router-dom`: Dùng để quản lý điều hướng trong website.
* `react-helmet`: Dùng để quản lý các tài nguyên trong `<head>` hoặc **script** trong `<body>`,...
* `jwt-decode`: Giải mã token của JWT.
* `vite-plugin-mkcert`: Dùng `https` thay vì `http` cho web ReactJS.
**Chú ý**: Trong các dự án lớn, đừng nhét các file `css` và `js` vào **Helmet**, sẽ gây lỗi load file CSS và JS chậm.

và cài thêm <b>ES7+ React/Redux/React-Native snippets</b>.

ReactJS sẽ mặc định dùng `http`, nếu muốn dùng `https` thì chỉnh file `vite.config.js`:
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ mkcert(), react() ]
})
```

## Bước 3
Mở file `main.jsx` trong mục `src`, chép đoạn code sau:
```
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './../public/css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```

Tại `App.jsx`, đây là page chính chứa các **routes** để nối các page khác của web

## Bước 4
Ta cần hiểu cơ cấu project như sau:
```
Project
  |
  |__ backend
  |__ frontend
        |__ public
	|__ src
        |__ public
	            |__ css
	            |__ img
	            |__ js
	      |__ components
	      |__ pages
	      |__ App.jsx
	      |__ main.jsx
	|__ (Các file liên quan khác)
```

Tạo 2 thư mục `pages` và `components` lần lượt chứa page ReactJS và các thành phần khác như `head`,...; sau đó page bằng cách gõ `rafce` rồi nhét vào thư mục `pages`.

Trong folder `src`, ta sẽ tạo 2 file: **SampleReactJSPage.jsx** và **Home**. Ta xóa code ở **App.jsx** và chép đoạn code này cho **SampleReactJSPage.jsx**:
```
import { useState } from 'react'
import reactLogo from './../assets/react.svg'
import viteLogo from '/vite.svg'
import './../../public/css/App.css'

function SampleReactJSPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default SampleReactJSPage
```

Trong **App.jsx**, ta chép đoạn code sau:
```
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Error from './pages/Error'
import Home from './pages/Home'
import SampleReactJSPage from './pages/SampleReactJSPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/sample" element={<SampleReactJSPage></SampleReactJSPage>}></Route>
      <Route path="*" element={<Error></Error>}></Route>
    </Routes>
  )
}

export default App
```

Thế là ta đã xong 1 website có 2 trang chính và 1 trang phụ.
