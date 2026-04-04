<template>

    <div class="contrainer">
        <div class="row">
            <div class="col-lg-12">
                <div class="card border-top border-0 border-4 border-primary">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-lg-6">
                                <h3>Danh sách nhân viên</h3>
                            </div>
                            <div class="col-lg-6 text-end">
                                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal"><i
                                        class="fa fa-plus"></i>Thêm mới</button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped table-hover">
                                <thead>
                                    <tr class="text-center">
                                        <th>STT</th>
                                        <th>Họ và tên</th>
                                        <th>Số điện thoại</th>
                                        <th>Email</th>
                                        <th>Địa chỉ</th>
                                        <th>Ngày sinh</th>
                                        <th>Giới tính</th>
                                        <th>Tình trạng</th>
                                        <th>Chức vụ</th>
                                        <th>Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-center align-middle">
                                        <td>1</td>
                                        <td>Nguyễn Văn A</td>
                                        <td>0123456789</td>
                                        <td>nguyenvana@gmail.com</td>
                                        <td>Đà Nẵng</td>
                                        <td>1999-12-12</td>
                                        <td>Nam</td>
                                        <td><button class="btn btn-success btn-sm w-100">Đang làm việc</button></td>
                                        <td>Admin</td>
                                        <td>
                                            <button class="btn btn-warning me-2" data-bs-toggle="modal"
                                                data-bs-target="#editModal"><i class="fa fa-edit"></i>Cập Nhật</button>
                                            <button class="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal"><i class="fa fa-trash"></i>Xóa</button>
                                        </td>
                                    </tr>
                                    <tr class="text-center align-middle">
                                        <td>2</td>
                                        <td>Nguyễn Thị B</td>
                                        <td>0123456789</td>
                                        <td>nguyenthib@gmail.com</td>
                                        <td>Hà Nội</td>
                                        <td>1990-01-01</td>
                                        <td>Nữ</td>
                                        <td><button class="btn btn-success btn-sm w-100">Đang làm việc</button></td>
                                        <td>Nhân viên</td>
                                        <td>
                                            <button class="btn btn-warning me-2" data-bs-toggle="modal"
                                                data-bs-target="#editModal"><i class="fa fa-edit"></i>Cập Nhật</button>
                                            <button class="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal"><i class="fa fa-trash"></i>Xóa</button>
                                        </td>
                                    </tr>
                                    <tr class="text-center align-middle">
                                        <td>3</td>
                                        <td>Nguyễn Thị C</td>
                                        <td>0123456789</td>
                                        <td>nguyenthic@gmail.com</td>
                                        <td>Hồ Chí Minh</td>
                                        <td>2000-12-09</td>
                                        <td>Nữ</td>
                                        <td><button class="btn btn-success btn-sm w-100">Đang làm việc</button></td>
                                        <td>Quản Lý</td>
                                        <td>
                                            <button class="btn btn-warning me-2" data-bs-toggle="modal"
                                                data-bs-target="#editModal"><i class="fa fa-edit"></i>Cập Nhật</button>
                                            <button class="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal"><i class="fa fa-trash"></i>Xóa</button>
                                        </td>
                                    </tr>
                                    <tr class="text-center align-middle">
                                        <td>4</td>
                                        <td>Nguyễn Thị D</td>
                                        <td>0123456789</td>
                                        <td>nguyenthid@gmail.com</td>
                                        <td>Hồ Chí Minh</td>
                                        <td>2004-16-09</td>
                                        <td>Nữ</td>
                                        <td><button class="btn btn-success btn-sm w-100">Đang làm việc</button></td>
                                        <td>Nhân viên</td>
                                        <td>
                                            <button class="btn btn-warning me-2" data-bs-toggle="modal"
                                                data-bs-target="#editModal"><i class="fa fa-edit"></i>Cập Nhật</button>
                                            <button class="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal"><i class="fa fa-trash"></i>Xóa</button>
                                        </td>
                                    </tr>
                                    <tr class="text-center align-middle">
                                        <td>5</td>
                                        <td>Nguyễn Thị E</td>
                                        <td>0123456789</td>
                                        <td>nguyenthie@gmail.com</td>
                                        <td>Hà Nội</td>
                                        <td>1990-01-01</td>
                                        <td>Nữ</td>
                                        <td><button class="btn btn-success btn-sm w-100">Đang làm việc</button></td>
                                        <td>Nhân viên</td>
                                        <td>
                                            <button class="btn btn-warning me-2" data-bs-toggle="modal"
                                                data-bs-target="#editModal"><i class="fa fa-edit"></i>Cập Nhật</button>
                                            <button class="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal"><i class="fa fa-trash"></i>Xóa</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
                    <h5 class="modal-title">Thêm mới nhân viên</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="ho_va_ten" class="form-label">Họ và tên</label>
                                    <input type="text" class="form-control" placeholder="nhập họ và tên">
                                </div>

                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="so_dien_thoai" class="form-label">Số điện thoại</label>
                                    <input type="text" class="form-control" placeholder="nhập số điện thoại">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="text" class="form-control" placeholder="nhập email">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="tinh_trang" class="form-label">Tình trạng</label>
                                    <select class="form-select">
                                        <option value="Đang làm việc">Đang làm việc</option>
                                        <option value="Đã nghỉ việc">Đã nghỉ việc</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="ngay_sinh" class="form-label">Ngày sinh</label>
                                    <input type="date" class="form-control" placeholder="nhập ngày sinh">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="gioi_tinh" class="form-label">Giới tính</label>
                                    <select class="form-select">
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="id_chuc_vu" class="form-label">Chức vụ</label>
                            <select class="form-select">
                                <option value="1">Nhân viên</option>
                                <option value="2">Quản lý</option>
                                <option value="3">Admin</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary">Lưu</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Edit Modal -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Cập Nhật Nhân Viên</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="ho_va_ten" class="form-label">Họ và tên</label>
                                    <input type="text" class="form-control" placeholder="nhập họ và tên">
                                </div>

                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="so_dien_thoai" class="form-label">Số điện thoại</label>
                                    <input type="text" class="form-control" placeholder="nhập số điện thoại">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="text" class="form-control" placeholder="nhập email">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="tinh_trang" class="form-label">Tình trạng</label>
                                    <select class="form-select">
                                        <option value="Đang làm việc">Đang làm việc</option>
                                        <option value="Đã nghỉ việc">Đã nghỉ việc</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="ngay_sinh" class="form-label">Ngày sinh</label>
                                    <input type="date" class="form-control" placeholder="nhập ngày sinh">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="gioi_tinh" class="form-label">Giới tính</label>
                                    <select class="form-select">
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="id_chuc_vu" class="form-label">Chức vụ</label>
                            <select class="form-select">
                                <option value="1">Nhân viên</option>
                                <option value="2">Quản lý</option>
                                <option value="3">Admin</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary">Lưu</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Delete Modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title text-white">Xóa Nhân Viên</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body text-center py-4">
                    <i class="fa fa-exclamation-triangle text-warning mb-3" style="font-size: 3rem;"></i>
                    <h5 class="fw-bold">Bạn có chắc chắn muốn xóa nhân viên này?</h5>
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

}
</script>
<style></style>