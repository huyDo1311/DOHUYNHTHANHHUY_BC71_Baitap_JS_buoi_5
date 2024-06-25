function getId(id) {
  var isId = Number(document.getElementById(id).value);
  return isId;
}

function xetTuyen() {
  var diemChuan = getId("diemChuan");
  var khuVuc = getId("khuVuc");
  var doiTuong = getId("doiTuong");
  var diemMonThuNhat = getId("diemMonThuNhat");
  var diemMonThuHai = getId("diemMonThuHai");
  var diemMonThuBa = getId("diemMonThuBa");

  if (diemMonThuNhat === 0 || diemMonThuHai === 0 || diemMonThuBa === 0) {
    ketQuaTuyenSinh = "Rớt";
  } else {
    var tong =
      diemMonThuNhat + diemMonThuHai + diemMonThuBa + khuVuc + doiTuong;
    var ketQuaTuyenSinh = "";
    if (tong >= diemChuan) {
      ketQuaTuyenSinh = "Đậu";
    } else {
      ketQuaTuyenSinh = "Rớt";
    }
  }

  document.getElementById(
    "ketQuaBai1"
  ).innerHTML = `Bạn đã <strong> ${ketQuaTuyenSinh}</strong>. Tổng điểm: ${tong}`;
}

function tinhTienDien() {
  var hoTen = document.getElementById("hoTen").value;
  var soDien = getId("soDien");

  var tienDien = 0;
  if (soDien <= 50) {
    tienDien = soDien * 500;
  } else if (50 < soDien && soDien <= 100) {
    tienDien = 50 * 500 + (soDien - 50) * 650;
  } else if (100 < soDien && soDien <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (soDien - 100) * 850;
  } else if (200 < soDien && soDien <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soDien - 150) * 1100;
  } else {
    tienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soDien - 350) * 1300;
  }
  document.getElementById("ketQuaBai2").innerHTML =
    `Họ tên <strong> ${hoTen}</strong>, Tiền điện: ` +
    tienDien.toLocaleString("vn-VN", { style: "currency", currency: "vnd" });
}

// function tinhTienDien() {
//     var hoTen = document.getElementById("hoTen").value;
//     var soDien = parseFloat(document.getElementById("soDien").value);

//     // Bảng giá điện theo bậc
//     var bangGiaDien = [
//         { kWh: 50, giaDien: 500 },
//         { kWh: 100, giaDien: 650 },
//         { kWh: 200, giaDien: 850 },
//         { kWh: 350, giaDien: 1100 },
//         { kWh: Infinity, giaDien: 1300 } // Mức sử dụng điện từ 351 kWh trở lên
//     ];

//     var tienDien = 0;
//     var soDienDaThanhToan = 0;

//     for (var i = 0; i < bangGiaDien.length; i++) {
//         var khoangDien = bangGiaDien[i].kWh - soDienDaThanhToan;
//         if (soDien <= khoangDien) {
//             tienDien += soDien * bangGiaDien[i].giaDien;
//             break;
//         } else {
//             tienDien += khoangDien * bangGiaDien[i].giaDien;
//             soDien -= khoangDien;
//             soDienDaThanhToan += bangGiaDien[i].kWh;
//         }
//     }

//     document.getElementById("ketQuaBai2").innerHTML = `Họ tên: <strong>${hoTen}</strong>. Tiền điện: ${tienDien.toFixed(0)} đồng`;
// }
/* 
    soDien = 150
    +---+-------+-----------+-------------------+-------------------+------------------------+----------+
    | i | soDien| khoangDien| bangGiaDien[i].kWh| soDienDaThanhToan | bangGiaDien[i].giaDien | tienDien |
    +-----------+-----------+-------------------+-------------------+------------------------+----------+
    | 0 |   150 |      50   |         50        |           0       |          500           |   25,000 |
    +-----------+-----------+-------------------+-------------------+------------------------+----------+
    | 1 |   100 |      50   |        100        |          50       |          650           |   57,500 |
    +---+-------+-----------+-------------------+-------------------+------------------------+----------+
    | 2 |    50 |      50   |        200        |         150       |          850           |  100,000 |
    +---+-------+-----------+-------------------+-------------------+------------------------+----------+
 */

/* 
    Bài 3: Tính tiền thuế
*/

