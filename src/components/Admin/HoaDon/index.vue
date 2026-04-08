<template>
    <div class="row">
        <!-- 1. Form Tạo Hóa Đơn (Trái - 4) -->
        <div class="col-lg-4">
            <div class="card border-top border-0 border-4 border-primary shadow-sm mt-2">
                <div class="card-header">
                    <h5 class="card-title mb-0">Tạo Mới Hóa Đơn</h5>
                </div>
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Khách Hàng</label>
                            <select class="form-select shadow-sm">
                                <option selected disabled>Chọn khách hàng...</option>
                                <option value="1">Nguyễn Văn A</option>
                                <option value="2">Trần Thị B</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Nhân Viên Bán Hàng</label>
                            <select class="form-select shadow-sm">
                                <option value="1">Nguyễn Văn A</option>
                                <option value="2">Trần Thị B</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Ca Làm Việc</label>
                            <select class="form-select shadow-sm border-primary">
                                <option selected disabled>Chọn ca làm việc...</option>
                                <option value="1">Ca Sáng (06:00 - 14:00)</option>
                                <option value="2">Ca Chiều (14:00 - 22:00)</option>
                            </select>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Mã Hóa Đơn</label>
                                <input type="text" class="form-control " placeholder="Nhập Mã Hóa Đơn">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Ngày Bán</label>
                                <input type="date" class="form-control shadow-sm">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Hình Thức Thanh Toán</label>
                            <select class="form-select shadow-sm">
                                <option value="Tiền mặt">Tiền mặt</option>
                                <option value="Chuyển khoản">Chuyển khoản</option>
                                <option value="Quẹt thẻ">Quẹt thẻ</option>
                            </select>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Thanh Toán</label>
                                <select class="form-select shadow-sm">
                                    <option value="1" selected>Đã thanh toán</option>
                                    <option value="0">Chưa thanh toán</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Trạng Thái</label>
                                <select class="form-select shadow-sm">
                                    <option value="1" selected>Hoàn thành</option>
                                    <option value="0">Đang xử lý</option>
                                    <option value="-1">Đã hủy</option>
                                </select>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Ghi Chú</label>
                            <textarea class="form-control" rows="3" placeholder="Nhập ghi chú..."></textarea>
                        </div>
                    </form>
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-primary px-4 shadow-sm fw-bold w-100">
                        <i class="fa fa-save me-2"></i>TẠO HÓA ĐƠN
                    </button>
                </div>
            </div>
        </div>

        <!-- 2. Danh Sách Hóa Đơn (Phải - 8) -->
        <div class="col-lg-8">
            <div class="card border-top border-0 border-4 border-primary shadow-sm mt-2">
                <div class="card-header">
                    <h5 class="card-title mb-0">Danh sách Hóa Đơn</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped table-hover align-middle">
                            <thead class="text-center text-nowrap table-light">
                                <tr>
                                    <th>STT</th>
                                    <th>Mã Hóa Đơn</th>
                                    <th>Ngày Bán</th>
                                    <th>Khách Hàng</th>
                                    <th>Nhân Viên</th>
                                    <th>Ca Làm Việc</th>
                                    <th>Tổng Tiền</th>
                                    <th>Thanh Toán</th>
                                    <th>Trạng Thái</th>
                                    <th>Ghi Chú</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center">
                                    <td>1</td>
                                    <td>HD0001</td>
                                    <td>04/04/2026</td>
                                    <td class="text-start">Nguyễn Văn A</td>
                                    <td class="text-start">Trần Văn B</td>
                                    <td>Ca Sáng</td>
                                    <td class="fw-bold ">1,250,000</td>
                                    <td><button class="btn btn-success btn-sm w-100 shadow-sm">Đã thanh toán</button>
                                    </td>
                                    <td><button class="btn btn-primary btn-sm w-100 shadow-sm">Hoàn thành</button></td>
                                    <td class="text-start">Khách quen, tặng thêm túi</td>
                                    <td class="text-nowrap text-center">
                                        <button class="btn btn-info btn-sm me-1 shadow-sm text-white"
                                            data-bs-toggle="modal" data-bs-target="#chiTietModal">
                                            <i class="fa fa-shopping-cart"></i>
                                        </button>
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

    <!-- 3. Modal Chi Tiết Hóa Đơn (Giỏ Hàng) -->
    <div class="modal fade" id="chiTietModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title fw-bold">Chi Tiết Hóa Đơn: <span class="text-primary">HD0001</span></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <!-- Tìm kiếm sản phẩm -->
                        <div class="col-md-12 mb-3">
                            <div class="input-group shadow-sm">
                                <span class="input-group-text bg-primary text-white border-primary"><i
                                        class="fa fa-search"></i></span>
                                <input type="text" class="form-control"
                                    placeholder="Quét mã vạch hoặc nhập tên sản phẩm...">
                                <button class="btn btn-primary px-4 shadow-sm">Thêm Vào Giỏ</button>
                            </div>
                        </div>
                        <!-- Danh sách sản phẩm -->
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-bordered align-middle">
                                    <thead class="table-light text-center">
                                        <tr>
                                            <th>STT</th>
                                            <th>Sản Phẩm</th>
                                            <th style="width: 100px;">ĐVT</th>
                                            <th style="width: 120px;">Số Lượng</th>
                                            <th style="width: 150px;">Đơn Giá</th>
                                            <th>Thành Tiền</th>
                                            <th>Xóa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="text-center">
                                            <td>1</td>
                                            <td class="text-start">Thịt bò Mỹ nhập khẩu</td>
                                            <td>Kg</td>
                                            <td><input type="number" class="form-control form-control-sm text-center"
                                                    value="2"></td>
                                            <td><input type="number" class="form-control form-control-sm text-end"
                                                    value="350000"></td>
                                            <td class="text-end fw-bold">700,000</td>
                                            <td><button class="btn btn-outline-danger btn-sm p-1"><i
                                                        class="fa fa-times"></i></button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer bg-light py-3 border-0">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <h5 class="mb-0 fw-bold">TỔNG CỘNG: <span class="text-danger ms-2">700,000đ</span></h5>
                            </div>
                            <div class="col-md-6 text-end">
                                <button type="button" class="btn btn-secondary shadow-sm me-2"
                                    data-bs-dismiss="modal">Đóng</button>
                                <button type="button" class="btn btn-primary shadow-sm px-4">Lưu Giỏ Hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 4. Modal Cập Nhật Hóa Đơn -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title fw-bold">Cập Nhật Hóa Đơn</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Mã Hóa Đơn</label>
                                <input type="text" class="form-control bg-light" value="HD0001" readonly>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Khách Hàng</label>
                                <select class="form-select shadow-sm">
                                    <option value="1">Nguyễn Văn A</option>
                                    <option value="2">Trần Thị B</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Nhân Viên Bán Hàng</label>
                                <select class="form-select shadow-sm">
                                    <option value="1">Nguyễn Văn A</option>
                                    <option value="2">Trần Thị B</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Ca Làm Việc</label>
                                <select class="form-select shadow-sm">
                                    <option value="1">Ca Sáng (06:00 - 14:00)</option>
                                    <option value="2">Ca Chiều (14:00 - 22:00)</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Ngày Bán</label>
                                <input type="date" class="form-control shadow-sm" value="2026-04-04">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Hình Thức Thanh Toán</label>
                                <select class="form-select shadow-sm">
                                    <option value="Tiền mặt">Tiền mặt</option>
                                    <option value="Chuyển khoản">Chuyển khoản</option>
                                    <option value="Quẹt thẻ">Quẹt thẻ</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Thanh Toán</label>
                                <select class="form-select shadow-sm">
                                    <option value="1" selected>Đã thanh toán</option>
                                    <option value="0">Chưa thanh toán</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Trạng Thái</label>
                                <select class="form-select shadow-sm">
                                    <option value="1" selected>Hoàn thành</option>
                                    <option value="0">Đang xử lý</option>
                                    <option value="-1">Đã hủy</option>
                                </select>
                            </div>
                            <div class="col-md-12 mb-3">
                                <label class="form-label fw-bold">Ghi Chú</label>
                                <textarea class="form-control shadow-sm" rows="3">Khách quen, tặng thêm túi</textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary shadow-sm" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary shadow-sm">Lưu Thay Đổi</button>
                </div>
            </div>
        </div>
    </div>

    <!-- 5. Modal Xóa -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title text-white">Xóa Hóa Đơn</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body text-center py-4">
                    <i class="fa fa-exclamation-triangle text-warning mb-3" style="font-size: 3rem;"></i>
                    <h5 class="fw-bold fs-5">Bạn có chắc chắn muốn xóa hóa đơn này?</h5>
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
    name: "HoaDonManager",
    data() {
        return {
        }
    }
}
</script>

<style scoped></style>
