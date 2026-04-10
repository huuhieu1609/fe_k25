<template>
  <div class="row">
    <!-- Form Nhập Header -->
    <div class="col-lg-4">
      <div
        class="card border-top border-0 border-4 border-primary shadow-sm mt-2"
      >
        <div class="card-header">
          <h5 class="card-title mb-0">Gán Khuyến Mãi Cho Sản Phẩm</h5>
        </div>
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label class="form-label fw-bold">Khuyến Mãi</label>
              <select v-model="them_kmsp.id_khuyen_mai" class="form-select">
                <option value="">Chọn khuyến mãi...</option>
                <option
                  v-for="item in list_khuyen_mai"
                  :key="item.id"
                  :value="item.id"
                >
                  {{ item.ten }} ({{ item.ma_code }})
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Sản Phẩm</label>
              <select v-model="them_kmsp.id_san_pham" class="form-select">
                <option value="">Chọn sản phẩm...</option>
                <option
                  v-for="item in list_san_pham"
                  :key="item.id"
                  :value="item.id"
                >
                  {{ item.ten_san_pham }}
                </option>
              </select>
            </div>
          </form>
        </div>
        <div class="card-footer text-end">
          <button
            class="btn btn-primary px-4 shadow-sm"
            @click="themKhuyenMaiSanPham()"
          >
            Gán Khuyến Mãi
          </button>
        </div>
      </div>
    </div>

    <!-- Danh Sách (Phải) -->
    <div class="col-lg-8">
      <div
        class="card border-top border-0 border-4 border-primary shadow-sm mt-2"
      >
        <div class="card-header">
          <h5 class="card-title mb-0">Danh Sách Khuyến Mãi Sản Phẩm</h5>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered table-striped table-hover align-middle"
            >
              <thead class="text-center text-nowrap table-light">
                <tr>
                  <th>STT</th>
                  <th>Khuyến Mãi</th>
                  <th>Sản Phẩm</th>
                  <th>Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(value, index) in list_kmsp" :key="index">
                  <tr class="text-center">
                    <td>{{ index + 1 }}</td>
                    <td class="text-start">
                      {{ value.ten_khuyen_mai || "Không xác định" }}
                    </td>
                    <td class="text-start">
                      {{ value.ten_san_pham || "Không xác định" }}
                    </td>
                    <td class="text-nowrap text-center">
                      <button
                        class="btn btn-warning btn-sm me-1 shadow-sm"
                        data-bs-toggle="modal"
                        @click="edit_kmsp = Object.assign({}, value)"
                        data-bs-target="#editModal"
                      >
                        <i class="fa fa-edit"></i>
                      </button>
                      <button
                        class="btn btn-danger btn-sm shadow-sm"
                        data-bs-toggle="modal"
                        @click="xoa_kmsp = value"
                        data-bs-target="#deleteModal"
                      >
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

  <!-- Modal Cập Nhật -->
  <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title fw-bold">Cập Nhật Gán Khuyến Mãi</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label class="form-label fw-bold">Khuyến Mãi</label>
              <select v-model="edit_kmsp.id_khuyen_mai" class="form-select">
                <option value="">Chọn khuyến mãi...</option>
                <option
                  v-for="item in list_khuyen_mai"
                  :key="item.id"
                  :value="item.id"
                >
                  {{ item.ten }} ({{ item.ma_code }})
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label fw-bold">Sản Phẩm</label>
              <select v-model="edit_kmsp.id_san_pham" class="form-select">
                <option value="">Chọn sản phẩm...</option>
                <option
                  v-for="item in list_san_pham"
                  :key="item.id"
                  :value="item.id"
                >
                  {{ item.ten_san_pham }}
                </option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary shadow-sm"
            data-bs-dismiss="modal"
          >
            Đóng
          </button>
          <button
            type="button"
            class="btn btn-primary px-4 shadow-sm"
            @click="editKhuyenMaiSanPham()"
          >
            Cập Nhật
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Xóa -->
  <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title text-white">Xóa Gán Khuyến Mãi</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-center py-4">
          <i
            class="fa fa-exclamation-triangle text-warning mb-3"
            style="font-size: 3rem"
          ></i>
          <h5 class="fw-bold fs-5">Bạn có chắc chắn muốn xóa?</h5>
          <p class="text-muted small">Hành động này không thể hoàn tác.</p>
        </div>
        <div class="modal-footer justify-content-center">
          <button
            type="button"
            class="btn btn-secondary px-4 shadow-sm"
            data-bs-dismiss="modal"
          >
            Hủy
          </button>
          <button
            type="button"
            class="btn btn-danger px-4 shadow-sm"
            @click="xoaKhuyenMaiSanPham()"
          >
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
  name: "KhuyenMaiSanPhamManager",
  data() {
    return {
      list_kmsp: [],
      list_khuyen_mai: [],
      list_san_pham: [],
      them_kmsp: {
        id_khuyen_mai: "",
        id_san_pham: "",
      },
      edit_kmsp: {
        id: null,
        id_khuyen_mai: "",
        id_san_pham: "",
      },
      xoa_kmsp: {},
    };
  },
  created() {
    this.getKhuyenMai();
    this.getSanPham();
    this.getKhuyenMaiSanPham();
  },
  methods: {
    getKhuyenMai() {
      axios
        .get("http://127.0.0.1:8000/api/admin/khuyen-mai")
        .then((response) => {
          this.list_khuyen_mai = response.data.data;
        })
        .catch((error) => {
          console.error("Lỗi:", error);
          this.$toast?.error("Lỗi khi tải danh sách Khuyến Mãi.");
        });
    },
    getSanPham() {
      axios
        .get("http://127.0.0.1:8000/api/admin/san-pham")
        .then((response) => {
          this.list_san_pham = response.data.data;
        })
        .catch((error) => {
          console.error("Lỗi:", error);
          this.$toast?.error("Lỗi khi tải danh sách Sản Phẩm.");
        });
    },
    getKhuyenMaiSanPham() {
      axios
        .get("http://127.0.0.1:8000/api/admin/khuyen-mai-san-pham")
        .then((response) => {
          this.list_kmsp = response.data.data;
        })
        .catch((error) => {
          console.error("Lỗi:", error);
          this.$toast?.error("Lỗi khi tải danh sách KM SP.");
        });
    },
    themKhuyenMaiSanPham() {
      axios
        .post(
          "http://127.0.0.1:8000/api/admin/khuyen-mai-san-pham/create",
          this.them_kmsp,
        )
        .then((response) => {
          if (response.data.status == 1) {
            this.$toast?.success(
              `<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`,
            );
            this.getKhuyenMaiSanPham();
            this.them_kmsp = { id_khuyen_mai: "", id_san_pham: "" };
          } else {
            this.$toast?.error(
              `<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`,
            );
          }
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.data &&
            error.response.data.errors
          ) {
            const items = Object.values(error.response.data.errors)
              .flat()
              .map((msg) => `<li>${msg}</li>`)
              .join("");
            this.$toast?.error(
              `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`,
            );
          } else {
            this.$toast?.error("Có lỗi xảy ra!");
          }
        });
    },
    editKhuyenMaiSanPham() {
      axios
        .put(
          "http://127.0.0.1:8000/api/admin/khuyen-mai-san-pham/update",
          this.edit_kmsp,
        )
        .then((response) => {
          if (response.data.status == 1) {
            this.$toast?.success(
              `<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`,
            );
            this.getKhuyenMaiSanPham();
            const modal = document.querySelector("#editModal .btn-close");
            modal && modal.click();
          } else {
            this.$toast?.error(
              `<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`,
            );
          }
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.data &&
            error.response.data.errors
          ) {
            const items = Object.values(error.response.data.errors)
              .flat()
              .map((msg) => `<li>${msg}</li>`)
              .join("");
            this.$toast?.error(
              `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`,
            );
          } else {
            this.$toast?.error("Có lỗi xảy ra!");
          }
        });
    },
    xoaKhuyenMaiSanPham() {
      axios
        .delete(
          `http://127.0.0.1:8000/api/admin/khuyen-mai-san-pham/delete/${this.xoa_kmsp.id}`,
        )
        .then((response) => {
          if (response.data.status == 1) {
            this.$toast?.success(
              `<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`,
            );
            this.getKhuyenMaiSanPham();
            const modal = document.querySelector("#deleteModal .btn-close");
            modal && modal.click();
          } else {
            this.$toast?.error(
              `<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`,
            );
          }
        })
        .catch((error) => {
          console.error(error);
          this.$toast?.error("Có lỗi xảy ra khi xóa.");
        });
    },
  },
};
</script>

<style scoped></style>
