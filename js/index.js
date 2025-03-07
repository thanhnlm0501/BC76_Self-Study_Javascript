// Tính năng cơ bản trong javascript nói riêng cũng như lập trình  nói chung
// Kiểu dữ liệu cơ bản (primitive value): number, string, boolean, undefine, null

var number = 1; // số number: lương, số giờ làm, giá tiền,...
var title = 'cybersoft developer'; //chuỗi string: họ tên, địa chỉ, thông tin cá nhân,...
var result = true; // boolean: giá trị true false mang tính đúng sai
var name1; // undefine: chưa set giá trị không sử dụng được
var info = null; // null

// Javascript sẽ tự hiểu dữ liệu khi gán giá trị cho nó
// typeof giúp xem kiểu dữ liệu của biến
console.log(typeof number);
console.log(typeof title);
console.log(typeof result);
console.log(typeof name1);
console.log(typeof info);

// output
console.log(title);
// - console.log();

/*------ Toán tử -----*/
var soHang1 = 5;
var soHang2 = 11;
var tong = soHang1 + soHang2;
console.log('Tổng:', tong);

var tich = soHang1 * soHang2;
console.log('Tích:', tich);

var thuong = soHang2 / soHang1;
console.log('Thương:', thuong);

var hieu = soHang2 - soHang1;
console.log('Hiệu:', hieu);

var chiaDu = soHang2 % soHang1;
console.log('Chia lấy dư:', chiaDu);

var bienA = '5';
// var bienA = '5a';
var bienB = '10';
console.log(bienA * bienB);
console.log(bienA + bienB);

// Kết luận: Đối với phép tính số học như + - * / thì trong lập trình js xử lý giống hệt các phép tính của toán
// JS hổ trợ toán tử % (chia lấy dư) để lấy kết quả phần dư xử lý
// Trong JS đặc biệt đối với phép cộng thì JS xử lý + 2 số (number) thì ra giá trị tổng, tuy nhiên + 2 chuỗi thì sẽ là nối 2 chuỗi lại với nhau

var i = 0;
i = i + 1; // i = 1
console.log('i =', i);
i++; // i = 2
console.log('i =', i);
i += 1; // i = 3
console.log('i =', i);

// ----- Hệ số -----
const HE_SO_LUONG = 5;
// HE_SO_LUONG = 10;

// const khai báo biến hằng số chỉ được gán 1 lần duy nhất , không gán 2 lần (báo lỗi)
// thường được sử dụng do backend cung cấp

// ----- Mô hình 3 khối -----
// Ví dụ: về ứng dụng tính lương nhân viên làm trên 1 tháng (28 ngày). Dựa trên lương cơ bản là 20$ / 1 ngày.
// Chương trình tính lương

// Input: đầu vào
var luong1Ngay = 20;
var soNgayLam = 28;

//Output: Tính lương trên số ngày làm việc
var luong = 0;

// Bước xử lý
luong = soNgayLam * luong1Ngay;

console.log('Tổng lương:', luong);

// Viết chương trình cho phép người dùng nhập vào chiều dài và chiều rộng của màn hình. Tính chu vi và diện tích màn hình !

// Input:
var chieuDai = 5;
var chieuRong = 3;

// Output
var chuVi = 0;
var dienTich = 0;

//Progress
chuVi = (chieuDai + chieuRong) * 2;
dienTich = chieuDai * chieuRong;

console.log('Chu vi:', chuVi);
console.log('Diện tích:', dienTich);
