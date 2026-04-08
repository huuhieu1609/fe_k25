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
          <div class="mb-3">
            <label class="form-label fw-bold">Trạng Thái</label>
            <select class="form-select">
              <option value="1">Hiển thị</option>
              <option value="0">Tạm ẩn</option>
            </select>
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
                  <th>Trạng Thái</th>
                  <th>Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Kho Tổng Biên Hòa</td>
                  <td>Laptop Dell XPS 15</td>
                  <td class="text-center">45</td>
                  <td class="text-center">
                    <button class="btn btn-success btn-sm w-100 shadow-sm">Hiển thị</button>
                  </td>
                  <td class="text-nowrap text-center">
                    <button class="btn btn-warning btn-sm me-1" data-bs-toggle="modal"
                      data-bs-target="#capNhatTonKhoModal">
                      <i class="bx bx-edit"></i> Cập Nhật
                    </button>
                    <button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#xoaTonKhoModal">
                      <i class="bx bx-trash"></i> Xóa
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Kho Tổng Biên Hòa</td>
                  <td>Bàn phím cơ Keychron K8</td>
                  <td class="text-center">120</td>
                  <td class="text-center">
                    <button class="btn btn-success btn-sm w-100 shadow-sm">Hiển thị</button>
                  </td>
                  <td class="text-nowrap text-center">
                    <button class="btn btn-warning btn-sm me-1" data-bs-toggle="modal"
                      data-bs-target="#capNhatTonKhoModal">
                      <i class="bx bx-edit"></i> Cập Nhật
                    </button>
                    <button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#xoaTonKhoModal">
                      <i class="bx bx-trash"></i> Xóa
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Kho Chi Nhánh Tân Bình</td>
                  <td>Màn hình Dell Ultrasharp 27 inch</td>
                  <td class="text-center">30</td>
                  <td class="text-center">
                    <button class="btn btn-success btn-sm w-100 shadow-sm">Hiển thị</button>
                  </td>
                  <td class="text-nowrap text-center">
                    <button class="btn btn-warning btn-sm me-1" data-bs-toggle="modal"
                      data-bs-target="#capNhatTonKhoModal">
                      <i class="bx bx-edit"></i> Cập Nhật
                    </button>
                    <button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#xoaTonKhoModal">
                      <i class="bx bx-trash"></i> Xóa
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Kho Vật Tư Bình Dương</td>
                  <td>Thùng Carton 5 lớp</td>
                  <td class="text-center">5000</td>
                  <td class="text-center">
                    <button class="btn btn-secondary btn-sm w-100 shadow-sm">Tạm ẩn</button>
                  </td>
                  <td class="text-nowrap text-center">
                    <button class="btn btn-warning btn-sm me-1" data-bs-toggle="modal"
                      data-bs-target="#capNhatTonKhoModal">
                      <i class="bx bx-edit"></i> Cập Nhật
                    </button>
                    <button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#xoaTonKhoModal">
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
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Sản Phẩm</label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Số Lượng</label>
            <input type="number" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Trạng Thái</label>
            <select class="form-select">
              <option value="1">Hiển thị</option>
              <option value="0">Tạm ẩn</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary shadow-sm" data-bs-dismiss="modal">Đóng</button>
          <button type="button" class="btn btn-warning shadow-sm" data-bs-dismiss="modal">Cập Nhật</button>
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
          <button type="button" class="btn btn-danger px-4 shadow-sm" data-bs-dismiss="modal">Xác Nhận Xóa</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TonKho"
};
</script>

<style></style>
