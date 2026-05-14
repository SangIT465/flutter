# Flutter Project

Ứng dụng du lịch Flutter tích hợp Firebase và backend Node.js.

---

## Yêu cầu

- [Flutter SDK](https://docs.flutter.dev/get-started/install) `^3.10.4`
- Android Studio hoặc VS Code (cài Flutter & Dart extension)
- Node.js (để chạy backend)
- Tài khoản Firebase (đã tạo project)

---

## Các bước chạy

### 1. Clone project

```bash
git clone https://github.com/SangIT465/flutter.git
cd flutter
```

### 2. Cài dependencies Flutter

```bash
flutter pub get
```

### 3. Cấu hình Firebase

Tải file config từ [Firebase Console](https://console.firebase.google.com) và đặt vào đúng vị trí:

- **Android:** `android/app/google-services.json`
- **iOS:** `ios/Runner/GoogleService-Info.plist`

### 4. Chạy Backend

```bash
cd backend
npm install
npm start
```

Backend sẽ chạy tại `http://localhost:3000`

### 5. Chạy Flutter app

```bash
# Kiểm tra thiết bị kết nối
flutter devices

# Chạy app
flutter run
```

Chạy trên thiết bị cụ thể:

```bash
flutter run -d chrome           # Web
flutter run -d emulator-5554    # Android Emulator
```

---

## Lệnh hữu ích

| Lệnh | Mô tả |
|------|-------|
| `flutter pub get` | Cài packages |
| `flutter clean` | Xóa build cache |
| `flutter run --release` | Chạy bản release |
| `flutter build apk` | Build APK Android |

---

## Cấu trúc API

Base URL: `http://localhost:3000/api`

**Tổng cộng: 20 endpoints**

| # | Method | Endpoint | Mô tả |
|---|--------|----------|-------|
| 1 | POST | `/auth/firebase` | Đăng nhập Firebase |
| 2 | GET | `/explore` | Danh sách khám phá |
| 3 | PATCH | `/tours/:id/like` | Like tour |
| 4 | PATCH | `/tours/:id/save` | Lưu tour |
| 5 | GET | `/my-trips/current` | Chuyến đi hiện tại |
| 6 | GET | `/my-trips/detail/:id` | Chi tiết chuyến đi hiện tại |
| 7 | GET | `/next-trips` | Chuyến đi sắp tới |
| 8 | GET | `/next-trips/detail/:id` | Chi tiết chuyến đi sắp tới |
| 9 | GET | `/past-trips` | Danh sách chuyến đi đã qua |
| 10 | GET | `/past-trips/detail/:id` | Chi tiết chuyến đi đã qua |
| 11 | GET | `/payment/preview` | Xem trước thanh toán |
| 12 | POST | `/payment/process` | Xử lý thanh toán |
| 13 | GET | `/profile` | Hồ sơ người dùng |
| 14 | GET | `/tourMore` | Danh sách tour (hỗ trợ `?q=` tìm kiếm) |
| 15 | PATCH | `/tourMore/tours/:id/favorite` | Yêu thích tour |
| 16 | GET | `/wish-list` | Danh sách yêu thích |
| 17 | PATCH | `/wish-list/:id/like` | Like trong wish list |
| 18 | DELETE | `/wish-list/:id` | Xóa khỏi wish list |
| 19 | GET | `/news` | Danh sách tin tức |
| 20 | GET | `/guides` | Danh sách hướng dẫn viên |
