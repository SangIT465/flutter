# BÁO CÁO ĐỒ ÁN
# ỨNG DỤNG DU LỊCH FLUTTER

---

> **Môn học:** Lập trình Di động  
> **Sinh viên thực hiện:** SangIT465  
> **Email:** quangminh26022k5@gmail.com  
> **Năm học:** 2025 - 2026  
> **Ngày hoàn thành:** 14/05/2026  

---

## LỜI CẢM ƠN

Lời đầu tiên, em xin chân thành cảm ơn quý thầy/cô đã giảng dạy và hướng dẫn tận tình trong suốt quá trình học tập môn **Lập trình Di động**. Những kiến thức quý thầy/cô truyền đạt đã giúp em có nền tảng vững chắc để hoàn thành đồ án này.

Em xin cảm ơn các bạn trong nhóm đã cùng nhau đóng góp, hỗ trợ và trao đổi ý kiến trong quá trình thực hiện dự án.

Mặc dù đã cố gắng hết sức, nhưng do kiến thức còn hạn chế và thời gian có hạn, báo cáo chắc chắn còn nhiều thiếu sót. Em rất mong nhận được sự góp ý từ quý thầy/cô để hoàn thiện hơn trong tương lai.

Em xin chân thành cảm ơn!

---

## MỤC LỤC

