<template>

    <div class="row">
        <div class="col-lg-12">
            <div class="card border-top border-0 border-4 border-primary mt-2">
                <div class="card-header">
                    <div class="row">
                        <div class="col-lg-6">
                            <h3>Danh sách nhà cung cấp</h3>
                        </div>
                        <div class="col-lg-6 text-end">
                            <button class="btn btn-primary px-4" data-bs-toggle="modal" data-bs-target="#addModal">
                                <i class="fa fa-plus me-1"></i>Thêm mới
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
                                    <th>Tên Nhà Cung Cấp</th>
                                    <th>Số Điện Thoại</th>
                                    <th>Email</th>
                                    <th>Địa Chỉ</th>
                                    <th>Mã Số Thuế</th>
                                    <th>Ghi Chú</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center">
                                    <td>1</td>
                                    <td>Công ty TNHH Thực Phẩm Sạch</td>
                                    <td>0987654321</td>
                                    <td>contact@thucphamsach.com</td>
                                    <td>123 Nguyễn Huệ, Quận 1, HCM</td>
                                    <td>0101234567</td>
                                    <td>Cung cấp rau củ quả</td>
                                    <td class="text-nowrap">
                                        <button class="btn btn-warning me-2" data-bs-toggle="modal"
                                            data-bs-target="#editModal">
                                            <i class="fa fa-edit"></i> Cập Nhật
                                        </button>
                                        <button class="btn btn-danger" data-bs-toggle="modal"
                                            data-bs-target="#deleteModal">
                                            <i class="fa fa-trash"></i> Xóa
                                        </button>
                                    </td>
                                </tr>
                                <tr class="text-center">
                                    <td>2</td>
                                    <td>Đại lý Bia Nước Ngọt ABC</td>
                                    <td>0905123456</td>
                                    <td>dailyabc@gmail.com</td>
                                    <td>456 Lê Lợi, Đà Nẵng</td>
                                    <td>0405678901</td>
                                    <td>Cung cấp đồ uống các loại</td>
                                    <td class="text-nowrap">
                                        <button class="btn btn-warning me-2" data-bs-toggle="modal"
                                            data-bs-target="#editModal">
                                            <i class="fa fa-edit"></i> Cập Nhật
                                        </button>
                                        <button class="btn btn-danger" data-bs-toggle="modal"
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
                    <h5 class="modal-title">Thêm Mới Nhà Cung Cấp</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Tên Nhà Cung Cấp</label>
                                <input type="text" class="form-control" placeholder="Nhập tên nhà cung cấp">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Số Điện Thoại</label>
                                <input type="text" class="form-control" placeholder="Nhập số điện thoại">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Email</label>
                                <input type="email" class="form-control" placeholder="Nhập email">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Mã Số Thuế</label>
                                <input type="text" class="form-control" placeholder="Nhập mã số thuế">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Địa Chỉ</label>
                            <input type="text" class="form-control" placeholder="Nhập địa chỉ">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Ghi Chú</label>
                            <textarea class="form-control" rows="3" placeholder="Nhập ghi chú"></textarea>
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

    <!-- Edit Modal -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Cập Nhật Nhà Cung Cấp</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Tên Nhà Cung Cấp</label>
                                <input type="text" class="form-control" value="Công ty TNHH Thực Phẩm Sạch">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Số Điện Thoại</label>
                                <input type="text" class="form-control" value="0987654321">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Email</label>
                                <input type="email" class="form-control" value="contact@thucphamsach.com">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Mã Số Thuế</label>
                                <input type="text" class="form-control" value="0101234567">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Địa Chỉ</label>
                            <input type="text" class="form-control" value="123 Nguyễn Huệ, Quận 1, HCM">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Ghi Chú</label>
                            <textarea class="form-control" rows="3">Cung cấp rau củ quả</textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary">Cập Nhật</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Delete Modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title text-white">Xóa Nhà Cung Cấp</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body text-center py-4">
                    <i class="fa fa-exclamation-triangle text-warning mb-3" style="font-size: 3rem;"></i>
                    <h5 class="fw-bold fs-5">Bạn có chắc chắn muốn xóa nhà cung cấp này?</h5>
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
    name: 'NhaCungCapManager',
    data() {
        return {
        }
    }
}
</script>

<style scoped></style>
