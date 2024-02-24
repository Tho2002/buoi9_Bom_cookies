// // //BOM //truy vết lịch sử lướt web ,luu lại thông tin người dùng
// // //BOM window
// // //console.log(window);
// // console.log(window.innerHeight); // lấy kích thước của tài liệu
// // console.log(window.innerWidth); // lấy kích thước của tài liệu
// // console.log(window);
// //window.open()// để mở ra 1 cửa sổ mới
// //window.open(url,name,options)
// //url là đường dẫn ,name là đặt tên cho cửa sổ này, options là một chuỗi các thông số cách nhau bởi dấu phẩy :width,height,top,left
// // const opentap = () => {
// //   window.open(
// //     "https://github.com/",
// //     "_tho",
// //     "width=1200",
// //     "height=600",
// //     "left=100",
// //     "top=50"
// //   );
// // };// mở tap
// // const closetap = () => {
// //   let close = window.open(
// //     "https://github.com/",
// //     "_tho",
// //     "width=1200",
// //     "height=600",
// //     "left=100",
// //     "top=50"
// //   );
// //   close.close();
// // };/// đóng tab
// //BOM screen// lấy kích thước của máy tính  ko phải kich thước của trình duyệt
// // console.log(screen.height);
// //BOM location// xử lý đối tượng liên quan đến url của trang web
// // console.log(location);
// // location.reload();
// // const reloadPage = () => {
// //   location.reload();
// // };
// // setInterval(reloadPage, 5000);

// //4.3 /Các thuộc tính
// //hash :lấy phần sau dấu # của URL
// //host : lấy hostname và port của url
// //hostname : LẤY TÊN HOST
// // href:lấy toàn bộ URL/
// // http://127.0.0.1:5500/buoi9.html
// // console.log(location);

// //4.4
// BOM history truy vết lịch sử lướt web
//.back()
//.forward()
//.go(number)
// console.log(history.back());trở về trang
// console.log(history.forward());// đi tiếp trang
// // console.log(history.go(2));trở về 2 trang trước
// const goBack = () => {
//   history.back();
// };

///Navigator //được dùng để lấy thông tin liên quan đến trình duyệt của người dùng
// console.log(window.navigator);
//BOM popup một số làm built in có sẵn ///pormt alert
///BOM Timing //setTimeout, setInterval

// ///9 cookie  dữ liệu được lưu trữ trong 1 files luu trữ dưới dạng name=values(lưu trữ trong 1kkhoangr thời gian do bạn tự thiêts lập)
// //cú pháp document.cookie="name=values"
// const fullname = prompt("nhap tên của bạn");
// const fullname = "nam";
// console.log(fullname);
// document.cookie = `fullname=${fullname}`;
// document.cookie = `fullname=${fullname};expires=Thu,08 Jan 2025 00:00:00 UTC`;// đặt thời gian hết hạn của biến
// Hàm thiết lập giá trị côkies
// function setCookie(cname, cvalue, exdays) {
//   const d = new Date();
//   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + d.toUTCString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }
// const fullname = prompt("nhap tên của bạn");
// console.log(fullname);
// setCookie("fullname", fullname, 3);

//Cú pháp lấy giá trị cookies
// function getCookie(cname) {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(";");
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == " ") {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }
// const fullname = getCookie("email");
// console.log(fullname);

///Đổi giá trị cookie
// document.cookie =
//   "username=toidicode.com; expires=Thu, 22 Dec 2024 19:55:20 UTC";

//xóa cookies

// function deleteCookie(name) {
//   document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
// }
// deleteCookie("email");