function tinhTienThue() {
  var hoTen = document.getElementById("hoTenBai3").value;
  var tongThuNhap = getId("tongThuNhap");
  var soNguoiPhuThuoc = getId("soNguoiPhuThuoc");

  var thuNhapChiuThue = tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000;
  var tienThue = 0;
  var kiemTra = thuNhapChiuThue * 0.05;
  if (kiemTra <= 0) {
    alert("Số tiền thu nhập không hợp lệ");
  } else {
    if (thuNhapChiuThue <= 60e6) {
      tienThue = thuNhapChiuThue * 0.05;
    } else if (60e6 < thuNhapChiuThue && thuNhapChiuThue <= 120e6) {
      //   tienThue = 60e+6 * 0.05 + (thuNhapChiuThue - 60e+6) * 0.1;
      tienThue = thuNhapChiuThue * 0.1;
    } else if (120e6 < thuNhapChiuThue && thuNhapChiuThue <= 210e6) {
      //   tienThue = 60e+6 * 0.05 + 120e+6 * 0.1(thuNhapChiuThue - 120e+6) * 0.15;
      tienThue = thuNhapChiuThue * 0.15;
    } else if (210e6 < thuNhapChiuThue && thuNhapChiuThue <= 384e6) {
      //   tienThue =
      //     60e+6 * 0.05 +
      //     120e+6 * 0.1 +
      //     210e+6 * 0.15 +
      //     (thuNhapChiuThue - 210e+6) * 0.2;
      tienThue = thuNhapChiuThue * 0.2;
    } else if (384e6 < thuNhapChiuThue && thuNhapChiuThue <= 624e6) {
      //   tienThue =
      //     60e+6 * 0.05 +
      //     120e+6 * 0.1 +
      //     210e+6 * 0.15 +
      //     384e+6 * 0.2 +
      //     (thuNhapChiuThue - 384e+6) * 0.25;
      tienThue = thuNhapChiuThue * 0.25;
    } else if (624e6 < thuNhapChiuThue && thuNhapChiuThue <= 960e6) {
      //   tienThue =
      //     60e+6 * 0.05 +
      //     120e+6 * 0.1 +
      //     210e+6 * 0.15 +
      //     384e+6 * 0.2 +
      //     624e+6 * 0.25 +
      //     (thuNhapChiuThue - 624e+6) * 0.3;
      tienThue = thuNhapChiuThue * 0.3;
    } else if (960e6 < thuNhapChiuThue) {
      //   tienThue =
      //     60e+6 * 0.05 +
      //     120e+6 * 0.1 +
      //     210e+6 * 0.15 +
      //     384e+6 * 0.2 +
      //     624e+6 * 0.25 +
      //     624e+6 * 0.3 +
      //     (thuNhapChiuThue - 960e+6) * 0.35;
      tienThue = thuNhapChiuThue * 0.35;
    } else {
      alert("Tổng thu nhập không đủ điều kiện");
    }
    document.getElementById("ketQuaBai3").innerHTML =
      `Họ tên <strong> ${hoTen}</strong>, Tiền thuế thu nhập cá nhân: ` +
      tienThue.toLocaleString("vn-VN");
  }
}

/*
    Bài 4: Tính tiền cáp
 */

document.getElementById("khachHang").addEventListener("change", function () {
  var val = this.value;
  var theKetNoi = document.querySelector(".theKetNoi");
  if (val == 2) {
    theKetNoi.style.display = "block";
  } else {
    theKetNoi.style.display = "none";
  }
});

function tinhTienCap() {
  var khachHang = getId("khachHang");
  var maKhachHang = getId("maKhachHang");
  var soKenh = getId("soKenh");
  var soKetNoi = getId("soKetNoi");

  if (khachHang == 0) {
    alert("Hãy chọn loại khách hàng");
  } else {
    var tienCap = 0;
    if (khachHang == 1) {
      tienCap = 4.5 + 20.5 + 7.5 * soKenh;
    } else if (khachHang == 2) {
      var tongSoKetNoi = kiemTraSoKetNoi(soKetNoi);
      tienCap = 15 + tongSoKetNoi + soKenh * 50;
    }

    document.getElementById("ketQuaBai4").innerHTML =
      `Mã khách hàng: ${maKhachHang}; Tiền cáp: ` +
      tienCap.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }
}

function kiemTraSoKetNoi(n) {
  if (n <= 10) {
    return 75;
  } else {
    return 75 + (n - 10) * 5;
  }
}
