<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card border-top border-0 border-4 border-primary">
        <div class="card-header">
          <div class="row">
            <div class="col-lg-6">
              <h3>Danh sách Nhân viên</h3>
            </div>
            <div class="col-lg-6 text-end">
              <button
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#addModal"
              >
                <i class="fa fa-plus"></i>Thêm mới
              </button>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered table-striped table-hover">
              <thead>
                <tr class="text-center">
                  <th>STT</th>
                  <th>Họ và tên</th>
                  <th>Số điện thoại</th>
                  <th>Email</th>
                  <th>Địa chỉ</th>
                  <th>Ngày sinh</th>
                  <th>Giới tính</th>
                  <th>Tình trạng</th>
                  <th>Chức vụ</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(value, index) in list_nhan_vien" :key="index">
                  <tr class="text-center align-middle">
                    <td>{{ index + 1 }}</td>
                    <td class="text-start">{{ value.ho_va_ten }}</td>
                    <td>{{ value.so_dien_thoai }}</td>
                    <td class="text-start">{{ value.email }}</td>
                    <td>{{ value.dia_chi }}</td>
                    <td>{{ value.ngay_sinh }}</td>
                    <td>
                      {{
                        value.gioi_tinh == 1
                          ? "Nam"
                          : value.gioi_tinh == 0
                            ? "Nữ"
                            : "Khác"
                      }}
                    </td>
                    <td>
                      <button
                        v-if="value.tinh_trang == 1"
                        v-on:click="changeStatus(value)"
                        class="btn btn-success btn-sm w-100"
                      >
                        Đang làm việc
                      </button>
                      <button
                        v-else
                        v-on:click="changeStatus(value)"
                        class="btn btn-danger btn-sm w-100"
                      >
                        Đã nghỉ việc
                      </button>
                    </td>
                    <td>{{ value.ten_chuc_vu }}</td>
                    <td>
                      <button
                        v-on:click="Object.assign(edit_Nhan_Vien, value)"
                        class="btn btn-warning me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#editModal"
                      >
                        <i class="fa fa-edit"></i>Cập Nhật
                      </button>
                      <button
                        v-on:click="Object.assign(delete_Nhan_Vien, value)"
                        class="btn btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteModal"
                      >
                        <i class="fa fa-trash"></i>Xóa
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
  <!-- Add Modal -->
  <div class="modal fade" id="addModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Thêm mới Nhân viên</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="ho_va_ten" class="form-label">Họ và tên</label>
                  <input
                    v-model="them_Nhan_Vien.ho_va_ten"
                    type="text"
                    class="form-control"
                    placeholder="nhập họ và tên"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="so_dien_thoai" class="form-label"
                    >Số điện thoại</label
                  >
                  <input
                    v-model="them_Nhan_Vien.so_dien_thoai"
                    type="text"
                    class="form-control"
                    placeholder="nhập số điện thoại"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    v-model="them_Nhan_Vien.email"
                    type="text"
                    class="form-control"
                    placeholder="nhập email"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="password" class="form-label">Mật khẩu</label>
                  <input
                    v-model="them_Nhan_Vien.password"
                    type="password"
                    class="form-control"
                    placeholder="nhập mật khẩu"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="ngay_sinh" class="form-label">Ngày sinh</label>
                  <input
                    v-model="them_Nhan_Vien.ngay_sinh"
                    type="date"
                    class="form-control"
                    placeholder="nhập ngày sinh"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="gioi_tinh" class="form-label">Giới tính</label>
                  <select
                    v-model="them_Nhan_Vien.gioi_tinh"
                    class="form-select"
                  >
                    <option value="1">Nam</option>
                    <option value="0">Nữ</option>
                    <option value="2">Khác</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="dia_chi" class="form-label">Địa chỉ</label>
                  <input
                    v-model="them_Nhan_Vien.dia_chi"
                    type="text"
                    class="form-control"
                    placeholder="nhập địa chỉ"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="id_chuc_vu" class="form-label">Chức vụ</label>
                  <select
                    v-model="them_Nhan_Vien.id_chuc_vu"
                    class="form-select"
                  >
                    <option
                      v-for="item in list_chuc_vu"
                      :key="item.id"
                      :value="item.id"
                    >
                      {{ item.ten_chuc_vu }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="mb-3">
                <label for="tinh_trang" class="form-label">Tình trạng</label>
                <select v-model="them_Nhan_Vien.tinh_trang" class="form-select">
                  <option value="1">Đang làm việc</option>
                  <option value="0">Đã nghỉ việc</option>
                </select>
              </div>
            </div>
          </form>
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
            @click="addNhanVien()"
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Thêm Nhân Viên
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Edit Modal -->
  <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Cập Nhật Nhân viên</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="ho_va_ten" class="form-label">Họ và tên</label>
                  <input
                    v-model="edit_Nhan_Vien.ho_va_ten"
                    type="text"
                    class="form-control"
                    placeholder="nhập họ và tên"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="so_dien_thoai" class="form-label"
                    >Số điện thoại</label
                  >
                  <input
                    v-model="edit_Nhan_Vien.so_dien_thoai"
                    type="text"
                    class="form-control"
                    placeholder="nhập số điện thoại"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    v-model="edit_Nhan_Vien.email"
                    type="text"
                    class="form-control"
                    placeholder="nhập email"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="tinh_trang" class="form-label">Tình trạng</label>
                  <select
                    v-model="edit_Nhan_Vien.tinh_trang"
                    class="form-select"
                  >
                    <option value="1">Đang làm việc</option>
                    <option value="0">Đã nghỉ việc</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="ngay_sinh" class="form-label">Ngày sinh</label>
                  <input
                    v-model="edit_Nhan_Vien.ngay_sinh"
                    type="date"
                    class="form-control"
                    placeholder="nhập ngày sinh"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="gioi_tinh" class="form-label">Giới tính</label>
                  <select
                    v-model="edit_Nhan_Vien.gioi_tinh"
                    class="form-select"
                  >
                    <option value="1">Nam</option>
                    <option value="0">Nữ</option>
                    <option value="2">Khác</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="dia_chi" class="form-label">Địa chỉ</label>
                  <input
                    v-model="edit_Nhan_Vien.dia_chi"
                    type="text"
                    class="form-control"
                    placeholder="nhập địa chỉ"
                  />
                </div>
              </div>

              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="id_chuc_vu" class="form-label">Chức vụ</label>
                  <select
                    v-model="edit_Nhan_Vien.id_chuc_vu"
                    class="form-select"
                  >
                    <option
                      v-for="item in list_chuc_vu"
                      :key="item.id"
                      :value="item.id"
                    >
                      {{ item.ten_chuc_vu }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </form>
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
            v-on:click="updateNhanVien()"
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Cập Nhật Nhân Viên
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Delete Modal -->
  <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title text-white">Xóa Nhân viên</h5>
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
          <h5 class="fw-bold">
            Bạn có chắc chắn muốn xóa Nhân viên
            {{ delete_Nhan_Vien.ho_va_ten }} này?
          </h5>
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
            v-on:click="deleteNhanVien()"
            type="button"
            data-bs-dismiss="modal"
            class="btn btn-danger px-4 shadow-sm"
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
  data() {
    return {
      list_chuc_vu: [],
      list_nhan_vien: [],
      them_Nhan_Vien: {
        ho_va_ten: "",
        so_dien_thoai: "",
        email: "",
        dia_chi: "",
        ngay_sinh: "",
        gioi_tinh: "",
        tinh_trang: "",
        id_chuc_vu: "",
        password: "",
      },
      edit_Nhan_Vien: {
        ho_va_ten: "",
        so_dien_thoai: "",
        email: "",
        dia_chi: "",
        ngay_sinh: "",
        gioi_tinh: "",
        tinh_trang: "",
        id_chuc_vu: "",
        password: "",
      },
      delete_Nhan_Vien: {
        id: "",
        ho_va_ten: "",
      },
    };
  },
  created() {
    this.getChucVu();
    this.getNhanVien();
  },
  methods: {
    getChucVu() {
      // Gọi API để lấy danh sách Chức Vụ
      axios
        .get("http://127.0.0.1:8000/api/admin/chuc-vu")
        .then((response) => {
          this.list_chuc_vu = response.data.data;
        })
        .catch((error) => {
          console.error("Lỗi khi thêm mới Chức Vụ:", error);
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
            this.$toast.error(messages);
          } else {
            this.$toast.error("Đã xảy ra lỗi khi thêm mới Chức Vụ.");
          }
        });
    },
    getNhanVien() {
      // Gọi API để lấy danh sách Nhân Viên
      axios
        .get("http://127.0.0.1:8000/api/admin/nhan-vien")
        .then((response) => {
          this.list_nhan_vien = response.data.data;
          this.$toast.success(
            `<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`,
          );
        })
        .catch((error) => {
          console.error("Lỗi khi thêm mới Nhân Viên:", error);
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
            this.$toast.error(messages);
          } else {
            this.$toast.error("Đã xảy ra lỗi khi thêm mới Nhân Viên.");
          }
        });
    },
    addNhanVien() {
      // Gọi API để thêm mới Nhân Viên
      axios
        .post(
          "http://127.0.0.1:8000/api/admin/nhan-vien/create",
          this.them_Nhan_Vien,
        )
        .then((response) => {
          this.$toast.success("Thêm mới Nhân Viên thành công!");
          this.getNhanVien();
        })
        .catch((error) => {
          console.error("Lỗi khi thêm mới Nhân Viên:", error);
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
            this.$toast.error(messages);
          } else {
            this.$toast.error("Đã xảy ra lỗi khi thêm mới Nhân Viên.");
          }
        });
    },
    updateNhanVien() {
      axios
        .put(
          "http://127.0.0.1:8000/api/admin/nhan-vien/update",
          this.edit_Nhan_Vien,
        )
        .then((response) => {
          this.$toast.success("Cập Nhật Nhân Viên thành công!");
          this.getNhanVien();
        })
        .catch((error) => {
          console.error("Lỗi khi Cập Nhật Nhân Viên:", error);
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
            this.$toast.error(messages);
          } else {
            this.$toast.error("Đã xảy ra lỗi khi Cập Nhật Nhân Viên.");
          }
        });
    },
    deleteNhanVien() {
      axios
        .delete(
          "http://127.0.0.1:8000/api/admin/nhan-vien/delete/" +
            this.delete_Nhan_Vien.id,
        )
        .then((response) => {
          this.$toast.success("Xóa Nhân Viên thành công!");
          this.getNhanVien();
        })
        .catch((error) => {
          console.error("Lỗi khi Xóa Nhân Viên:", error);
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
            this.$toast.error(messages);
          } else {
            this.$toast.error("Đã xảy ra lỗi khi Xóa Nhân Viên.");
          }
        });
    },
    changeStatus(item) {
      const new_tinh_trang = item.tinh_trang == 1 ? 0 : 1;
      axios
        .patch("http://127.0.0.1:8000/api/admin/nhan-vien/change-status", {
          id: item.id,
          tinh_trang: new_tinh_trang,
        })
        .then((response) => {
          if (response.data.status == 1) {
            this.getNhanVien();
            this.$toast.success(
              `<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`,
            );
          } else {
            this.$toast.error(
              `<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`,
            );
          }
        })
        .catch((error) => {
          console.error("Lỗi khi thay đổi trạng thái Nhân Viên:", error);
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
            this.$toast.error(messages);
          } else {
            this.$toast.error(
              "Đã xảy ra lỗi khi thay đổi trạng thái Nhân Viên.",
            );
          }
        });
    },
  },
};
</script>
<style></style>
