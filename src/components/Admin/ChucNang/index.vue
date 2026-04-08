<template>

    <div class="row">
        <div class="col-lg-4">
            <div class="card border-top border-0 border-4 border-primary mt-2">
                <div class="card-header">
                    <h5 class="card-title">Thêm Mới Chức Năng</h5>
                </div>
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tên Chức Năng</label>
                            <input type="text" class="form-control" placeholder="Nhập tên chức năng...">
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-bold">Mô Tả</label>
                            <textarea class="form-control" rows="3" placeholder="Nhập mô tả chức năng..."></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">URL Chức Năng</label>
                            <input type="text" class="form-control" placeholder="Nhập URL chức năng...">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Method Chức Năng</label>
                            <input type="text" class="form-control" placeholder="Nhập method chức năng...">
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
                    <h5 class="card-title">Danh Sách Chức Năng</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped table-hover align-middle">
                            <thead class="text-center text-nowrap">
                                <tr>
                                    <th>STT</th>
                                    <th>Tên Chức Năng</th>
                                    <th>URL Chức Năng</th>
                                    <th>Method Chức Năng</th>
                                    <th>Mô Tả</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center">
                                    <td>1</td>
                                    <td>Quản lý chức vụ</td>
                                    <td class="text-start">/api/admin/chuc-vu</td>
                                    <td class="text-start">GET</td>
                                    <td class="text-start">Quản lý chức vụ</td>
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
                                    <td>Thêm chức vụ</td>
                                    <td class="text-start">/api/admin/chuc-vu</td>
                                    <td class="text-start">POST</td>
                                    <td class="text-start">Thêm chức vụ</td>
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
                                    <td>3</td>
                                    <td>Sửa chức vụ</td>
                                    <td class="text-start">/api/admin/chuc-vu</td>
                                    <td class="text-start">PUT</td>
                                    <td class="text-start">Sửa chức vụ</td>
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
                                    <td>Xóa chức vụ</td>
                                    <td class="text-start">/api/admin/chuc-vu</td>
                                    <td class="text-start">DELETE</td>
                                    <td class="text-start">Xóa chức vụ</td>
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
                                    <td>Danh sách nhân viên</td>
                                    <td class="text-start">/api/admin/nhan-vien</td>
                                    <td class="text-start">GET</td>
                                    <td class="text-start">Danh sách nhân viên</td>
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
                                    <td>6</td>
                                    <td>Thêm nhân viên</td>
                                    <td class="text-start">/api/admin/nhan-vien</td>
                                    <td class="text-start">POST</td>
                                    <td class="text-start">Thêm nhân viên</td>
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
                                    <td>7</td>
                                    <td>Sửa nhân viên</td>
                                    <td class="text-start">/api/admin/nhan-vien</td>
                                    <td class="text-start">PUT</td>
                                    <td class="text-start">Sửa nhân viên</td>
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
                                    <td>8</td>
                                    <td>Xóa nhân viên</td>
                                    <td class="text-start">/api/admin/nhan-vien</td>
                                    <td class="text-start">DELETE</td>
                                    <td class="text-start">Xóa nhân viên</td>
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
                    <h5 class="modal-title">Cập Nhật Chức Năng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-md-12 mb-3">
                                <label class="form-label fw-bold">Tên Chức Năng</label>
                                <input type="text" class="form-control" value="Quản lý sản phẩm">
                            </div>

                            <div class="col-md-12 mb-3">
                                <label class="form-label fw-bold">Mô Tả</label>
                                <textarea class="form-control" rows="3">Xem danh sách sản phẩm mẫu</textarea>
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
                    <h5 class="modal-title text-white">Xóa Chức Năng</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body text-center py-4">
                    <i class="fa fa-exclamation-triangle text-warning mb-3" style="font-size: 3rem;"></i>
                    <h5 class="fw-bold fs-5">Bạn có chắc chắn muốn xóa chức năng này?</h5>
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
    name: "ChucNangManager"
}
</script>

<style scoped></style>
