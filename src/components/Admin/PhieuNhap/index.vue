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
                            <label class="form-label fw-bold">Nhà Cung Cấp</label>
                            <select class="form-select">
                                <option selected disabled>Chọn nhà cung cấp...</option>
                                <option value="1">Công ty TNHH Thực Phẩm Sạch</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Kho Nhập</label>
                            <select class="form-select">
                                <option value="1">Kho Tổng</option>
                                <option value="2">Kho Phụ</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Nhân Viên</label>
                            <select class="form-select">
                                <option value="1">Nguyễn Văn A</option>
                                <option value="2">Nguyễn Thị B</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Ngày Nhập</label>
                            <input type="date" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tình Trạng</label>
                            <select class="form-select">
                                <option value="1">Đã Nhập Kho</option>
                                <option value="0">Tạm Lưu</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Ghi Chú</label>
                            <textarea class="form-control" rows="3" placeholder="Ghi chú nội bộ..."></textarea>
                        </div>
                    </form>
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-primary px-4 shadow-sm">Tạo Phiếu</button>
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
                                    <th>Mã Phiếu</th>
                                    <th>Ngày Nhập</th>
                                    <th>Nhà Cung Cấp</th>
                                    <th>Kho Nhập</th>
                                    <th>Nhân Viên</th>
                                    <th>Tổng Tiền</th>
                                    <th>Trạng Thái</th>
                                    <th>Ghi Chú</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center">
                                    <td>1</td>
                                    <td>PN0001</td>
                                    <td>04/04/2026</td>
                                    <td class="text-start">CTY Thực Phẩm Sạch</td>
                                    <td class="text-start">Kho Tổng</td>
                                    <td class="text-start">Nguyễn Văn A</td>
                                    <td class="text-end fw-bold text-primary">5,000,000</td>
                                    <td><button class="btn btn-success btn-sm w-100 shadow-sm">Đã Nhập Kho</button></td>
                                    <td class="text-start">Nhập hàng đợt 1 tháng 4</td>
                                    <td class="text-nowrap text-center">
                                        <button class="btn btn-info btn-sm me-1 shadow-sm text-white" data-bs-toggle="modal"
                                            data-bs-target="#chiTietModal">
                                            <i class="fa fa-list"></i>
                                        </button>
                                        <button class="btn btn-warning btn-sm me-1 shadow-sm" data-bs-toggle="modal"
                                            data-bs-target="#editModal">
                                            <i class="fa fa-edit"></i>
                                        </button>
                                        <button class="btn btn-danger btn-sm shadow-sm" data-bs-toggle="modal"
                                            data-bs-target="#deleteModal">
                                            <i class="fa fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr class="text-center">
                                    <td>2</td>
                                    <td>PN0002</td>
                                    <td>05/04/2026</td>
                                    <td class="text-start">Hải Sản Nam Trung</td>
                                    <td class="text-start">Kho Phụ</td>
                                    <td class="text-start">Nguyễn Thị B</td>
                                    <td class="text-end fw-bold text-primary">12,000,000</td>
                                    <td><button class="btn btn-warning btn-sm w-100 shadow-sm text-white">Tạm
                                            Lưu</button>
                                    </td>
                                    <td class="text-start">Chờ kiểm định chất lượng</td>
                                    <td class="text-nowrap text-center">
                                        <button class="btn btn-info btn-sm me-1 shadow-sm text-white" data-bs-toggle="modal"
                                            data-bs-target="#chiTietModal">
                                            <i class="fa fa-list"></i>
                                        </button>
                                        <button class="btn btn-warning btn-sm me-1 shadow-sm" data-bs-toggle="modal"
                                            data-bs-target="#editModal">
                                            <i class="fa fa-edit"></i>
                                        </button>
                                        <button class="btn btn-danger btn-sm shadow-sm" data-bs-toggle="modal"
                                            data-bs-target="#deleteModal">
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

    <!-- 3. Modal Nhập Chi Tiết Sản Phẩm -->
    <div class="modal fade" id="chiTietModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title fw-bold">Chi Tiết Phiếu Nhập: <span class="text-primary italic">PN0001</span>
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <!-- Tìm kiếm SP -->
                        <div class="col-md-12 mb-3">
                            <div class="input-group">
                                <span class="input-group-text bg-primary text-white border-primary"><i
                                        class="fa fa-search"></i></span>
                                <input type="text" class="form-control" placeholder="Tìm tên sản phẩm hoặc mã vạch...">
                                <button class="btn btn-primary px-4 shadow-sm">Tìm & Thêm</button>
                            </div>
                        </div>
                        <!-- Bảng chi tiết -->
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-bordered align-middle">
                                    <thead class="table-light text-center">
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên Sản Phẩm</th>
                                            <th>ĐVT</th>
                                            <th style="width: 120px;">Số Lượng</th>
                                            <th style="width: 150px;">Đơn Giá</th>
                                            <th>Thành Tiền</th>
                                            <th>Xóa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="text-center">
                                            <td>1</td>
                                            <td class="text-start">Thanh long ruột đỏ</td>
                                            <td>Kg</td>
                                            <td><input type="number" class="form-control form-control-sm text-center"
                                                    value="10"></td>
                                            <td><input type="number" class="form-control form-control-sm text-end"
                                                    value="25000"></td>
                                            <td class="text-end fw-bold">250,000</td>
                                            <td><button class="btn btn-outline-danger btn-sm p-1"><i
                                                        class="fa fa-times"></i></button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer bg-light d-flex justify-content-between">
                    <h5 class="mb-0 fw-bold">Tổng Cộng: <span class="text-danger">250,000đ</span></h5>
                    <button type="button" class="btn btn-primary px-4 shadow-sm" data-bs-dismiss="modal">Xác
                        Nhận</button>
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
                                <input type="text" class="form-control bg-light" value="PN0001" readonly>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Nhà Cung Cấp</label>
                                <select class="form-select">
                                    <option value="1">CTY Thực Phẩm Sạch</option>
                                    <option value="2">Hải Sản Nam Trung</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Kho Nhập</label>
                                <select class="form-select">
                                    <option value="1">Kho Tổng</option>
                                    <option value="2">Kho Phụ</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Nhân Viên</label>
                                <select class="form-select">
                                    <option value="1">Nguyễn Văn A</option>
                                    <option value="2">Nguyễn Thị B</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Ngày Nhập</label>
                                <input type="date" class="form-control shadow-sm" value="2026-04-04">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Tình Trạng</label>
                                <select class="form-select">
                                    <option value="1">Đã Nhập Kho</option>
                                    <option value="0">Tạm Lưu</option>
                                </select>
                            </div>
                            <div class="col-md-12 mb-3">
                                <label class="form-label fw-bold">Ghi Chú</label>
                                <textarea class="form-control shadow-sm" rows="3">Nhập hàng đợt 1 tháng 4</textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary shadow-sm" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary px-4 shadow-sm">Cập Nhật</button>
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
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body text-center py-4">
                    <i class="fa fa-exclamation-triangle text-warning mb-3" style="font-size: 3rem;"></i>
                    <h5 class="fw-bold fs-5">Bạn có chắc chắn muốn xóa phiếu nhập này?</h5>
                    <p class="text-muted small">Hành động này không thể hoàn tác.</p>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-secondary px-4 shadow-sm" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-danger px-4 shadow-sm">Xác Nhận Xóa</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PhieuNhapManager',
    data() {
        return {
        }
    }
}
</script>

<style scoped></style>
