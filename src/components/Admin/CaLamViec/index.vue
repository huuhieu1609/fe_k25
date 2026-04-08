<template>

    <div class="row">
        <!-- 1. Thêm Ca Làm Việc (Column 4) -->
        <div class="col-lg-4">
            <div class="card border-top border-0 border-4 border-primary mt-2 shadow-sm">
                <div class="card-header">
                    <h5 class="card-title">Thêm Ca Làm Việc</h5>
                </div>
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Nhân Viên</label>
                            <select class="form-select shadow-sm">
                                <option selected disabled>Chọn nhân viên...</option>
                                <option value="1">Nguyễn Văn A</option>
                                <option value="2">Trần Thị B</option>
                            </select>
                        </div>
                       
                        <div class="mb-3">
                            <label class="form-label fw-bold">Giờ Mở</label>
                            <input type="datetime-local" class="form-control shadow-sm">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Giờ Đóng</label>
                            <input type="datetime-local" class="form-control shadow-sm">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tiền Đầu Ca</label>
                            <input type="number" class="form-control shadow-sm" placeholder="Nhập số tiền đầu ca...">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tiền Kết Ca</label>
                            <input type="number" class="form-control shadow-sm" placeholder="Nhập số tiền kết ca...">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Ghi Chú</label>
                            <textarea class="form-control shadow-sm" rows="3" placeholder="Nhập ghi chú..."></textarea>
                        </div>
                         <div class="mb-3">
                            <label class="form-label fw-bold">Trạng Thái</label>
                            <select class="form-select shadow-sm">
                                <option value="1" selected>Đang Mở</option>
                                <option value="0">Đã Kết Ca</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="card-footer text-end ">
                    <button class="btn btn-primary px-4 shadow-sm">Thêm Mới</button>
                </div>
            </div>
        </div>

        <!-- 2. Danh Sách Ca Làm Việc (Column 8) -->
        <div class="col-lg-8">
            <div class="card border-top border-0 border-4 border-primary mt-2 shadow-sm">
                <div class="card-header">
                    <h5 class="card-title">Danh Sách Ca Làm Việc</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped table-hover align-middle">
                            <thead class="text-center text-nowrap table-light">
                                <tr>
                                    <th>STT</th>
                                    <th>Nhân Viên</th>
                                    <th>Giờ Mở</th>
                                    <th>Giờ Đóng</th>
                                    <th>Tiền Đầu Ca</th>
                                    <th>Tiền Kết Ca</th>
                                    <th>Lệch</th>
                                    <th>Trạng Thái</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center">
                                    <td>1</td>
                                    <td class="text-start">Nguyễn Văn A</td>
                                    <td class="text-center text-success fw-bold">08:00</td>
                                    <td class="text-center text-danger fw-bold">16:00</td>
                                    <td class="text-end text-muted">500,000</td>
                                    <td class="text-end fw-bold">1,200,000</td>
                                    <td>0</td>
                                    <td><button class="btn btn-success btn-sm w-100 shadow-sm">Đã Kết Ca</button></td>
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
                                    <td class="text-start">Phạm Văn E</td>
                                    <td class="text-center text-success fw-bold">08:24</td>
                                    <td class="text-center text-muted fst-italic">--:--</td>
                                    <td class="text-end text-muted">500,000</td>
                                    <td class="text-end text-primary fw-bold">Đang bán...</td>
                                    <td>...</td>
                                    <td><button class="btn btn-warning btn-sm w-100 shadow-sm text-white">Đang
                                            Mở</button></td>
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
                    <h5 class="modal-title">Cập Nhật Ca Làm Việc</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Nhân Viên</label>
                                <select class="form-select shadow-sm">
                                    <option value="1">Nguyễn Văn A</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Trạng Thái</label>
                                <select class="form-select shadow-sm">
                                    <option value="0">Đã Kết Ca</option>
                                    <option value="1" >Đang Mở</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Giờ Mở</label>
                                <input type="datetime-local" class="form-control shadow-sm" value="2026-04-04T08:00">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Giờ Đóng</label>
                                <input type="datetime-local" class="form-control shadow-sm" value="2026-04-04T16:00">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Tiền Đầu Ca</label>
                                <input type="number" class="form-control shadow-sm" value="500000">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Tiền Kết Ca</label>
                                <input type="number" class="form-control shadow-sm" value="1200000">
                            </div>
                            <div class="col-md-12 mb-3">
                                <label class="form-label fw-bold">Ghi Chú</label>
                                <textarea class="form-control shadow-sm" rows="3">Ca sáng</textarea>
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
                    <h5 class="modal-title text-white">Xóa Ca Làm Việc</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body text-center py-4">
                    <i class="fa fa-exclamation-triangle text-warning mb-3" style="font-size: 3rem;"></i>
                    <h5 class="fw-bold fs-5">Bạn có chắc chắn muốn xóa ca làm việc này?</h5>
                    <p class="text-muted small">Hành động này không thể hoàn tác.</p>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-secondary px-4 shadow-sm" data-bs-toggle="modal">Hủy</button>
                    <button type="button" class="btn btn-danger px-4 shadow-sm">Xác Nhận Xóa</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'CaLamViecManager',
    data() {
        return {
        }
    }
}
</script>

<style scoped>
/* Removed bo tròn styles to match ChucVu */
</style>
