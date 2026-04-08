<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card border-top border-0 border-4 border-primary mt-2 shadow-sm">
                <div class="card-header">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <h5 class="card-title mb-0">Danh Sách Sản Phẩm</h5>
                        </div>
                        <div class="col-lg-6 text-end">
                            <button class="btn btn-primary px-4 shadow-sm" data-bs-toggle="modal"
                                data-bs-target="#addModal">
                                <i class="fa fa-plus me-1"></i>Thêm Mới
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped table-hover align-middle">
                            <thead class="text-center text-nowrap table-light">
                                <tr>
                                    <th>STT</th>
                                    <th>Hình Ảnh</th>
                                    <th>Tên Sản Phẩm</th>
                                    <th>Loại Sản Phẩm</th>
                                    <th>Mô Tả</th>
                                    <th>Đơn Vị Tính</th>
                                    <th>Quản Lý Lô</th>
                                    <th>Quản Lý Serial</th>
                                    <th>Thuế VAT (%)</th>
                                    <th>Giá Nhập (Đ)</th>
                                    <th>Giá Bán (Đ)</th>
                                    <th>Tồn Tối Thiểu</th>
                                    <th>Trạng Thái</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center">
                                    <td>1</td>
                                    <td>
                                        <img src="https://tse1.mm.bing.net/th/id/OIP.1SqYM2HBWs9XERxsCusCXQHaE7?pid=Api&P=0&h=220"
                                            alt="Nho Mẫu Đơn" class="img-fluid rounded shadow-sm"
                                            style="width: 60px; height: 60px; object-fit: cover;">
                                    </td>
                                    <td class="text-start fw-bold">Nho Mẫu Đơn</td>
                                    <td>Trái Cây</td>
                                    <td class="text-start small">Nho mẫu đơn tươi ngon nhập khẩu từ các nông trại tiêu
                                        chuẩn.</td>
                                    <td>Hộp</td>
                                    <td class="text-center text-success fw-bold">Có</td>
                                    <td class="text-center text-secondary">Không</td>

                                    <td>10%</td>
                                    <td class="text-end fw-bold">100,000 đ</td>
                                    <td class="text-end fw-bold text-danger">150,000 đ</td>
                                    <td>10</td>
                                    <td>
                                        <button class="btn btn-success btn-sm w-100 shadow-sm">Còn Kinh Doanh</button>
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
                                    <td>
                                        <img src="https://cdn.tgdd.vn/2021/03/content/10-800x450-18.jpg"
                                            alt="Thịt Ba Rọi" class="img-fluid rounded shadow-sm"
                                            style="width: 60px; height: 60px; object-fit: cover;">
                                    </td>
                                    <td class="text-start fw-bold">Thịt Ba Rọi</td>
                                    <td>Thịt & Hải Sản</td>
                                    <td class="text-start small">Thịt heo sạch, tươi trong ngày, đảm bảo vệ sinh an toàn
                                        thực phẩm.</td>
                                    <td>KG</td>
                                    <td class="text-center text-secondary">Không</td>
                                    <td class="text-center text-secondary">Không</td>
                                    <td>8%</td>
                                    <td class="text-end fw-bold">250,000 đ</td>
                                    <td class="text-end fw-bold text-danger">385,000 đ</td>
                                    <td>20</td>
                                    <td>
                                        <button class="btn btn-danger btn-sm w-100 shadow-sm">Ngừng Kinh Doanh</button>
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
                                    <td>3</td>
                                    <td>
                                        <img src="https://tse2.mm.bing.net/th/id/OIP.ocxk4giN-VfheOY07ZePQwHaHa?pid=Api&P=0&h=220"
                                            alt="Bia Hà Nội" class="img-fluid rounded shadow-sm"
                                            style="width: 60px; height: 60px; object-fit: cover;">
                                    </td>
                                    <td class="text-start fw-bold">Bia Hà Nội (Thùng 24 lon)</td>
                                    <td>Đồ Uống</td>
                                    <td class="text-start small">Bia Hà Nội truyền thống, hương vị đậm đà, mát lạnh sảng
                                        khoái.</td>
                                    <td>Thùng</td>
                                    <td class="text-center text-success fw-bold">Có</td>
                                    <td class="text-center text-success fw-bold">Có</td>
                                    <td>8%</td>
                                    <td class="text-end fw-bold">250,000 đ</td>
                                    <td class="text-end fw-bold text-danger">385,000 đ</td>
                                    <td>20</td>
                                    <td>
                                        <button class="btn btn-success btn-sm w-100 shadow-sm">Còn Kinh Doanh</button>
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

        <!-- Add Modal -->
        <div class="modal fade" id="addModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title">Thêm Mới Sản Phẩm</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Tên Sản Phẩm</label>
                                    <input type="text" class="form-control shadow-sm" placeholder="Nhập tên sản phẩm">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Hình Ảnh (URL)</label>
                                    <input type="text" class="form-control shadow-sm" placeholder="Nhập URL hình ảnh">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <label class="form-label fw-bold">Đơn Vị Tính</label>
                                    <input type="text" class="form-control shadow-sm" placeholder="Ví dụ: Cái, Hộp, KG">
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label class="form-label fw-bold">Quản Lý Lô</label>
                                    <select class="form-select shadow-sm">
                                        <option value="1">Có</option>
                                        <option value="0" selected>Không</option>
                                    </select>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label class="form-label fw-bold">Quản Lý Serial</label>
                                    <select class="form-select shadow-sm">
                                        <option value="1">Có</option>
                                        <option value="0" selected>Không</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Thuế VAT (%)</label>
                                    <input type="number" class="form-control shadow-sm" value="10">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Giá Nhập Mặc Định</label>
                                    <input type="number" class="form-control shadow-sm" placeholder="0">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Giá Bán Mặc Định</label>
                                    <input type="number" class="form-control shadow-sm" placeholder="0">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Tồn Tối Thiểu</label>
                                    <input type="number" class="form-control shadow-sm" value="10">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Trạng Thái</label>
                                    <select class="form-select shadow-sm">
                                        <option value="1" selected>Còn Kinh Doanh</option>
                                        <option value="0">Ngừng Kinh Doanh</option>
                                    </select>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Loại Sản Phẩm</label>
                                    <select class="form-select shadow-sm">
                                        <option value="">Chọn loại sản phẩm...</option>
                                        <option value="1">Trái Cây</option>
                                        <option value="2">Thịt & Hải Sản</option>
                                        <option value="3">Đồ Uống</option>
                                    </select>
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label fw-bold">Mô Tả Sản Phẩm</label>
                                    <textarea class="form-control shadow-sm" rows="3"
                                        placeholder="Nhập mô tả sản phẩm..."></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer text-end">
                        <button type="button" class="btn btn-secondary shadow-sm" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" class="btn btn-primary px-4 shadow-sm">Lưu Sản Phẩm</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Edit Modal -->
        <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header bg-info text-white">
                        <h5 class="modal-title">Cập Nhật Sản Phẩm</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Tên Sản Phẩm</label>
                                    <input type="text" class="form-control shadow-sm" value="Sản Phẩm A">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Hình Ảnh (URL)</label>
                                    <input type="text" class="form-control shadow-sm"
                                        value="https://via.placeholder.com/50">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <label class="form-label fw-bold">Đơn Vị Tính</label>
                                    <input type="text" class="form-control shadow-sm" value="Hộp">
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label class="form-label fw-bold">Quản Lý Lô</label>
                                    <select class="form-select shadow-sm">
                                        <option value="1" selected>Có</option>
                                        <option value="0">Không</option>
                                    </select>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label class="form-label fw-bold">Quản Lý Serial</label>
                                    <select class="form-select shadow-sm">
                                        <option value="1">Có</option>
                                        <option value="0" selected>Không</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Thuế VAT (%)</label>
                                    <input type="number" class="form-control shadow-sm" value="10">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Giá Nhập Mặc Định</label>
                                    <input type="number" class="form-control shadow-sm" value="100000">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Giá Bán Mặc Định</label>
                                    <input type="number" class="form-control shadow-sm" value="150000">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Tồn Tối Thiểu</label>
                                    <input type="number" class="form-control shadow-sm" value="10">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Trạng Thái</label>
                                    <select class="form-select shadow-sm">
                                        <option value="1" selected>Còn Kinh Doanh</option>
                                        <option value="0">Ngừng Kinh Doanh</option>
                                    </select>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Loại Sản Phẩm</label>
                                    <select class="form-select shadow-sm">
                                        <option value="1" selected>Trái Cây</option>
                                        <option value="2">Thịt & Hải Sản</option>
                                        <option value="3">Đồ Uống</option>
                                    </select>
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label fw-bold">Mô Tả Sản Phẩm</label>
                                    <textarea class="form-control shadow-sm" rows="3">Mô tả sản phẩm mẫu...</textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer text-end">
                        <button type="button" class="btn btn-secondary shadow-sm" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" class="btn btn-info text-white px-4 shadow-sm">Cập Nhật Sản Phẩm</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Delete Modal -->
        <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title text-white">Xóa Sản Phẩm</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center py-4">
                        <i class="fa fa-exclamation-triangle text-warning mb-3" style="font-size: 3rem;"></i>
                        <h5 class="fw-bold fs-5">Bạn có chắc chắn muốn xóa sản phẩm này?</h5>
                        <p class="text-muted small">Hành động này không thể hoàn tác.</p>
                    </div>
                    <div class="modal-footer justify-content-center">
                        <button type="button" class="btn btn-secondary px-4 shadow-sm"
                            data-bs-dismiss="modal">Hủy</button>
                        <button type="button" class="btn btn-danger px-4 shadow-sm">Xác Nhận Xóa</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SanPhamManager',
    data() {
        return {
        }
    }
}
</script>

<style scoped></style>
