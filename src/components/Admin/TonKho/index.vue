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
            <select class="form-select">
              <option value="">Chọn Kho</option>
              <option value="1">Kho Tổng Biên Hòa</option>
              <option value="2">Kho Chi Nhánh Tân Bình</option>
            </select>
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Sản Phẩm</label>
            <select class="form-select">
              <option value="">Chọn Sản Phẩm</option>
              <option value="1">Laptop Dell XPS 15</option>
              <option value="2">Bàn phím cơ Keychron K8</option>
            </select>
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Số Lượng</label>
            <input type="number" class="form-control" placeholder="Nhập số lượng tồn" />
          </div>
        </div>
        <div class="card-footer text-end">
          <button class="btn btn-primary px-4">Thêm Mới</button>
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
                  <th>Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center" v-for="(item, index) in listTonKho" :key="item.id">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.ten_kho }}</td>
                  <td>{{ item.ten_sp }}</td>
                  <td class="text-center fw-bold">{{ item.so_luong }}</td>
                  <td class="text-nowrap">
                    <button class="btn btn-warning btn-sm me-1" data-bs-toggle="modal" data-bs-target="#capNhatTonKhoModal" @click="chonCapNhat(item)">
                      <i class="bx bx-edit"></i> Cập Nhật
                    </button>
                    <button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#xoaTonKhoModal" @click="chonXoa(item)">
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
  <div class="modal fade" id="capNhatTonKhoModal" tabindex="-1" aria-labelledby="capNhatTonKhoModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="capNhatTonKhoModalLabel">Cập Nhật Tồn Kho</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label fw-bold">Kho</label>
            <input type="text" class="form-control" v-model="tonKhoCapNhat.ten_kho" disabled />
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Sản Phẩm</label>
            <input type="text" class="form-control" v-model="tonKhoCapNhat.ten_sp" disabled />
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Số Lượng</label>
            <input type="number" class="form-control" v-model="tonKhoCapNhat.so_luong" />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="xacNhanCapNhat">Cập Nhật</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Xóa Tồn Kho -->
  <div class="modal fade" id="xoaTonKhoModal" tabindex="-1" aria-labelledby="xoaTonKhoModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-danger" id="xoaTonKhoModalLabel">Xác Nhận Xóa</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Bạn có chắc muốn xóa tồn kho của sản phẩm <strong>{{ tonKhoXoa.ten_sp }}</strong> trong kho <strong>{{ tonKhoXoa.ten_kho }}</strong> không?</p>
          <p class="text-danger"><small>Hành động này không thể hoàn tác!</small></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="xacNhanXoa">Xóa Phăng</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listTonKho: [
        { id: 1, ten_kho: "Kho Tổng Biên Hòa", ten_sp: "Laptop Dell XPS 15", so_luong: 45 },
        { id: 2, ten_kho: "Kho Tổng Biên Hòa", ten_sp: "Bàn phím cơ Keychron K8", so_luong: 120 },
        { id: 3, ten_kho: "Kho Chi Nhánh Tân Bình", ten_sp: "Màn hình Dell Ultrasharp 27 inch", so_luong: 30 },
        { id: 4, ten_kho: "Kho Vật Tư Bình Dương", ten_sp: "Thùng Carton 5 lớp", so_luong: 5000 },
      ],
      tonKhoCapNhat: { ten_kho: "", ten_sp: "", so_luong: 0 },
      tonKhoXoa: {}
    };
  },
  methods: {
    chonCapNhat(item) {
      this.tonKhoCapNhat = { ...item };
    },
    chonXoa(item) {
      this.tonKhoXoa = item;
    },
    xacNhanCapNhat() {
      const index = this.listTonKho.findIndex(t => t.id === this.tonKhoCapNhat.id);
      if (index !== -1) {
        this.listTonKho.splice(index, 1, this.tonKhoCapNhat);
        alert("Đã cập nhật tồn kho!");
      }
    },
    xacNhanXoa() {
      this.listTonKho = this.listTonKho.filter(t => t.id !== this.tonKhoXoa.id);
      alert("Đã xóa tồn kho thành công!");
    }
  }
};
</script>

<style></style>
