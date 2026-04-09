<template>
  <div class="row">
    <div class="col-lg-4">
      <div class="card border-top border-0 border-4 border-primary mt-2">
        <div class="card-header">
          <h5 class="card-title">Thêm Mới Tồn Kho</h5>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label class="form-label fw-bold">Kho</label>
            <select v-model="add_ton_kho.id_kho" class="form-select">
              <option value="">Chọn Kho</option>
              <option v-for="(value, index) in list_kho" :key="index" :value="value.id">
                {{ value.ten }}
              </option>
            </select>
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Sản Phẩm</label>
            <select v-model="add_ton_kho.id_san_pham" class="form-select">
              <option value="">Chọn Sản Phẩm</option>
              <option v-for="(value, index) in list_san_pham" :key="index" :value="value.id">
                {{ value.ten_san_pham }}
              </option>

            </select>
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Số Lượng</label>
            <input v-model="add_ton_kho.so_luong" type="number" class="form-control" placeholder="Nhập số lượng tồn" />
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Trạng Thái</label>
            <select v-model="add_ton_kho.trang_thai" class="form-select">
              <option value="0">Hiển thị</option>
              <option value="1">Tạm ẩn</option>
            </select>
          </div>
        </div>
        <div class="card-footer text-end">
          <button v-on:click="addTonKho()" class="btn btn-primary px-4">Thêm Mới</button>
        </div>
      </div>
    </div>
    <div class="col-lg-8">
      <div class="card border-top border-0 border-4 border-primary mt-2">
        <div class="card-header">
          <h5 class="card-title">Danh Sách Tồn Kho</h5>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered table-striped table-hover align-middle">
              <thead class="text-center text-nowrap">
                <tr>
                  <th>STT</th>
                  <th>Kho</th>
                  <th>Sản Phẩm</th>
                  <th>Số Lượng</th>
                  <th>Trạng Thái</th>
                  <th>Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(value, index) in list_ton_kho" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ value.ten_kho }}</td>
                  <td>{{ value.ten_san_pham }}</td>
                  <td class="text-center">{{ value.so_luong }}</td>
                  <td class="text-center">
                    <button v-on:click="changeStatus(value)" v-if="value.trang_thai == 1"
                      class="btn btn-success btn-sm w-100 shadow-sm">Hiển
                      thị</button>
                    <button v-on:click="changeStatus(value)" v-else class="btn btn-secondary btn-sm w-100 shadow-sm">Tạm
                      ẩn</button>
                  </td>
                  <td class="text-nowrap text-center">
                    <button v-on:click="Object.assign(edit_ton_kho, value)" class="btn btn-warning btn-sm me-1"
                      data-bs-toggle="modal" data-bs-target="#capNhatTonKhoModal">
                      <i class="bx bx-edit"></i> Cập Nhật
                    </button>
                    <button v-on:click="Object.assign(delete_ton_kho, value)" class="btn btn-danger btn-sm"
                      data-bs-toggle="modal" data-bs-target="#xoaTonKhoModal">
                      <i class="bx bx-trash"></i> Xóa
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

  <!-- Modal Cập Nhật Tồn Kho -->
  <div class="modal fade" id="capNhatTonKhoModal" tabindex="-1" aria-labelledby="capNhatTonKhoModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-warning">
          <h5 class="modal-title text-white" id="capNhatTonKhoModalLabel">Cập Nhật Tồn Kho</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label fw-bold">Kho</label>
            <select v-model="edit_ton_kho.id_kho" class="form-select">
              <option value="">Chọn Kho</option>
              <option v-for="(value, index) in list_kho" :key="index" :value="value.id">
                {{ value.ten }}
              </option>
            </select>
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Sản Phẩm</label>
            <select v-model="edit_ton_kho.id_san_pham" class="form-select">
              <option value="">Chọn Sản Phẩm</option>
              <option v-for="(value, index) in list_san_pham" :key="index" :value="value.id">
                {{ value.ten_san_pham }}
              </option>
            </select>
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Số Lượng</label>
            <input v-model="edit_ton_kho.so_luong" type="number" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Trạng Thái</label>
            <select v-model="edit_ton_kho.trang_thai" class="form-select">
              <option value="1">Hiển thị</option>
              <option value="0">Tạm ẩn</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary shadow-sm" data-bs-dismiss="modal">Đóng</button>
          <button v-on:click="editTonKho()" type="button" class="btn btn-warning shadow-sm" data-bs-dismiss="modal">Cập
            Nhật</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Xóa Tồn Kho -->
  <div class="modal fade" id="xoaTonKhoModal" tabindex="-1" aria-labelledby="xoaTonKhoModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title" id="xoaTonKhoModalLabel">Xác Nhận Xóa</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center py-4">
          <i class="fa fa-exclamation-triangle text-warning mb-3" style="font-size: 3rem;"></i>
          <h5 class="fw-bold fs-5">Bạn có chắc muốn xóa tồn kho này không?</h5>
          <p class="text-danger"><small>Hành động này không thể hoàn tác!</small></p>
        </div>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btn btn-secondary px-4 shadow-sm" data-bs-dismiss="modal">Hủy</button>
          <button v-on:click="deleteTonKho()" type="button" class="btn btn-danger px-4 shadow-sm"
            data-bs-dismiss="modal">Xác Nhận Xóa</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "TonKho",
  data() {
    return {
      list_kho: [],
      list_san_pham: [],
      list_ton_kho: [],
      add_ton_kho: {
        id_kho: "",
        id_san_pham: "",
        so_luong: "",
        trang_thai: 1,
      },
      edit_ton_kho: {
        id_kho: "",
        id_san_pham: "",
        so_luong: "",
        trang_thai: 1,
      },
      delete_ton_kho: {
        id_kho: "",
        id_san_pham: "",
        so_luong: "",
        trang_thai: 1,
      },


    };
  },
  created() {
    this.getKho();
    this.getSanPham();
    this.getTonKho();
  },
  methods: {
    getKho() {
      axios
        .get('http://127.0.0.1:8000/api/admin/kho')
        .then(response => {
          this.list_kho = response.data.data || [];
        })
        .catch(error => {
          console.error('Lỗi khi tải danh sách Kho:', error);
          this.$toast?.error('Đã xảy ra lỗi khi tải danh sách Kho.');
        });
    },
    getSanPham() {
      axios
        .get('http://127.0.0.1:8000/api/admin/san-pham')
        .then(response => {
          this.list_san_pham = response.data.data || [];

        })
        .catch(error => {
          console.error('Lỗi khi tải danh sách Sản Phẩm:', error);
          this.$toast?.error('Đã xảy ra lỗi khi tải danh sách Sản Phẩm.');
        });
    },
    getTonKho() {
      axios
        .get('http://127.0.0.1:8000/api/admin/ton-kho')
        .then(response => {
          this.list_ton_kho = response.data.data || [];

        })
        .catch(error => {
          console.error('Lỗi khi tải danh sách Tồn Kho:', error);
          this.$toast?.error('Đã xảy ra lỗi khi tải danh sách Tồn Kho.');
        });
    },
    addTonKho() {
      axios
        .post('http://127.0.0.1:8000/api/admin/ton-kho/create', this.add_ton_kho)
        .then(response => {
          this.$toast.success(response.data.message);
          this.getTonKho();
        })
        .catch(error => {
          console.error('Lỗi khi thêm mới Tồn Kho:', error);
          if (error.response && error.response.data && error.response.data.errors) {
            const errors = error.response.data.errors;
            const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
            const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
            this.$toast.error(messages);
          } else {
            this.$toast.error('Đã xảy ra lỗi khi thêm mới Tồn Kho.');
          }
        });
    },
    editTonKho() {
      axios
        .put('http://127.0.0.1:8000/api/admin/ton-kho/update', this.edit_ton_kho)
        .then(response => {
          this.$toast.success(response.data.message);
          this.getTonKho();
        })
        .catch(error => {
          console.error('Lỗi khi cập nhật Tồn Kho:', error);
          if (error.response && error.response.data && error.response.data.errors) {
            const errors = error.response.data.errors;
            const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
            const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
            this.$toast.error(messages);
          } else {
            this.$toast.error('Đã xảy ra lỗi khi cập nhật Tồn Kho.');
          }
        });
    },
    deleteTonKho() {
      axios
        .delete('http://127.0.0.1:8000/api/admin/ton-kho/delete/' + this.delete_ton_kho.id_kho)
        .then(response => {
          this.$toast.success(response.data.message);
          this.getTonKho();
        })
        .catch(error => {
          console.error('Lỗi khi xóa Tồn Kho:', error);
          if (error.response && error.response.data && error.response.data.errors) {
            const errors = error.response.data.errors;
            const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
            const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
            this.$toast.error(messages);
          } else {
            this.$toast.error('Đã xảy ra lỗi khi xóa Tồn Kho.');
          }
        });
    },
    changeStatus(item) {
      const new_trang_thai = item.trang_thai == 1 ? 0 : 1;
      axios
        .patch('http://127.0.0.1:8000/api/admin/ton-kho/change-status', {
          id: item.id,
          trang_thai: new_trang_thai
        })
        .then(response => {
          if (response.data.status == 1) {
            this.getTonKho();
            this.$toast.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
          } else {
            this.$toast.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
          }
        })
        .catch(error => {
          console.error('Lỗi khi thay đổi trạng thái Tồn Kho:', error);
          if (error.response && error.response.data && error.response.data.errors) {
            const errors = error.response.data.errors;
            const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
            const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
            this.$toast.error(messages);
          } else {
            this.$toast.error('Đã xảy ra lỗi khi thay đổi trạng thái Tồn Kho.');
          }
        });
    }

  }

};
</script>

<style></style>
