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
            </select>
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Sản Phẩm</label>
            <select class="form-select">
              <option value="">Chọn Sản Phẩm</option>
              <option value="1">Sản phẩm Demo</option>
            </select>
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Số Lượng</label>
            <input
              type="number"
              class="form-control"
              placeholder="Nhập số lượng tồn"
            />
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
            <table
              class="table table-bordered table-striped table-hover align-middle"
            >
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
                <tr class="text-center">
                  <td>1</td>
                  <td>Kho Tổng Biên Hòa</td>
                  <td>Sản phẩm Demo</td>
                  <td class="text-center">150</td>
                  <td class="text-nowrap">
                    <button class="btn btn-warning btn-sm me-1">
                      <i class="fa fa-edit"></i> Cập Nhật
                    </button>
                    <button class="btn btn-danger btn-sm">
                      <i class="fa fa-trash"></i> Xóa
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
</template>

<script>
export default {};
</script>

<style></style>
