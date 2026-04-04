<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="card border-top border-0 border-4 border-primary mt-2">
                    <div class="card-header">
                        <h5 class="card-title">Thêm Ca Làm Việc</h5>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Nhân Viên</label>
                                <select class="form-select">
                                    <option selected disabled>Chọn nhân viên...</option>
                                    <option value="1">Nguyễn Văn A</option>
                                    <option value="2">Trần Thị B</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Trạng Thái</label>
                                <select class="form-select">
                                    <option value="1">Đang Mở</option>
                                    <option value="0">Đã Kết Ca</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Giờ Mở</label>
                                <input type="datetime-local" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Giờ Đóng</label>
                                <input type="datetime-local" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Tiền Đầu Ca</label>
                                <input type="number" class="form-control" placeholder="nhập số tiền đầu ca">
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Tiền Kết Ca</label>
                                <input type="number" class="form-control" placeholder="nhập số tiền kết ca">
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Ghi Chú</label>
                                <textarea class="form-control" rows="3" placeholder="nhập ghi chú"></textarea>
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
                        <h5 class="card-title">Danh Sách Ca Làm Việc</h5>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped table-hover align-middle">
                                <thead class="text-center text-nowrap">
                                    <tr>
                                        <th>STT</th>
                                        <th>Nhân Viên</th>
                                        <th>Giờ Mở</th>
                                        <th>Giờ Đóng</th>
                                        <th>Tiền Đầu Ca</th>
                                        <th>Tiền Kết Ca</th>
                                        <th>Chênh Lệch</th>
                                        <th>Ghi Chú</th>
                                        <th>Trạng Thái</th>
                                        <th>Thao Tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-center">
                                        <td>1</td>
                                        <td>Nguyễn Văn A</td>
                                        <td>04/04/2026 08:00</td>
                                        <td>04/04/2026 16:00</td>
                                        <td>500,000</td>
                                        <td>1,200,000</td>
                                        <td class="text-success fw-bold">0</td>
                                        <td>Ca sáng</td>
                                        <td><button class="btn btn-success btn-sm w-100">Đã Kết Ca</button></td>
                                        <td class="text-nowrap">
                                            <button class="btn btn-warning btn-sm me-1" data-bs-toggle="modal"
                                                data-bs-target="#editModal">
                                                <i class="fa fa-edit"></i> Cập Nhật
                                            </button>
                                            <button class="btn btn-danger btn-sm" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal">
                                                <i class="fa fa-trash"></i> Xóa
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>2</td>
                                        <td>Trần Thị B</td>
                                        <td>04/04/2026 08:00</td>
                                        <td>04/04/2026 16:00</td>
                                        <td>0,000</td>
                                        <td>200,000</td>
                                        <td class="text-success fw-bold">0</td>
                                        <td>Ca sáng</td>
                                        <td><button class="btn btn-success btn-sm w-100">Đã Kết Ca</button></td>
                                        <td class="text-nowrap">
                                            <button class="btn btn-warning btn-sm me-1" data-bs-toggle="modal"
                                                data-bs-target="#editModal">
                                                <i class="fa fa-edit"></i> Cập Nhật
                                            </button>
                                            <button class="btn btn-danger btn-sm" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal">
                                                <i class="fa fa-trash"></i> Xóa
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>3</td>
                                        <td>Nguyễn Văn C</td>
                                        <td>04/04/2026 16:00</td>
                                        <td>04/04/2026 23:00</td>
                                        <td>200,000</td>
                                        <td>1,500,000</td>
                                        <td class="text-success fw-bold">0</td>
                                        <td>Ca tối</td>
                                        <td><button class="btn btn-success btn-sm w-100">Đã Kết Ca</button></td>
                                        <td class="text-nowrap">
                                            <button class="btn btn-warning btn-sm me-1" data-bs-toggle="modal"
                                                data-bs-target="#editModal">
                                                <i class="fa fa-edit"></i> Cập Nhật
                                            </button>
                                            <button class="btn btn-danger btn-sm" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal">
                                                <i class="fa fa-trash"></i> Xóa
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>4</td>
                                        <td>Lê Thị D</td>
                                        <td>05/04/2026 12:00</td>
                                        <td>05/04/2026 18:00</td>
                                        <td>100,000</td>
                                        <td>800,000</td>
                                        <td class="text-danger fw-bold">-50,000</td>
                                        <td>Ca chiều (Hụt tiền)</td>
                                        <td><button class="btn btn-danger btn-sm w-100">Đã Kết Ca</button></td>
                                        <td class="text-nowrap">
                                            <button class="btn btn-warning btn-sm me-1" data-bs-toggle="modal"
                                                data-bs-target="#editModal">
                                                <i class="fa fa-edit"></i> Cập Nhật
                                            </button>
                                            <button class="btn btn-danger btn-sm" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal">
                                                <i class="fa fa-trash"></i> Xóa
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="text-center text-primary">
                                        <td>5</td>
                                        <td>Phạm Văn E</td>
                                        <td>06/04/2026 08:00</td>
                                        <td>--:--</td>
                                        <td>500,000</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>Đang làm việc</td>
                                        <td><button class="btn btn-warning btn-sm w-100 text-white">Đang Mở</button></td>
                                        <td class="text-nowrap">
                                            <button class="btn btn-warning btn-sm me-1" data-bs-toggle="modal"
                                                data-bs-target="#editModal">
                                                <i class="fa fa-edit"></i> Cập Nhật
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
                                    <select class="form-select">
                                        <option value="1">Nguyễn Văn A</option>
                                    </select>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Trạng Thái</label>
                                    <select class="form-select">
                                        <option value="0">Đã Kết Ca</option>
                                    </select>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Giờ Mở</label>
                                    <input type="datetime-local" class="form-control" value="2026-04-04T08:00">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Giờ Đóng</label>
                                    <input type="datetime-local" class="form-control" value="2026-04-04T16:00">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Tiền Đầu Ca</label>
                                    <input type="number" class="form-control" value="500000">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Tiền Kết Ca</label>
                                    <input type="number" class="form-control" value="1200000">
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label fw-bold">Ghi Chú</label>
                                    <textarea class="form-control" rows="3">Ca sáng</textarea>
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
