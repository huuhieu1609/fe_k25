<template>
  <div class="row">
    <div class="col-lg-4">
      <div
        class="card border-top border-0 border-4 border-primary shadow-sm mt-2"
      >
        <div class="card-header">
          <h5 class="card-title mb-0">Thêm Mới Phiếu Nhập</h5>
        </div>
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label class="form-label fw-bold">Nhà Cung Cấp</label>
              <select
                v-model="them_phieu_nhap.id_nha_cung_cap"
                class="form-select"
              >
                <option value="">Chọn nhà cung cấp...</option>
                <option
                  v-for="(value, index) in list_nha_cung_cap"
                  :key="value.id || index"
                  :value="value.id"
                >
                  {{ value.ten }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Kho Nhập</label>
              <select v-model="them_phieu_nhap.id_kho" class="form-select">
                <option value="">Chọn kho...</option>
                <option
                  v-for="(value, index) in list_kho"
                  :key="value.id || index"
                  :value="value.id"
                >
                  {{ value.ten }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Nhân Viên</label>
              <select
                v-model="them_phieu_nhap.id_nhan_vien"
                class="form-select"
              >
                <option value="">Chọn nhân viên...</option>
                <option
                  v-for="(value, index) in list_nhan_vien"
                  :key="value.id || index"
                  :value="value.id"
                >
                  {{ value.ho_va_ten }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Ngày Nhập</label>
              <input
                v-model="them_phieu_nhap.ngay_nhap"
                type="date"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Tình Trạng</label>
              <select v-model="them_phieu_nhap.trang_thai" class="form-select">
                <option :value="1">Đã Nhập Kho</option>
                <option :value="0">Tạm Lưu</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Chiết Khấu (%)</label>
              <input
                v-model.number="them_phieu_nhap.chiet_khau"
                type="number"
                min="0"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Thuế VAT (%)</label>
              <input
                v-model.number="them_phieu_nhap.thue_vat"
                type="number"
                min="0"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Đã Thanh Toán</label>
              <input
                v-model.number="them_phieu_nhap.da_thanh_toan"
                type="number"
                min="0"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Ghi Chú</label>
              <textarea
                v-model="them_phieu_nhap.ghi_chu"
                class="form-control"
                rows="3"
              ></textarea>
            </div>

            <div class="mb-2">
              <label class="form-label fw-bold mb-0">Thông Tin Sản Phẩm</label>
            </div>
            <div class="border rounded-3 p-3 bg-light">
              <div class="row g-3">
                <div class="col-md-12">
                  <label class="form-label fw-bold">Sản phẩm</label>
                  <select
                    v-model="them_phieu_nhap.id_san_pham"
                    class="form-select"
                  >
                    <option value="">Chọn sản phẩm...</option>
                    <option
                      v-for="(value, index) in list_san_pham"
                      :key="value.id || index"
                      :value="Number(value.id)"
                    >
                      {{ value.ten_san_pham }}
                    </option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label class="form-label fw-bold">Số lượng</label>
                  <input
                    v-model.number="them_phieu_nhap.so_luong"
                    type="number"
                    min="1"
                    class="form-control text-center"
                  />
                </div>
                <div class="col-md-4">
                  <label class="form-label fw-bold">Đơn giá</label>
                  <input
                    v-model.number="them_phieu_nhap.don_gia"
                    type="number"
                    min="0"
                    class="form-control text-end"
                  />
                </div>
                <div class="col-md-4">
                  <label class="form-label fw-bold">Tạm tính</label>
                  <input
                    :value="formatCurrency(tinhTongTienHang(them_phieu_nhap))"
                    type="text"
                    class="form-control text-end"
                    disabled
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="card-footer text-end">
          <button class="btn btn-primary px-4 shadow-sm" @click="themPhieuNhap">
            Tạo Phiếu
          </button>
        </div>
      </div>
    </div>

    <div class="col-lg-8">
      <div
        class="card border-top border-0 border-4 border-primary shadow-sm mt-2"
      >
        <div class="card-header">
          <h5 class="card-title mb-0">Danh sách Phiếu Nhập</h5>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered table-striped table-hover align-middle"
            >
              <thead class="text-center text-nowrap table-light">
                <tr>
                  <th>STT</th>
                  <th>Mã Phiếu</th>
                  <th>Ngày Nhập</th>
                  <th>Sản Phẩm</th>
                  <th>SL</th>
                  <th>Tổng Tiền Hàng</th>
                  <th>Tổng Thanh Toán</th>
                  <th>Đã Thanh Toán</th>
                  <th>Còn Nợ</th>
                  <th>Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(value, index) in list_phieu_nhap"
                  :key="index"
                  class="text-center"
                >
                  <td>{{ index + 1 }}</td>
                  <td>{{ value.ma_phieu }}</td>
                  <td>{{ value.ngay_nhap }}</td>
                  <td class="text-start">{{ value.ten_san_pham || "---" }}</td>
                  <td>{{ value.so_luong || 0 }}</td>
                  <td class="text-end">
                    {{ formatCurrency(value.tong_tien_hang || 0) }}
                  </td>
                  <td class="text-end">
                    {{ formatCurrency(value.tong_thanh_toan || 0) }}
                  </td>
                  <td class="text-end text-success">
                    {{ formatCurrency(value.da_thanh_toan || 0) }}
                  </td>
                  <td class="text-end text-danger fw-bold">
                    {{ formatCurrency(value.con_no || 0) }}
                  </td>
                  <td class="text-nowrap text-center">
                    <button
                      class="btn btn-info btn-sm me-1 text-white"
                      data-bs-toggle="modal"
                      data-bs-target="#chiTietModal"
                      @click="openChiTiet(value)"
                    >
                      <i class="fa fa-list"></i>
                    </button>
                    <button
                      class="btn btn-warning btn-sm me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#editModal"
                      @click="openEdit(value)"
                    >
                      <i class="fa fa-edit"></i>
                    </button>
                    <button
                      class="btn btn-danger btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteModal"
                      @click="openDelete(value)"
                    >
                      <i class="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="chiTietModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Chi Tiết Phiếu Nhập</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label fw-bold">Mã phiếu</label>
              <input
                :value="chi_tiet_phieu_nhap.ma_phieu || '---'"
                class="form-control"
                readonly
              />
            </div>
            <div class="col-md-6">
              <label class="form-label fw-bold">Ngày nhập</label>
              <input
                :value="chi_tiet_phieu_nhap.ngay_nhap || '---'"
                class="form-control"
                readonly
              />
            </div>
            <div class="col-md-6">
              <label class="form-label fw-bold">Kho</label>
              <input
                :value="chi_tiet_kho.ten || '---'"
                class="form-control"
                readonly
              />
            </div>
            <div class="col-md-6">
              <label class="form-label fw-bold">Nhà cung cấp</label>
              <input
                :value="chi_tiet_nha_cung_cap.ten || '---'"
                class="form-control"
                readonly
              />
            </div>
            <div class="col-md-6">
              <label class="form-label fw-bold">Nhân viên</label>
              <input
                :value="chi_tiet_nhan_vien.ten || '---'"
                class="form-control"
                readonly
              />
            </div>
            <div class="col-md-6">
              <label class="form-label fw-bold">Sản phẩm</label>
              <input
                :value="chi_tiet_item.san_pham_ten || '---'"
                class="form-control"
                readonly
              />
            </div>
            <div class="col-md-4">
              <label class="form-label fw-bold">Số lượng</label>
              <input
                :value="chi_tiet_item.so_luong || 0"
                class="form-control"
                readonly
              />
            </div>
            <div class="col-md-4">
              <label class="form-label fw-bold">Đơn giá</label>
              <input
                :value="formatCurrency(chi_tiet_item.don_gia || 0)"
                class="form-control text-end"
                readonly
              />
            </div>
            <div class="col-md-4">
              <label class="form-label fw-bold">Tổng tiền hàng</label>
              <input
                :value="formatCurrency(chi_tiet_phieu_nhap.tong_tien_hang || 0)"
                class="form-control text-end"
                readonly
              />
            </div>
            <div class="col-md-4">
              <label class="form-label fw-bold">Tổng thanh toán</label>
              <input
                :value="
                  formatCurrency(chi_tiet_phieu_nhap.tong_thanh_toan || 0)
                "
                class="form-control text-end"
                readonly
              />
            </div>
            <div class="col-md-4">
              <label class="form-label fw-bold">Đã thanh toán</label>
              <input
                :value="formatCurrency(chi_tiet_phieu_nhap.da_thanh_toan || 0)"
                class="form-control text-end"
                readonly
              />
            </div>
            <div class="col-md-4">
              <label class="form-label fw-bold">Còn nợ</label>
              <input
                :value="formatCurrency(chi_tiet_phieu_nhap.con_no || 0)"
                class="form-control text-end"
                readonly
              />
            </div>
            <div class="col-md-12">
              <label class="form-label fw-bold">Ghi chú</label>
              <textarea
                :value="chi_tiet_phieu_nhap.ghi_chu || '---'"
                rows="2"
                class="form-control"
                readonly
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Cập Nhật Phiếu Nhập</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label fw-bold">Nhà Cung Cấp</label>
              <select
                v-model="edit_phieu_nhap.id_nha_cung_cap"
                class="form-select"
              >
                <option value="">Chọn nhà cung cấp...</option>
                <option
                  v-for="(value, index) in list_nha_cung_cap"
                  :key="value.id || index"
                  :value="value.id"
                >
                  {{ value.ten }}
                </option>
              </select>
            </div>
            <div class="col-md-6">
              <label class="form-label fw-bold">Kho Nhập</label>
              <select v-model="edit_phieu_nhap.id_kho" class="form-select">
                <option value="">Chọn kho...</option>
                <option
                  v-for="(value, index) in list_kho"
                  :key="value.id || index"
                  :value="value.id"
                >
                  {{ value.ten }}
                </option>
              </select>
            </div>
            <div class="col-md-6">
              <label class="form-label fw-bold">Nhân Viên</label>
              <select
                v-model="edit_phieu_nhap.id_nhan_vien"
                class="form-select"
              >
                <option value="">Chọn nhân viên...</option>
                <option
                  v-for="(value, index) in list_nhan_vien"
                  :key="value.id || index"
                  :value="value.id"
                >
                  {{ value.ho_va_ten }}
                </option>
              </select>
            </div>
            <div class="col-md-6">
              <label class="form-label fw-bold">Ngày Nhập</label>
              <input
                v-model="edit_phieu_nhap.ngay_nhap"
                type="date"
                class="form-control"
              />
            </div>
            <div class="col-md-6">
              <label class="form-label fw-bold">Tình Trạng</label>
              <select v-model="edit_phieu_nhap.trang_thai" class="form-select">
                <option :value="1">Đã Nhập Kho</option>
                <option :value="0">Tạm Lưu</option>
              </select>
            </div>
            <div class="col-md-6">
              <label class="form-label fw-bold">Sản phẩm</label>
              <select v-model="edit_phieu_nhap.id_san_pham" class="form-select">
                <option value="">Chọn sản phẩm...</option>
                <option
                  v-for="(value, index) in list_san_pham"
                  :key="value.id || index"
                  :value="Number(value.id)"
                >
                  {{ value.ten_san_pham }}
                </option>
              </select>
            </div>
            <div class="col-md-4">
              <label class="form-label fw-bold">Số lượng</label>
              <input
                v-model.number="edit_phieu_nhap.so_luong"
                type="number"
                min="1"
                class="form-control"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label fw-bold">Đơn giá</label>
              <input
                v-model.number="edit_phieu_nhap.don_gia"
                type="number"
                min="0"
                class="form-control"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label fw-bold">Đã thanh toán</label>
              <input
                v-model.number="edit_phieu_nhap.da_thanh_toan"
                type="number"
                min="0"
                class="form-control"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label fw-bold">Chiết khấu (%)</label>
              <input
                v-model.number="edit_phieu_nhap.chiet_khau"
                type="number"
                min="0"
                class="form-control"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label fw-bold">Thuế VAT (%)</label>
              <input
                v-model.number="edit_phieu_nhap.thue_vat"
                type="number"
                min="0"
                class="form-control"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label fw-bold">Còn nợ</label>
              <input
                :value="formatCurrency(tinhConNo(edit_phieu_nhap))"
                class="form-control text-end"
                disabled
              />
            </div>
            <div class="col-md-12">
              <label class="form-label fw-bold">Ghi Chú</label>
              <textarea
                v-model="edit_phieu_nhap.ghi_chu"
                class="form-control"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Đóng
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="capNhatPhieuNhap"
            data-bs-dismiss="modal"
          >
            Cập Nhật
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title text-white">Xóa Phiếu Nhập</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div class="modal-body">
          Bạn có chắc muốn xóa phiếu nhập
          <strong>{{ xoa_phieu_nhap.ma_phieu || "" }}</strong
          >?
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Hủy
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="xoaPhieuNhap"
            data-bs-dismiss="modal"
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PhieuNhapManager",
  data() {
    return {
      list_kho: [],
      list_nha_cung_cap: [],
      list_nhan_vien: [],
      list_san_pham: [],
      list_phieu_nhap: [],
      them_phieu_nhap: {
        id_kho: "",
        id_nha_cung_cap: "",
        id_nhan_vien: "",
        ngay_nhap: "",
        trang_thai: 1,
        chiet_khau: 0,
        thue_vat: 0,
        da_thanh_toan: 0,
        ghi_chu: "",
        id_san_pham: "",
        so_luong: 1,
        don_gia: 0,
      },
      edit_phieu_nhap: {
        id: "",
        id_kho: "",
        id_nha_cung_cap: "",
        id_nhan_vien: "",
        ngay_nhap: "",
        trang_thai: 1,
        chiet_khau: 0,
        thue_vat: 0,
        da_thanh_toan: 0,
        ghi_chu: "",
        id_san_pham: "",
        so_luong: 1,
        don_gia: 0,
      },
      xoa_phieu_nhap: {},
      chi_tiet_phieu_nhap: {},
      chi_tiet_item: {},
      chi_tiet_kho: {},
      chi_tiet_nha_cung_cap: {},
      chi_tiet_nhan_vien: {},
    };
  },
  created() {
    this.getKho();
    this.getNhaCungCap();
    this.getNhanVien();
    this.getSanPham();
    this.getPhieuNhap();
  },
  methods: {
    getKho() {
      axios.get("http://127.0.0.1:8000/api/admin/kho").then((response) => {
        this.list_kho = response.data.data;
      });
    },
    getNhaCungCap() {
      axios
        .get("http://127.0.0.1:8000/api/admin/nha-cung-cap")
        .then((response) => {
          this.list_nha_cung_cap = response.data.data;
        });
    },
    getNhanVien() {
      axios
        .get("http://127.0.0.1:8000/api/admin/nhan-vien")
        .then((response) => {
          this.list_nhan_vien = response.data.data;
        });
    },
    getSanPham() {
      axios.get("http://127.0.0.1:8000/api/admin/san-pham").then((response) => {
        this.list_san_pham = response.data.data;
      });
    },
    getPhieuNhap() {
      axios
        .get("http://127.0.0.1:8000/api/admin/phieu-nhap")
        .then((response) => {
          this.list_phieu_nhap = response.data.data;
        });
    },
    formatCurrency(value) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(Number(value) || 0);
    },
    tinhTongTienHang(data) {
      return (Number(data.so_luong) || 0) * (Number(data.don_gia) || 0);
    },
    tinhConNo(data) {
      const tongTienHang = this.tinhTongTienHang(data);
      const chietKhau = Number(data.chiet_khau) || 0;
      const thueVat = Number(data.thue_vat) || 0;
      const tienSauChietKhau = tongTienHang - (tongTienHang * chietKhau) / 100;
      const tongThanhToan =
        tienSauChietKhau + (tienSauChietKhau * thueVat) / 100;
      return tongThanhToan - (Number(data.da_thanh_toan) || 0);
    },
    taoPayload(data) {
      return {
        id_kho: Number(data.id_kho) || null,
        id_nha_cung_cap: Number(data.id_nha_cung_cap) || null,
        id_nhan_vien: Number(data.id_nhan_vien) || null,
        ngay_nhap: data.ngay_nhap,
        trang_thai: Number(data.trang_thai) || 0,
        chiet_khau: Number(data.chiet_khau) || 0,
        thue_vat: Number(data.thue_vat) || 0,
        da_thanh_toan: Number(data.da_thanh_toan) || 0,
        ghi_chu: data.ghi_chu || null,
        id_san_pham: Number(data.id_san_pham) || null,
        so_luong: Number(data.so_luong) || 0,
        don_gia: Number(data.don_gia) || 0,
      };
    },
    resetFormThem() {
      this.them_phieu_nhap = {
        id_kho: "",
        id_nha_cung_cap: "",
        id_nhan_vien: "",
        ngay_nhap: "",
        trang_thai: 1,
        chiet_khau: 0,
        thue_vat: 0,
        da_thanh_toan: 0,
        ghi_chu: "",
        id_san_pham: "",
        so_luong: 1,
        don_gia: 0,
      };
    },
    themPhieuNhap() {
      axios
        .post(
          "http://127.0.0.1:8000/api/admin/phieu-nhap/create",
          this.taoPayload(this.them_phieu_nhap),
        )
        .then((response) => {
          this.$toast?.success(
            response.data.message || "Thêm phiếu nhập thành công.",
          );
          this.getPhieuNhap();
          this.resetFormThem();
        });
    },
    openChiTiet(item) {
      axios
        .get(`http://127.0.0.1:8000/api/admin/phieu-nhap/${item.id}`)
        .then((response) => {
          const data = response.data.data || {};
          const chiTiet = (response.data.chi_tiet || [])[0] || {};
          this.chi_tiet_phieu_nhap = data.phieu_nhap || {};
          this.chi_tiet_kho = data.kho || {};
          this.chi_tiet_nha_cung_cap = data.nha_cung_cap || {};
          this.chi_tiet_nhan_vien = data.nhan_vien || {};
          this.chi_tiet_item = chiTiet;
        });
    },
    openEdit(item) {
      axios
        .get(`http://127.0.0.1:8000/api/admin/phieu-nhap/${item.id}`)
        .then((response) => {
          const data = response.data.data || {};
          const phieu = data.phieu_nhap || {};
          const chiTiet = (response.data.chi_tiet || [])[0] || {};
          this.edit_phieu_nhap = {
            id: phieu.id || item.id,
            id_kho: phieu.id_kho || "",
            id_nha_cung_cap: phieu.id_nha_cung_cap || "",
            id_nhan_vien: phieu.id_nhan_vien || "",
            ngay_nhap: (phieu.ngay_nhap || "").toString().slice(0, 10),
            trang_thai: Number(phieu.trang_thai) || 0,
            chiet_khau: Number(phieu.chiet_khau) || 0,
            thue_vat: Number(phieu.thue_vat) || 0,
            da_thanh_toan: Number(phieu.da_thanh_toan) || 0,
            ghi_chu: phieu.ghi_chu || "",
            id_san_pham: Number(chiTiet.id_san_pham) || "",
            so_luong: Number(chiTiet.so_luong) || 1,
            don_gia: Number(chiTiet.don_gia) || 0,
          };
        });
    },
    capNhatPhieuNhap() {
      axios
        .put(
          `http://127.0.0.1:8000/api/admin/phieu-nhap/update/${this.edit_phieu_nhap.id}`,
          this.taoPayload(this.edit_phieu_nhap),
        )
        .then((response) => {
          this.$toast?.success(
            response.data.message || "Cập nhật phiếu nhập thành công.",
          );
          this.getPhieuNhap();
        });
    },
    openDelete(item) {
      this.xoa_phieu_nhap = item || {};
    },
    xoaPhieuNhap() {
      if (!this.xoa_phieu_nhap.id) return;
      axios
        .delete(
          `http://127.0.0.1:8000/api/admin/phieu-nhap/delete/${this.xoa_phieu_nhap.id}`,
        )
        .then((response) => {
          this.$toast?.success(
            response.data.message || "Xóa phiếu nhập thành công.",
          );
          this.getPhieuNhap();
          this.xoa_phieu_nhap = {};
        });
    },
  },
};
</script>

<style scoped></style>
