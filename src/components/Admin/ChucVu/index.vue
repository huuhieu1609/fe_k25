<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="card border-top border-0 border-4 border-primary">
                    <div class="card-header">
                        <h5 class="card-title">Thêm chức vụ</h5>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label for="ten_chuc_vu" class="form-label fw-bold">Tên chức vụ</label>
                                <input type="text" class="form-control" placeholder="nhập tên chức vụ">
                            </div>
                            <div class="mb-3">
                                <label for="slug_chuc_vu" class="form-label fw-bold">Slug chức vụ</label>
                                <input type="text" class="form-control" placeholder="nhập slug chức vụ">
                            </div>
                            <div class="mb-3">
                                <label for="tinh_trang" class="form-label fw-bold">Tình trạng</label>
                                <select class="form-select">
                                    <option value="Đang làm việc">Đang làm việc</option>
                                    <option value="Đã nghỉ việc">Đã nghỉ việc</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="mo_ta" class="form-label fw-bold">Mô tả</label>
                                <textarea class="form-control"></textarea>
                            </div>

                        </form>
                    </div>
                    <div class="card-footer text-end">
                        <button class="btn btn-primary">Thêm mới</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="card border-top border-0 border-4 border-primary">
                    <div class="card-header">
                        <h5 class="card-title">Danh sách chức vụ</h5>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped table-hover">
                                <thead>
                                    <tr class="text-center">
                                        <th>STT</th>
                                        <th>Tên chức vụ</th>
                                        <th>Slug chức vụ</th>
                                        <th>Tình trạng</th>
                                        <th>Mô tả</th>
                                        <th>Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-center align-middle">
                                        <td>1</td>
                                        <td>Nhân viên</td>
                                        <td>nhan-vien</td>
                                        <td>Đang làm việc</td>
                                        <td>Nhân viên chính thức</td>
                                        <td>
                                            <button class="btn btn-warning me-2" data-bs-toggle="modal"
                                                data-bs-target="#editModal"><i class="fa fa-edit"></i>Cập Nhật</button>
                                            <button class="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal"><i class="fa fa-trash"></i>Xóa</button>
                                        </td>
                                    </tr>
                                    <tr class="text-center align-middle">
                                        <td>2</td>
                                        <td>Quản Lý</td>
                                        <td>quan-ly</td>
                                        <td>Đang làm việc</td>
                                        <td>Quản Lý chính thức</td>
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
    <!-- modal thêm chức vụ -->
    <div class="modal fade" id="addModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Thêm chức vụ</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="ten_chuc_vu" class="form-label">Tên chức vụ</label>
                            <input type="text" class="form-control" placeholder="nhập tên chức vụ">
                        </div>
                        <div class="mb-3">
                            <label for="slug_chuc_vu" class="form-label">Slug chức vụ</label>
                            <input type="text" class="form-control" placeholder="nhập slug chức vụ">
                        </div>
                        <div class="mb-3">
                            <label for="tinh_trang" class="form-label">Tình trạng</label>
                            <select class="form-select">
                                <option value="Đang làm việc">Đang làm việc</option>
                                <option value="Đã nghỉ việc">Đã nghỉ việc</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="mo_ta" class="form-label">Mô tả</label>
                            <textarea class="form-control" placeholder="nhập mô tả"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Thêm mới</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- modal cập nhật chức vụ -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Cập nhật chức vụ</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="ten_chuc_vu" class="form-label">Tên chức vụ</label>
                            <input type="text" class="form-control" placeholder="nhập tên chức vụ">
                        </div>
                        <div class="mb-3">
                            <label for="slug_chuc_vu" class="form-label">Slug chức vụ</label>
                            <input type="text" class="form-control" placeholder="nhập slug chức vụ">
                        </div>
                        <div class="mb-3">
                            <label for="tinh_trang" class="form-label">Tình trạng</label>
                            <select class="form-select">
                                <option value="Đang làm việc">Đang làm việc</option>
                                <option value="Đã nghỉ việc">Đã nghỉ việc</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="mo_ta" class="form-label">Mô tả</label>
                            <textarea class="form-control" placeholder="nhập mô tả"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Cập nhật</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- modal xóa chức vụ -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title text-white">Xóa Chức Vụ</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body text-center py-4">
                    <i class="fa fa-exclamation-triangle text-warning mb-3" style="font-size: 3rem;"></i>
                    <h5 class="fw-bold fs-5">Bạn có chắc chắn muốn xóa chức vụ này?</h5>
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