// BÀI TẬP 1 tính lương nhân viên,lương 1 ngày= 100.000 VND
// input: đầu vào
var luong1ngay = 100000;
var soNgayLam = 28;
// Output: tính lương trên số ngày làm việc
var luong = 0;
luong = luong1ngay * soNgayLam;
console.log('Tổng lương =', luong);

// BÀI TẬP 2 TÍNH GIÁ TRỊ TRUNG BÌNH 5 SỐ THỰC
// input
var a = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;
// Output: tính giá trị trung bình 5 số thực
var trungBinh = 0;
trungBinh = (a + b + c + d + e) / 5;
console.log('Trung bình =', trungBinh);

// BÀI TẬP 3 QUY ĐỔI TIỀN dola=usd
// input
var dola = 2;
var vNd = 23500;
// Output
var soTienSauQuydoi = 0;
soTienSauQuydoi = dola * vNd;
console.log('Số tiền sau quy đổi =', soTienSauQuydoi);

// BÀI TẬP 4 TÍNH DIỆN TÍCH, CHU VI HÌNH CHỮ NHẬT
// input: chiều dài, chiều rộng
var chieuDai = 7;
var chieuRong = 4;

// Output: Chu vi, diện tích
var chuVi = 0;
var dienTich = 0;
// progress
chuVi = (chieuDai + chieuRong) * 2;
dienTich = chieuDai * chieuRong;
console.log('chu vi =', chuVi);
console.log('diện tích =', dienTich);

// BÀI TẬP 5: TÍNH TỔNG 2 KÍ SỐ
// input
var so = 12;
// output
var tongKiSo = 0;
// Progress
var hangChuc = Math.floor(so / 10);
var hangDonVi = so % 10;
tongKiSo = hangChuc + hangDonVi;
console.log('Tổng kí số =', tongKiSo);


