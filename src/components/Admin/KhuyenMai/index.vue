<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card border-top border-0 border-4 border-primary mt-2">
                <div class="card-header">
                    <div class="row">
                        <div class="col-lg-6">
                            <h3>Danh Sách Khuyến Mãi</h3>
                        </div>
                        <div class="col-lg-6 text-end">
                            <button class="btn btn-primary px-4" data-bs-toggle="modal" data-bs-target="#addModal">
                                <i class="fa fa-plus me-1"></i>Thêm Mới
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped table-hover align-middle">
                            <thead class="text-center text-nowrap">
                                <tr>
                                    <th>STT</th>
                                    <th>Mã Code</th>
                                    <th>Tên</th>
                                    <th>Kiểu</th>
                                    <th>Giá Trị</th>
                                    <th>Thời Gian</th>
                                    <th>Điều Kiện</th>
                                    <th>Trạng Thái</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center">
                                    <td>1</td>
                                    <td>SUMMER2026</td>
                                    <td>Giảm giá mùa hè</td>
                                    <td>Phần trăm</td>
                                    <td>10%</td>
                                    <td>01/06 - 31/08</td>
                                    <td>500,000đ</td>
                                    <td><button class="btn btn-success btn-sm w-100">Đang áp dụng</button></td>
                                    <td class="text-nowrap">
                                        <button class="btn btn-warning btn-sm me-1" data-bs-toggle="modal"
                                            data-bs-target="#editModal">
                                            <i class="fa fa-edit"></i> Sửa
                                        </button>
                                        <button class="btn btn-danger btn-sm" data-bs-toggle="modal"
                                            data-bs-target="#deleteModal">
                                            <i class="fa fa-trash"></i> Xóa
                                        </button>
                                    </td>
                                </tr>
                                <tr class="text-center">
                                    <td>2</td>
                                    <td>K26OFFER</td>
                                    <td>Ưu đãi K26</td>
                                    <td>Số tiền</td>
                                    <td>50,000đ</td>
                                    <td>01/04 - 15/04</td>
                                    <td>200,000đ</td>
                                    <td><button class="btn btn-success btn-sm w-100">Đang áp dụng</button></td>
                                    <td class="text-nowrap">
                                        <button class="btn btn-warning btn-sm me-1" data-bs-toggle="modal"
                                            data-bs-target="#editModal">
                                            <i class="fa fa-edit"></i> Sửa
                                        </button>
                                        <button class="btn btn-danger btn-sm" data-bs-toggle="modal"
                                            data-bs-target="#deleteModal">
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

    <!-- Add Modal -->
    <div class="modal fade" id="addModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Thêm Mới Khuyến Mãi</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Mã Khuyến Mãi</label>
                                <input type="text" class="form-control" placeholder="Nhập mã khuyến mãi">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Tên Khuyến Mãi</label>
                                <input type="text" class="form-control" placeholder="Nhập tên chương trình">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Kiểu Khuyến Mãi</label>
                                <select class="form-select">
                                    <option value="Phần trăm">Phần trăm (%)</option>
                                    <option value="Số tiền">Số tiền cố định (đ)</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Giá Trị</label>
                                <input type="number" class="form-control" placeholder="Nhập giá trị">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Từ Ngày</label>
                                <input type="date" class="form-control">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Đến Ngày</label>
                                <input type="date" class="form-control">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Điều Kiện Tối Thiểu</label>
                                <input type="number" class="form-control" placeholder="Nhập giá trị đơn tối thiểu">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Trạng Thái</label>
                                <select class="form-select">
                                    <option value="Đang áp dụng">Đang áp dụng</option>
                                    <option value="Tạm ngưng">Tạm ngưng</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer text-end">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary px-4">Lưu Lại</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Edit Modal -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Cập Nhật Khuyến Mãi</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Mã Khuyến Mãi</label>
                                <input type="text" class="form-control" value="SUMMER2026">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Tên Khuyến Mãi</label>
                                <input type="text" class="form-control" value="Giảm giá mùa hè">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Kiểu Khuyến Mãi</label>
                                <select class="form-select">
                                    <option value="Phần trăm" selected>Phần trăm (%)</option>
                                    <option value="Số tiền">Số tiền cố định (đ)</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Giá Trị</label>
                                <input type="number" class="form-control" value="10">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Từ Ngày</label>
                                <input type="date" class="form-control" value="2026-06-01">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Đến Ngày</label>
                                <input type="date" class="form-control" value="2026-08-31">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Điều Kiện Tối Thiểu</label>
                                <input type="number" class="form-control" value="500000">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Trạng Thái</label>
                                <select class="form-select">
                                    <option value="Đang áp dụng" selected>Đang áp dụng</option>
                                    <option value="Tạm ngưng">Tạm ngưng</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary">Lưu Lại</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Delete Modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title text-white">Xóa Khuyến Mãi</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body text-center py-4">
                    <i class="fa fa-exclamation-triangle text-warning mb-3" style="font-size: 3rem;"></i>
                    <h5 class="fw-bold fs-5">Bạn có chắc chắn muốn xóa khuyến mãi này?</h5>
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
    name: 'KhuyenMaiManager',
    data() {
        return {
        }
    }
}
</script>

<style scoped></style>
