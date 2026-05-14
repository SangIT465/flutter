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

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| POST | `/auth/firebase` | Đăng nhập Firebase |
| GET | `/explore` | Danh sách khám phá |
| PATCH | `/tours/:id/like` | Like tour |
| PATCH | `/tours/:id/save` | Lưu tour |
| GET | `/my-trips/current` | Chuyến đi hiện tại |
| GET | `/my-trips/detail/:id` | Chi tiết chuyến đi |
| GET | `/next-trips` | Chuyến đi sắp tới |
| GET | `/next-trips/detail/:id` | Chi tiết chuyến đi sắp tới |
| GET | `/past-trips` | Chuyến đi đã qua |
| GET | `/payment/preview` | Xem trước thanh toán |
| POST | `/payment/process` | Xử lý thanh toán |
| GET | `/profile` | Hồ sơ người dùng |
| GET | `/tourMore` | Danh sách tour thêm |
| PATCH | `/tourMore/tours/:id/favorite` | Yêu thích tour |
| GET | `/wish-list` | Danh sách yêu thích |
| PATCH | `/wish-list/:id/like` | Like trong wish list |
