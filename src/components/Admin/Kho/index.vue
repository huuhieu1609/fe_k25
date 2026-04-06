<template>
  <div class="row">
    <div class="col-lg-4">
      <div class="card border-top border-0 border-4 border-primary mt-2">
        <div class="card-header">
          <h5 class="card-title">Thêm Mới Kho</h5>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label class="form-label fw-bold">Tên Kho</label>
            <input
              type="text"
              class="form-control"
              placeholder="Nhập tên kho"
            />
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Ghi Chú</label>
            <textarea
              class="form-control"
              rows="3"
              placeholder="Nhập ghi chú"
            ></textarea>
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
          <h5 class="card-title">Danh Sách Kho</h5>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered table-striped table-hover align-middle"
            >
              <thead class="text-center text-nowrap">
                <tr>
                  <th>STT</th>
                  <th>Tên Kho</th>
                  <th>Ghi Chú</th>
                  <th>Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="text-center"
                  v-for="(k, index) in listKho"
                  :key="index"
                >
                  <td>{{ index + 1 }}</td>
                  <td>{{ k.ten_kho }}</td>
                  <td>{{ k.ghi_chu }}</td>
                  <td class="text-nowrap">
                    <button
                      class="btn btn-info btn-sm me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#chiTietTonKhoModal"
                      @click="xemTonKho(k)"
                    >
                      <i class="bx bx-list-ol"></i> Xem Tồn Kho
                    </button>
                    <button
                      class="btn btn-warning btn-sm me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#capNhatModal"
                      @click="chonKhoCapNhat(k)"
                    >
                      <i class="bx bx-edit"></i> Cập Nhật
                    </button>
                    <button
                      class="btn btn-danger btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#xoaModal"
                      @click="chonKhoXoa(k)"
                    >
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

  <!-- Modal Chi Tiết Tồn Kho -->
  <div
    class="modal fade"
    id="chiTietTonKhoModal"
    tabindex="-1"
    aria-labelledby="chiTietTonKhoModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="chiTietTonKhoModalLabel">
            Chi Tiết Tồn Kho: {{ khoDangXem.ten_kho }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="table-responsive">
            <table
              class="table table-bordered table-striped table-hover align-middle"
            >
              <thead class="text-center text-nowrap">
                <tr>
                  <th>STT</th>
                  <th>Mã Sản Phẩm</th>
                  <th>Tên Sản Phẩm</th>
                  <th>Số Lượng Tồn</th>
                  <th>Đơn Vị Tính</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="text-center"
                  v-for="(sp, index) in listTonKhoChiTiet"
                  :key="index"
                >
                  <td>{{ index + 1 }}</td>
                  <td>{{ sp.ma_sp }}</td>
                  <td>{{ sp.ten_sp }}</td>
                  <td class="text-end fw-bold text-success">
                    {{ sp.so_luong }}
                  </td>
                  <td>{{ sp.dvt }}</td>
                </tr>
                <tr v-if="listTonKhoChiTiet.length === 0">
                  <td colspan="5" class="text-center text-muted">
                    Kho này hiện chưa có sản phẩm nào.
                  </td>
                </tr>
              </tbody>
            </table>
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
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Cập Nhật Kho -->
  <div
    class="modal fade"
    id="capNhatModal"
    tabindex="-1"
    aria-labelledby="capNhatModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="capNhatModalLabel">
            Cập Nhật Thông Tin Kho
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label fw-bold">Tên Kho</label>
            <input
              type="text"
              class="form-control"
              v-model="khoCapNhat.ten_kho"
              placeholder="Nhập tên kho"
            />
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Ghi Chú</label>
            <textarea
              class="form-control"
              rows="3"
              v-model="khoCapNhat.ghi_chu"
              placeholder="Nhập ghi chú"
            ></textarea>
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
            data-bs-dismiss="modal"
            @click="xacNhanCapNhat"
          >
            Cập Nhật
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Xóa Kho -->
  <div
    class="modal fade"
    id="xoaModal"
    tabindex="-1"
    aria-labelledby="xoaModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-danger" id="xoaModalLabel">
            Xác Nhận Xóa Kho
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>
            Bạn có chắc chắn muốn xóa kho
            <strong>{{ khoXoa.ten_kho }}</strong> này không?
          </p>
          <p class="text-danger">
            <small
              >Lưu ý: Hành động này không thể hoàn tác và có thể ảnh hưởng đến
              dữ liệu tồn kho!</small
            >
          </p>
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
            data-bs-dismiss="modal"
            @click="xacNhanXoa"
          >
            Xóa Kho
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listKho: [
        {
          id: 1,
          ten_kho: "Kho Tổng Biên Hòa",
          ghi_chu: "Kho trung tâm phân phối chính",
        },
        {
          id: 2,
          ten_kho: "Kho Chi Nhánh Tân Bình",
          ghi_chu: "Kho lưu trữ hàng điện tử",
        },
        {
          id: 3,
          ten_kho: "Kho Vật Tư Bình Dương",
          ghi_chu: "Chứa vật tư đóng gói nguyên liệu",
        },
      ],
      listTonKho: [
        {
          id_kho: 1,
          ma_sp: "SP001",
          ten_sp: "Laptop Dell XPS 15",
          so_luong: 45,
          dvt: "Cái",
        },
        {
          id_kho: 1,
          ma_sp: "SP002",
          ten_sp: "Bàn phím cơ Keychron K8",
          so_luong: 120,
          dvt: "Bộ",
        },
        {
          id_kho: 1,
          ma_sp: "SP003",
          ten_sp: "Chuột không dây Logitech Master 3",
          so_luong: 80,
          dvt: "Cái",
        },
        {
          id_kho: 2,
          ma_sp: "SP004",
          ten_sp: "Màn hình Dell Ultrasharp 27 inch",
          so_luong: 30,
          dvt: "Chiếc",
        },
        {
          id_kho: 2,
          ma_sp: "SP001",
          ten_sp: "Laptop Dell XPS 15",
          so_luong: 15,
          dvt: "Cái",
        },
        {
          id_kho: 3,
          ma_sp: "SP005",
          ten_sp: "Thùng Carton 5 lớp",
          so_luong: 5000,
          dvt: "Thùng",
        },
        {
          id_kho: 3,
          ma_sp: "SP006",
          ten_sp: "Băng keo trong",
          so_luong: 1200,
          dvt: "Cuộn",
        },
      ],
      khoDangXem: {},
      listTonKhoChiTiet: [],
      khoCapNhat: { ten_kho: "", ghi_chu: "" },
      khoXoa: {},
    };
  },
  methods: {
    xemTonKho(kho) {
      this.khoDangXem = kho;
      this.listTonKhoChiTiet = this.listTonKho.filter(
        (item) => item.id_kho === kho.id,
      );
    },
    chonKhoCapNhat(kho) {
      // Sao chép tránh tham chiếu
      this.khoCapNhat = { ...kho };
    },
    chonKhoXoa(kho) {
      this.khoXoa = kho;
    },
    xacNhanCapNhat() {
      const index = this.listKho.findIndex((k) => k.id === this.khoCapNhat.id);
      if (index !== -1) {
        this.listKho.splice(index, 1, this.khoCapNhat);
        alert("Cập nhật kho thành công!");
      }
    },
    xacNhanXoa() {
      this.listKho = this.listKho.filter((k) => k.id !== this.khoXoa.id);
      alert("Đã xóa kho " + this.khoXoa.ten_kho + "!");
    },
  },
};
</script>

<style></style>
