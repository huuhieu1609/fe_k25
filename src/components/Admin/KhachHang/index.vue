<template>

    <div class="row">
        <!-- 1. Thêm Mới Khách Hàng (Column 4) -->
        <div class="col-lg-4">
            <div class="card border-top border-0 border-4 border-primary mt-2 shadow-sm">
                <div class="card-header">
                    <h5 class="card-title">Thêm Mới Khách Hàng</h5>
                </div>
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Họ và Tên</label>
                            <input type="text" class="form-control" placeholder="Nhập họ và tên...">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Số Điện Thoại</label>
                            <input type="text" class="form-control" placeholder="Nhập số điện thoại...">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Email</label>
                            <input type="email" class="form-control" placeholder="example@gmail.com">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Địa Chỉ</label>
                            <input type="text" class="form-control" placeholder="Nhập địa chỉ...">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Điểm Tích Lũy</label>
                            <input type="number" class="form-control" value="0">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Trạng Thái</label>
                            <select class="form-select">
                                <option value="1" selected>Đang Hoạt Động</option>
                                <option value="0">Ngừng Hoạt Động</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Ghi Chú</label>
                            <textarea class="form-control" rows="3" placeholder="Nhập ghi chú..."></textarea>
                        </div>
                    </form>
                </div>
                <div class="card-footer text-end bg-transparent border-0">
                    <button class="btn btn-primary px-4 shadow-sm">Thêm Mới</button>
                </div>
            </div>
        </div>

        <!-- 2. Danh Sách Khách Hàng (Column 8) -->
        <div class="col-lg-8">
            <div class="card border-top border-0 border-4 border-primary mt-2 shadow-sm">
                <div class="card-header">
                    <h5 class="card-title">Danh Sách Khách Hàng</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped table-hover align-middle">
                            <thead class="text-center text-nowrap table-light">
                                <tr>
                                    <th>STT</th>
                                    <th>Họ và Tên</th>
                                    <th>Liên Hệ</th>
                                    <th>Địa Chỉ</th>
                                    <th>Điểm</th>
                                    <th>Trạng Thái</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center">
                                    <td>1</td>
                                    <td class="text-start">Nguyễn Văn A</td>
                                    <td class="text-start">
                                        <div class="small"><i class="fa fa-phone me-1"></i>0123456789</div>
                                        <div class="small text-muted"><i class="fa fa-envelope me-1"></i>ana@gmail.com
                                        </div>
                                    </td>
                                    <td class="text-start small">123 Đường Láng, Hà Nội</td>
                                    <td><span class="badge bg-info text-dark">500</span></td>
                                    <td>
                                        <button class="btn btn-success btn-sm w-100 shadow-sm">Hoạt Động</button>
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
                                    <td class="text-start">Trần Thị B</td>
                                    <td class="text-start">
                                        <div class="small"><i class="fa fa-phone me-1"></i>0987654321</div>
                                        <div class="small text-muted"><i class="fa fa-envelope me-1"></i>bt@gmail.com
                                        </div>
                                    </td>
                                    <td class="text-start small">456 Quận 1, TP.HCM</td>
                                    <td><span class="badge bg-info text-dark">120</span></td>
                                    <td>
                                        <button class="btn btn-danger btn-sm w-100 shadow-sm">Ngừng Hoạt Động</button>
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
                    <h5 class="modal-title">Cập Nhật Khách Hàng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Họ và Tên</label>
                                <input type="text" class="form-control shadow-sm" value="Nguyễn Văn A">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Số Điện Thoại</label>
                                <input type="text" class="form-control shadow-sm" value="0123456789">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Email</label>
                                <input type="email" class="form-control shadow-sm" value="ana@gmail.com">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Địa Chỉ</label>
                                <input type="text" class="form-control shadow-sm" value="123 Đường Láng, Hà Nội">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Điểm Tích Lũy</label>
                                <input type="number" class="form-control shadow-sm" value="500">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Trạng Thái</label>
                                <select class="form-select shadow-sm">
                                    <option value="1">Đang Hoạt Động</option>
                                    <option value="0">Ngừng Hoạt Động</option>
                                </select>
                            </div>
                            <div class="col-md-12 mb-3">
                                <label class="form-label fw-bold">Ghi Chú</label>
                                <textarea class="form-control shadow-sm" rows="3">Khách hàng VIP</textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary shadow-sm" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary shadow-sm px-4">Lưu Thay Đổi</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Delete Modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title text-white">Xóa Khách Hàng</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body text-center py-4">
                    <i class="fa fa-exclamation-triangle text-warning mb-3" style="font-size: 3rem;"></i>
                    <h5 class="fw-bold fs-5">Bạn có chắc chắn muốn xóa khách hàng này?</h5>
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
    name: "KhachHang"
}
</script>
<style></style>