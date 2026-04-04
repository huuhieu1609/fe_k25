<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card border-top border-0 border-4 border-primary mt-2">
                <div class="card-header">
                    <h5 class="card-title">Thêm Mới Phiếu Nhập</h5>
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
                            <label class="form-label fw-bold">Mã Phiếu</label>
                            <input type="text" class="form-control" placeholder="Hệ thống tự sinh if để trống">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Ngày Nhập</label>
                            <input type="date" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tổng Tiền Hàng</label>
                            <input type="number" class="form-control" placeholder="0">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Chiết Khấu</label>
                            <input type="number" class="form-control" placeholder="0">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Thuế VAT</label>
                            <input type="number" class="form-control" placeholder="0">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Đã Thanh Toán</label>
                            <input type="number" class="form-control" placeholder="0">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Trạng Thái</label>
                            <select class="form-select">
                                <option value="1">Đã Nhập Kho</option>
                                <option value="0">Tạm Lưu</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Ghi Chú</label>
                            <textarea class="form-control" rows="2" placeholder="Nhập ghi chú..."></textarea>
                        </div>
                    </form>
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-primary px-4">Tạo Phiếu</button>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="card border-top border-0 border-4 border-primary mt-2">
                <div class="card-header">
                    <h5 class="card-title">Danh Sách Phiếu Nhập</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped table-hover align-middle">
                            <thead class="text-center text-nowrap">
                                <tr>
                                    <th>STT</th>
                                    <th>Mã Phiếu</th>
                                    <th>Ngày Nhập</th>
                                    <th>Tổng Tiền</th>
                                    <th>Đã Trả</th>
                                    <th>Còn Nợ</th>
                                    <th>Trạng Thái</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center">
                                    <td>1</td>
                                    <td>PN0001</td>
                                    <td>04/04/2026</td>
                                    <td>5,000,000</td>
                                    <td>5,000,000</td>
                                    <td class="text-success fw-bold">0</td>
                                    <td>
                                        <button class="btn btn-success btn-sm w-100">Đã Nhập Kho</button>
                                    </td>
                                    <td class="text-nowrap">
                                        <button class="btn btn-warning btn-sm me-1" data-bs-toggle="modal"
                                            data-bs-target="#editModal">
                                            <i class="fa fa-edit"></i>
                                        </button>
                                        <button class="btn btn-danger btn-sm" data-bs-toggle="modal"
                                            data-bs-target="#deleteModal">
                                            <i class="fa fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr class="text-center">
                                    <td>2</td>
                                    <td>PN0002</td>
                                    <td>04/04/2026</td>
                                    <td>12,000,000</td>
                                    <td>8,000,000</td>
                                    <td class="text-danger fw-bold">4,000,000</td>
                                    <td>
                                        <button class="btn btn-success btn-sm w-100">Đã Nhập Kho</button>
                                    </td>
                                    <td class="text-nowrap">
                                        <button class="btn btn-warning btn-sm me-1" data-bs-toggle="modal"
                                            data-bs-target="#editModal">
                                            <i class="fa fa-edit"></i>
                                        </button>
                                        <button class="btn btn-danger btn-sm" data-bs-toggle="modal"
                                            data-bs-target="#deleteModal">
                                            <i class="fa fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr class="text-center">
                                    <td>3</td>
                                    <td>PN0003</td>
                                    <td>05/04/2026</td>
                                    <td>7,500,000</td>
                                    <td>0</td>
                                    <td class="text-danger fw-bold">7,500,000</td>
                                    <td>
                                        <button class="btn btn-warning btn-sm w-100 text-white">Tạm Lưu</button>
                                    </td>
                                    <td class="text-nowrap">
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
                                    <td>4</td>
                                    <td>PN0004</td>
                                    <td>05/04/2026</td>
                                    <td>3,450,000</td>
                                    <td>3,450,000</td>
                                    <td class="text-success fw-bold">0</td>
                                    <td>
                                        <button class="btn btn-success btn-sm w-100">Đã Nhập Kho</button>
                                    </td>
                                    <td class="text-nowrap">
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
                                    <td>5</td>
                                    <td>PN0005</td>
                                    <td>06/04/2026</td>
                                    <td>15,000,000</td>
                                    <td>10,000,000</td>
                                    <td class="text-danger fw-bold">5,000,000</td>
                                    <td>
                                        <button class="btn btn-success btn-sm w-100">Đã Nhập Kho</button>
                                    </td>
                                    <td class="text-nowrap">
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

    <!-- Edit Modal -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Cập Nhật Phiếu Nhập</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <!-- Form structure similar to add card but in row/col -->
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Mã Phiếu</label>
                                <input type="text" class="form-control" value="PN0001" readonly disabled>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Ngày Nhập</label>
                                <input type="date" class="form-control" value="2026-04-04">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Kho Nhập</label>
                                <select class="form-select">
                                    <option value="1" selected>Kho Tổng</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Nhà Cung Cấp</label>
                                <select class="form-select">
                                    <option value="1" selected>Công ty TNHH Thực Phẩm Sạch</option>
                                </select>
                            </div>
                            <div class="col-md-3 mb-3">
                                <label class="form-label fw-bold">Tiền Hàng</label>
                                <input type="number" class="form-control" value="5000000">
                            </div>
                            <div class="col-md-3 mb-3">
                                <label class="form-label fw-bold">Chiết Khấu</label>
                                <input type="number" class="form-control" value="0">
                            </div>
                            <div class="col-md-3 mb-3">
                                <label class="form-label fw-bold">Thuế VAT</label>
                                <input type="number" class="form-control" value="0">
                            </div>
                            <div class="col-md-3 mb-3">
                                <label class="form-label fw-bold">Đã Trả</label>
                                <input type="number" class="form-control" value="5000000">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary">Lưu Thay Đổi</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Delete Modal -->
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
