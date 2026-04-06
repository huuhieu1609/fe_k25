<template>
    <div class="row">
        <!-- 1. Thêm Chức Vụ -->
        <div class="col-lg-4">
            <div class="card border-top border-0 border-4 border-primary mt-2 shadow-sm">
                <div class="card-header">
                    <h5 class="card-title">Thêm Chức Vụ</h5>
                </div>
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tên Chức Vụ</label>
                            <input type="text" class="form-control" placeholder="nhập tên Chức Vụ">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Slug Chức Vụ</label>
                            <input type="text" class="form-control" placeholder="nhập slug Chức Vụ">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tình trạng</label>
                            <select class="form-select">
                                <option value="Đang làm việc">Đang làm việc</option>
                                <option value="Đã nghỉ việc">Đã nghỉ việc</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Mô tả</label>
                            <textarea class="form-control" rows="3" placeholder="nhập mô tả"></textarea>
                        </div>
                    </form>
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-primary px-4 shadow-sm">Thêm mới</button>
                </div>
            </div>
        </div>

        <!-- 2. Danh Sách Chức Vụ -->
        <div class="col-lg-8">
            <div class="card border-top border-0 border-4 border-primary mt-2 shadow-sm">
                <div class="card-header">
                    <h5 class="card-title">Danh sách Chức Vụ</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped table-hover align-middle">
                            <thead class="text-center text-nowrap table-light">
                                <tr>
                                    <th>STT</th>
                                    <th>Tên Chức Vụ</th>
                                    <th>Tình trạng</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center">
                                    <td>1</td>
                                    <td class="text-start">Nhân viên</td>
                                    <td>
                                        <button class="btn btn-success btn-sm w-100 shadow-sm">Đang làm việc</button>
                                    </td>
                                    <td class="text-nowrap text-center">
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
                                    <td class="text-start">Quản Lý</td>
                                    <td>
                                        <button class="btn btn-success btn-sm w-100 shadow-sm">Đang làm việc</button>
                                    </td>
                                    <td class="text-nowrap text-center">
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

    <!-- modal cập nhật Chức Vụ -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Cập nhật Chức Vụ</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tên Chức Vụ</label>
                            <input type="text" class="form-control" placeholder="nhập tên Chức Vụ">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Slug Chức Vụ</label>
                            <input type="text" class="form-control" placeholder="nhập slug Chức Vụ">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tình trạng</label>
                            <select class="form-select">
                                <option value="1">Đang làm việc</option>
                                <option value="0">Đã nghỉ việc</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Mô tả</label>
                            <textarea class="form-control" rows="3" placeholder="nhập mô tả"></textarea>
                        </div>
                        <div class="modal-footer ">
                            <button type="button" class="btn btn-secondary px-4 shadow-sm"
                                data-bs-dismiss="modal">Hủy</button>
                            <button type="button" class="btn btn-primary px-4 shadow-sm">Cập Nhật</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- modal xóa Chức Vụ -->
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
                    <h5 class="fw-bold fs-5">Bạn có chắc chắn muốn xóa Chức Vụ này?</h5>
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
    data() {
        return {

        }
    }
}
</script>

<style></style>
