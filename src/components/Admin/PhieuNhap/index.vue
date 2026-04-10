<template>
  <div class="row">
    <!-- 1. Form Nhập Header (Trái - 4) -->
    <div class="col-lg-4">
      <div class="card border-top border-0 border-4 border-primary shadow-sm mt-2">
        <div class="card-header">
          <h5 class="card-title mb-0">Thêm Mới Phiếu Nhập</h5>
        </div>
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label class="form-label fw-bold">Mã Phiếu</label>
              <input v-model="them_phieu_nhap.ma_phieu" type="text" class="form-control" placeholder="VD: PN0001" />
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Nhà Cung Cấp</label>
              <select v-model="them_phieu_nhap.id_nha_cung_cap" class="form-select">
                <option value="">Chọn nhà cung cấp...</option>
                <option
                  v-for="item in list_nha_cung_cap"
                  :key="item.id"
                  :value="item.id"
                >
                  {{ item.ten }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Kho Nhập</label>
              <select v-model="them_phieu_nhap.id_kho" class="form-select">
                <option value="">Chọn kho...</option>
                <option
                  v-for="item in list_kho"
                  :key="item.id"
                  :value="item.id"
                >
                  {{ item.ten }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Nhân Viên</label>
              <select v-model="them_phieu_nhap.id_nhan_vien" class="form-select">
                <option value="">Chọn nhân viên...</option>
                <option
                  v-for="item in list_nhan_vien"
                  :key="item.id"
                  :value="item.id"
                >
                  {{ item.ten }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Ngày Nhập</label>
              <input v-model="them_phieu_nhap.ngay_nhap" type="date" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Tình Trạng</label>
              <select v-model="them_phieu_nhap.trang_thai" class="form-select">
                <option value="1">Đã Nhập Kho</option>
                <option value="0">Tạm Lưu</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Chiết Khấu</label>
              <input v-model.number="them_phieu_nhap.chiet_khau" type="number" min="0" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Thuế VAT</label>
              <input v-model.number="them_phieu_nhap.thue_vat" type="number" min="0" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Đã Thanh Toán</label>
              <input v-model.number="them_phieu_nhap.da_thanh_toan" type="number" min="0" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Ghi Chú</label>
              <textarea v-model="them_phieu_nhap.ghi_chu" class="form-control" rows="3"
                placeholder="Ghi chú nội bộ..."></textarea>
            </div>

            <div class="mb-2 d-flex justify-content-between align-items-center">
              <label class="form-label fw-bold mb-0">Chi Tiết Sản Phẩm</label>
              <button type="button" class="btn btn-sm btn-outline-primary" @click="addChiTietRow(them_phieu_nhap)">
                + Thêm dòng
              </button>
            </div>
            <div class="table-responsive">
              <table class="table table-sm table-bordered align-middle">
                <thead class="table-light text-center">
                  <tr>
                    <th>Sản phẩm</th>
                    <th style="width: 90px">SL</th>
                    <th style="width: 120px">Đơn giá</th>
                    <th style="width: 120px">Thành tiền</th>
                    <th style="width: 60px">Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, idx) in them_phieu_nhap.chi_tiet" :key="idx">
                    <td>
                      <select v-model="item.id_san_pham" class="form-select form-select-sm">
                        <option value="">Chọn SP...</option>
                        <option
                          v-for="sp in list_san_pham"
                          :key="sp.id"
                          :value="sp.id"
                        >
                          {{ sp.ten }}
                        </option>
                      </select>
                    </td>
                    <td>
                      <input v-model.number="item.so_luong" type="number" min="1"
                        class="form-control form-control-sm text-center" />
                    </td>
                    <td>
                      <input v-model.number="item.don_gia" type="number" min="0"
                        class="form-control form-control-sm text-end" />
                    </td>
                    <td class="text-end">
                      {{ formatCurrency(calculateThanhTien(item)) }}
                    </td>
                    <td class="text-center">
                      <button type="button" class="btn btn-sm btn-outline-danger"
                        @click="removeChiTietRow(them_phieu_nhap, idx)">
                        <i class="fa fa-times"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
        <div class="card-footer text-end">
          <button class="btn btn-primary px-4 shadow-sm" @click="addPhieuNhap()">
            Tạo Phiếu
          </button>
        </div>
      </div>
    </div>

    <!-- 2. Danh Sách Phiếu Nhập (Phải - 8) -->
    <div class="col-lg-8">
      <div class="card border-top border-0 border-4 border-primary shadow-sm mt-2">
        <div class="card-header">
          <h5 class="card-title mb-0">Danh sách Phiếu Nhập</h5>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered table-striped table-hover align-middle">
              <thead class="text-center text-nowrap table-light">
                <tr>
                  <th>STT</th>
                  <th>Kho</th>
                  <th>Nhà Cung Cấp</th>
                  <th>Nhân Viên</th>
                  <th>Mã Phiếu</th>
                  <th>Ngày Nhập</th>
                  <th>Sản Phẩm</th>
                  <th>Số Lượng</th>
                  <th>Đơn Giá</th>
                  <th>Tổng Tiền</th>
                  <th>Chiết Khấu</th>
                  <th>Thuế VAT</th>
                  <th>Đã Thanh Toán</th>
                  <th>Trạng Thái</th>
                  <th>Ghi Chú</th>
                  <th>Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(value, index) in list_phieu_nhap" :key="index">
                  <tr>
                    <td class="text-center align-middle">{{ index + 1 }}</td>
                    <td class="align-middle">{{ value.ten_kho }}</td>
                    <td class="align-middle">{{ value.ten_nha_cung_cap }}</td>
                    <td class="align-middle">{{ value.ten_nhan_vien }}</td>
                    <td class="text-center align-middle">{{ value.ma_phieu }}</td>
                    <td class="text-center align-middle">{{ value.ngay_nhap }}</td>
                    <td class="text-start align-middle">
                      {{
                        value.ten_san_pham || value.danh_sach_san_pham || "---"
                      }}
                    </td>
                    <td>
                      {{ value.so_luong ?? value.tong_so_luong_san_pham ?? 0 }}
                    </td>
                    <td class="text-end">
                      {{ formatCurrency(value.don_gia || 0) }}
                    </td>
                    <td class="text-end fw-bold text-primary">
                      {{ formatCurrency(value.tong_tien_hang || 0) }}
                    </td>
                    <td class="text-end fw-bold text-primary">
                      {{ formatCurrency(value.chiet_khau || 0) }}
                    </td>
                    <td class="text-end fw-bold text-primary">
                      {{ formatCurrency(value.thue_vat || 0) }}
                    </td>
                    <td class="text-end fw-bold text-primary">
                      {{ formatCurrency(value.da_thanh_toan || 0) }}
                    </td>
                    <td>
                      <button v-if="value.trang_thai == 1" class="btn btn-success btn-sm w-100 shadow-sm">
                        Đã Nhập Kho
                      </button>
                      <button v-else class="btn btn-secondary btn-sm w-100 shadow-sm">
                        Tạm Lưu
                      </button>
                    </td>
                    <td class="text-start">{{ value.ghi_chu || "---" }}</td>
                    <td class="text-nowrap text-center">
                      <button class="btn btn-info btn-sm me-1 shadow-sm text-white" data-bs-toggle="modal"
                        @click="openChiTiet(value)" data-bs-target="#chiTietModal">
                        <i class="fa fa-list"></i>
                      </button>
                      <button class="btn btn-warning btn-sm me-1 shadow-sm" data-bs-toggle="modal"
                        @click="openEdit(value)" data-bs-target="#editModal">
                        <i class="fa fa-edit"></i>
                      </button>
                      <button class="btn btn-danger btn-sm shadow-sm" data-bs-toggle="modal"
                        data-bs-target="#deleteModal"
                        @click="Object.assign(xoa_phieu_nhap, value)">
                        <i class="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 3. Modal Nhập Chi Tiết Sản Phẩm -->
  <div class="modal fade" id="chiTietModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title fw-bold">
            Chi Tiết Phiếu Nhập:
            <span class="text-primary italic">{{
              chi_tiet_meta.phieu_nhap?.ma_phieu || "---"
            }}</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row mb-3" v-if="chi_tiet_meta.phieu_nhap">
            <div class="col-md-3">
              <small class="text-muted">Kho</small>
              <div class="fw-bold">{{ chi_tiet_meta.kho?.ten || "---" }}</div>
            </div>
            <div class="col-md-3">
              <small class="text-muted">Nhà cung cấp</small>
              <div class="fw-bold">
                {{ chi_tiet_meta.nha_cung_cap?.ten || "---" }}
              </div>
            </div>
            <div class="col-md-3">
              <small class="text-muted">Nhân viên</small>
              <div class="fw-bold">
                {{ chi_tiet_meta.nhan_vien?.ten || "---" }}
              </div>
            </div>
            <div class="col-md-3">
              <small class="text-muted">Ngày nhập</small>
              <div class="fw-bold">
                {{ chi_tiet_meta.phieu_nhap.ngay_nhap || "---" }}
              </div>
            </div>
          </div>
          <div class="row">
            <!-- Bảng chi tiết -->
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-bordered align-middle">
                  <thead class="table-light text-center">
                    <tr>
                      <th>STT</th>
                      <th>Tên Sản Phẩm</th>
                      <th>ĐVT</th>
                      <th style="width: 120px">Số Lượng</th>
                      <th style="width: 150px">Đơn Giá</th>
                      <th>Thành Tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-if="is_loading_chi_tiet">
                      <td colspan="6" class="text-center text-muted py-3">
                        Đang tải chi tiết phiếu nhập...
                      </td>
                    </tr>
                    <tr v-else-if="chi_tiet_list.length === 0">
                      <td colspan="6" class="text-center text-muted py-3">
                        Chưa có sản phẩm trong phiếu nhập này
                      </td>
                    </tr>
                    <tr v-else class="text-center" v-for="(detail, idx) in chi_tiet_list" :key="detail.id || idx">
                      <td>{{ idx + 1 }}</td>
                      <td class="text-start">
                        {{
                          detail.san_pham?.ten_san_pham ||
                          detail.san_pham_ten ||
                          "---"
                        }}
                      </td>
                      <td>{{ detail.san_pham?.don_vi_tinh || "---" }}</td>
                      <td>{{ detail.so_luong || 0 }}</td>
                      <td class="text-end">
                        {{ formatCurrency(detail.don_gia || 0) }}
                      </td>
                      <td class="text-end fw-bold">
                        {{ formatCurrency(detail.thanh_tien || 0) }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer bg-light d-flex justify-content-between">
          <h5 class="mb-0 fw-bold">
            Tổng Cộng:
            <span class="text-danger">{{
              formatCurrency(chi_tiet_meta.phieu_nhap?.tong_tien_hang || 0)
            }}</span>
          </h5>
          <button type="button" class="btn btn-primary px-4 shadow-sm" data-bs-dismiss="modal">
            Xác Nhận
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 4. Modal Cập Nhật Header -->
  <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title fw-bold">Cập Nhật Phiếu Nhập</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="form-label fw-bold">Mã Phiếu Nhập</label>
                <input v-model="edit_phieu_nhap.ma_phieu" type="text" class="form-control" />
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label fw-bold">Nhà Cung Cấp</label>
                <select v-model="edit_phieu_nhap.id_nha_cung_cap" class="form-select">
                  <option value="">Chọn nhà cung cấp...</option>
                  <option
                    v-for="item in list_nha_cung_cap"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.ten }}
                  </option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label fw-bold">Kho Nhập</label>
                <select v-model="edit_phieu_nhap.id_kho" class="form-select">
                  <option value="">Chọn kho...</option>
                  <option
                    v-for="item in list_kho"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.ten }}
                  </option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label fw-bold">Nhân Viên</label>
                <select v-model="edit_phieu_nhap.id_nhan_vien" class="form-select">
                  <option value="">Chọn nhân viên...</option>
                  <option
                    v-for="item in list_nhan_vien"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.ten }}
                  </option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label fw-bold">Ngày Nhập</label>
                <input v-model="edit_phieu_nhap.ngay_nhap" type="date" class="form-control shadow-sm" />
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label fw-bold">Tình Trạng</label>
                <select v-model="edit_phieu_nhap.trang_thai" class="form-select">
                  <option value="1">Đã Nhập Kho</option>
                  <option value="0">Tạm Lưu</option>
                </select>
              </div>
              <div class="col-md-4 mb-3">
                <label class="form-label fw-bold">Chiết Khấu</label>
                <input v-model.number="edit_phieu_nhap.chiet_khau" type="number" min="0"
                  class="form-control shadow-sm" />
              </div>
              <div class="col-md-4 mb-3">
                <label class="form-label fw-bold">Thuế VAT</label>
                <input v-model.number="edit_phieu_nhap.thue_vat" type="number" min="0" class="form-control shadow-sm" />
              </div>
              <div class="col-md-4 mb-3">
                <label class="form-label fw-bold">Đã Thanh Toán</label>
                <input v-model.number="edit_phieu_nhap.da_thanh_toan" type="number" min="0"
                  class="form-control shadow-sm" />
              </div>
              <div class="col-md-12 mb-3">
                <label class="form-label fw-bold">Ghi Chú</label>
                <textarea v-model="edit_phieu_nhap.ghi_chu" class="form-control shadow-sm" rows="3"></textarea>
              </div>

              <div class="col-md-12">
                <div class="mb-2 d-flex justify-content-between align-items-center">
                  <label class="form-label fw-bold mb-0">Chi Tiết Sản Phẩm</label>
                  <button type="button" class="btn btn-sm btn-outline-primary" @click="addChiTietRow(edit_phieu_nhap)">
                    + Thêm dòng
                  </button>
                </div>
                <div class="table-responsive">
                  <table class="table table-sm table-bordered align-middle">
                    <thead class="table-light text-center">
                      <tr>
                        <th>Sản phẩm</th>
                        <th style="width: 90px">SL</th>
                        <th style="width: 120px">Đơn giá</th>
                        <th style="width: 120px">Thành tiền</th>
                        <th style="width: 60px">Xóa</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, idx) in edit_phieu_nhap.chi_tiet" :key="item.id || idx">
                        <td>
                          <select v-model="item.id_san_pham" class="form-select form-select-sm">
                            <option value="">Chọn SP...</option>
                            <option
                              v-for="sp in list_san_pham"
                              :key="sp.id"
                              :value="sp.id"
                            >
                              {{ sp.ten }}
                            </option>
                          </select>
                        </td>
                        <td>
                          <input v-model.number="item.so_luong" type="number" min="1"
                            class="form-control form-control-sm text-center" />
                        </td>
                        <td>
                          <input v-model.number="item.don_gia" type="number" min="0"
                            class="form-control form-control-sm text-end" />
                        </td>
                        <td class="text-end">
                          {{ formatCurrency(calculateThanhTien(item)) }}
                        </td>
                        <td class="text-center">
                          <button type="button" class="btn btn-sm btn-outline-danger"
                            @click="removeChiTietRow(edit_phieu_nhap, idx)">
                            <i class="fa fa-times"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary shadow-sm" data-bs-dismiss="modal">
            Đóng
          </button>
          <button type="button" class="btn btn-primary px-4 shadow-sm" @click="updatePhieuNhap()"
            data-bs-dismiss="modal">
            Cập Nhật
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 5. Modal Xóa -->
  <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title text-white">Xóa Phiếu Nhập</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center py-4">
          <i class="fa fa-exclamation-triangle text-warning mb-3" style="font-size: 3rem"></i>
          <h5 class="fw-bold fs-5">
            Bạn có chắc chắn muốn xóa phiếu nhập này?
          </h5>
          <p class="text-muted small">Hành động này không thể hoàn tác.</p>
        </div>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btn btn-secondary px-4 shadow-sm" data-bs-dismiss="modal">
            Hủy
          </button>
          <button @click="deletePhieuNhap()" type="button" class="btn btn-danger px-4 shadow-sm">
            Xác Nhận Xóa
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
      list_phieu_nhap: [],
      list_kho: [],
      list_nha_cung_cap: [],
      list_nhan_vien: [],
      list_san_pham: [],
      them_phieu_nhap: {
        ma_phieu: "",
        id_kho: "",
        id_nha_cung_cap: "",
        id_nhan_vien: "",
        ngay_nhap: "",
        chiet_khau: 0,
        thue_vat: 0,
        da_thanh_toan: 0,
        trang_thai: 1,
        ghi_chu: "",
        chi_tiet: [{ id_san_pham: "", so_luong: 1, don_gia: 0 }],
      },
      chi_tiet_meta: {
        phieu_nhap: null,
        kho: null,
        nha_cung_cap: null,
        nhan_vien: null,
      },
      chi_tiet_list: [],
      is_loading_chi_tiet: false,
      edit_phieu_nhap: {
        id: null,
        ma_phieu: "",
        id_kho: "",
        id_nha_cung_cap: "",
        id_nhan_vien: "",
        ngay_nhap: "",
        chiet_khau: 0,
        thue_vat: 0,
        da_thanh_toan: 0,
        trang_thai: 1,
        ghi_chu: "",
        chi_tiet: [{ id_san_pham: "", so_luong: 1, don_gia: 0 }],
      },
      xoa_phieu_nhap: {},
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
      axios
        .get("http://127.0.0.1:8000/api/admin/kho")
        .then((response) => {
          this.list_kho = (response.data.data || []).map((item) => ({
            id: item.id,
            ten: item.ten,
          }));
        })
        .catch((error) => {
          console.error("Lỗi khi tải danh sách Kho:", error);
          this.$toast?.error("Đã xảy ra lỗi khi tải danh sách Kho.");
        });
    },
    getNhaCungCap() {
      axios
        .get("http://127.0.0.1:8000/api/admin/nha-cung-cap")
        .then((response) => {
          this.list_nha_cung_cap = (response.data.data || []).map((item) => ({
            id: item.id,
            ten: item.ten,
          }));
        })
        .catch((error) => {
          console.error("Lỗi khi tải danh sách Nhà Cung Cấp:", error);
          this.$toast?.error("Đã xảy ra lỗi khi tải danh sách Nhà Cung Cấp.");
        });
    },
    getNhanVien() {
      axios
        .get("http://127.0.0.1:8000/api/admin/nhan-vien")
        .then((response) => {
          this.list_nhan_vien = (response.data.data || []).map((item) => ({
            id: item.id,
            ten: item.ho_va_ten || item.ten,
          }));
        })
        .catch((error) => {
          console.error("Lỗi khi tải danh sách Nhân Viên:", error);
          this.$toast?.error("Đã xảy ra lỗi khi tải danh sách Nhân Viên.");
        });
    },
    getSanPham() {
      axios
        .get("http://127.0.0.1:8000/api/admin/san-pham")
        .then((response) => {
          this.list_san_pham = (response.data.data || []).map((item) => ({
            id: item.id,
            ten: item.ten_san_pham || item.ten,
          }));
        })
        .catch((error) => {
          console.error("Lỗi khi tải danh sách Sản Phẩm:", error);
          this.$toast?.error("Đã xảy ra lỗi khi tải danh sách Sản Phẩm.");
        });
    },
    getPhieuNhap() {
      axios
        .get("http://127.0.0.1:8000/api/admin/phieu-nhap")
        .then((response) => {
          this.list_phieu_nhap = response.data.data || [];
        })
        .catch((error) => {
          console.error("Lỗi khi tải danh sách Phiếu Nhập:", error);
          this.$toast?.error("Đã xảy ra lỗi khi tải danh sách Phiếu Nhập.");
        });
    },
    calculateThanhTien(item) {
      const soLuong = Number(item?.so_luong) || 0;
      const donGia = Number(item?.don_gia) || 0;
      return soLuong * donGia;
    },
    addPhieuNhap() {
      const payload = {
        id_kho: this.them_phieu_nhap.id_kho,
        id_nha_cung_cap: this.them_phieu_nhap.id_nha_cung_cap,
        id_nhan_vien: this.them_phieu_nhap.id_nhan_vien,
        ma_phieu: this.them_phieu_nhap.ma_phieu,
        ngay_nhap: this.them_phieu_nhap.ngay_nhap,
        chiet_khau: Number(this.them_phieu_nhap.chiet_khau) || 0,
        thue_vat: Number(this.them_phieu_nhap.thue_vat) || 0,
        da_thanh_toan: Number(this.them_phieu_nhap.da_thanh_toan) || 0,
        trang_thai: Number(this.them_phieu_nhap.trang_thai) === 0 ? 0 : 1,
        ghi_chu: this.them_phieu_nhap.ghi_chu || null,
        chi_tiet: (this.them_phieu_nhap.chi_tiet || []).map((item) => ({
          id_san_pham: item.id_san_pham,
          id_lo_hang: item.id_lo_hang || null,
          so_luong: Number(item.so_luong) || 0,
          don_gia: Number(item.don_gia) || 0,
          chiet_khau: Number(item.chiet_khau) || 0,
          thue_vat: Number(item.thue_vat) || 0,
          ghi_chu: item.ghi_chu || null,
        })),
      };

      axios
        .post("http://127.0.0.1:8000/api/admin/phieu-nhap/create", payload)
        .then((response) => {
          this.$toast?.success(
            response.data.message || "Thêm phiếu nhập thành công",
          );
          this.getPhieuNhap();
          this.them_phieu_nhap = {
            ma_phieu: "",
            id_kho: "",
            id_nha_cung_cap: "",
            id_nhan_vien: "",
            ngay_nhap: "",
            chiet_khau: 0,
            thue_vat: 0,
            da_thanh_toan: 0,
            trang_thai: 1,
            ghi_chu: "",
            chi_tiet: [{ id_san_pham: "", so_luong: 1, don_gia: 0 }],
          };
        })
        .catch((error) => {
          console.error("Lỗi khi thêm phiếu nhập:", error);
          if (
            error.response &&
            error.response.data &&
            error.response.data.errors
          ) {
            const errors = error.response.data.errors;
            const items = Object.values(errors)
              .flat()
              .map((msg) => `<li>${msg}</li>`)
              .join("");
            const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
            this.$toast?.error(messages);
          } else {
            this.$toast?.error("Đã xảy ra lỗi khi thêm phiếu nhập.");
          }
        });
    },
    openEdit(item) {
      if (!item?.id) {
        return;
      }

      axios
        .get(`http://127.0.0.1:8000/api/admin/phieu-nhap/${item.id}`)
        .then((response) => {
          const data = response.data.data || {};
          const header = data.phieu_nhap || {};
          const details = data.chi_tiet || [];

          this.edit_phieu_nhap = {
            id: header.id || item.id,
            ma_phieu: header.ma_phieu || "",
            id_kho: header.id_kho || "",
            id_nha_cung_cap: header.id_nha_cung_cap || "",
            id_nhan_vien: header.id_nhan_vien || "",
            ngay_nhap: (header.ngay_nhap || "").toString().slice(0, 10),
            chiet_khau: Number(header.chiet_khau) || 0,
            thue_vat: Number(header.thue_vat) || 0,
            da_thanh_toan: Number(header.da_thanh_toan) || 0,
            trang_thai: Number(header.trang_thai) === 0 ? 0 : 1,
            ghi_chu: header.ghi_chu || "",
            chi_tiet:
              details.length > 0
                ? details.map((d) => ({
                  id: d.id,
                  id_san_pham: d.id_san_pham || d.san_pham_id || "",
                  id_lo_hang: d.id_lo_hang || null,
                  so_luong: Number(d.so_luong) || 1,
                  don_gia: Number(d.don_gia) || 0,
                  chiet_khau: Number(d.chiet_khau) || 0,
                  thue_vat: Number(d.thue_vat) || 0,
                  ghi_chu: d.ghi_chu || null,
                }))
                : [{ id_san_pham: "", so_luong: 1, don_gia: 0 }],
          };
        })
        .catch((error) => {
          console.error("Lỗi khi tải dữ liệu cập nhật phiếu nhập:", error);
          this.$toast?.error("Không tải được dữ liệu phiếu nhập để cập nhật.");
        });
    },
    updatePhieuNhap() {
      if (!this.edit_phieu_nhap.id) {
        this.$toast?.error("Không tìm thấy ID phiếu nhập.");
        return;
      }

      const payload = {
        id_kho: this.edit_phieu_nhap.id_kho,
        id_nha_cung_cap: this.edit_phieu_nhap.id_nha_cung_cap,
        id_nhan_vien: this.edit_phieu_nhap.id_nhan_vien,
        ma_phieu: this.edit_phieu_nhap.ma_phieu,
        ngay_nhap: this.edit_phieu_nhap.ngay_nhap,
        chiet_khau: Number(this.edit_phieu_nhap.chiet_khau) || 0,
        thue_vat: Number(this.edit_phieu_nhap.thue_vat) || 0,
        da_thanh_toan: Number(this.edit_phieu_nhap.da_thanh_toan) || 0,
        trang_thai: Number(this.edit_phieu_nhap.trang_thai) === 0 ? 0 : 1,
        ghi_chu: this.edit_phieu_nhap.ghi_chu || null,
        chi_tiet: (this.edit_phieu_nhap.chi_tiet || []).map((item) => ({
          id_san_pham: item.id_san_pham,
          id_lo_hang: item.id_lo_hang || null,
          so_luong: Number(item.so_luong) || 0,
          don_gia: Number(item.don_gia) || 0,
          chiet_khau: Number(item.chiet_khau) || 0,
          thue_vat: Number(item.thue_vat) || 0,
          ghi_chu: item.ghi_chu || null,
        })),
      };

      axios
        .put(
          `http://127.0.0.1:8000/api/admin/phieu-nhap/update/${this.edit_phieu_nhap.id}`,
          payload,
        )
        .then((response) => {
          this.$toast?.success(
            response.data.message || "Cập nhật phiếu nhập thành công",
          );
          this.getPhieuNhap();
        })
        .catch((error) => {
          console.error("Lỗi khi cập nhật phiếu nhập:", error);
          if (
            error.response &&
            error.response.data &&
            error.response.data.errors
          ) {
            const errors = error.response.data.errors;
            const items = Object.values(errors)
              .flat()
              .map((msg) => `<li>${msg}</li>`)
              .join("");
            const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
            this.$toast?.error(messages);
          } else {
            this.$toast?.error("Đã xảy ra lỗi khi cập nhật phiếu nhập.");
          }
        });
    },
    formatCurrency(value) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(Number(value) || 0);
    },
    deletePhieuNhap() {
      axios
        .delete(
          `http://127.0.0.1:8000/api/admin/phieu-nhap/delete/${this.xoa_phieu_nhap.id}`,
        )
        .then((response) => {
          this.$toast?.success(
            response.data.message || "Xóa phiếu nhập thành công",
          );
          this.getPhieuNhap();
        })
        .catch((error) => {
          console.error("Lỗi khi xóa phiếu nhập:", error);
          if (
            error.response &&
            error.response.data &&
            error.response.data.errors
          ) {
            const errors = error.response.data.errors;
            const items = Object.values(errors)
              .flat()
              .map((msg) => `<li>${msg}</li>`)
              .join("");
            const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
            this.$toast?.error(messages);
          } else {
            this.$toast?.error("Đã xảy ra lỗi khi xóa phiếu nhập.");
          }
        });
    },
  },
};
</script>

<style scoped></style>