1. [Giới thiệu dự án](#1-giới-thiệu-dự-án)
2. [Công nghệ sử dụng](#2-công-nghệ-sử-dụng)
3. [Cấu trúc dự án](#3-cấu-trúc-dự-án)
4. [Giao diện ứng dụng](#4-giao-diện-ứng-dụng)
   - 4.1 [Màn hình Chào mừng](#41-màn-hình-chào-mừng)
   - 4.2 [Màn hình Đăng nhập](#42-màn-hình-đăng-nhập)
   - 4.3 [Màn hình Đăng ký](#43-màn-hình-đăng-ký)
   - 4.4 [Màn hình Quên mật khẩu](#44-màn-hình-quên-mật-khẩu)
   - 4.5 [Màn hình Trang chủ](#45-màn-hình-trang-chủ)
   - 4.6 [Màn hình Khám phá](#46-màn-hình-khám-phá)
   - 4.7 [Màn hình Xem thêm Tour](#47-màn-hình-xem-thêm-tour)
   - 4.8 [Màn hình Chuyến đi của tôi](#48-màn-hình-chuyến-đi-của-tôi)
   - 4.9 [Màn hình Chuyến đi sắp tới](#49-màn-hình-chuyến-đi-sắp-tới)
   - 4.10 [Màn hình Chi tiết chuyến đi](#410-màn-hình-chi-tiết-chuyến-đi)
   - 4.11 [Màn hình Chuyến đi đã qua](#411-màn-hình-chuyến-đi-đã-qua)
   - 4.12 [Màn hình Thanh toán](#412-màn-hình-thanh-toán)
   - 4.13 [Màn hình Danh sách yêu thích](#413-màn-hình-danh-sách-yêu-thích)
   - 4.14 [Màn hình Hồ sơ](#414-màn-hình-hồ-sơ)
   - 4.15 [Màn hình Chat](#415-màn-hình-chat)
   - 4.16 [Màn hình Cài đặt](#416-màn-hình-cài-đặt)
5. [Danh sách API](#5-danh-sách-api)
6. [Hướng dẫn cài đặt và chạy](#6-hướng-dẫn-cài-đặt-và-chạy)
7. [Kết luận](#7-kết-luận)

---

## 1. Giới thiệu dự án

**Travel App** là ứng dụng du lịch được phát triển trên nền tảng **Flutter**, tích hợp **Firebase** để xác thực người dùng và **Node.js/Express** làm backend API.

### Mục tiêu
- Cung cấp nền tảng khám phá và đặt tour du lịch
- Quản lý các chuyến đi (hiện tại, sắp tới, đã qua)
- Thanh toán trực tuyến
- Tương tác xã hội (like, save, chat)

### Tính năng chính
- Đăng nhập / Đăng ký qua Firebase Authentication
- Khám phá tour du lịch
- Quản lý chuyến đi (My Trips, Next Trips, Past Trips)
- Thanh toán tour
- Danh sách yêu thích (Wish List)
- Chat với hướng dẫn viên
- Hồ sơ cá nhân

---

## 2. Công nghệ sử dụng

| Thành phần | Công nghệ | Phiên bản |
|------------|-----------|-----------|
| Frontend | Flutter | 3.41.2 |
| Ngôn ngữ | Dart | SDK ^3.10.4 |
| Backend | Node.js + Express | - |
| Xác thực | Firebase Authentication | ^6.1.3 |
| Database (auth) | Firebase / Cloud Firestore | ^6.2.0 |
| HTTP Client | package:http | - |
| IDE | VS Code / Android Studio | - |

---

## 3. Cấu trúc dự án

```
flutter/
├── lib/
│   ├── main.dart               # Điểm khởi đầu ứng dụng
│   ├── welcome.dart            # Màn hình chào mừng
│   ├── signin.dart             # Đăng nhập
│   ├── signup.dart             # Đăng ký
│   ├── ForgotPassword.dart     # Quên mật khẩu
│   ├── checkmail.dart          # Kiểm tra email
│   ├── home.dart               # Trang chủ
│   ├── explore.dart            # Khám phá
│   ├── TourMore.dart           # Xem thêm tour
│   ├── mytrip.dart             # Chuyến đi của tôi
│   ├── next_trip.dart          # Chuyến đi sắp tới
│   ├── next_trip_detail_page.dart
│   ├── past_trip.dart          # Chuyến đi đã qua
│   ├── trip_detail_page.dart   # Chi tiết chuyến đi
│   ├── payment.dart            # Thanh toán
│   ├── wish_list.dart          # Danh sách yêu thích
│   ├── profile.dart            # Hồ sơ cá nhân
│   ├── chat.dart               # Chat
│   ├── chat_detail.dart        # Chi tiết chat
│   ├── addfriend.dart          # Thêm bạn bè
│   ├── settings.dart           # Cài đặt
│   └── services/
│       ├── api_service.dart
│       ├── auth_service.dart
│       ├── explore_service.dart
│       ├── my_trips_service.dart
│       ├── next_trips_service.dart
│       ├── past_trips_service.dart
│       ├── payment_service.dart
│       ├── profile_service.dart
│       ├── tour_more_service.dart
│       └── wish_list_service.dart
├── backend/
│   ├── server.js               # Entry point backend
│   ├── data.js                 # Dữ liệu mẫu
│   ├── firebaseAdmin.js        # Firebase Admin SDK
│   ├── models/
│   │   └── tourModel.js
│   └── routes/
│       ├── authRoutes.js
│       ├── exploreRoutes.js
│       ├── tourRoutes.js
│       ├── tourMoreRoutes.js
│       ├── myTripsRoutes.js
│       ├── nextTripsRoutes.js
│       ├── pastTripsRoutes.js
│       ├── paymentRoutes.js
│       ├── profileRoutes.js
│       ├── wishListRoutes.js
│       ├── newsRoutes.js
│       └── guidesRoutes.js
└── assets/                     # Hình ảnh, fonts
```

---

## 4. Giao diện ứng dụng

### 4.1 Màn hình Chào mừng

> **File:** `lib/welcome.dart`

Màn hình đầu tiên khi mở ứng dụng, hiển thị logo và các lựa chọn Đăng nhập / Đăng ký.

![Welcome Screen](assets/screenshots/welcome.png)

---

### 4.2 Màn hình Đăng nhập

> **File:** `lib/signin.dart`

Cho phép người dùng đăng nhập bằng tài khoản Firebase (Email/Password hoặc Google).

![Sign In Screen](assets/screenshots/signin.png)

---

### 4.3 Màn hình Đăng ký

> **File:** `lib/signup.dart`

Tạo tài khoản mới với Email, Password và thông tin cá nhân.

![Sign Up Screen](assets/screenshots/signup.png)

---

### 4.4 Màn hình Quên mật khẩu

> **File:** `lib/ForgotPassword.dart`

Gửi email đặt lại mật khẩu cho người dùng.

![Forgot Password Screen](assets/screenshots/forgot_password.png)

---

### 4.5 Màn hình Trang chủ

> **File:** `lib/home.dart`

Hiển thị banner, các chuyến đi nổi bật, hướng dẫn viên và tin tức du lịch.

![Home Screen](assets/screenshots/home.png)

---

### 4.6 Màn hình Khám phá

> **File:** `lib/explore.dart`  
> **API:** `GET /api/explore`

Danh sách các tour, điểm đến và trải nghiệm du lịch. Hỗ trợ like và lưu tour.

![Explore Screen](assets/screenshots/explore.png)

---

### 4.7 Màn hình Xem thêm Tour

> **File:** `lib/TourMore.dart`  
> **API:** `GET /api/tourMore`, `PATCH /api/tourMore/tours/:id/favorite`

Danh sách đầy đủ các tour với tính năng tìm kiếm và đánh dấu yêu thích.

![Tour More Screen](assets/screenshots/tour_more.png)

---

### 4.8 Màn hình Chuyến đi của tôi

> **File:** `lib/mytrip.dart`  
> **API:** `GET /api/my-trips/current`

Hiển thị các chuyến đi đang diễn ra với thông tin hướng dẫn viên, thời gian và địa điểm.

![My Trip Screen](assets/screenshots/my_trip.png)

---

### 4.9 Màn hình Chuyến đi sắp tới

> **File:** `lib/next_trip.dart`  
> **API:** `GET /api/next-trips`

Danh sách các chuyến đi đã đặt sắp diễn ra, bao gồm trạng thái và các hành động (Chat, Pay, Detail).

![Next Trip Screen](assets/screenshots/next_trip.png)

---

### 4.10 Màn hình Chi tiết chuyến đi

> **File:** `lib/next_trip_detail_page.dart`, `lib/trip_detail_page.dart`  
> **API:** `GET /api/next-trips/detail/:id`, `GET /api/my-trips/detail/:id`

Thông tin chi tiết chuyến đi: lịch trình từng ngày, chính sách giá, nhà cung cấp.

![Trip Detail Screen](assets/screenshots/trip_detail.png)

---

### 4.11 Màn hình Chuyến đi đã qua

> **File:** `lib/past_trip.dart`  
> **API:** `GET /api/past-trips`, `GET /api/past-trips/detail/:id`

Lịch sử các chuyến đi đã hoàn thành cùng hướng dẫn viên phụ trách.

![Past Trip Screen](assets/screenshots/past_trip.png)

---

### 4.12 Màn hình Thanh toán

> **File:** `lib/payment.dart`  
> **API:** `GET /api/payment/preview`, `POST /api/payment/process`

Xem trước thông tin thanh toán và xác nhận đặt tour, bao gồm số lượng khách và tổng tiền.

![Payment Screen](assets/screenshots/payment.png)

---

### 4.13 Màn hình Danh sách yêu thích

> **File:** `lib/wish_list.dart`  
> **API:** `GET /api/wish-list`, `PATCH /api/wish-list/:id/like`, `DELETE /api/wish-list/:id`

Các tour đã lưu với tính năng like và xóa khỏi danh sách.

![Wish List Screen](assets/screenshots/wish_list.png)

---

### 4.14 Màn hình Hồ sơ

> **File:** `lib/profile.dart`  
> **API:** `GET /api/profile`

Thông tin cá nhân, ảnh, hành trình và bộ sưu tập ảnh của người dùng.

![Profile Screen](assets/screenshots/profile.png)

---

### 4.15 Màn hình Chat

> **File:** `lib/chat.dart`, `lib/chat_detail.dart`

Danh sách cuộc trò chuyện và nhắn tin trực tiếp với hướng dẫn viên du lịch.

![Chat Screen](assets/screenshots/chat.png)

---

### 4.16 Màn hình Cài đặt

> **File:** `lib/settings.dart`

Tùy chỉnh thông báo, ngôn ngữ, bảo mật và thông tin tài khoản.

![Settings Screen](assets/screenshots/settings.png)

---

## 5. Danh sách API

**Base URL:** `http://localhost:3000/api`  
**Tổng cộng: 20 endpoints**

| # | Method | Endpoint | Mô tả |
|---|--------|----------|-------|
| 1 | POST | `/auth/firebase` | Đăng nhập bằng Firebase token |
| 2 | GET | `/explore` | Lấy dữ liệu trang khám phá |
| 3 | PATCH | `/tours/:id/like` | Toggle like tour |
| 4 | PATCH | `/tours/:id/save` | Toggle lưu tour |
| 5 | GET | `/my-trips/current` | Danh sách chuyến đi hiện tại |
| 6 | GET | `/my-trips/detail/:id` | Chi tiết chuyến đi hiện tại |
| 7 | GET | `/next-trips` | Danh sách chuyến đi sắp tới |
| 8 | GET | `/next-trips/detail/:id` | Chi tiết chuyến đi sắp tới |
| 9 | GET | `/past-trips` | Danh sách chuyến đi đã qua |
| 10 | GET | `/past-trips/detail/:id` | Chi tiết chuyến đi đã qua |
| 11 | GET | `/payment/preview` | Xem trước thanh toán |
| 12 | POST | `/payment/process` | Xử lý thanh toán |
| 13 | GET | `/profile` | Hồ sơ người dùng |
| 14 | GET | `/tourMore` | Danh sách tour (hỗ trợ `?q=` tìm kiếm) |
| 15 | PATCH | `/tourMore/tours/:id/favorite` | Toggle yêu thích tour |
| 16 | GET | `/wish-list` | Danh sách yêu thích |
| 17 | PATCH | `/wish-list/:id/like` | Toggle like trong wish list |
| 18 | DELETE | `/wish-list/:id` | Xóa tour khỏi wish list |
| 19 | GET | `/news` | Danh sách tin tức du lịch |
| 20 | GET | `/guides` | Danh sách hướng dẫn viên |

---

## 6. Hướng dẫn cài đặt và chạy

### Yêu cầu hệ thống
- Flutter SDK `^3.10.4`
- Node.js `>=16`
- Android Studio hoặc VS Code
- Tài khoản Firebase

### Bước 1 — Clone project
```bash
git clone https://github.com/SangIT465/flutter.git
cd flutter
```

### Bước 2 — Cài dependencies Flutter
```bash
flutter pub get
```

### Bước 3 — Cấu hình Firebase
Tải file config từ Firebase Console:
- **Android:** đặt vào `android/app/google-services.json`
- **iOS:** đặt vào `ios/Runner/GoogleService-Info.plist`

### Bước 4 — Chạy Backend
```bash
cd backend
npm install
npm start
# Server chạy tại http://localhost:3000
```

### Bước 5 — Chạy Flutter app
```bash
flutter run -d chrome       # Trên trình duyệt Chrome
flutter run -d windows      # Trên Windows Desktop
```

---

## 7. Kết luận

Qua quá trình thực hiện đồ án, nhóm đã hoàn thành được một ứng dụng du lịch Flutter với các tính năng cơ bản đáp ứng yêu cầu đề ra:

- ✅ Xây dựng đầy đủ **20 API endpoints** backend với Node.js/Express
- ✅ Tích hợp **Firebase Authentication** cho đăng nhập/đăng ký
- ✅ Thiết kế **16 màn hình** giao diện người dùng
- ✅ Kết nối Flutter app với backend API
- ✅ Triển khai các tính năng: khám phá tour, quản lý chuyến đi, thanh toán, wish list, chat, hồ sơ

### Hướng phát triển tiếp theo
- Tích hợp thanh toán thực tế (VNPay, MoMo)
- Thêm tính năng đặt vé, đánh giá tour
- Triển khai backend lên cloud (Heroku, Railway, Render)
- Hỗ trợ push notification

---

*Báo cáo được tạo ngày 14/05/2026*
