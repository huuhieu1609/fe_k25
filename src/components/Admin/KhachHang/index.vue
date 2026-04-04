<template>

    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="card border-top border-0 border-4 border-primary">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="card-title">Danh sách khách hàng</h5>
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">Thêm
                            mới</button>
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
                                        <th>Điểm tích lũy</th>
                                        <th>Ghi chú</th>
                                        <th>Trạng thái</th>
                                        <th>Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-center align-middle">
                                        <td>1</td>
                                        <td>Nguyễn Văn A</td>
                                        <td>0123456789</td>
                                        <td>nguyenvana@gmail.com</td>
                                        <td>Hà Nội</td>
                                        <td>100</td>
                                        <td>Khách hàng thân thiết</td>
                                        <td><button class="btn btn-success btn-sm w-100">Đang hoạt động</button></td>
                                        <td>
                                            <button class="btn btn-warning me-2" data-bs-toggle="modal"
                                                data-bs-target="#editModal"><i class="fa fa-edit"></i>Cập Nhật</button>
                                            <button class="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal"><i class="fa fa-trash"></i>Xóa</button>
                                        </td>
                                    </tr>
                                    <tr class="text-center align-middle">
                                        <td>2</td>
                                        <td>Nguyễn Văn B</td>
                                        <td>0123456789</td>
                                        <td>nguyenvanb@gmail.com</td>
                                        <td>Hà Nội</td>
                                        <td>100</td>
                                        <td>Khách hàng thân thiết</td>
                                        <td><button class="btn btn-danger btn-sm w-100">Đã nghỉ việc</button></td>
                                        <td>
                                            <button class="btn btn-warning me-2" data-bs-toggle="modal"
                                                data-bs-target="#editModal"><i class="fa fa-edit"></i>Cập Nhật</button>
                                            <button class="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal"><i class="fa fa-trash"></i>Xóa</button>
                                        </td>
                                    </tr>
                                    <tr class="text-center align-middle">
                                        <td>3</td>
                                        <td>Nguyễn Văn C</td>
                                        <td>0123456789</td>
                                        <td>nguyenvanc@gmail.com</td>
                                        <td>Hà Nội</td>
                                        <td>100</td>
                                        <td>Khách hàng thân thiết</td>
                                        <td><button class="btn btn-success btn-sm w-100">Đang hoạt động</button></td>
                                        <td>
                                            <button class="btn btn-warning me-2" data-bs-toggle="modal"
                                                data-bs-target="#editModal"><i class="fa fa-edit"></i>Cập Nhật</button>
                                            <button class="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal"><i class="fa fa-trash"></i>Xóa</button>
                                        </td>
                                    </tr>
                                    <tr class="text-center align-middle">
                                        <td>4</td>
                                        <td>Nguyễn Văn D</td>
                                        <td>0123456789</td>
                                        <td>nguyenvand@gmail.com</td>
                                        <td>Hà Nội</td>
                                        <td>100</td>
                                        <td>Khách hàng thân thiết</td>
                                        <td><button class="btn btn-danger btn-sm w-100">Đã nghỉ việc</button></td>
                                        <td>
                                            <button class="btn btn-warning me-2" data-bs-toggle="modal"
                                                data-bs-target="#editModal"><i class="fa fa-edit"></i>Cập Nhật</button>
                                            <button class="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal"><i class="fa fa-trash"></i>Xóa</button>
                                        </td>
                                    </tr>
                                    <tr class="text-center align-middle">
                                        <td>5</td>
                                        <td>Nguyễn Văn E</td>
                                        <td>0123456789</td>
                                        <td>nguyenvane@gmail.com</td>
                                        <td>Hà Nội</td>
                                        <td>100</td>
                                        <td>Khách hàng thân thiết</td>
                                        <td><button class="btn btn-success btn-sm w-100">Đang hoạt động</button></td>
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
    <div class="modal fade" id="addModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Thêm mới khách hàng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="ho_ten" class="form-label">Họ tên</label>
                                    <input type="text" class="form-control" placeholder="Nhập họ tên">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="so_dien_thoai" class="form-label">Số điện thoại</label>
                                    <input type="text" class="form-control" placeholder="Nhập số điện thoại">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="text" class="form-control" placeholder="Nhập email">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="dia_chi" class="form-label">Địa chỉ</label>
                                    <input type="text" class="form-control" placeholder="Nhập địa chỉ">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="diem_tich_luy" class="form-label">Điểm tích lũy</label>
                                    <input type="text" class="form-control" placeholder="Nhập điểm tích lũy">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="ghi_chu" class="form-label">Ghi chú</label>
                                    <input type="text" class="form-control" placeholder="Nhập ghi chú">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="trang_thai" class="form-label">Trạng thái</label>
                                    <input type="text" class="form-control" placeholder="Nhập trạng thái">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary">Thêm mới</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Cập nhật khách hàng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="ho_ten" class="form-label">Họ tên</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="so_dien_thoai" class="form-label">Số điện thoại</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="dia_chi" class="form-label">Địa chỉ</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="diem_tich_luy" class="form-label">Điểm tích lũy</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="ghi_chu" class="form-label">Ghi chú</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="trang_thai" class="form-label">Trạng thái</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary">Cập nhật</button>
                </div>
            </div>
        </div>
    </div>
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