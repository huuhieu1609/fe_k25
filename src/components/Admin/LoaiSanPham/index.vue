<template>
    <div class="row">
        <!-- 1. Thêm Mới Loại Sản Phẩm -->
        <div class="col-lg-4">
            <div class="card border-top border-0 border-4 border-primary mt-2 shadow-sm">
                <div class="card-header">
                    <h5 class="card-title">Thêm Mới Loại Sản Phẩm</h5>
                </div>
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tên Loại Sản Phẩm</label>
                            <input type="text" class="form-control" placeholder="Nhập tên loại sản phẩm...">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Slug Loại Sản Phẩm</label>
                            <input type="text" class="form-control" placeholder="Nhập slug loại sản phẩm...">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Sản Phẩm</label>
                            <select class="form-select">
                                <option value="">Chọn sản phẩm...</option>
                                <option value="1">Sản phẩm A</option>
                                <option value="2">Sản phẩm B</option>
                                <option value="3">Sản phẩm C</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Mô Tả</label>
                            <textarea class="form-control" rows="3"
                                placeholder="Nhập mô tả về dòng sản phẩm này..."></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tình Trạng</label>
                            <select class="form-select">
                                <option value="1" selected>Hoạt Động</option>
                                <option value="0">Tạm Dừng</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-primary px-4 shadow-sm">Thêm Mới</button>
                </div>
            </div>
        </div>

        <!-- 2. Danh Sách Loại Sản Phẩm -->
        <div class="col-lg-8">
            <div class="card border-top border-0 border-4 border-primary mt-2 shadow-sm">
                <div class="card-header">
                    <h5 class="card-title">Danh Sách Loại Sản Phẩm</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped table-hover align-middle">
                            <thead class="text-center text-nowrap table-light">
                                <tr>
                                    <th>STT</th>
                                    <th>Tên Loại Sản Phẩm</th>
                                    <th>Sản Phẩm</th>
                                    <th>Mô Tả</th>
                                    <th>Tình Trạng</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center">
                                    <td>1</td>
                                    <td class="text-start">Trái Cây</td>
                                    <td>Sản phẩm A</td>
                                    <td class="text-start small text-muted">Các loại hoa quả trong nước và nhập khẩu cao
                                        cấp.</td>
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
                                    <td class="text-start">Thịt & Hải Sản</td>
                                    <td>Sản phẩm B</td>
                                    <td class="text-start small text-muted">Hải sản tươi sống và các loại thịt sạch đạt
                                        chuẩn chất lượng.</td>
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
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Edit Modal -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Cập Nhật Loại Sản Phẩm</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tên Loại Sản Phẩm</label>
                            <input type="text" class="form-control" value="Trái Cây">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Slug Loại Sản Phẩm</label>
                            <input type="text" class="form-control" value="trai-cay">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Sản Phẩm</label>
                            <select class="form-select">
                                <option value="1" selected>Sản phẩm A</option>
                                <option value="2">Sản phẩm B</option>
                                <option value="3">Sản phẩm C</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Mô Tả</label>
                            <textarea class="form-control" rows="3">Các loại hoa quả trong nước và nhập khẩu</textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tình Trạng</label>
                            <select class="form-select">
                                <option value="1" selected>Hoạt Động</option>
                                <option value="0">Tạm Dừng</option>
                            </select>
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
                    <h5 class="modal-title text-white">Xóa Loại Sản Phẩm</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body text-center py-4">
                    <i class="fa fa-exclamation-triangle text-warning mb-3" style="font-size: 3rem;"></i>
                    <h5 class="fw-bold fs-5">Bạn có chắc chắn muốn xóa loại sản phẩm này?</h5>
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
    name: "LoaiSanPhamManager",
    data() {
        return {

        }
    }
}
</script>

<style></style>
