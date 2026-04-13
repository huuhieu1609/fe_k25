<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card border-top border-0 border-4 border-primary mt-2">
                <div class="card-header">
                    <h5 class="card-title">Thêm Mới Công Nợ</h5>
                </div>
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Nhà Cung Cấp</label>
                            <select class="form-select">
                                <option selected disabled>Chọn nhà cung cấp...</option>
                                <option value="1">Công ty TNHH Thực Phẩm Sạch</option>
                                <option value="2">NPP Đồ Uống Hà Nội</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Mã Phiếu Nhập</label>
                            <select class="form-select">
                                <option selected disabled>Chọn phiếu nhập...</option>
                                <option value="1">PN0001</option>
                                <option value="2">PN0002</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tổng Nợ</label>
                            <input type="number" class="form-control" placeholder="0">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Đã Trả</label>
                            <input type="number" class="form-control" placeholder="0">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Còn Nợ</label>
                            <input type="number" class="form-control" placeholder="0">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Hạn Thanh Toán</label>
                            <input type="date" class="form-control">
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-bold">Trạng Thái</label>
                            <select class="form-select">
                                <option selected disabled>Chọn trạng thái...</option>
                                <option value="1">Hoạt động</option>
                                <option value="2">Vô hiệu</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-primary px-4">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="card border-top border-0 border-4 border-primary mt-2">
                <div class="card-header">
                    <h5 class="card-title">Danh Sách Công Nợ Nhà Cung Cấp</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped table-hover align-middle">
                            <thead class="text-center text-nowrap">
                                <tr>
                                    <th>STT</th>
                                    <th>Nhà Cung Cấp</th>
                                    <th>Mã Phiếu</th>
                                    <th>Tổng Nợ</th>
                                    <th>Đã Trả</th>
                                    <th>Còn Nợ</th>
                                    <th>Hạn Thanh Toán</th>
                                    <th>Trạng Thái</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center">
                                    <td>1</td>
                                    <td class="text-start">Công ty TNHH Thực Phẩm Sạch</td>
                                    <td>PN0001</td>
                                    <td class="text-end">5,000,000</td>
                                    <td class="text-end">2,000,000</td>
                                    <td class="text-end text-danger fw-bold">3,000,000</td>
                                    <td>15/04/2026</td>
                                    <td>
                                        <button class="btn btn-danger btn-sm w-100">Chưa thanh toán</button>
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
                                    <td class="text-start">2</td>
                                    <td class="text-start">NPP Đồ Uống Hà Nội</td>
                                    <td>PN0002</td>
                                    <td class="text-end">12,000,000</td>
                                    <td class="text-end">12,000,000</td>
                                    <td class="text-end text-success fw-bold">0</td>
                                    <td>10/04/2026</td>
                                    <td>
                                        <button class="btn btn-success btn-sm w-100">Đã thanh toán</button>
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
                    <h5 class="modal-title">Cập Nhật Công Nợ</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Nhà Cung Cấp</label>
                                <select class="form-select">
                                    <option value="1" selected>Công ty TNHH Thực Phẩm Sạch</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Mã Phiếu Nhập</label>
                                <input type="text" class="form-control" value="PN0001" readonly disabled>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label class="form-label fw-bold">Tổng Nợ</label>
                                <input type="number" class="form-control" value="5000000">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label class="form-label fw-bold">Đã Trả</label>
                                <input type="number" class="form-control" value="2000000">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label class="form-label fw-bold">Hạn Thanh Toán</label>
                                <input type="date" class="form-control" value="2026-04-15">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary shadow-sm" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary shadow-sm">Lưu Lại</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Standardized Delete Modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title text-white">Xóa Công Nợ</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body text-center py-4">
                    <i class="fa fa-exclamation-triangle text-warning mb-3" style="font-size: 3rem;"></i>
                    <h5 class="fw-bold fs-5">Bạn có chắc chắn muốn xóa công nợ này?</h5>
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
    name: "CongNoNhaCungCap"
}
</script>

<style scoped></style>
