<template>
    <div class="row">
        <div class="col-12">
            <div class="card border-top border-0 border-4 border-primary mt-2">
                <div class="card-header d-flex align-items-center">
                    <h5 class="card-title flex-grow-1">Danh Sách Hóa Đơn</h5>
                    <button class="btn btn-primary px-4 shadow-sm" data-bs-toggle="modal" data-bs-target="#addModal">
                        <i class="fa fa-plus me-2"></i>Tạo Mới Hóa Đơn
                    </button>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped table-hover align-middle">
                            <thead class="text-center text-nowrap">
                                <tr>
                                    <th>STT</th>
                                    <th>Mã Hóa Đơn</th>
                                    <th>Ngày Bán</th>
                                    <th>Khách Hàng</th>
                                    <th>Nhân Viên</th>
                                    <th>Tổng Tiền</th>
                                    <th>Hình thức thanh toán</th>
                                    <th>Giảm Giá</th>
                                    <th>Thuế VAT</th>
                                    <th>Thanh Toán</th>
                                    <th>Trạng Thái</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center">
                                    <td>1</td>
                                    <td>HD1001</td>
                                    <td>04/04/2026</td>
                                    <td class="text-start">Nguyễn Văn A</td>
                                    <td class="text-start">trần văn b</td>
                                    <td>1,250,000</td>
                                    <td>
                                        Tiền mặt
                                    </td>
                                    <td>
                                        10%
                                    </td>
                                    <td>
                                        10%
                                    </td>

                                    <td>
                                        <button class="btn btn-success btn-sm w-100">Đã thanh toán</button>
                                    </td>
                                    <td>
                                        <button class="btn btn-primary btn-sm w-100">Đã hoàn thành</button>
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
                                    <td>2</td>
                                    <td>HD1002</td>
                                    <td>04/04/2026</td>
                                    <td class="text-start">Trần Thị B</td>
                                    <td class="text-start">nguyễn văn c</td>
                                    <td>3,450,000</td>
                                    <td>
                                        Chuyển khoản
                                    </td>
                                    <td>
                                        50,000
                                    </td>
                                    <td>
                                        10%
                                    </td>
                                    <td>
                                        <button class="btn btn-danger btn-sm w-100">Chưa thanh toán</button>
                                    </td>
                                    <td>
                                        <button class="btn btn-warning btn-sm w-100">Đang xử lý</button>
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

        <!-- Add Modal -->
        <div class="modal fade" id="addModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Tạo Mới Hóa Đơn</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="row">
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Mã Hóa Đơn</label>
                                    <input type="text" class="form-control" placeholder="Hệ thống tự sinh...">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Ngày Bán</label>
                                    <input type="date" class="form-control">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Nhân Viên</label>
                                    <select class="form-select">
                                        <option value="1">Nguyễn Văn A</option>
                                        <option value="2">Trần Thị B</option>
                                    </select>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Khách Hàng</label>
                                    <select class="form-select">
                                        <option value="1">Nguyễn Văn A</option>
                                        <option value="2">Trần Thị B</option>
                                    </select>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Tiền Hàng</label>
                                    <input type="number" class="form-control" placeholder="0">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Giảm Giá</label>
                                    <input type="number" class="form-control" placeholder="0">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Thuế VAT</label>
                                    <input type="number" class="form-control" placeholder="0">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Loại Thanh Toán</label>
                                    <select class="form-select">
                                        <option value="Tiền mặt">Tiền mặt</option>
                                        <option value="Chuyển khoản">Chuyển khoản</option>
                                    </select>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Trạng Thái Thanh Toán</label>
                                    <select class="form-select">
                                        <option value="1">Đã thanh toán</option>
                                        <option value="0">Chưa thanh toán</option>
                                        <option value="2">Đang xử lý</option>
                                    </select>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Trạng Thái Hóa Đơn</label>
                                    <select class="form-select">
                                        <option value="Đã hoàn thành">Đã hoàn thành</option>
                                        <option value="Tạm lưu">Tạm lưu</option>
                                    </select>
                                </div>
                                <div class="col-12 mb-3">
                                    <label class="form-label fw-bold">Ghi Chú</label>
                                    <textarea class="form-control" rows="2" placeholder="Nhập ghi chú..."></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary shadow-sm" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" class="btn btn-primary shadow-sm">Tạo Hóa Đơn</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Edit Modal (same structure as add but simplified for brevity) -->
        <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Cập Nhật Hóa Đơn</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="row">
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Mã Hóa Đơn</label>
                                    <input type="text" class="form-control" placeholder="Hệ thống tự sinh...">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Ngày Bán</label>
                                    <input type="date" class="form-control">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Nhân Viên</label>
                                    <select class="form-select">
                                        <option value="1">Nguyễn Văn A</option>
                                        <option value="2">Trần Thị B</option>
                                    </select>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Khách Hàng</label>
                                    <select class="form-select">
                                        <option value="1">Nguyễn Văn A</option>
                                        <option value="2">Trần Thị B</option>
                                    </select>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Tiền Hàng</label>
                                    <input type="number" class="form-control" placeholder="0">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Giảm Giá</label>
                                    <input type="number" class="form-control" placeholder="0">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Thuế VAT</label>
                                    <input type="number" class="form-control" placeholder="0">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Loại Thanh Toán</label>
                                    <select class="form-select">
                                        <option value="Tiền mặt">Tiền mặt</option>
                                        <option value="Chuyển khoản">Chuyển khoản</option>
                                    </select>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Trạng Thái Thanh Toán</label>
                                    <select class="form-select">
                                        <option value="1">Đã thanh toán</option>
                                        <option value="0">Chưa thanh toán</option>
                                        <option value="2">Đang xử lý</option>
                                    </select>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Trạng Thái Hóa Đơn</label>
                                    <select class="form-select">
                                        <option value="Đã hoàn thành">Đã hoàn thành</option>
                                        <option value="Tạm lưu">Tạm lưu</option>
                                    </select>
                                </div>
                                <div class="col-12 mb-3">
                                    <label class="form-label fw-bold">Ghi Chú</label>
                                    <textarea class="form-control" rows="2" placeholder="Nhập ghi chú..."></textarea>
                                </div>
                            </div>
                        </form>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary shadow-sm"
                                data-bs-dismiss="modal">Đóng</button>
                            <button type="button" class="btn btn-primary shadow-sm">Cập Nhật Hóa Đơn</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Standardized Delete Modal -->
        <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title text-white">Xóa Hóa Đơn</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center py-4">
                        <i class="fa fa-exclamation-triangle text-warning mb-3" style="font-size: 3rem;"></i>
                        <h5 class="fw-bold fs-5">Bạn có chắc chắn muốn xóa hóa đơn này?</h5>
                        <p class="text-muted small">Hành động này không thể hoàn tác.</p>
                    </div>
                    <div class="modal-footer justify-content-center">
                        <button type="button" class="btn btn-secondary px-4 shadow-sm"
                            data-bs-dismiss="modal">Hủy</button>
                        <button type="button" class="btn btn-danger px-4 shadow-sm">Xác Nhận Xóa</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HoaDonManager"
}
</script>

<style scoped></style>
